import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CalendarEvent } from '../../types';
import { usePasskey } from '../../hooks';
import styles from './Modal.module.css';

const EDIT_PASSWORD = 'solana2026';
const SESSION_KEY = 'solana-calendar-session';
const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour

// Session helpers
function getSession(): number | null {
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (!stored) return null;
  const timestamp = parseInt(stored, 10);
  if (isNaN(timestamp)) return null;
  if (Date.now() - timestamp > SESSION_DURATION_MS) {
    sessionStorage.removeItem(SESSION_KEY);
    return null;
  }
  return timestamp;
}

function createSession(): void {
  sessionStorage.setItem(SESSION_KEY, Date.now().toString());
}

function getSessionTimeRemaining(): string | null {
  const timestamp = getSession();
  if (!timestamp) return null;
  const remaining = SESSION_DURATION_MS - (Date.now() - timestamp);
  const minutes = Math.ceil(remaining / 60000);
  return `${minutes}m`;
}

// Type badge color mapping
const typeBadgeStyles: Record<string, string> = {
  'Thread': styles.badgeThread,
  'Quick Tip': styles.badgeTip,
  'Meme': styles.badgeMeme,
  'Spotlight': styles.badgeSpotlight,
  'Engagement': styles.badgeEngagement,
};

type AuthState =
  | 'idle'
  | 'options'
  | 'touchid'
  | 'password'
  | 'setup-password'
  | 'setup-touchid'
  | 'authenticated';

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

  // Reset state when modal opens with new event
  useEffect(() => {
    if (event) {
      setEditTitle(event.title);
      setEditContent(event.content);
      setEditBestTime(event.bestTime);
      setEditNotes(event.notes);
      setEditImageUrl(event.imageUrl || '');
    }
    setIsEditing(false);
    setAuthState('idle');
    setPassword('');
    setPasswordError(false);
    setAuthError(null);
  }, [event]);

  // Focus management
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const closeButton = modalRef.current.querySelector('button');
      closeButton?.focus();
    }
  }, [isOpen]);

  // Auto-trigger TouchID
  useEffect(() => {
    if (authState === 'touchid' && hasPasskey) {
      handleTouchIdAuth();
    }
  }, [authState, hasPasskey]);

  // Handle TouchID setup
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
    if (getSession()) {
      setAuthState('authenticated');
      setIsEditing(true);
      return;
    }
    if (hasPasskey) {
      setAuthState('touchid');
    } else {
      setAuthState('options');
    }
  };

  const handleTouchIdAuth = async () => {
    const success = await authenticate();
    if (success) {
      createSession();
      setAuthState('authenticated');
      setIsEditing(true);
    } else {
      setAuthError('TouchID failed');
      setAuthState('options');
    }
  };

  const handleTouchIdSetup = async () => {
    const success = await registerPasskey();
    if (success) {
      createSession();
      setAuthState('authenticated');
      setIsEditing(true);
    } else {
      setAuthError('Setup failed');
      setAuthState('password');
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === EDIT_PASSWORD) {
      if (authState === 'setup-password') {
        setAuthState('setup-touchid');
        setPassword('');
      } else {
        createSession();
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

  const formattedContent = event.content.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < event.content.split('\n').length - 1 && <br />}
    </span>
  ));

  const showAuthUI = authState !== 'idle' && authState !== 'authenticated' && !isEditing;
  const modalClasses = `${styles.modal} ${isEditing ? styles.modalEditing : ''}`;
  const contentClasses = `${styles.content} ${showAuthUI ? styles.contentBlurred : ''}`;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={modalClasses} ref={modalRef} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={`${styles.header} ${isEditing ? styles.headerEditing : ''}`}>
          <div className={styles.headerLeft}>
            {isEditing ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className={styles.titleInput}
                placeholder="Event title"
              />
            ) : (
              <>
                <h3 id="modal-title" className={styles.title}>{event.title}</h3>
                <span className={`${styles.typeBadge} ${typeBadgeStyles[event.type] || ''}`}>
                  {event.type}
                </span>
              </>
            )}
            {isEditing && (
              <span className={styles.editingBadge}>Editing</span>
            )}
          </div>
          <div className={styles.headerActions}>
            {!isEditing && authState === 'idle' && onSave && (
              <>
                {getSession() && (
                  <span className={styles.sessionIndicator}>
                    {getSessionTimeRemaining()}
                  </span>
                )}
                <button
                  className={styles.editButton}
                  onClick={handleEditClick}
                  aria-label="Edit event"
                >
                  Edit
                </button>
              </>
            )}
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={contentClasses}>
          {/* Tweet Preview */}
          <div className={styles.tweetPreview}>
            <div className={styles.tweetHeader}>
              <div className={styles.avatar}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="url(#avatarGradient)"/>
                  <defs>
                    <linearGradient id="avatarGradient" x1="0" y1="0" x2="32" y2="32">
                      <stop stopColor="#9945FF"/>
                      <stop offset="1" stopColor="#14F195"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.tweetMeta}>
                <span className={styles.tweetName}>Solana Devs</span>
                <span className={styles.tweetHandle}>@solana_devs</span>
              </div>
            </div>
            <div className={styles.tweetBody}>
              {isEditing ? (
                <div className={styles.textareaWrapper}>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className={styles.contentTextarea}
                    placeholder="Tweet content..."
                    rows={10}
                  />
                  <span className={`${styles.charCount} ${editContent.length > 280 ? styles.charCountOver : ''}`}>
                    {editContent.length}/280
                  </span>
                </div>
              ) : (
                <div className={styles.tweetContent}>{formattedContent}</div>
              )}
            </div>
          </div>

          {/* Media Field */}
          {isEditing ? (
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Media URL</label>
              <input
                type="text"
                value={editImageUrl}
                onChange={(e) => setEditImageUrl(e.target.value)}
                className={styles.textInput}
                placeholder="https://..."
              />
            </div>
          ) : event.imageUrl && (
            <div className={styles.mediaPreview}>
              <span className={styles.mediaIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="7" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 14L6 10L10 14L14 8L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className={styles.mediaUrl}>{event.imageUrl}</span>
            </div>
          )}

          {/* Meta Grid */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Type</span>
              <span className={styles.metaValue}>{event.type}</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Best Time</span>
              {isEditing ? (
                <input
                  type="text"
                  value={editBestTime}
                  onChange={(e) => setEditBestTime(e.target.value)}
                  className={styles.metaInput}
                  placeholder="10am EST"
                />
              ) : (
                <span className={styles.metaValue}>{event.bestTime}</span>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className={styles.notesSection}>
            <span className={styles.notesLabel}>Notes</span>
            {isEditing ? (
              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                className={styles.notesTextarea}
                placeholder="Additional notes..."
                rows={3}
              />
            ) : event.notes ? (
              <div className={styles.notesContent}>{event.notes}</div>
            ) : (
              <div className={styles.notesEmpty}>No notes</div>
            )}
          </div>

          {/* Edit Actions */}
          {isEditing && (
            <div className={styles.editActions}>
              <button className={styles.cancelButton} onClick={handleCancelEdit}>
                Cancel
              </button>
              <button className={styles.saveButton} onClick={handleSave}>
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Auth Overlay */}
        {showAuthUI && (
          <div className={styles.authOverlay}>
            <div className={styles.authCard}>
              {/* Auth Options */}
              {authState === 'options' && (
                <>
                  <div className={styles.authIcon}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="20" stroke="url(#lockGradient)" strokeWidth="2"/>
                      <rect x="18" y="22" width="12" height="10" rx="2" stroke="url(#lockGradient)" strokeWidth="2"/>
                      <path d="M21 22V18C21 16.3431 22.3431 15 24 15C25.6569 15 27 16.3431 27 18V22" stroke="url(#lockGradient)" strokeWidth="2" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="lockGradient" x1="4" y1="4" x2="44" y2="44">
                          <stop stopColor="#9945FF"/>
                          <stop offset="1" stopColor="#14F195"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h4 className={styles.authTitle}>Unlock to Edit</h4>
                  {authError && <p className={styles.authError}>{authError}</p>}
                  <div className={styles.authButtons}>
                    {isSupported && (
                      <button
                        className={styles.authButtonPrimary}
                        onClick={() => hasPasskey ? setAuthState('touchid') : setAuthState('setup-password')}
                      >
                        {hasPasskey ? 'Use TouchID' : 'Set up TouchID'}
                      </button>
                    )}
                    <button
                      className={styles.authButtonSecondary}
                      onClick={() => setAuthState('password')}
                    >
                      Use Password
                    </button>
                  </div>
                  <button className={styles.authCancel} onClick={handleCancelAuth}>
                    Cancel
                  </button>
                </>
              )}

              {/* TouchID in progress */}
              {authState === 'touchid' && (
                <div className={styles.authLoading}>
                  <div className={styles.authSpinner}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="20" stroke="rgba(153, 69, 255, 0.2)" strokeWidth="2"/>
                      <path d="M24 4C35.0457 4 44 12.9543 44 24" stroke="url(#spinnerGradient)" strokeWidth="2" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="1s" repeatCount="indefinite"/>
                      </path>
                      <defs>
                        <linearGradient id="spinnerGradient" x1="24" y1="4" x2="44" y2="24">
                          <stop stopColor="#9945FF"/>
                          <stop offset="1" stopColor="#14F195"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p>Waiting for TouchID...</p>
                  <button className={styles.authCancel} onClick={() => setAuthState('options')}>
                    Cancel
                  </button>
                </div>
              )}

              {/* TouchID setup */}
              {authState === 'setup-touchid' && (
                <div className={styles.authLoading}>
                  <div className={styles.authSpinner}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="20" stroke="rgba(153, 69, 255, 0.2)" strokeWidth="2"/>
                      <path d="M24 4C35.0457 4 44 12.9543 44 24" stroke="url(#spinnerGradient2)" strokeWidth="2" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="1s" repeatCount="indefinite"/>
                      </path>
                      <defs>
                        <linearGradient id="spinnerGradient2" x1="24" y1="4" x2="44" y2="24">
                          <stop stopColor="#9945FF"/>
                          <stop offset="1" stopColor="#14F195"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p>Setting up TouchID...</p>
                  <span className={styles.authHint}>Follow the system prompt</span>
                </div>
              )}

              {/* Password input */}
              {(authState === 'password' || authState === 'setup-password') && (
                <form onSubmit={handlePasswordSubmit} className={styles.authForm}>
                  <div className={styles.authIcon}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="20" stroke="url(#keyGradient)" strokeWidth="2"/>
                      <circle cx="20" cy="24" r="4" stroke="url(#keyGradient)" strokeWidth="2"/>
                      <path d="M24 24H34M30 20V28" stroke="url(#keyGradient)" strokeWidth="2" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="keyGradient" x1="4" y1="4" x2="44" y2="44">
                          <stop stopColor="#9945FF"/>
                          <stop offset="1" stopColor="#14F195"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h4 className={styles.authTitle}>
                    {authState === 'setup-password' ? 'Verify to Set Up TouchID' : 'Enter Password'}
                  </h4>
                  {authState === 'setup-password' && (
                    <p className={styles.authHint}>One-time setup for this device</p>
                  )}
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(false);
                    }}
                    className={`${styles.authInput} ${passwordError ? styles.authInputError : ''}`}
                    placeholder="Password"
                    autoFocus
                  />
                  {passwordError && <p className={styles.authErrorText}>Incorrect password</p>}
                  <button type="submit" className={styles.authButtonPrimary}>
                    {authState === 'setup-password' ? 'Continue' : 'Unlock'}
                  </button>
                  <button
                    type="button"
                    className={styles.authCancel}
                    onClick={() => setAuthState('options')}
                  >
                    Back
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
