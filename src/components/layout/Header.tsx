import styles from './Header.module.css';

interface HeaderMetaBadge {
  icon: string;
  text: string;
}

interface HeaderProps {
  title: string;
  subtitle: string;
  metaBadges: HeaderMetaBadge[];
}

export function Header({ title, subtitle, metaBadges }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.meta}>
        {metaBadges.map((badge, index) => (
          <span key={index} className={styles.badge}>
            <span className={styles.badgeIcon}>{badge.icon}</span>
            {badge.text}
          </span>
        ))}
      </div>
      <div className={styles.divider} />
    </header>
  );
}
