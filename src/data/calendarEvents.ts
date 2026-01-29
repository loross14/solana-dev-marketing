export interface CalendarEvent {
  id: string;
  title: string;
  type: 'Thread' | 'Quick Tip' | 'Meme' | 'Spotlight' | 'Engagement';
  bestTime: string;
  content: string;
  notes: string;
  imageUrl: string | null;
}

// Calendar events from Notion CMS
export const calendarEvents: Record<number, CalendarEvent[]> = {
  1: [
    {
      id: 'day1-thread',
      title: 'Firedancer is Live',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Solana just ended its single-client era.

After 3 years of development, Firedancer is live on mainnet:

→ 50,000+ blocks produced
→ 100+ days running
→ 26% of validators now on Frankendancer
→ 1M TPS in test environments

What this means for you as a developer:

1/ Network resilience: No more single point of failure
2/ Performance headroom: Your high-throughput apps have room to scale
3/ Client diversity: Choose your validator stack

Firedancer isn't just faster—it's a complete rewrite in C that rethinks how validators work.

The multi-client future is here.`,
      notes: 'Link to Jump Crypto announcement. Tag @aaboronkov. Include architecture diagram if possible.',
      imageUrl: null,
    },
  ],
  2: [
    {
      id: 'day2-engagement',
      title: 'Mert Photo',
      type: 'Engagement',
      bestTime: 'All Day',
      content: '[no caption - just a comedically way-too-close-up selfie]',
      notes: 'Coordinate with Mert + Helius to drive engagement early',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5605AQFLXREI2mr6yw/videocover-low/videocover-low/0/1732873715277',
    },
    {
      id: 'day2-tip',
      title: 'Encrypted Token Balances',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `New superpower unlocked: encrypted token balances

Token Extensions now support ZK-powered privacy:

• Encrypted balances
• Private transfers
• Confidential minting/burning

Use cases hitting production:
→ B2B payments (competitors can't see your volume)
→ Encrypted payroll
→ Compliant institutional transfers`,
      notes: 'Link to Helius Confidential Balances blog. This is bleeding edge.',
      imageUrl: null,
    },
  ],
  3: [
    {
      id: 'day3-spotlight',
      title: 'MCPay — Hackathon Winner',
      type: 'Spotlight',
      bestTime: '2pm EST',
      content: `Meet MCPay — Cypherpunk Hackathon winner

The problem: Payment infrastructure is fragmented across chains.

Their solution: Open payment rails that work everywhere.

What impressed the judges:
→ Chain-agnostic architecture
→ Developer-first API design
→ Production-ready in weeks, not months

The team is now in Colosseum's accelerator with $250K in pre-seed.

9,000 hackers competed. 1,576 projects submitted. They won.`,
      notes: 'Tag MCPay team. Get quote from founders if possible.',
      imageUrl: null,
    },
  ],
  4: [
    {
      id: 'day4-meme',
      title: 'Fee Comparison',
      type: 'Meme',
      bestTime: '11am EST',
      content: `Solana daily fees: $1.03M
Base daily fees: $0.8M
Arbitrum daily fees: $0.5M

Solana TVL: $9.2B
Base TVL: $5.15B

Solana DEX volume: $118B (30 days)
Ethereum DEX volume: $40B (30 days)

4 consecutive months of dominance.

L2s are in a race to the bottom on fees.
Solana is monetizing activity.

Different games. Different outcomes.`,
      notes: 'Create clean comparison graphic. Data from DeFiLlama/Helius.',
      imageUrl: null,
    },
    {
      id: 'day4-tip',
      title: 'ZK Compression Costs',
      type: 'Quick Tip',
      bestTime: '4pm EST',
      content: `Creating 1M accounts on Solana:

❌ Without compression: ~$250,000
✅ With ZK compression: ~$50

That's a 5000x cost reduction.`,
      notes: 'Link to Light Protocol. Massive cost savings = high shareability.',
      imageUrl: null,
    },
  ],
  5: [
    {
      id: 'day5-thread',
      title: 'AI Agents on Solana',
      type: 'Thread',
      bestTime: '10am EST',
      content: `AI agents can hold Solana wallets.
AI agents cannot open bank accounts.

This is why Solana is becoming the settlement layer for the non-human economy.

Here's how to build one...`,
      notes: 'Cross-promote with AI x Crypto campaign. Link to Agent Kit repo.',
      imageUrl: null,
    },
  ],
  6: [
    {
      id: 'day6-engagement',
      title: 'QT Hackathon Winner',
      type: 'Engagement',
      bestTime: '1pm EST',
      content: `[Quote tweet a Cypherpunk hackathon winner]

"9,000 hackers. 1,576 submissions. This one stood out.

[Specific praise for what they built]

The hackathon → accelerator → funding pipeline is real."`,
      notes: 'Find recent tweet from MCPay, Unruggable, TapeDrive, or Autonom team.',
      imageUrl: null,
    },
  ],
  7: [
    {
      id: 'day7-spotlight',
      title: 'Unruggable Hardware Wallet',
      type: 'Spotlight',
      bestTime: '3pm EST',
      content: `First Solana-only hardware wallet just shipped.

Unruggable won the Cypherpunk Hackathon with a bold thesis:

"Why does your hardware wallet need to support 47 chains you'll never use?"

Their approach:
→ Solana-native from silicon up
→ Optimized for SPL tokens + NFTs
→ Token Extensions support (confidential transfers!)
→ Open source firmware

Security through simplicity.`,
      notes: 'Tag founders. Get product image.',
      imageUrl: null,
    },
  ],
  8: [
    {
      id: 'day8-thread',
      title: 'Alpenglow: 150ms Finality',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Solana block finality is about to go from 12 seconds → 150 milliseconds.

Alpenglow is coming in early 2026. Here's why it matters:

1/ Current state: ~12 second finality

2/ Some apps NEED instant confirmation:
→ Point-of-sale payments
→ High-frequency trading
→ Gaming (real-time actions)
→ AI agent coordination

3/ How Alpenglow achieves 150ms

4/ Timeline: Mainnet early 2026

The UX gap with Web2 is closing fast.`,
      notes: 'Research Alpenglow technical details. Link to Solana docs.',
      imageUrl: null,
    },
  ],
  9: [
    {
      id: 'day9-engagement',
      title: 'Dev Support Day',
      type: 'Engagement',
      bestTime: 'All Day',
      content: `Search for and reply to developers asking Solana questions.

Search terms:
- "solana" + "how do I"
- "anchor" + "error"
- "@solana/web3.js" + "help"

Goal: 10+ helpful replies today.`,
      notes: 'Builds goodwill. Position @solana_devs as genuinely helpful.',
      imageUrl: null,
    },
    {
      id: 'day9-tip',
      title: 'Transaction Retry Logic',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `35-40% of Solana transactions fail on first attempt.

Don't panic. This is normal. Here's the fix...`,
      notes: 'From Helius H1 2025 report. High save rate potential.',
      imageUrl: null,
    },
  ],
  10: [
    {
      id: 'day10-spotlight',
      title: 'Solana Agent Kit v2.0',
      type: 'Spotlight',
      bestTime: '2pm EST',
      content: `The easiest way to build AI agents on Solana

Solana Agent Kit just hit v2.0:

→ Wallet management out of the box
→ Token swaps via Jupiter
→ NFT operations
→ DeFi integrations (lending, staking)
→ Compressed token support

Get started in 5 minutes.`,
      notes: 'Verify CLI command is correct. Ties to AI campaign.',
      imageUrl: null,
    },
  ],
  11: [
    {
      id: 'day11-meme',
      title: 'Stablecoin Growth',
      type: 'Meme',
      bestTime: '11am EST',
      content: `[Drake meme format]

Drake rejecting: "$16B stablecoins on Solana"
Drake approving: "PayPal processes more PYUSD on Solana than Ethereum"

194% YoY growth. PYUSD up 680%.

The payments rails are being rebuilt.`,
      notes: 'Use real data from Chainstack blog. Facts > snark.',
      imageUrl: null,
    },
  ],
  12: [
    {
      id: 'day12-thread',
      title: 'Token Extensions Guide',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Token Extensions are the most underrated Solana feature.

Here's what you can do that no other chain supports natively:

1/ Transfer Hooks - Run custom logic on every transfer
2/ Confidential Transfers - ZK-encrypted balances
3/ Transfer Fees - Built-in fee collection
4/ Permanent Delegate - Regulatory compliance
5/ Non-Transferable Tokens - Soulbound tokens, natively
6/ Interest-Bearing Tokens - Yield-bearing stablecoins`,
      notes: 'Evergreen educational content. High bookmark potential.',
      imageUrl: null,
    },
  ],
  13: [
    {
      id: 'day13-tip',
      title: 'Anchor vs Pinocchio',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `"Should I use Anchor or Pinocchio?"

Depends on what you're building.

Anchor: Great DX, more abstraction
Pinocchio: 50% smaller programs, steeper curve`,
      notes: 'Balanced take. Devs love framework debates.',
      imageUrl: null,
    },
    {
      id: 'day13-engagement',
      title: 'Show Your Build',
      type: 'Engagement',
      bestTime: '3pm EST',
      content: `Let's talk.

Drop what you're building on Solana in the replies.

We'll RT the most interesting ones and help where we can.

No project too small. Ship > Perfect.`,
      notes: 'Engage with EVERY reply for at least 2 hours.',
      imageUrl: null,
    },
  ],
  14: [
    {
      id: 'day14-spotlight',
      title: 'Weekly Builder Roundup',
      type: 'Spotlight',
      bestTime: '11am EST',
      content: `What Solana devs shipped this week

🏆 @[project1] launched [feature]
🛠️ @[project2] open-sourced [tool]
🚀 @[project3] hit [milestone]
🎯 @[project4] won [hackathon/grant]
📚 @[dev] published [tutorial/guide]

Missed someone? Drop them below`,
      notes: 'Curate throughout the week. DM projects before featuring.',
      imageUrl: null,
    },
  ],
  15: [
    {
      id: 'day15-thread',
      title: 'Actions & Blinks',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Solana Actions & Blinks are about to change how we interact with the internet.

Any URL can now be a transaction endpoint.

1/ The problem: Web3 UX is broken. Users leave your site → go to a wallet → sign → come back.

2/ The solution: Blinks embed transactions anywhere. Twitter, Discord, email.

3/ Real examples:
→ Tip creators directly in tweets
→ Mint NFTs from Discord
→ Subscribe to newsletters with SOL

The wallet-first era is ending. The action-first era is beginning.`,
      notes: 'Link to Dialect docs. High bookmark potential.',
      imageUrl: null,
    },
  ],
  16: [
    {
      id: 'day16-tip',
      title: 'Priority Fees',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `"My transaction keeps failing" — every Solana dev at some point.

Here's the fix most tutorials skip:

Priority fees. Not optional during high activity.`,
      notes: 'Link to Helius priority fee estimator.',
      imageUrl: null,
    },
    {
      id: 'day16-engagement',
      title: 'QT Ecosystem Win',
      type: 'Engagement',
      bestTime: '3pm EST',
      content: `[Quote tweet an ecosystem project announcement]

Add context: What makes this technically impressive?`,
      notes: 'Find announcement from Jupiter, Marinade, Jito, or similar.',
      imageUrl: null,
    },
  ],
  17: [
    {
      id: 'day17-spotlight',
      title: 'Pinocchio for Games',
      type: 'Spotlight',
      bestTime: '2pm EST',
      content: `30+ games on Solana use Pinocchio instead of Anchor.

Why? When every compute unit matters.

Pinocchio produces programs 50%+ smaller than Anchor equivalents.

Perfect for:
→ Gaming (frame-rate sensitive)
→ High-frequency trading
→ Compute-intensive DeFi

Most apps: Start with Anchor.
Performance-critical apps: Consider Pinocchio.`,
      notes: 'Balanced take - don\'t bash Anchor. Link to Pinocchio repo.',
      imageUrl: null,
    },
  ],
  18: [
    {
      id: 'day18-meme',
      title: 'NFT Minting Costs',
      type: 'Meme',
      bestTime: '4pm EST',
      content: `Cost to mint 10,000 NFTs:

Ethereum: $50,000+
Polygon: $500
Solana: $20
Solana (compressed): $0.50

The math isn't even close anymore.`,
      notes: 'Verify current numbers. Simple visual comparison.',
      imageUrl: null,
    },
    {
      id: 'day18-thread',
      title: 'ZK Compression Deep Dive',
      type: 'Thread',
      bestTime: '10am EST',
      content: `DRiP distributed 140M+ NFTs on Solana.

Without state compression, that would cost ~$4.2M in rent.
With compression: ~$50K.

Here's how ZK compression actually works:

1/ Traditional Solana: Every account = 0.00203 SOL rent

2/ Compressed accounts: Merkle tree stores hash, not full data. Cost drops 1000x+.

3/ Use cases unlocked:
→ Loyalty programs
→ Gaming inventories
→ Social graphs
→ IoT/DePIN`,
      notes: 'Real numbers from DRiP case study. Link to Light Protocol.',
      imageUrl: null,
    },
  ],
  19: [
    {
      id: 'day19-thread',
      title: 'AI Trading Volume',
      type: 'Thread',
      bestTime: '10am EST',
      content: `AI agents drove $8B+ in trading volume on Solana last month.

Not a typo. Eight billion dollars.

Here's what's happening:

1/ AI agents can hold Solana wallets. They can't open bank accounts.

2/ What they're doing:
→ Arbitrage across DEXs
→ Automated portfolio rebalancing
→ Social sentiment trading

3/ Why Solana:
→ 400ms blocks = real-time reactions
→ $0.00025 per tx = high-frequency viable
→ Composability = full DeFi stack access

The robots are already here.`,
      notes: 'Ties directly to Q3 AI campaign. Link to Agent Kit.',
      imageUrl: null,
    },
  ],
  20: [
    {
      id: 'day20-engagement',
      title: 'Pain Points Survey',
      type: 'Engagement',
      bestTime: '3pm EST',
      content: `What's the most frustrating part of building on Solana right now?

Drop your honest answer below. We're listening.

(And yes, we'll actually do something about it)`,
      notes: 'Respond to EVERY comment. Forward insights to DevRel team.',
      imageUrl: null,
    },
    {
      id: 'day20-tip',
      title: 'Lazy Initialization',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `Stop paying rent for accounts you don't need yet.

Lazy initialization pattern saves costs.`,
      notes: 'Show before/after cost comparison if possible.',
      imageUrl: null,
    },
  ],
  21: [
    {
      id: 'day21-spotlight',
      title: 'Weekly Builder Roundup',
      type: 'Spotlight',
      bestTime: '11am EST',
      content: `What Solana devs shipped this week

🏆 @[project1] launched [feature]
🛠️ @[project2] open-sourced [tool]
🚀 @[project3] hit [milestone]
🎯 @[project4] received [grant/funding]
📚 @[dev] published [tutorial]

Missed someone? Drop them below`,
      notes: 'Curate throughout the week. Recurring series builds habit.',
      imageUrl: null,
    },
  ],
  22: [
    {
      id: 'day22-thread',
      title: 'DePIN Opportunity',
      type: 'Thread',
      bestTime: '10am EST',
      content: `DePIN is quietly becoming Solana's killer use case.

Helium. Hivemapper. Render. The infrastructure is being rebuilt.`,
      notes: 'Strong narrative angle. Link to each project.',
      imageUrl: null,
    },
    {
      id: 'day22-tip',
      title: 'PDAs Explained',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `PDAs still confuse people. Here's the simplest explanation:

A PDA is an address that:
→ Has no private key (can't sign)
→ Is derived from seeds you choose
→ Is controlled by your program

Why this matters:
→ Deterministic: Same seeds = same address
→ Trustless escrow: Program controls funds
→ No key management: Users don't need new keypairs`,
      notes: 'Foundational concept. Clear analogy helps.',
      imageUrl: null,
    },
  ],
  23: [
    {
      id: 'day23-engagement',
      title: 'Celebrate Indie Devs',
      type: 'Engagement',
      bestTime: '4pm EST',
      content: `[Quote tweet a developer sharing their launch]

Celebrate with genuine technical appreciation.`,
      notes: 'Find indie devs, not just funded projects.',
      imageUrl: null,
    },
    {
      id: 'day23-spotlight',
      title: 'Helius DAS API',
      type: 'Spotlight',
      bestTime: '2pm EST',
      content: `Querying compressed NFTs used to be painful.

Helius DAS API makes it trivial.

One API call to get:
→ All NFTs in a wallet (regular + compressed)
→ Collection metadata
→ Ownership history
→ Asset proofs for transfers

Before DAS: Custom indexer, days of setup
With DAS: One API call, milliseconds`,
      notes: 'Practical tool spotlight. Tag Helius. Show real code.',
      imageUrl: null,
    },
  ],
  24: [
    {
      id: 'day24-thread',
      title: 'Solana Mobile Stack',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Mobile is crypto's biggest unsolved problem.

The Solana Mobile Stack (SMS) is the answer.

1/ Mobile Wallet Adapter: Deep linking to ANY Solana wallet

2/ Seed Vault: Secure key storage using phone's hardware security

3/ dApp Store: Permissionless app distribution

4/ What you can build:
→ Mobile games with real ownership
→ Tap-to-pay with Solana Pay
→ Social apps with wallet login

The Saga Chapter 2 sold 140K+ units.`,
      notes: 'Mobile is underexplored. Link to SMS docs.',
      imageUrl: null,
    },
  ],
  25: [
    {
      id: 'day25-meme',
      title: 'Narrative Timeline',
      type: 'Meme',
      bestTime: '4pm EST',
      content: `2022: "Solana is dead"
2023: "Solana can't scale"
2024: "Solana is centralized"
2025: "Solana is the most active chain by every metric"

The narrative always changes. The builders never stopped.`,
      notes: 'Focus on builder persistence. Celebrate the community.',
      imageUrl: null,
    },
    {
      id: 'day25-thread',
      title: 'Transfer Hooks Deep Dive',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Transfer Hooks are the most powerful Token Extension.

Run custom logic on EVERY transfer.

Use cases:
→ Royalty enforcement (can't bypass anymore)
→ KYC/AML compliance
→ Gaming (trigger effects on item trades)
→ Taxes (auto-deduct fees to treasury)
→ Vesting (release schedule enforcement)`,
      notes: 'Token Extensions content performs well. High bookmark potential.',
      imageUrl: null,
    },
  ],
  26: [
    {
      id: 'day26-tip',
      title: 'Account Lookup Tables',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `"Transaction too large" error?

Account Lookup Tables (ALTs) are your fix.

Problem: Solana transactions have a 1232-byte limit.
Solution: ALTs compress account references from 32 bytes → 1 byte.`,
      notes: 'Common pain point. Practical solution.',
      imageUrl: null,
    },
    {
      id: 'day26-spotlight',
      title: 'Jupiter DCA',
      type: 'Spotlight',
      bestTime: '2pm EST',
      content: `Jupiter's DCA is the best dollar-cost averaging in DeFi.

1/ The problem: Manual DCA requires setting alarms, executing transactions

2/ Jupiter's solution:
→ Set once, runs automatically
→ Sub-cent execution costs
→ Best prices via aggregation

For developers: Study how they designed keeper incentives.`,
      notes: 'Tag Jupiter. Emphasize the UX innovation.',
      imageUrl: null,
    },
  ],
  27: [
    {
      id: 'day27-engagement',
      title: 'Reply Day',
      type: 'Engagement',
      bestTime: 'All Day',
      content: `Dedicated reply day.

Search for:
→ Devs asking Solana questions
→ New project announcements
→ Migration considerations

Goal: 20+ helpful replies with real technical value.`,
      notes: 'Build reputation as genuinely helpful.',
      imageUrl: null,
    },
    {
      id: 'day27-thread',
      title: 'Security Footguns',
      type: 'Thread',
      bestTime: '10am EST',
      content: `Solana programs have unique security footguns.

Top 5 vulnerabilities and how to avoid them:

1/ Missing signer checks
2/ Owner validation
3/ Account confusion
4/ Integer overflow
5/ Re-initialization attacks

Security isn't optional. Get audited before mainnet.`,
      notes: 'High-value educational content. Reference Sec3 or OtterSec.',
      imageUrl: null,
    },
  ],
  28: [
    {
      id: 'day28-spotlight',
      title: 'Weekly Builder Roundup',
      type: 'Spotlight',
      bestTime: '11am EST',
      content: `What Solana devs shipped this week

🏆 @[project1] launched [feature]
🛠️ @[project2] hit [milestone]
🚀 @[project3] went live on mainnet
🎯 @[project4] announced [partnership]
📚 @[dev] dropped [content]

Missed someone? Drop them below`,
      notes: 'Third week of the recurring series. Community expects it now.',
      imageUrl: null,
    },
  ],
  29: [
    {
      id: 'day29-tip',
      title: 'Versioned Transactions',
      type: 'Quick Tip',
      bestTime: '12pm EST',
      content: `Still using legacy transactions? Time to upgrade.

Versioned Transactions unlock:
→ Address Lookup Tables
→ More accounts per tx
→ Future protocol features`,
      notes: 'Practical migration tip. Many codebases still use legacy.',
      imageUrl: null,
    },
    {
      id: 'day29-thread',
      title: 'Stablecoin Growth',
      type: 'Thread',
      bestTime: '10am EST',
      content: `$16B+ stablecoins live on Solana.
194% year-over-year growth.

The numbers:
→ USDC: $5.5B+
→ USDT: $2.3B+
→ PYUSD: 680% growth

PayPal processes more PYUSD on Solana than Ethereum.

That's not speculation. That's TradFi voting with their feet.`,
      notes: 'Data from DeFiLlama/Chainstack. PayPal angle is strong.',
      imageUrl: null,
    },
  ],
  30: [
    {
      id: 'day30-engagement',
      title: 'End of Month AMA',
      type: 'Engagement',
      bestTime: '3pm EST',
      content: `End of month AMA

Ask us anything about:
→ Building on Solana
→ Upcoming features
→ Developer resources
→ Career in web3

No question too basic. We're here to help.`,
      notes: 'High engagement potential. Requires 2+ hours of active responses.',
      imageUrl: null,
    },
    {
      id: 'day30-thread',
      title: 'Month Recap',
      type: 'Thread',
      bestTime: '10am EST',
      content: `30 days of @solana_devs content. Here's what we covered:

THREADS:
→ Firedancer deep dive
→ AI agents on Solana
→ Token Extensions
→ State compression economics
→ DePIN infrastructure
→ Mobile Stack
→ Security best practices

QUICK TIPS:
→ Retry logic
→ Priority fees
→ PDAs explained
→ Account Lookup Tables
→ Versioned transactions

SPOTLIGHTS:
→ Pinocchio, Helius, Jupiter
→ Hackathon winners
→ Weekly builder roundups

What topics do you want next month?`,
      notes: 'Meta-content performs well. Invites feedback for next month.',
      imageUrl: null,
    },
  ],
};

// Helper to get all events for a specific day
export function getEventsForDay(day: number): CalendarEvent[] {
  return calendarEvents[day] || [];
}

// Get all unique event types
export const eventTypes = ['Thread', 'Quick Tip', 'Meme', 'Spotlight', 'Engagement'] as const;

export default calendarEvents;
