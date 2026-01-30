import type {
  AITechnicalSpec,
  CompetitionWeek,
  Sponsor,
  Channel,
  StrategicPartner,
  AIProject,
  CompetitionCategory
} from '../types';

// Technical positioning specs for AI x Solana
export const technicalSpecs: AITechnicalSpec[] = [
  {
    metric: 'Finality',
    solanaSpecs: '400ms → 150ms (Alpenglow)',
    whyItMatters: 'Real-time agent decisions and execution'
  },
  {
    metric: 'Cost',
    solanaSpecs: '~$0.0001-$0.0025/tx',
    whyItMatters: '1000 actions/day = $0.10-$2.50'
  },
  {
    metric: 'Reliability',
    solanaSpecs: 'Optimistic execution + auto-retry',
    whyItMatters: 'Agent Kit handles retries automatically'
  },
  {
    metric: 'State',
    solanaSpecs: 'Account model',
    whyItMatters: 'Predictable costs, no surprises'
  }
];

// Competition structure
export const competitionWeeks: CompetitionWeek[] = [
  {
    track: 'Setting the Benchmark',
    theme: 'Kickoff',
    prize: 'Prize Package',
    contentFocus: 'Agents compete head to head on our new "decentralized ai" benchmark alongside a big marketing push.'
  },
  {
    track: 'AI Hackathon',
    theme: 'Leaderboard',
    prize: 'Prize Package',
    contentFocus: 'Bounties from top companies in Blockchain and AI. Coordinated announcements of tier 1 integrations to '
  },
  {
    track: 'AI Trading Contests',
    theme: 'Leaderboard',
    prize: 'Prize Package',
    contentFocus: 'Agent Trading Challenges and Competitions. HFT, DeFi, TradFi bounties.'
  },
  {
    track: 'Content & Collaboration',
    theme: 'Leaderboard',
    prize: 'Prize Package',
    contentFocus: 'Benchmark setting ducational content series on Crypto x AI, featuring ecosystem builders and their projects.'
  },
];

// Competition rules/categories
export const competitionRules: CompetitionCategory[] = [
  {
    icon: '📊',
    title: 'Scoring',
    description: 'Onchain ROI from a fixed starting point.'
  },
  {
    icon: '🔧',
    title: 'Requirements',
    description: 'Must use Solana Agent Kit.'
  },
  {
    icon: '🏅',
    title: 'Categories',
    description: "Overall, Risk-Adjusted, Innovation, and People's Choice."
  },
  {
    icon: '⚠️',
    title: 'Safety',
    description: 'No crime allowed!'
  }
];

// Potential sponsors
export const sponsors: Sponsor[] = [
  {
    name: 'Jupiter',
    whyTheyCare: 'Leading DEX aggregator. Every bot uses their routing. Showcase volume.',
    askAmount: 'Prize pool contribution + API credits for competitors'
  },
  {
    name: 'Helius',
    whyTheyCare: 'RPC provider. Bots need reliable infrastructure. Demo their speed.',
    askAmount: 'Free RPC access for competitors + prize category'
  },
  {
    name: 'Drift Protocol',
    whyTheyCare: 'Perps DEX. Could expand competition to derivatives category.',
    askAmount: 'Sponsored "Best Drift Integration" prize'
  },
  {
    name: 'Marinade Finance',
    whyTheyCare: 'Liquid staking. Bots could integrate mSOL strategies.',
    askAmount: 'Yield-bearing category sponsorship'
  },
  {
    name: 'SendAI (Agent Kit)',
    whyTheyCare: 'Their toolkit powers the competition. Massive showcase opportunity.',
    askAmount: '"Most Innovative Use of Agent Kit" prize'
  },
  {
    name: 'Jump Crypto',
    whyTheyCare: 'Already Solana-native (Firedancer). Deep DeFi expertise.',
    askAmount: 'Prize pool contribution + technical mentorship'
  }
];

// Target channels organized by category
export const cryptoChannels: Channel[] = [
  {
    name: '@solana_devs',
    type: 'Twitter',
    audience: '78K devs',
    priority: 'high',
    activationStrategy: 'Primary announcement channel. Daily leaderboard updates.'
  },
  {
    name: 'Solana Discord #dev-chat',
    type: 'Discord',
    audience: 'Active builders',
    priority: 'high',
    activationStrategy: 'Competition support, strategy discussion, starter kit distribution.'
  },
  {
    name: '@heaboredlabs / @JupiterExchange',
    type: 'Twitter',
    audience: 'DeFi devs',
    priority: 'medium',
    activationStrategy: 'Co-promotion with infrastructure partners. Cross-post leaderboards.'
  }
];

