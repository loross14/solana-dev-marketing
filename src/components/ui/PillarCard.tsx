import styles from './PillarCard.module.css';

interface PillarCardProps {
  icon: string;
  title: string;
  description: string;
  indicator?: string;
  indicatorType?: 'bookmarks' | 'replies' | 'viral' | 'retweets';
  compact?: boolean;
}

export function PillarCard({
  icon,
  title,
  description,
  indicator,
  indicatorType,
  compact = false,
}: PillarCardProps) {
  return (
    <div className={`${styles.card} ${compact ? styles.compact : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title}</h4>
      {!compact && <p className={styles.description}>{description}</p>}
      {indicator && (
        <span className={`${styles.indicator} ${indicatorType ? styles[indicatorType] : ''}`}>
          {indicator}
        </span>
      )}
    </div>
  );
}
