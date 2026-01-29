import { calendarEvents } from '../../data';
import type { CalendarEvent } from '../../data/calendarEvents';
import styles from './ContentCalendar.module.css';

interface ContentCalendarProps {
  onEventClick: (eventId: string) => void;
}

// Calendar structure: 30 days with assigned events
const calendarDays: Array<{
  day: number;
  dayOfWeek: string;
  events: string[];
}> = [
  { day: 1, dayOfWeek: 'Wed', events: ['demo1'] },
  { day: 2, dayOfWeek: 'Thu', events: ['tip1'] },
  { day: 3, dayOfWeek: 'Fri', events: ['meme1'] },
  { day: 4, dayOfWeek: 'Sat', events: [] },
  { day: 5, dayOfWeek: 'Sun', events: [] },
  { day: 6, dayOfWeek: 'Mon', events: ['spotlight1'] },
  { day: 7, dayOfWeek: 'Tue', events: ['demo2'] },
  { day: 8, dayOfWeek: 'Wed', events: ['tip2'] },
  { day: 9, dayOfWeek: 'Thu', events: ['meme2'] },
  { day: 10, dayOfWeek: 'Fri', events: ['collab1'] },
  { day: 11, dayOfWeek: 'Sat', events: [] },
  { day: 12, dayOfWeek: 'Sun', events: [] },
  { day: 13, dayOfWeek: 'Mon', events: ['demo3'] },
  { day: 14, dayOfWeek: 'Tue', events: ['tip3'] },
  { day: 15, dayOfWeek: 'Wed', events: ['spotlight2'] },
  { day: 16, dayOfWeek: 'Thu', events: ['meme3'] },
  { day: 17, dayOfWeek: 'Fri', events: ['demo4'] },
  { day: 18, dayOfWeek: 'Sat', events: [] },
  { day: 19, dayOfWeek: 'Sun', events: [] },
  { day: 20, dayOfWeek: 'Mon', events: ['tip4'] },
  { day: 21, dayOfWeek: 'Tue', events: ['collab2'] },
  { day: 22, dayOfWeek: 'Wed', events: ['demo5'] },
  { day: 23, dayOfWeek: 'Thu', events: ['meme4'] },
  { day: 24, dayOfWeek: 'Fri', events: ['spotlight3'] },
  { day: 25, dayOfWeek: 'Sat', events: [] },
  { day: 26, dayOfWeek: 'Sun', events: [] },
  { day: 27, dayOfWeek: 'Mon', events: ['tip5'] },
  { day: 28, dayOfWeek: 'Tue', events: ['demo6'] },
  { day: 29, dayOfWeek: 'Wed', events: ['meme5'] },
  { day: 30, dayOfWeek: 'Thu', events: ['collab3'] },
];

const legendItems = [
  { type: 'Viral Demo', color: 'demo' },
  { type: 'Tip', color: 'tip' },
  { type: 'Meme', color: 'meme' },
  { type: 'Spotlight', color: 'spotlight' },
  { type: 'Collab', color: 'collab' },
];

function getEventTypeClass(type: string): string {
  const typeMap: Record<string, string> = {
    'Viral Demo': styles.eventDemo,
    'Tip': styles.eventTip,
    'Meme': styles.eventMeme,
    'Spotlight': styles.eventSpotlight,
    'Collab': styles.eventCollab,
  };
  return typeMap[type] || styles.eventDefault;
}

export function ContentCalendar({ onEventClick }: ContentCalendarProps) {
  return (
    <div className={styles.calendar}>
      {/* Legend */}
      <div className={styles.legend}>
        {legendItems.map((item) => (
          <div key={item.type} className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles[`legend${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`} />
            <span>{item.type}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={styles.grid}>
        {calendarDays.map((dayData) => (
          <div
            key={dayData.day}
            className={`${styles.day} ${dayData.events.length === 0 ? styles.dayEmpty : ''}`}
          >
            <div className={styles.dayHeader}>
              <span className={styles.dayNumber}>{dayData.day}</span>
              <span className={styles.dayOfWeek}>{dayData.dayOfWeek}</span>
            </div>
            <div className={styles.dayEvents}>
              {dayData.events.map((eventId) => {
                const event = calendarEvents[eventId] as CalendarEvent | undefined;
                if (!event) return null;
                return (
                  <button
                    key={eventId}
                    className={`${styles.event} ${getEventTypeClass(event.type)}`}
                    onClick={() => onEventClick(eventId)}
                    aria-label={`${event.title} - ${event.type}`}
                  >
                    <span className={styles.eventTitle}>{event.title}</span>
                    <span className={styles.eventType}>{event.type}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