export const quantChannels: Channel[] = [
  {
    name: 'r/algotrading',
    type: 'Reddit',
    audience: '500K+ algo traders',
    priority: 'high',
    activationStrategy: '"AI trading bot competition with real stakes." Focus on Sharpe ratio category.'
  },
  {
    name: 'QuantConnect Discord',
    type: 'Discord',
    audience: 'Systematic traders',
    priority: 'medium',
    activationStrategy: 'Share starter kit as alternative to traditional backtesting. Live market, real returns.'
  },
  {
    name: 'Numerai Forum',
    type: 'Forum',
    audience: 'ML + finance',
    priority: 'medium',
    activationStrategy: 'Crossover audience. Pitch as "Numerai but for real-time execution."'
  },
  {
    name: '@QuantMage / quant Twitter',
    type: 'Twitter',
    audience: 'Quant influencers',
    priority: 'medium',
    activationStrategy: 'Invite as judges or early competitors. Their participation = credibility.'
  }
];

export const rustChannels: Channel[] = [
  {
    name: 'r/rust',
    type: 'Reddit',
    audience: '350K+ Rustaceans',
    priority: 'medium',
    activationStrategy: '"High-performance trading bot competition." Lead with Rust, not crypto.'
  },
  {
    name: 'This Week in Rust newsletter',
    type: 'Newsletter',
    audience: '40K+ subscribers',
    priority: 'medium',
    activationStrategy: 'Submit starter kit repo. Frame as "Rust in production finance."'
  },
  {
    name: 'Rust Discord #games / #jobs',
    type: 'Discord',
    audience: 'Systems programmers',
    priority: 'low',
    activationStrategy: 'Performance-focused devs who\'d appreciate low-latency trading challenge.'
  }
];

export const aiChannels: Channel[] = [
  {
    name: 'LangChain Discord',
    type: 'Discord',
    audience: '50K+ agent builders',
    priority: 'high',
    activationStrategy: 'Agent Kit integration. "Your LangChain agent can now trade."'
  },
  {
    name: 'r/LocalLLaMA',
    type: 'Reddit',
    audience: '500K+ self-hosters',
    priority: 'medium',
    activationStrategy: 'Decentralization-aligned. "Run your own trading agent."'
  },
  {
    name: 'Hugging Face Discord',
    type: 'Discord',
    audience: '100K+ ML devs',
    priority: 'medium',
    activationStrategy: 'Model deployment angle. "Put your model to work."'
  }
];

// Strategic partners
export const strategicPartners: StrategicPartner[] = [
  {
    partner: 'Anthropic',
    whyItMatters: 'Model providers are building agent infrastructure. First-mover advantage.',
    thePlay: 'Official Solana integration built into claude connections menu.'
  },
  {
    partner: 'LangChain',
    whyItMatters: 'De facto agent framework. 50K+ Discord, massive mindshare.',
    thePlay: 'Integration in core library, fancy branding to farm attention.'
  },
];

// AI Projects on Solana (ecosystem showcase)
export const aiProjects: AIProject[] = [
  {
    name: 'Grass',
    category: 'Data/Training',
    keyStats: '8.5M+ monthly active participants',
    showcaseAngle: 'Collaborate on DePIN & Grass content. '
  },
  {
    name: 'io.net',
    category: 'GPU Compute',
    keyStats: 'Aggregated GPU network, enterprise focus',
    showcaseAngle: 'Free Credits for Qualified enterprises & Content Collaboraion.'
  },
  {
    name: 'Virtuals',
    category: 'AI Agents',
    keyStats: 'AI agents with on-chain identities',
    showcaseAngle: 'Collaborate on AI coordination & virtuals content.'
  },
];

// Use cases that work today
export const aiUseCases = [
  {
    title: 'AI Agents with Wallets',
    description: 'Autonomous agents that can trade, stake, mint NFTs, and manage assets. The Solana Agent Kit (60+ protocol integrations) makes this possible in minutes.',
    note: 'Not theoretical — there are agents in production on mainnet right now.'
  },
  {
    title: 'Inference Micropayments',
    description: "Pay-per-query model APIs using SPL tokens. No Stripe's 2.9% + $0.30. No minimum thresholds. Your model earns from query #1.",
    note: 'Why this beats traditional: No payment processor approval, no geographic restrictions, instant settlement.'
  },
  {
    title: 'Decentralized Compute',
    description: 'Nosana, io.net, Render Network — real GPU clusters you can use today at 50-80% below AWS/GCP pricing.',
    note: 'Trade-off: Less mature tooling. Worth it for cost-sensitive training/inference workloads.'
  },
  {
    title: 'Data Provenance',
    description: 'Grass has 8.5M+ monthly active participants contributing training data with on-chain attribution.',
    note: 'Why it matters: When regulators ask where your training data came from, you have cryptographic proof.'
  }
];
