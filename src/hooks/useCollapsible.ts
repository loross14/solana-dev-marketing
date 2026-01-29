import { useState, useCallback } from 'react';

/**
 * Hook for managing collapsible section state.
 * Used by CollapsibleSection component for expand/collapse functionality.
 */
export function useCollapsible(defaultCollapsed = true) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const toggle = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const expand = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  const collapse = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  return {
    isCollapsed,
    toggle,
    expand,
    collapse,
    ariaExpanded: !isCollapsed,
  };
}
