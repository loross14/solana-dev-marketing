import styles from './PillarCard.module.css';

interface PillarCardProps {
  icon: string;
  title: string;
  description: string;
  indicator?: string;
  indicatorType?: 'bookmarks' | 'replies' | 'viral' | 'retweets';
}

export function PillarCard({
  icon,
  title,
  description,
  indicator,
  indicatorType,
}: PillarCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      {indicator && (
        <span className={`${styles.indicator} ${indicatorType ? styles[indicatorType] : ''}`}>
          {indicator}
        </span>
      )}
    </div>
  );
}
