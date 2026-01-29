import { calendarEvents } from '../../data/calendarEvents';
import type { CalendarEvent } from '../../types';
import styles from './ContentCalendar.module.css';

interface ContentCalendarProps {
  onEventClick: (event: CalendarEvent) => void;
}

// Week day headers
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Calendar starts on Saturday (day 1 = Feb 1, 2026 is a Sunday)
// Adjust: Day 1 = Sunday, so we need 0 empty cells before day 1
const startDayOffset = 0; // Sunday = 0

// Event type to color class mapping
const typeColors: Record<string, string> = {
  Thread: styles.eventThread,
  'Quick Tip': styles.eventTip,
  Meme: styles.eventMeme,
  Spotlight: styles.eventSpotlight,
  Engagement: styles.eventEngagement,
};

// Legend items
const legendItems = [
  { type: 'Thread', label: 'Thread' },
  { type: 'Quick Tip', label: 'Tip' },
  { type: 'Meme', label: 'Meme' },
  { type: 'Spotlight', label: 'Spotlight' },
  { type: 'Engagement', label: 'Engagement' },
];

export function ContentCalendar({ onEventClick }: ContentCalendarProps) {
  // Generate calendar days (1-30)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  // Calculate which day of week each date falls on
  const getDayOfWeek = (day: number): string => {
    const dayIndex = (startDayOffset + day - 1) % 7;
    return weekDays[dayIndex];
  };

  return (
    <div className={styles.calendar}>
      {/* Legend */}
      <div className={styles.legend}>
        {legendItems.map((item) => (
          <div key={item.type} className={styles.legendItem}>
            <span className={`${styles.legendDot} ${typeColors[item.type]}`} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Week Headers */}
      <div className={styles.weekHeaders}>
        {weekDays.map((day) => (
          <div key={day} className={styles.weekHeader}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={styles.grid}>
        {/* Empty cells for offset (if month doesn't start on Sunday) */}
        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.dayEmpty} />
        ))}

        {/* Calendar days */}
        {days.map((day) => {
          const events = calendarEvents[day] || [];
          const hasEvents = events.length > 0;
          const dayOfWeek = getDayOfWeek(day);
          const isWeekend = dayOfWeek === 'Sat' || dayOfWeek === 'Sun';

          return (
            <div
              key={day}
              className={`${styles.day} ${!hasEvents ? styles.dayNoEvents : ''} ${isWeekend ? styles.dayWeekend : ''}`}
            >
              <div className={styles.dayHeader}>
                <span className={styles.dayNumber}>{day}</span>
              </div>
              <div className={styles.dayEvents}>
                {events.map((event) => (
                  <button
                    key={event.id}
                    className={`${styles.event} ${typeColors[event.type] || ''}`}
                    onClick={() => onEventClick(event)}
                    title={`${event.title} - ${event.bestTime}`}
                  >
                    <span className={styles.eventTitle}>{event.title}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
