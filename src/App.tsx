import { Header, TabNavigation, Footer } from './components/layout';
import { Modal } from './components/ui';
import { ContentStrategyTab, AICampaignTab } from './views';
import { useActiveTab, useModal } from './hooks';
import type { CalendarEvent } from './types';
import styles from './App.module.css';

// Header configuration
const headerConfig = {
  title: "Logan's Takehome",
  subtitle: 'Solana Foundation',
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

  // Handler for calendar event clicks (receives full event object)
  const handleEventClick = (eventData: CalendarEvent) => {
    openModal(eventData);
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
