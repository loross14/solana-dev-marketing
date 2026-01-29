import { useState, useCallback, useEffect } from 'react';
import { calendarEvents as baseCalendarEvents } from '../data/calendarEvents';
import type { CalendarEvent } from '../types';

const STORAGE_KEY = 'solana-calendar-edits';

type CalendarEventEdits = Record<string, Partial<CalendarEvent>>;

/**
 * Hook for managing calendar events with localStorage persistence.
 * Merges base events from data file with any saved edits.
 */
export function useCalendarEvents() {
  const [edits, setEdits] = useState<CalendarEventEdits>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Persist edits to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(edits));
    } catch (e) {
      console.error('Failed to save calendar edits:', e);
    }
  }, [edits]);

  // Merge base events with edits
  const events: Record<number, CalendarEvent[]> = {};
  for (const [dayStr, dayEvents] of Object.entries(baseCalendarEvents)) {
    const day = Number(dayStr);
    events[day] = dayEvents.map((event) => {
      const eventEdits = edits[event.id];
      if (eventEdits) {
        return { ...event, ...eventEdits };
      }
      return event;
    });
  }

  // Update a single event
  const updateEvent = useCallback((eventId: string, updates: Partial<CalendarEvent>) => {
    setEdits((prev) => ({
      ...prev,
      [eventId]: {
        ...prev[eventId],
        ...updates,
      },
    }));
  }, []);

  // Reset a single event to its original state
  const resetEvent = useCallback((eventId: string) => {
    setEdits((prev) => {
      const next = { ...prev };
      delete next[eventId];
      return next;
    });
  }, []);

  // Reset all edits
  const resetAllEdits = useCallback(() => {
    setEdits({});
  }, []);

  // Get a single event by ID (searches all days)
  const getEventById = useCallback((eventId: string): CalendarEvent | null => {
    for (const dayEvents of Object.values(events)) {
      const found = dayEvents.find((e) => e.id === eventId);
      if (found) return found;
    }
    return null;
  }, [events]);

  // Generate TypeScript code for the current events (with edits applied)
  const exportToCode = useCallback((): string => {
    const lines: string[] = [
      `export interface CalendarEvent {`,
      `  id: string;`,
      `  title: string;`,
      `  type: 'Thread' | 'Quick Tip' | 'Meme' | 'Spotlight' | 'Engagement';`,
      `  bestTime: string;`,
      `  content: string;`,
      `  notes: string;`,
      `  imageUrl: string | null;`,
      `}`,
      ``,
      `// Calendar events - exported from app`,
      `export const calendarEvents: Record<number, CalendarEvent[]> = {`,
    ];

    const sortedDays = Object.keys(events).map(Number).sort((a, b) => a - b);

    for (const day of sortedDays) {
      const dayEvents = events[day];
      lines.push(`  ${day}: [`);

      for (const event of dayEvents) {
        lines.push(`    {`);
        lines.push(`      id: '${event.id}',`);
        lines.push(`      title: '${event.title.replace(/'/g, "\\'")}',`);
        lines.push(`      type: '${event.type}',`);
        lines.push(`      bestTime: '${event.bestTime.replace(/'/g, "\\'")}',`);
        lines.push(`      content: \`${event.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,`);
        lines.push(`      notes: '${event.notes.replace(/'/g, "\\'")}',`);
        lines.push(`      imageUrl: ${event.imageUrl ? `'${event.imageUrl}'` : 'null'},`);
        lines.push(`    },`);
      }

      lines.push(`  ],`);
    }

    lines.push(`};`);
    lines.push(``);
    lines.push(`export default calendarEvents;`);

    return lines.join('\n');
  }, [events]);

  return {
    events,
    updateEvent,
    resetEvent,
    resetAllEdits,
    getEventById,
    hasEdits: Object.keys(edits).length > 0,
    exportToCode,
  };
}
