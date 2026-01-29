import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CalendarEvent } from '../../types';
import { usePasskey } from '../../hooks';
import styles from './Modal.module.css';

const EDIT_PASSWORD = 'solana2026';

type AuthState =
  | 'idle'           // Not attempting auth
  | 'options'        // Showing auth options (TouchID setup / password)
  | 'touchid'        // Attempting TouchID auth
  | 'password'       // Showing password input
  | 'setup-password' // Password input for TouchID setup
  | 'setup-touchid'  // Registering TouchID after password verified
  | 'authenticated'; // Successfully authenticated

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: CalendarEvent | null;
  onSave?: (eventId: string, updates: Partial<CalendarEvent>) => void;
}

export function Modal({ isOpen, onClose, event, onSave }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isSupported, hasPasskey, registerPasskey, authenticate } = usePasskey();

  const [authState, setAuthState] = useState<AuthState>('idle');
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Form state for editing
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editBestTime, setEditBestTime] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const [editImageUrl, setEditImageUrl] = useState('');

  // Reset edit state when modal opens with new event
  useEffect(() => {
    if (event) {
      setEditTitle(event.title);
      setEditContent(event.content);
      setEditBestTime(event.bestTime);
      setEditNotes(event.notes);
      setEditImageUrl(event.imageUrl || '');
    }
    // Reset all state when modal opens
    setIsEditing(false);
    setAuthState('idle');
    setPassword('');
    setPasswordError(false);
    setAuthError(null);
  }, [event]);

  // Focus trap and initial focus
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const closeButton = modalRef.current.querySelector('button');
      closeButton?.focus();
    }
  }, [isOpen]);

  // Auto-trigger TouchID if passkey exists
  useEffect(() => {
    if (authState === 'touchid' && hasPasskey) {
      handleTouchIdAuth();
    }
  }, [authState, hasPasskey]);

  // Handle TouchID registration after password verified
  useEffect(() => {
    if (authState === 'setup-touchid') {
      handleTouchIdSetup();
    }
  }, [authState]);

  if (!isOpen || !event) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    setAuthError(null);
    if (hasPasskey) {
      // If passkey exists, try TouchID first
      setAuthState('touchid');
    } else {
      // Show options: setup TouchID or use password
      setAuthState('options');
    }
  };

  const handleTouchIdAuth = async () => {
    const success = await authenticate();
    if (success) {
      setAuthState('authenticated');
      setIsEditing(true);
    } else {
      setAuthError('TouchID failed. Use password instead.');
      setAuthState('options');
    }
  };

  const handleTouchIdSetup = async () => {
    const success = await registerPasskey();
    if (success) {
      setAuthState('authenticated');
      setIsEditing(true);
    } else {
      setAuthError('TouchID setup failed. Use password instead.');
      setAuthState('password');
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === EDIT_PASSWORD) {
      if (authState === 'setup-password') {
        // Password verified, now set up TouchID
        setAuthState('setup-touchid');
        setPassword('');
      } else {
        // Direct password auth
        setAuthState('authenticated');
        setIsEditing(true);
        setPassword('');
      }
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleCancelAuth = () => {
    setAuthState('idle');
    setPassword('');
    setPasswordError(false);
    setAuthError(null);
  };

  const handleCancelEdit = () => {
    setEditTitle(event.title);
    setEditContent(event.content);
    setEditBestTime(event.bestTime);
    setEditNotes(event.notes);
    setEditImageUrl(event.imageUrl || '');
    setIsEditing(false);
    setAuthState('idle');
  };

  const handleSave = () => {
    if (onSave) {
      onSave(event.id, {
        title: editTitle,
        content: editContent,
        bestTime: editBestTime,
        notes: editNotes,
        imageUrl: editImageUrl || null,
      });
    }
    setIsEditing(false);
    setAuthState('idle');
  };

  // Format content with line breaks (for view mode)
  const formattedContent = event.content.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < event.content.split('\n').length - 1 && <br />}
    </span>
  ));

  const showAuthUI = authState !== 'idle' && authState !== 'authenticated' && !isEditing;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal} ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className={styles.titleInput}
              placeholder="Event title"
            />
          ) : (
            <h3 id="modal-title" className={styles.title}>{event.title}</h3>
          )}
          <div className={styles.headerActions}>
            {!isEditing && authState === 'idle' && onSave && (
              <button
                className={styles.editButton}
                onClick={handleEditClick}
                aria-label="Edit event"
              >
                Edit
              </button>
            )}
            <button
              className={styles.close}
              onClick={onClose}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Auth UI */}
        {showAuthUI && (
          <div className={styles.authSection}>
            {/* Auth Options */}
            {authState === 'options' && (
              <div className={styles.authOptions}>
                {authError && (
                  <p className={styles.authError}>{authError}</p>
                )}
                <p className={styles.authPrompt}>How would you like to authenticate?</p>
                <div className={styles.authButtons}>
                  {isSupported && (
                    <button
                      className={styles.touchIdButton}
                      onClick={() => {
                        if (hasPasskey) {
                          setAuthState('touchid');
                        } else {
                          setAuthState('setup-password');
                        }
                      }}
                    >
                      <span className={styles.touchIdIcon}>
                        {hasPasskey ? '🔐' : '✨'}
                      </span>
                      {hasPasskey ? 'Use TouchID' : 'Set up TouchID'}
                      {!hasPasskey && <span className={styles.recommended}>Recommended</span>}
                    </button>
                  )}
                  <button
                    className={styles.passwordButton}
                    onClick={() => setAuthState('password')}
                  >
                    <span className={styles.passwordIcon}>🔑</span>
                    Use Password
                  </button>
                </div>
                <button className={styles.cancelLink} onClick={handleCancelAuth}>
                  Cancel
                </button>
              </div>
            )}

            {/* TouchID in progress */}
            {authState === 'touchid' && (
              <div className={styles.touchIdPrompt}>
                <div className={styles.touchIdSpinner}>🔐</div>
                <p>Authenticate with TouchID...</p>
                <button className={styles.cancelLink} onClick={() => setAuthState('options')}>
                  Cancel
                </button>
              </div>
            )}

            {/* TouchID setup in progress */}
            {authState === 'setup-touchid' && (
              <div className={styles.touchIdPrompt}>
                <div className={styles.touchIdSpinner}>✨</div>
                <p>Setting up TouchID...</p>
                <p className={styles.touchIdHint}>Follow the prompt to register your fingerprint</p>
              </div>
            )}

            {/* Password input (direct auth) */}
            {authState === 'password' && (
              <div className={styles.passwordPrompt}>
                <form onSubmit={handlePasswordSubmit}>
                  <label htmlFor="edit-password" className={styles.passwordLabel}>
                    Enter password to edit:
                  </label>
                  <div className={styles.passwordInputGroup}>
                    <input
                      id="edit-password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                      }}
                      className={`${styles.passwordInput} ${passwordError ? styles.passwordInputError : ''}`}
                      placeholder="Password"
                      autoFocus
                    />
                    <button type="submit" className={styles.passwordSubmit}>
                      Unlock
                    </button>
                    <button
                      type="button"
                      className={styles.passwordCancel}
                      onClick={() => setAuthState('options')}
                    >
                      Back
                    </button>
                  </div>
                  {passwordError && (
                    <p className={styles.passwordErrorText}>Incorrect password</p>
                  )}
                </form>
              </div>
            )}

            {/* Password input for TouchID setup */}
            {authState === 'setup-password' && (
              <div className={styles.passwordPrompt}>
                <form onSubmit={handlePasswordSubmit}>
                  <label htmlFor="setup-password" className={styles.passwordLabel}>
                    Enter password to set up TouchID:
                  </label>
                  <p className={styles.setupHint}>
                    You'll only need to do this once per device.
                  </p>
                  <div className={styles.passwordInputGroup}>
                    <input
                      id="setup-password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                      }}
                      className={`${styles.passwordInput} ${passwordError ? styles.passwordInputError : ''}`}
                      placeholder="Password"
                      autoFocus
                    />
                    <button type="submit" className={styles.passwordSubmit}>
                      Continue
                    </button>
                    <button
                      type="button"
                      className={styles.passwordCancel}
                      onClick={() => setAuthState('options')}
                    >
                      Back
                    </button>
                  </div>
                  {passwordError && (
                    <p className={styles.passwordErrorText}>Incorrect password</p>
                  )}
                </form>
              </div>
            )}
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.tweetPreview}>
            <div className={styles.tweetHeader}>
              <span className={styles.avatar}>🟣</span>
              <div className={styles.tweetMeta}>
                <strong>solana_devs</strong>
                <span className={styles.handle}>@solana_devs</span>
              </div>
            </div>
            <div className={styles.tweetContent}>
              {isEditing ? (
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className={styles.contentTextarea}
                  placeholder="Tweet content..."
                  rows={10}
                />
              ) : (
                formattedContent
              )}
            </div>
          </div>

          {isEditing ? (
            <div className={styles.editImageField}>
              <label htmlFor="edit-image" className={styles.fieldLabel}>
                Image/Video URL:
              </label>
              <input
                id="edit-image"
                type="text"
                value={editImageUrl}
                onChange={(e) => setEditImageUrl(e.target.value)}
                className={styles.textInput}
                placeholder="https://..."
              />
            </div>
          ) : (
            event.imageUrl && (
              <div className={styles.imagePreview}>
                <span className={styles.imageIcon}>🖼️</span>
                <span>Image/Video: {event.imageUrl}</span>
              </div>
            )
          )}

          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Type:</span>
              <span className={styles.metaValue}>{event.type}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Best Time:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={editBestTime}
                  onChange={(e) => setEditBestTime(e.target.value)}
                  className={styles.timeInput}
                  placeholder="e.g., 10am EST"
                />
              ) : (
                <span className={styles.metaValue}>{event.bestTime}</span>
              )}
            </div>
          </div>

          <div className={styles.notesSection}>
            <strong className={styles.notesLabel}>Notes:</strong>
            {isEditing ? (
              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                className={styles.notesTextarea}
                placeholder="Additional notes..."
                rows={3}
              />
            ) : (
              event.notes && <div className={styles.notes}>{event.notes}</div>
            )}
          </div>

          {isEditing && (
            <div className={styles.editActions}>
              <button
                className={styles.cancelButton}
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className={styles.saveButton}
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
