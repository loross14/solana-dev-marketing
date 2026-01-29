import type { CollaborationTarget, BonusCollaborationIdea } from '../types';

export const collaborationTargets: CollaborationTarget[] = [
  {
    name: 'Nader Dabit',
    handle: '@dabit3',
    followers: '184K',
    whyTheyMatter: "The Web2→Web3 bridge. His tutorials brought thousands of React devs to crypto. Currently exploring multiple chains — Solana needs to be featured prominently.",
    collaborationIdea: '"Solana for React Devs" video series — 3-part tutorial on building full-stack Solana apps with Next.js. He writes the scripts, we provide technical review + promotion. His audience = our target audience.'
  },
  {
    name: 'Armani Ferrante',
    handle: '@armaniferrante',
    followers: '157K',
    whyTheyMatter: 'Created Anchor (the framework most Solana devs use). Ultimate technical credibility. Less active on Twitter but massive influence when he posts.',
    collaborationIdea: '"Anchor Masterclass" thread series — Co-authored deep-dives on advanced Anchor patterns. He provides the technical insights, we handle distribution. Positions @solana_devs as the authoritative technical voice.'
  },
  {
    name: 'Chase Barker',
    handle: '@therealchaseeb',
    followers: '~10K',
    whyTheyMatter: 'Core Solana developer, known for accessible explanations of complex protocol changes. Already Solana-native but underleveraged for @solana_devs collabs.',
    collaborationIdea: '"Ask Chase Anything" monthly AMA — Hosted on @solana_devs, he answers community questions live. Drives engagement, shows accessibility, creates evergreen content from Q&A.'
  },
  {
    name: 'Metaplex',
    handle: '@metaplex',
    followers: '~180K',
    whyTheyMatter: 'Built Metaplex (NFT standard on Solana). Deep ecosystem knowledge, respected technical voice. Understands both developer and creator perspectives.',
    collaborationIdea: '"State of Solana NFTs" quarterly report — Co-branded analysis of NFT/digital asset trends. Metaplex team provides insights, we create shareable graphics. Positions Solana as the serious NFT infrastructure play.'
  }
];

export const bonusCollaborationIdeas: BonusCollaborationIdea[] = [
  {
    target: 'Fireship (YouTube)',
    idea: '"Solana in 100 Seconds" — his format reaches millions of devs. Sponsor a video explaining Solana\'s architecture in his signature style.',
    type: 'influencer'
  },
  {
    target: 'Guinness World Records',
    idea: '"World\'s Fastest Blockchain Transaction" — live attempt at Breakpoint London (Nov 2026). Global press coverage, viral moment. Legacy media crossover.',
    type: 'event'
  }
];
