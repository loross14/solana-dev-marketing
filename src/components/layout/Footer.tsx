import styles from './Footer.module.css';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links?: FooterLink[];
  content?: string;
}

interface FooterProps {
  sections: FooterSection[];
  meta: string;
  brandName: string;
}

export function Footer({ sections, meta, brandName }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h4 className={styles.sectionTitle}>{section.title}</h4>
            {section.links && (
              <div className={styles.links}>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
            {section.content && <p className={styles.sectionContent}>{section.content}</p>}
          </div>
        ))}
      </div>
      <p className={styles.meta}>
        {meta} <span className={styles.brand}>{brandName}</span>
      </p>
    </footer>
  );
}
