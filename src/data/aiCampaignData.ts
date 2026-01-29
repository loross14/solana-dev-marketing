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
    metric: 'Transaction Finality',
    solanaSpecs: '400ms → 150ms (Alpenglow)',
    whyItMatters: 'Agent loop can make decisions in <200ms. Real-time execution for trading, arbitrage, autonomous actions.'
  },
  {
    metric: 'Cost per Transaction',
    solanaSpecs: '~$0.0001-$0.0025',
    whyItMatters: 'At 1000 agent actions/day = $0.10-$2.50. Micropayments and high-frequency operations become viable.'
  },
  {
    metric: 'Transaction Handling',
    solanaSpecs: 'Optimistic execution',
    whyItMatters: 'May need retry under load. With exponential backoff, p99 success <1s. Agent Kit handles this automatically.'
  },
  {
    metric: 'State Access',
    solanaSpecs: 'Account model (explicit data)',
    whyItMatters: 'Predictable costs. No surprises when your agent reads large state.'
  }
];

// Competition structure
export const competitionWeeks: CompetitionWeek[] = [
  {
    week: 'Week 1',
    theme: 'Launch',
    prize: 'Weekly Prize Package',
    contentFocus: 'Launch + starter kit (solana-ai-trader-starter repo, 3-part tutorial, #ai-trading-competition Discord)'
  },
  {
    week: 'Week 2',
    theme: 'Leaderboard',
    prize: 'Weekly Prize Package',
    contentFocus: 'First leaderboard, strategy breakdowns'
  },
  {
    week: 'Week 3',
    theme: 'Stories',
    prize: 'Weekly Prize Package',
    contentFocus: "Underdog stories, People's Choice voting"
  },
  {
    week: 'Week 4',
    theme: 'Finals',
    prize: 'Grand Prize Package',
    contentFocus: 'Finals at Breakpoint London (Nov 2026)'
  }
];

// Competition rules/categories
export const competitionRules: CompetitionCategory[] = [
  {
    icon: '📊',
    title: 'Scoring',
    description: '% return on 10 SOL starting balance. Tiebreaker: Sharpe ratio. All tracking on-chain.'
  },
  {
    icon: '🔧',
    title: 'Requirements',
    description: 'Must use Solana Agent Kit. AI component required. Code open-sourced post-competition.'
  },
  {
    icon: '🏅',
    title: 'Categories',
    description: "Overall Returns, Best Risk-Adjusted, Most Innovative, People's Choice."
  },
  {
    icon: '⚠️',
    title: 'Safety',
    description: 'Devnet practice week. Auto-pause at -50%. Spot only, major pairs.'
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
    askAmount: 'Free RPC access for all competitors + prize category'
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
    name: 'Anthropic',
    whyTheyCare: 'Claude powers many AI agents. Showcase real-world agentic use case.',
    askAmount: 'API credits for competitors + "Best Claude-Powered Bot" prize'
  },
  {
    name: 'Google',
    whyTheyCare: 'Gemini/Vertex AI integration. Enterprise AI credibility.',
    askAmount: 'Cloud credits + co-marketing for competition launch'
  },
  {
    name: 'Citadel',
    whyTheyCare: 'Elite quant firm. Their involvement = instant credibility with finance talent.',
    askAmount: 'Judging panel + recruitment pipeline for top performers'
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
    partner: 'NVIDIA',
    whyItMatters: 'Owns AI hardware narrative. Their blessing = legitimacy with enterprises.',
    thePlay: 'Joint announcement at GTC. Render/io.net showcase. "Solana: The Settlement Layer for GPU Compute."'
  },
  {
    partner: 'OpenAI / Anthropic',
    whyItMatters: 'Model providers are building agent infrastructure. First-mover advantage.',
    thePlay: 'Official Solana tools in their agent frameworks. API credits for ecosystem builders.'
  },
  {
    partner: 'LangChain',
    whyItMatters: 'De facto agent framework. 50K+ Discord, massive mindshare.',
    thePlay: 'First-class Solana integration in core library. Co-branded "AI Agents on Solana" course.'
  },
  {
    partner: 'Visa / Mastercard',
    whyItMatters: 'TradFi signal. Stablecoin settlement is their strategic focus.',
    thePlay: 'Pilot program: AI agent payments via Solana rails. Press release potential.'
  },
  {
    partner: 'World Economic Forum',
    whyItMatters: 'Davos visibility = mainstream legitimacy.',
    thePlay: 'Panel on "Autonomous Agents and the Future of Finance." Position Solana as infrastructure.'
  }
];

// AI Projects on Solana (ecosystem showcase)
export const aiProjects: AIProject[] = [
  {
    name: 'Solana Agent Kit',
    category: 'AI Agents',
    keyStats: '60+ protocol integrations, TypeScript + LangChain',
    showcaseAngle: '"Build an autonomous agent in 30 minutes" tutorial series. The default toolkit.'
  },
  {
    name: 'Render Network',
    category: 'GPU Compute',
    keyStats: '$1.74B market cap, migrated from ETH',
    showcaseAngle: 'Case study: Why they chose Solana. Cost/throughput comparison content.'
  },
  {
    name: 'Grass',
    category: 'Data/Training',
    keyStats: '8.5M+ monthly active participants',
    showcaseAngle: 'Data provenance story. Ethically-sourced AI training narrative.'
  },
  {
    name: 'io.net',
    category: 'GPU Compute',
    keyStats: 'Aggregated GPU network, enterprise focus',
    showcaseAngle: 'Cost comparison vs AWS/GCP. Enterprise AI infrastructure pitch.'
  },
  {
    name: 'Nosana',
    category: 'AI Inference',
    keyStats: 'Decentralized inference marketplace',
    showcaseAngle: 'Tutorial: Deploy your model without managing infrastructure.'
  },
  {
    name: 'Virtuals Protocol',
    category: 'AI Agents',
    keyStats: 'AI agents with on-chain identities',
    showcaseAngle: 'The "AI influencer" story. Revenue-generating agents use case.'
  },
  {
    name: 'ElizaOS',
    category: 'Multi-Agent',
    keyStats: 'Agent-to-agent coordination framework',
    showcaseAngle: 'Advanced tutorial: Multi-agent swarm intelligence on-chain.'
  }
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
