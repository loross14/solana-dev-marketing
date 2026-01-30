import type { SuccessMetric, EngagementTactic } from '../types';

export const successMetrics: SuccessMetric[] = [
  {
    metric: 'Followers',
    currentBaseline: '78.2K',
    thirtyDayTarget: '82K (+5%)',
    howToTrack: 'X Analytics — weekly check'
  },
  {
    metric: 'Engagement Rate',
    currentBaseline: '1.5–2.5%',
    thirtyDayTarget: '2.5–3%',
    howToTrack: 'X Analytics — (likes + replies + RTs) / impressions'
  },
  {
    metric: 'Posting Cadence',
    currentBaseline: '5-6/week',
    thirtyDayTarget: '8-10/week',
    howToTrack: 'X Analytics'
  },
  {
    metric: 'Link Clicks',
    currentBaseline: 'Establish baseline',
    thirtyDayTarget: '+10-20% from Week 1',
    howToTrack: 'X Analytics & UTM parameters'
  },
  {
    metric: 'Replies',
    currentBaseline: 'Establish baseline',
    thirtyDayTarget: 'Average between 25-50 useful replies per week',
    howToTrack: 'Manual tracking + Twitter notifications'
  },
  {
    metric: 'Strategy effectiveness',
    currentBaseline: '0 (establishing baseline)',
    thirtyDayTarget: 'Hone in on our most effective strategies',
    howToTrack: 'X Analytics + Signals'
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
