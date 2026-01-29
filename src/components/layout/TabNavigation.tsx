import type { TabId } from '../../types';
import styles from './TabNavigation.module.css';

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

const tabs = [
  { id: 'q1' as TabId, number: '1', label: 'Content Strategy' },
  { id: 'q3' as TabId, number: '3', label: 'AI Campaign' },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavProps) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav} role="tablist" aria-label="Main content tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-${tab.id}`}
            id={`tab-btn-${tab.id}`}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className={styles.tabNumber}>{tab.number}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
