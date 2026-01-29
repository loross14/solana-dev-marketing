import { useState, useCallback, useEffect } from 'react';
import type { CalendarEvent } from '../types';

/**
 * Hook for managing modal state and event data.
 * Handles open/close, keyboard events (Escape), and body scroll locking.
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState<CalendarEvent | null>(null);

  const openModal = useCallback((eventData: CalendarEvent) => {
    setEvent(eventData);
    setIsOpen(true);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setEvent(null);
    // Restore body scroll
    document.body.style.overflow = '';
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  return { isOpen, event, openModal, closeModal };
}
