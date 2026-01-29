import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { CalendarEvent } from '../../types';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: CalendarEvent | null;
}

export function Modal({ isOpen, onClose, event }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and initial focus
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const closeButton = modalRef.current.querySelector('button');
      closeButton?.focus();
    }
  }, [isOpen]);

  if (!isOpen || !event) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Format content with line breaks
  const formattedContent = event.content.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < event.content.split('\n').length - 1 && <br />}
    </span>
  ));

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
          <h3 id="modal-title" className={styles.title}>{event.title}</h3>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
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
              {formattedContent}
            </div>
          </div>

          {event.image && (
            <div className={styles.imagePreview}>
              <span className={styles.imageIcon}>🖼️</span>
              <span>Image/Video: {event.image}</span>
            </div>
          )}

          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Type:</span>
              <span className={styles.metaValue}>{event.type}</span>
            </div>
            {event.time && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Best Time:</span>
                <span className={styles.metaValue}>{event.time}</span>
              </div>
            )}
          </div>

          {event.notes && (
            <div className={styles.notes}>
              <strong>Notes:</strong> {event.notes}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
