import { CollapsibleSection, ContentCalendar } from '../components/sections';
import { Table, PillarCard } from '../components/ui';
import {
  competitorAccounts,
  patterns,
  successMetrics,
  collaborationTargets,
  contentPillars,
} from '../data';
import type { CalendarEvent } from '../types';
import styles from './TabViews.module.css';

interface ContentStrategyTabProps {
  events: Record<number, CalendarEvent[]>;
  onEventClick: (event: CalendarEvent) => void;
}

export function ContentStrategyTab({ events, onEventClick }: ContentStrategyTabProps) {
  return (
    <div className={styles.tabContent}>
      {/* Twitter Audit Section */}
      <CollapsibleSection
        id="section-audit"
        icon="🔍"
        iconVariant="default"
        title="Crypto Dev Twitter Audit"
        subtitle="Who's winning and what can we learn?"
      >
        <p className={styles.sectionDesc}>
          Analysis of successful developer-focused accounts to inform our content strategy.
        </p>

        <Table
          columns={[
            { key: 'account', header: 'Account', render: (_, row) => (
              <><strong>{row.account}</strong><br /><span className={styles.meta}>{row.handle}</span></>
            )},
            { key: 'followers', header: 'Followers' },
            { key: 'engagementRate', header: 'Eng. Rate' },
            { key: 'topFormat', header: 'Top Format' },
            { key: 'stealThis', header: 'Steal This' },
          ]}
          data={competitorAccounts}
          ariaLabel="Competitor account analysis"
          highlightFirst
        />

        <h4 className={styles.subheading}>Patterns That Work</h4>
        <div className={styles.patternGrid}>
          {patterns.map((pattern, i) => (
            <PillarCard
              key={i}
              icon={pattern.icon}
              title={pattern.title}
              description={pattern.description}
              indicator={pattern.indicator}
              indicatorType={pattern.indicatorType}
            />
          ))}
        </div>
      </CollapsibleSection>

      {/* Content Calendar Section */}
      <CollapsibleSection
        id="section-calendar"
        icon="📅"
        iconVariant="metrics"
        title="30-Day Content Calendar"
        subtitle="Click on any item to see a content sample."
      >


        <ContentCalendar events={events} onEventClick={onEventClick} />

        <div className={styles.sectionDivider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerLabel}>Built on these pillars</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.pillarGrid}>
          {contentPillars.map((pillar) => (
            <PillarCard
              key={pillar.name}
              icon={pillar.icon}
              title={pillar.name}
              description={pillar.description}
              indicator={pillar.frequency}
              indicatorType={pillar.priority === 'High' ? 'viral' : 'bookmarks'}
              compact
            />
          ))}
        </div>
      </CollapsibleSection>

      {/* Success Metrics Section */}
      <CollapsibleSection
        id="section-metrics"
        icon="📊"
        iconVariant="metrics"
        title="Measuring Impact"
        subtitle="Blame Nikita for the bad weeks, and take credit for the good ones."
      >
        <Table
          columns={[
            { key: 'metric', header: 'Metric', render: (v) => <strong>{String(v)}</strong> },
            { key: 'currentBaseline', header: 'Current Baseline' },
            { key: 'thirtyDayTarget', header: '30-Day Target' },
            { key: 'howToTrack', header: 'How to Track' },
          ]}
          data={successMetrics}
          ariaLabel="Success metrics"
        />
      </CollapsibleSection>

      {/* Collaboration Targets Section */}
      <CollapsibleSection
        id="section-collab"
        icon="🎁"
        iconVariant="bonus"
        title="Bonus: Collaboration Targets"
        subtitle="Link and build."
      >
        <Table
          columns={[
            { key: 'name', header: 'Developer', render: (_, row) => (
              <><strong>{row.name}</strong><br /><span className={styles.meta}>{row.handle} • {row.followers}</span></>
            )},
            { key: 'whyTheyMatter', header: 'Why They Matter' },
            { key: 'collaborationIdea', header: 'Collaboration Idea' },
          ]}
          data={collaborationTargets}
          ariaLabel="Collaboration targets"
        />
      </CollapsibleSection>
    </div>
  );
}
