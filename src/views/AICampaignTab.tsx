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
        title="Solana x AI Campaigns"
        subtitle="Craft the narrative: Show > Tell"
      >
        <Table
          columns={[
            { key: 'track', header: 'Campaign', render: (v) => <strong>{String(v)}</strong> },
            { key: 'contentFocus', header: 'Narrative' },
          ]}
          data={competitionWeeks}
          ariaLabel="Competition timeline"
        />

        <Table
          columns={[
            { key: 'name', header: 'Partner', render: (v) => <strong>{String(v)}</strong> },
            { key: 'whyTheyCare', header: "Alignment" },
            { key: 'askAmount', header: 'Ask' },
          ]}
          data={sponsors}
          ariaLabel="Potential sponsors"
        />
      </CollapsibleSection>


      {/* Channels Section */}
      <CollapsibleSection
        id="section-q3-channels"
        icon="📡"
        iconVariant="channels"
        title="Distribution Channels"
        subtitle="Maximize impact by targeting multiple strategic niches in parallel."
      >
          <h4 className={styles.subheading}>AI/ML Engineers (to participate & contribute)</h4>
          <Table
            columns={[
              { key: 'name', header: 'Channel', render: (v) => <strong>{String(v)}</strong> },
              { key: 'audience', header: 'Audience' },
              { key: 'activationStrategy', header: 'Competition Angle' },
            ]}
            data={aiChannels}
            ariaLabel="AI channels"
          />

        <h4 className={styles.subheading}>Quant & Algo Trading (to participate & contribute)</h4>
        <Table
          columns={[
            { key: 'name', header: 'Channel', render: (v) => <strong>{String(v)}</strong> },
            { key: 'audience', header: 'Audience' },
            { key: 'activationStrategy', header: 'Competition Angle' },
          ]}
          data={quantChannels}
          ariaLabel="Quant channels"
        />
          
          <h4 className={styles.subheading}>Crypto-Native (to sell the narrative to)</h4>
        <Table
          columns={[
            { key: 'name', header: 'Channel', render: (v) => <strong>{String(v)}</strong> },
            { key: 'audience', header: 'Audience' },
            { key: 'activationStrategy', header: 'Competition Angle' },
          ]}
          data={cryptoChannels}
          ariaLabel="Crypto channels"
        />

       
      </CollapsibleSection>

      {/* Partners Section */}
      <CollapsibleSection
        id="section-q3-partners"
        icon="🤝"
        iconVariant="default"
        title="Strategic Integrations"
        subtitle="Global positioning through high-signal alliances."
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
        title="Bonus: Ecosystem Showcase"
        subtitle="Show developers how Solana uplifts it's builders."
      >
        <Table
          columns={[
            { key: 'name', header: 'Project', render: (v) => <strong>{String(v)}</strong> },
            { key: 'category', header: 'Category' },
            { key: 'keyStats', header: 'Key Stats' },
            { key: 'showcaseAngle', header: 'How to Showcase' },
          ]}
          data={aiProjects}
          ariaLabel="AI projects to showcase"
        />
      </CollapsibleSection>
    </div>
  );
}
