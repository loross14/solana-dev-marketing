import { useState, useEffect, useCallback } from 'react';
import type { TabId } from '../types';

/**
 * Hook for managing active tab state with URL hash synchronization.
 * Preserves deep-linking behavior from the original implementation.
 */
export function useActiveTab(defaultTab: TabId = 'q1') {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    // Initialize from URL hash if valid
    const hash = window.location.hash.substring(1) as TabId;
    return hash === 'q1' || hash === 'q3' ? hash : defaultTab;
  });

  // Sync with URL hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) as TabId;
      if (hash === 'q1' || hash === 'q3') {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchTab = useCallback((tabId: TabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;

    // Scroll to tab navigation area
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }, []);

  return { activeTab, switchTab };
}
