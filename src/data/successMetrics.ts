import type { SuccessMetric, EngagementTactic } from '../types';

export const successMetrics: SuccessMetric[] = [
  {
    metric: 'Followers',
    currentBaseline: '78.2K',
    thirtyDayTarget: '82K (+5%)',
    howToTrack: 'Twitter Analytics — weekly check'
  },
  {
    metric: 'Engagement Rate',
    currentBaseline: '1.5–2.5%',
    thirtyDayTarget: '2.5–3%',
    howToTrack: 'Twitter Analytics — (likes + replies + RTs) / impressions'
  },
  {
    metric: 'Posting Cadence',
    currentBaseline: '5-6/week',
    thirtyDayTarget: '8-10/week',
    howToTrack: 'Content calendar adherence'
  },
  {
    metric: 'Docs Link Clicks',
    currentBaseline: 'Establish baseline',
    thirtyDayTarget: '+25% from Week 1',
    howToTrack: 'UTM parameters on all docs.solana.com links'
  },
  {
    metric: 'Reply Rate',
    currentBaseline: 'Establish baseline',
    thirtyDayTarget: 'Reply to 80% of technical questions within 4 hours',
    howToTrack: 'Manual tracking + Twitter notifications'
  },
  {
    metric: 'AI Impressions',
    currentBaseline: '0 (establishing baseline)',
    thirtyDayTarget: '50K/month',
    howToTrack: 'UTM parameters on all AI-tagged posts (utm_campaign=ai_trading_competition)'
  }
];

export const engagementTactics: EngagementTactic[] = [
  {
    tactic: 'Reply Marathon',
    description: '30-min daily session replying to dev questions',
    frequency: 'Daily',
    priority: 'high'
  },
  {
    tactic: 'Strategic QTs',
    description: 'Quote-tweet ecosystem wins with added context',
    frequency: '2-3x/week',
    priority: 'high'
  },
  {
    tactic: 'Dev Shoutouts',
    description: 'Highlight individual builders weekly',
    frequency: 'Weekly',
    priority: 'medium'
  },
  {
    tactic: 'Poll Engagement',
    description: 'Use polls to crowdsource content ideas',
    frequency: '1-2x/week',
    priority: 'medium'
  },
  {
    tactic: 'Thread Callbacks',
    description: 'Reference old threads in new content',
    frequency: 'As relevant',
    priority: 'low'
  },
  {
    tactic: 'AMA Sessions',
    description: 'Monthly ask-me-anything in replies',
    frequency: 'Monthly',
    priority: 'low'
  }
];
