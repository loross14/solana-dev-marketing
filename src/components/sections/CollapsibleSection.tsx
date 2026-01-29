import { useCollapsible } from '../../hooks';
import type { SectionIconVariant } from '../../types';
import styles from './CollapsibleSection.module.css';

interface CollapsibleSectionProps {
  id: string;
  icon: string;
  iconVariant?: SectionIconVariant;
  title: string;
  subtitle?: string;
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

export function CollapsibleSection({
  id,
  icon,
  iconVariant = 'default',
  title,
  subtitle,
  defaultCollapsed = true,
  children,
}: CollapsibleSectionProps) {
  const { isCollapsed, toggle, ariaExpanded } = useCollapsible(defaultCollapsed);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      id={id}
      className={`${styles.section} ${isCollapsed ? styles.collapsed : ''}`}
    >
      <div
        className={styles.header}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={ariaExpanded}
        aria-controls={`${id}-content`}
      >
        <div className={`${styles.icon} ${styles[`icon--${iconVariant}`]}`}>
          {icon}
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.toggle} aria-hidden="true" />
      </div>
      <div
        id={`${id}-content`}
        className={styles.content}
        aria-hidden={isCollapsed}
      >
        {children}
      </div>
    </div>
  );
}
