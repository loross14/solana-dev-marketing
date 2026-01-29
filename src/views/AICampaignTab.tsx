import { CollapsibleSection } from '../components/sections';
import { Table, PillarCard } from '../components/ui';
import {
  technicalSpecs,
  competitionWeeks,
  competitionRules,
  sponsors,
  strategicPartners,
  aiProjects,
  cryptoChannels,
  quantChannels,
  aiChannels,
} from '../data';
import styles from './TabViews.module.css';

export function AICampaignTab() {
  return (
    <div className={styles.tabContent}>
      {/* Competition Section */}
      <CollapsibleSection
        id="section-q3-content"
        icon="🏆"
        iconVariant="content"
        title="The Campaign: Solana AI Trading Competition"
        subtitle="4-week competition — whose bot generates the highest returns?"
      >
        <p className={styles.sectionDesc}>
          AI trading bots are the killer app for Solana + AI. They showcase speed (400ms finality matters for arbitrage),
          low fees (thousands of micro-trades), and the Solana Agent Kit in production.
        </p>

        <h4 className={styles.subheading}>Competition Structure</h4>
        <Table
          columns={[
            { key: 'week', header: 'Week', render: (v) => <strong>{String(v)}</strong> },
            { key: 'prize', header: 'Prize' },
            { key: 'contentFocus', header: 'Content' },
          ]}
          data={competitionWeeks}
          ariaLabel="Competition timeline"
        />

        <h4 className={styles.subheading}>Rules</h4>
        <div className={styles.patternGrid}>
          {competitionRules.map((rule, i) => (
            <PillarCard
              key={i}
              icon={rule.icon}
              title={rule.title}
              description={rule.description}
            />
          ))}
        </div>

        <h4 className={styles.subheading}>Potential Sponsors</h4>
        <Table
          columns={[
            { key: 'name', header: 'Sponsor', render: (v) => <strong>{String(v)}</strong> },
            { key: 'whyTheyCare', header: "Why They'd Care" },
            { key: 'askAmount', header: 'Ask' },
          ]}
          data={sponsors}
          ariaLabel="Potential sponsors"
        />
      </CollapsibleSection>

      {/* Narrative Section */}
      <CollapsibleSection
        id="section-q3-narrative"
        icon="🤖"
        iconVariant="ai"
        title="Solana's AI Position"
        subtitle="The settlement layer for the non-human economy"
      >
        <p className={styles.sectionDesc}>
          AI agents can't open bank accounts — but they can hold Solana wallets.
        </p>

        <Table
          columns={[
            { key: 'metric', header: 'Metric', render: (v) => <strong>{String(v)}</strong> },
            { key: 'solanaSpecs', header: 'Specs' },
            { key: 'whyItMatters', header: 'Why It Matters' },
          ]}
          data={technicalSpecs}
          ariaLabel="Technical specifications"
        />
      </CollapsibleSection>

      {/* Channels Section */}
      <CollapsibleSection
        id="section-q3-channels"
        icon="📡"
        iconVariant="channels"
        title="Target Channels"
        subtitle="Where to promote the AI Trading Competition"
      >
        <h4 className={styles.subheading}>Crypto-Native (Already Solana-Aware)</h4>
        <Table
          columns={[
            { key: 'name', header: 'Channel', render: (v) => <strong>{String(v)}</strong> },
            { key: 'audience', header: 'Audience' },
            { key: 'activationStrategy', header: 'Competition Angle' },
          ]}
          data={cryptoChannels}
          ariaLabel="Crypto channels"
        />

        <h4 className={styles.subheading}>Quant & Algo Trading (High-Value Recruits)</h4>
        <Table
          columns={[
            { key: 'name', header: 'Channel', render: (v) => <strong>{String(v)}</strong> },
            { key: 'audience', header: 'Audience' },
            { key: 'activationStrategy', header: 'Competition Angle' },
          ]}
          data={quantChannels}
          ariaLabel="Quant channels"
        />

        <h4 className={styles.subheading}>AI/ML (Skeptical of Crypto)</h4>
        <Table
          columns={[
            { key: 'name', header: 'Channel', render: (v) => <strong>{String(v)}</strong> },
            { key: 'audience', header: 'Audience' },
            { key: 'activationStrategy', header: 'Competition Angle' },
          ]}
          data={aiChannels}
          ariaLabel="AI channels"
        />
      </CollapsibleSection>

      {/* Partners Section */}
      <CollapsibleSection
        id="section-q3-partners"
        icon="🤝"
        iconVariant="default"
        title="Strategic Partnerships"
        subtitle="Global positioning through high-signal alliances"
      >
        <Table
          columns={[
            { key: 'partner', header: 'Partner', render: (v) => <strong>{String(v)}</strong> },
            { key: 'whyItMatters', header: 'Why It Matters' },
            { key: 'thePlay', header: 'The Play' },
          ]}
          data={strategicPartners}
          ariaLabel="Strategic partnerships"
        />
      </CollapsibleSection>

      {/* AI Projects Section */}
      <CollapsibleSection
        id="section-q3-bonus"
        icon="🎁"
        iconVariant="bonus"
        title="Bonus: AI Projects on Solana"
        subtitle="Ecosystem showcase opportunities"
      >
        <Table
          columns={[
            { key: 'name', header: 'Project', render: (v) => <strong>{String(v)}</strong> },
            { key: 'category', header: 'Category' },
            { key: 'keyStats', header: 'Key Stats' },
            { key: 'showcaseAngle', header: 'Showcase Angle' },
          ]}
          data={aiProjects}
          ariaLabel="AI projects to showcase"
        />
      </CollapsibleSection>
    </div>
  );
}
