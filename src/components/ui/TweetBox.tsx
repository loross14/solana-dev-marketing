import styles from './TweetBox.module.css';

interface TweetBoxProps {
  handle?: string;
  category: string;
  content: string;
  rationale?: string;
}

export function TweetBox({
  handle = '@solana_devs',
  category,
  content,
  rationale,
}: TweetBoxProps) {
  // Format content with line breaks preserved
  const formattedContent = content.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < content.split('\n').length - 1 && <br />}
    </span>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.tweetBox}>
        <div className={styles.header}>
          <span className={styles.avatar}>🟣</span>
          <div className={styles.meta}>
            <strong>solana_devs</strong>
            <span className={styles.handle}>{handle}</span>
          </div>
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.content}>
          {formattedContent}
        </div>
        <div className={styles.engagement}>
          <span>💬 Reply</span>
          <span>🔁 Retweet</span>
          <span>❤️ Like</span>
          <span>📊 View</span>
        </div>
      </div>
      {rationale && (
        <p className={styles.rationale}>
          <strong>Why this works:</strong> {rationale}
        </p>
      )}
    </div>
  );
}
