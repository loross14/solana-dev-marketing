export interface CompetitorAccount {
  account: string;
  handle: string;
  followers: string;
  engagementRate: string;
  topFormat: string;
  postCadence: string;
  stealThis: string;
  isBaseline?: boolean;
}

export interface PatternCard {
  icon: string;
  title: string;
  description: string;
  indicator: string;
  indicatorType: 'bookmarks' | 'replies' | 'viral';
}

export const competitorAccounts: CompetitorAccount[] = [
  {
    account: 'Solana Developers',
    handle: '@solana_devs',
    followers: '78.2K',
    engagementRate: '1.5-2.5%',
    topFormat: 'Announcements + tutorials',
    postCadence: '5-6/week',
    stealThis:
      'Our account. Strong technical credibility, room to grow engagement.',
    isBaseline: true,
  },
  {
    account: 'Mert | helius.dev',
    handle: '@0xMert_',
    followers: '315.9K',
    engagementRate: '1-3%',
    topFormat: 'Community polls + hot takes',
    postCadence: '7-10/week',
    stealThis:
      'Helius CEO. Engagement farming with genuine questions. Never sells, always advocates.',
  },
  {
    account: 'Austin Federa',
    handle: '@austin_federa',
    followers: '175.6K',
    engagementRate: '0.5-2%',
    topFormat: 'Ecosystem threads + data drops',
    postCadence: '8-10/week',
    stealThis:
      'Ex-Solana Foundation Head of Strategy. Now DoubleZero. Data-backed claims.',
  },
  {
    account: 'Nader Dabit',
    handle: '@dabit3',
    followers: '184.3K',
    engagementRate: '0.2-1%',
    topFormat: 'Tutorial threads + video clips',
    postCadence: '6-8/week',
    stealThis:
      'Web2->Web3 bridge language. Never assumes knowledge. Code always works.',
  },
  {
    account: 'Jarrod Watts',
    handle: '@jarrodwatts',
    followers: '29.8K',
    engagementRate: '2-5%',
    topFormat: 'Live demo videos + GIFs',
    postCadence: '5-7/week',
    stealThis:
      'Show > tell. 30-second demos that make you want to build. Highest engagement rate.',
  },
  {
    account: 'Armani Ferrante',
    handle: '@armaniferrante',
    followers: '157.2K',
    engagementRate: '1-3%',
    topFormat: 'Technical deep-dives + updates',
    postCadence: '7-9/week',
    stealThis:
      'Anchor creator credibility. Technical substance over frequency.',
  },
  {
    account: 'Base',
    handle: '@base',
    followers: '1.12M',
    engagementRate: '1-4%',
    topFormat: 'Project spotlights + vibes',
    postCadence: '6-8/week',
    stealThis:
      'Competitor. Strong community feel but low technical depth. We can beat on substance.',
  },
  {
    account: 'Ethereum',
    handle: '@ethereum',
    followers: '4.09M',
    engagementRate: '1-3%',
    topFormat: 'Protocol updates + event promos',
    postCadence: '4-6/week',
    stealThis:
      'Competitor. Institutional but boring. We should be the fun alternative.',
  },
];

export const patterns: PatternCard[] = [
  {
    icon: "🎬",
    title: "Viral Demos",
    description:
      "Create product demos with virality potential. Make something fun and clever to drive engagement to the whole ecosystem.",
    indicator: "High Bookmarks",
    indicatorType: "bookmarks",
  },
  {
    icon: "⭐",
    title: "Developer Spotlight",
    description:
      "Highlighting interesting projects or developers building on Solana with genuine enthusiasm",
    indicator: "High Replies",
    indicatorType: "replies",
  },
  {
    icon: "😂",
    title: "Technical Memes",
    description:
      "Combining humor with genuine technical insight. The meme draws attention, the insight provides value.",
    indicator: "Viral Potential",
    indicatorType: "viral",
  },
  {
    icon: "🤝",
    title: "Collabs & Culture",
    description:
      '"If you know, you know" - inside jokes that deepen personal attachment to the account',
    indicator: "Viral Potential",
    indicatorType: "viral",
  },
];

export default { competitorAccounts, patterns };
