import { useState } from 'react';
import { Header, TabNavigation, Footer } from './components/layout';
import { Modal } from './components/ui';
import { ContentStrategyTab, AICampaignTab } from './views';
import { useActiveTab, useModal, useCalendarEvents } from './hooks';
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
  const { events, updateEvent, getEventById, hasEdits, exportToCode } = useCalendarEvents();
  const [exportStatus, setExportStatus] = useState<'idle' | 'copied'>('idle');

  // Handler for exporting edits to clipboard
  const handleExport = async () => {
    const code = exportToCode();
    await navigator.clipboard.writeText(code);
    setExportStatus('copied');
    setTimeout(() => setExportStatus('idle'), 2000);
  };

  // Handler for calendar event clicks (receives full event object)
  const handleEventClick = (eventData: CalendarEvent) => {
    openModal(eventData);
  };

  // Handler for saving event edits
  const handleSaveEvent = (eventId: string, updates: Partial<CalendarEvent>) => {
    updateEvent(eventId, updates);
    // Get the updated event and refresh the modal
    const updatedEvent = getEventById(eventId);
    if (updatedEvent) {
      openModal(updatedEvent);
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
            <ContentStrategyTab events={events} onEventClick={handleEventClick} />
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

      <Modal isOpen={isOpen} onClose={closeModal} event={event} onSave={handleSaveEvent} />

      {/* Export button - appears when there are unsaved edits */}
      {hasEdits && (
        <button className={styles.exportButton} onClick={handleExport}>
          {exportStatus === 'copied' ? 'Copied!' : 'Export Edits'}
        </button>
      )}
    </div>
  );
}

export default App;
