export interface CalendarEvent {
  title: string;
  type: string;
  time: string;
  content: string;
  notes: string;
  image: string | null;
}

export const calendarEvents: Record<string, CalendarEvent> = {
  // Viral Demos - High Bookmark Content (Based on Jan 2026 Report)
  demo1: {
    title: "AI Agent on Solana",
    type: "Viral Demo",
    time: "Best time: 10am EST",
    content: `Just built an AI trading agent on Solana in 15 minutes.

[Screen recording showing]
-> Reusing existing audited programs
-> No new security audits needed
-> Agent executing swaps autonomously

Solana's program model = safer, faster AI dev.

This is why 9-10 figure AI startups are choosing Solana in 2026.

Code walkthrough`,
    notes:
      "Demo the AI dev advantage from the report. Show program reuse without new audits. Tag AI-native projects building on Solana.",
    image: null,
  },
  demo2: {
    title: "Alpenglow: 150ms Finality",
    type: "Viral Demo",
    time: "Best time: 10am EST",
    content: `Sub-second finality is here.

[Video: tx confirmation timer showing <150ms]

Alpenglow upgrade brings:
-> 150ms finality (down from 400ms)
-> 80% reduced validator costs
-> Consumer hardware support

You can now run a validator at home.

The 1M TPS future is loading...`,
    notes:
      "Key upgrade from report. Emphasize the 80% cost reduction and home node support. This changes validator economics.",
    image: null,
  },
  demo3: {
    title: "Arcis: Encrypted Compute",
    type: "Viral Demo",
    time: "Best time: 10am EST",
    content: `Adding privacy to your Solana app just got stupid easy.

[Screen recording of Arcis compiler]

Arcium just launched Arcis:
-> Write normal Rust
-> Compile to encrypted compute
-> Privacy without complexity

Before: Months of ZK expertise
After: One compiler flag

Privacy-first apps are about to explode.`,
    notes:
      "Showcase Arcium's new Arcis compiler from the report. Coordinate with @Arcium for RT. High bookmark potential.",
    image: null,
  },
  demo4: {
    title: "Gasless Transactions with Kora",
    type: "Viral Demo",
    time: "Best time: 10am EST",
    content: `Your users don't need SOL anymore.

[Demo showing tx paid in USDC]

Kora enables fee payment in ANY token:
-> USDC for stablecoin apps
-> Your project token
-> Whatever makes sense

No more "bridge SOL first" friction.

The $1T stablecoin market just got easier to build for.`,
    notes:
      "Gasless feature from report. Perfect for stablecoin app devs. Show code example in thread.",
    image: null,
  },
  demo5: {
    title: "February Recap",
    type: "Viral Demo",
    time: "Best time: 10am EST",
    content: `What @solana_devs shipped in February:

[Animated infographic]
-> AI integration guides
-> Alpenglow deep dives
-> Privacy tool tutorials
-> RWA/DeFi spotlights

Most bookmarked: AI Agent Demo
Most replied: Memecoin RIP meme
Biggest collab: Arcium AMA

What do you want to see in March?`,
    notes:
      "Meta-content recap. Update with actual metrics. Drives engagement and feedback.",
    image: null,
  },

  // Collabs & Culture - Inside Jokes (Mert preserved!)
  collab1: {
    title: "Mert Photo",
    type: "Collab & Culture",
    time: "Best time: Morning",
    content: "[no caption - just image]",
    notes:
      "Coordinate with Mert for funny/embarassing photo. Post without context. IYKYK energy. Let the community do the talking.",
    image:
      "https://media.licdn.com/dms/image/v2/D5605AQFLXREI2mr6yw/videocover-low/videocover-low/0/1732873715277?e=2147483647&v=beta&t=ESTmf4qFHkK22HQ1DqGJ_DrOZtks_ghanYdqJF44pQw",
  },
  collab2: {
    title: "Pump Fund $3M Hackathon",
    type: "Collab & Culture",
    time: "Best time: Evening",
    content: `$3M in prizes. 72 hours to ship.

Pump Fund hackathon kicks off this weekend.

What we're watching for:
-> AI agent integrations
-> Prediction market tools
-> Privacy-first apps

Who's building? Drop your project below`,
    notes:
      "Pump Fund hackathon from report. Great engagement driver. Follow up with winner spotlights.",
    image: null,
  },
  collab3: {
    title: "Arcium Privacy AMA",
    type: "Collab & Culture",
    time: "Best time: 3pm EST",
    content: `Tomorrow at 3pm EST: AMA with @Arcium

They just launched Arcis - the Rust-to-encrypted-compute compiler.

Bring your questions about:
-> Adding privacy to existing apps
-> Encrypted AI inference
-> Compliant private transactions

Drop questions below`,
    notes:
      "Coordinate with Arcium team. Privacy tools are hot topic from report. Cross-pollinate audiences.",
    image: null,
  },
  collab4: {
    title: "Backpack MadLads Celebration",
    type: "Collab & Culture",
    time: "Best time: Morning",
    content: `MadLads holders waking up to that Backpack airdrop like:

[Celebration meme]

Congrats to the community. Now build something with it`,
    notes: "Backpack airdrop from report. Timely celebration post. Tag @backaborated.",
    image: null,
  },
  collab5: {
    title: "Parcl Real Estate Bets",
    type: "Collab & Culture",
    time: "Best time: Afternoon",
    content: `POV: You're betting on Miami real estate prices from your couch

[Quote tweet @Parcl]

Prediction markets + real estate = Parcl

Polymarket energy but for property. The future is weird and I'm here for it.`,
    notes:
      "Parcl/Polymarket integration from report. Fun angle on prediction markets expansion.",
    image: null,
  },
  collab6: {
    title: "SKR Token Launch",
    type: "Collab & Culture",
    time: "Best time: Evening",
    content: `SKR is live

Solana Mobile's token just launched.

To the builders who've been shipping mobile-first apps since day 1: this one's for you.

What are you building for the 1.4M Saga devices?`,
    notes:
      "SKR launch from report. Celebrate mobile ecosystem. Drives engagement from mobile devs.",
    image: null,
  },

  // Events
  accelerate: {
    title: "Solana Accelerate APAC @ Consensus HK",
    type: "Event",
    time: "Feb 11, 2026 - Hong Kong",
    content: `We're in Hong Kong.

Solana Accelerate APAC kicks off at Consensus today.

Focus: AI onboarding for the APAC market

What we're covering:
-> Agent Kit demos
-> AI Trading Competition preview
-> Meet the Solana ecosystem

Attending? Find us at the booth.

Not there? Follow along - threads incoming

Register: solana.com/events`,
    notes:
      "Accelerate APAC announced Jan 2026. APAC AI market is massive. Focus on AI onboarding. Link: lu.ma/sol-accelerate-hk",
    image: null,
  },

  // Threads (Based on Jan 2026 Report)
  thread1: {
    title: "Why Solana Wins for AI Development",
    type: "Thread (5-8 tweets)",
    time: "Best time: 10am EST",
    content: `AI developers are choosing Solana. Here's why:

1/ Program reuse without new audits
Solana's model lets AI agents use existing audited contracts. No security review for each integration.

2/ Speed matters for agents
AI needs real-time execution. 400ms beats 12 seconds every time.

3/ Cost enables experimentation
$0.00025/tx means your agent can iterate without burning cash.

4/ Native tooling emerging
AI-native SDKs for trading, payments, sports betting all shipping now.

The 9-10 figure AI startups of 2026 are building here.

What's your AI use case? Poll below`,
    notes:
      "Key insight from report on AI dev advantages. Include poll for engagement. Tag AI projects building on Solana.",
    image: null,
  },
  thread2: {
    title: "Firedancer: The Multi-Client Era",
    type: "Thread (8-10 tweets)",
    time: "Best time: 10am EST",
    content: `Solana's multi-client era is here.

Frankendancer (the Firedancer hybrid) now runs on ~26% of validators.

Full Firedancer in final security audits - public release mid-2026.

-> 1M TPS achieved in test environments
-> Independent validator client
-> No more single points of failure

What this means for developers:

1/ Network resilience
No single point of failure. Your app survives client bugs.

2/ Performance headroom
High-throughput apps have room to scale.

3/ Client diversity
Choose your validator stack.

The multi-client future is shipping.`,
    notes:
      "Firedancer/network upgrades. Frankendancer is live (~26% validators), full Firedancer in security audit for mid-2026 release. Tag @aeyakovenko.",
    image: null,
  },
  thread3: {
    title: "SEC Clarity: What Devs Need to Know",
    type: "Thread (5-7 tweets)",
    time: "Best time: 10am EST",
    content: `The Solana Policy Institute just dropped something important.

Post-Tornado Cash, they're pushing SEC for DeFi developer protections.

Key points:

1/ Writing code != money transmission
Developers shouldn't be liable for how others use open source.

2/ Clear safe harbors needed
We need bright-line rules, not regulation by enforcement.

3/ Innovation requires clarity
Uncertainty kills startups before they launch.

What this means for you:
-> Keep building
-> Stay informed
-> Engage with policy

Full breakdown in thread`,
    notes:
      "Regulatory advocacy from report. Important for dev awareness. Link to Solana Policy Institute.",
    image: null,
  },
  thread4: {
    title: "Gasless Transactions: The Complete Guide",
    type: "Thread (6-8 tweets)",
    time: "Best time: 10am EST",
    content: `Your users don't need SOL to use your app anymore.

Gasless transactions are here. Here's how to implement:

1/ What changed
Fees can now be paid in any token - USDC, your project token, whatever.

2/ Why it matters
No more "bridge SOL first" friction. Stablecoin apps just got way easier.

3/ How to implement
[Code snippet using Kora]

4/ Use cases
-> Stablecoin payments
-> Gaming (fees in game token)
-> Enterprise (USDC only)

The $1T stablecoin prediction starts here.`,
    notes:
      "Gasless feature from report. Include working code example. High bookmark potential.",
    image: null,
  },
  thread5: {
    title: "RWA on Solana: The Full Stack",
    type: "Thread (6-8 tweets)",
    time: "Best time: 10am EST",
    content: `Tokenized assets just hit different on Solana.

Ondo Finance launched 200+ U.S. stocks and ETFs this month.

Here's the full RWA stack:

1/ Ondo Finance
200+ tokenized securities. Traditional finance on-chain.

2/ Fireblocks Partnership
Institutional treasury management. Enterprise-grade custody.

3/ USDT Liquidity
Unified across the ecosystem. Deep stablecoin rails.

4/ PropAMMs
Automated market making for real estate. Solving the liquidity problem.

RWA yields are hitting new highs.

What are you building in this space?`,
    notes:
      "RWA/DeFi growth from report. Tag @OndoFinance, @Fireblocks. Institutional angle.",
    image: null,
  },

  // Spotlights (spotlight1-8 used by calendar)
  spotlight1: {
    title: "Spotlight: Ondo Finance RWA",
    type: "Ecosystem Highlight",
    time: "Best time: 2pm EST",
    content: `200+ U.S. stocks and ETFs just landed on Solana.

Ondo Finance is bringing traditional finance on-chain:

-> Tokenized treasuries
-> Blue chip stocks
-> Major ETFs

Why Solana?
- Sub-second settlement
- Pennies per transaction
- Token Extensions for compliance

RWA yields are hitting new highs.

The institutional wave is here.`,
    notes:
      "Tag @OndoFinance. This is the RWA narrative from the report. Institutional legitimacy angle.",
    image: null,
  },
  spotlight2: {
    title: "Spotlight: Arcium Privacy",
    type: "Privacy Tools",
    time: "Best time: 3pm EST",
    content: `Arcium just made privacy accessible to every Solana dev.

Their new Arcis compiler:
-> Write normal Rust
-> Compile to encrypted compute
-> No ZK expertise required

Use cases now possible:
- Private AI inference
- Encrypted payroll
- Confidential trading
- Compliant DeFi

Privacy + compliance. Finally solving both.`,
    notes:
      "Tag @Arcium. From the report - privacy tools section. Coordinate for RT.",
    image: null,
  },
  spotlight3: {
    title: "Spotlight: DFlow Prediction Markets",
    type: "Tool Highlight",
    time: "Best time: 2pm EST",
    content: `DFlow just dropped a composable prediction markets API.

What you can build:
-> Custom market interfaces
-> Real estate bets (Parcl integration)
-> Sports prediction apps
-> Event-driven DeFi

Phantom is already using it (powered by Kalshi).

Prediction markets are booming. The infrastructure is finally here.`,
    notes:
      "DFlow API from report. Tag @daborated. Prediction markets expansion angle.",
    image: null,
  },
  spotlight4: {
    title: "Spotlight: Phantom + Kalshi",
    type: "Partnership Highlight",
    time: "Best time: 2pm EST",
    content: `Prediction markets just went mainstream.

Phantom now has native prediction markets, powered by Kalshi.

Bet on:
-> Elections
-> Sports
-> Economic events
-> Pop culture

All from your wallet. No new app needed.

The Polymarket energy hits different when it's in your daily driver.`,
    notes:
      "Phantom/Kalshi from report. Tag @phantom. Prediction markets expansion.",
    image: null,
  },
  spotlight5: {
    title: "Spotlight: FairScale Reputation",
    type: "Tool Spotlight",
    time: "Best time: 2pm EST",
    content: `Airdrops keep getting farmed. FairScale is the fix.

Their new reputation infrastructure:
-> FairScore API for wallet scoring
-> Sybil detection built-in
-> Whitelist generation

Use cases:
- Fairer airdrops
- Bot-resistant launches
- Community validation

Join their FAIRathon for prizes.

Reputation > randomness.`,
    notes:
      "FairScale from report. Tag @fairscalexyz. Promote FAIRathon engagement.",
    image: null,
  },
  spotlight6: {
    title: "Spotlight: Helius Token History API",
    type: "Tool Spotlight",
    time: "Best time: 2pm EST",
    content: `Helius just dropped unified token account histories.

One API call to get:
-> All token transfers for any wallet
-> Regular + compressed assets
-> Full transaction context

Before: Custom indexers, multiple calls
After: Single endpoint, milliseconds

Dev workflows just got way simpler.

RPC improvements that actually matter.`,
    notes:
      "New Helius API from report. Tag @heaboratedlabs. Practical dev tool.",
    image: null,
  },
  spotlight7: {
    title: "Spotlight: Intodot Leveraged Markets",
    type: "Platform Spotlight",
    time: "Best time: 2pm EST",
    content: `Intodot just raised $20M for leveraged prediction markets.

What they're building:
-> Leveraged positions on events
-> Composable with DeFi
-> On-chain settlement

Prediction markets + leverage = spicy.

The prediction markets expansion continues.

Degen responsibly.`,
    notes:
      "Intodot $20M raise from report. Tag @intodot. Prediction markets angle.",
    image: null,
  },
  spotlight8: {
    title: "Spotlight: Fireblocks Treasury",
    type: "Partnership Spotlight",
    time: "Best time: 2pm EST",
    content: `Institutional treasury management just landed on Solana.

Fireblocks partnership enables:
-> Enterprise-grade custody
-> Treasury diversification on-chain
-> Compliance-first infrastructure

This is what "institutional adoption" actually looks like:
- Not just holding SOL
- Actually using the chain
- Building treasury operations on it

The grown-ups are here. Build accordingly.`,
    notes:
      "Fireblocks partnership from report. Institutional angle. Tag @fireblocks.",
    image: null,
  },

  // Memes (meme1-5 used by calendar)
  meme1: {
    title: "1M TPS Loading...",
    type: "Data Meme",
    time: "Best time: 11am EST",
    content: `Network upgrade timeline:

2024: 400ms finality
2025: Firedancer live
2026: Alpenglow (150ms)
2027: 1M TPS predicted

Meanwhile Ethereum:
"We'll scale... eventually... maybe... layer 2s?"

[Progress bar meme at 65%]

The roadmap is shipping.`,
    notes:
      "Reference network upgrades from report. Clean timeline graphic. Not too aggressive.",
    image: null,
  },
  meme2: {
    title: "Home Node Energy",
    type: "Fun Content",
    time: "Best time: 11am EST",
    content: `Alpenglow brings 80% reduced validator costs.

You can now run a Solana validator on consumer hardware.

[Image: Gaming PC with validator dashboard]

"It's not much but it's honest work" energy.

Ready to run a home node?`,
    notes:
      "Consumer hardware support from report. Relatable meme format. Include poll.",
    image: null,
  },
  meme3: {
    title: "$1 Trillion Stablecoin Loading",
    type: "Data Meme",
    time: "Best time: 4pm EST",
    content: `Stablecoin market predictions:

2024: $200B
2025: $400B
2026: $700B predicted
2027: $1T+

Solana's positioning:
- Gasless tx (pay in USDC)
- Sub-second finality
- PYUSD > on Solana than ETH

[Growth chart meme]

The rails are ready. The money is coming.`,
    notes: "$1T stablecoin prediction from report. Clean visual. Optimistic tone.",
    image: null,
  },
  meme4: {
    title: "Memecoin Era RIP",
    type: "Data Meme",
    time: "Best time: 4pm EST",
    content: `2024: "Solana is just memecoins"
2025: Firedancer live, Alpenglow shipping
2026: 200+ RWAs, AI agents, prediction markets

[Meme: Goodbye friend template]

The memecoin narrative was fun.
The infrastructure narrative is permanent.

Builders stayed. The narrative caught up.`,
    notes:
      "Report mentions shift beyond memecoin hype. Celebrate maturity. Not dismissive.",
    image: null,
  },
  meme5: {
    title: "Finality Speed Check",
    type: "Data Meme",
    time: "Best time: 4pm EST",
    content: `Transaction finality speed:

Bitcoin: 60 minutes
Ethereum: 12 minutes
Solana (current): 12 seconds
Solana (Alpenglow): 150ms

[Meme: "I am speed" with Alpenglow logo]

When your tx confirms before your finger leaves the screen.

The UX gap is closing.`,
    notes: "Alpenglow finality improvement. Clean comparison. Forward-looking.",
    image: null,
  },
};

export default calendarEvents;
