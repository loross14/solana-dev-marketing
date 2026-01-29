import { Header, TabNavigation, Footer } from './components/layout';
import { Modal } from './components/ui';
import { ContentStrategyTab, AICampaignTab } from './views';
import { useActiveTab, useModal } from './hooks';
import { calendarEvents } from './data';
import type { CalendarEvent } from './types';
import styles from './App.module.css';

// Header configuration
const headerConfig = {
  title: 'Developer Marketing Exercise',
  subtitle: 'Solana Foundation',
  metaBadges: [
    { icon: '✉️', text: 'loross@umich.edu' },
    { icon: '👤', text: 'Logan Ross' },
    { icon: '📅', text: 'January 2026' },
  ],
};

// Footer configuration
const footerConfig = {
  sections: [
    {
      title: 'Contact',
      links: [{ text: 'loross@umich.edu', href: 'mailto:loross@umich.edu' }],
    },
    {
      title: 'Links',
      links: [
        { text: 'Twitter', href: 'https://x.com/gitmoney' },
        { text: 'LinkedIn', href: 'https://linkedin.com/in/logannross' },
      ],
    },
    {
      title: 'Position',
      content: 'Developer Marketing',
    },
  ],
  meta: 'Submitted by',
  brandName: 'Logan Ross • January 2026',
};

function App() {
  const { activeTab, switchTab } = useActiveTab('q1');
  const { isOpen, event, openModal, closeModal } = useModal();

  // Handler for calendar event clicks (to be passed to calendar component)
  const handleEventClick = (eventId: string) => {
    const eventData = calendarEvents[eventId];
    if (eventData) {
      openModal({
        ...eventData,
        id: eventId,
      } as CalendarEvent);
    }
  };

  return (
    <div className={styles.container}>
      <Header {...headerConfig} />

      <TabNavigation activeTab={activeTab} onTabChange={switchTab} />

      <main>
        {activeTab === 'q1' && (
          <div
            id="tab-q1"
            role="tabpanel"
            aria-labelledby="tab-btn-q1"
          >
            <ContentStrategyTab onEventClick={handleEventClick} />
          </div>
        )}

        {activeTab === 'q3' && (
          <div
            id="tab-q3"
            role="tabpanel"
            aria-labelledby="tab-btn-q3"
          >
            <AICampaignTab />
          </div>
        )}
      </main>

      <Footer {...footerConfig} />

      <Modal isOpen={isOpen} onClose={closeModal} event={event} />
    </div>
  );
}

export default App;
