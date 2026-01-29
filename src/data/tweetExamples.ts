import type { TweetExample } from '../types';

export const tweetExamples: TweetExample[] = [
  {
    id: 'tweet-1',
    category: 'Thread Hook',
    pillar: 'Technical Deep-Dives',
    content: `Firedancer launched Dec 2025 in hybrid mode.

Frankendancer now running on ~26% of validators.

Full client audits ongoing — testnet hitting 1M TPS.

→ Independent validator client = network resilience
→ No more single points of failure
→ Better reliability for devs in 2026

Here's what this means for you as a developer 🧵

(Stats: Solana Validator Call, Jan 22, 2026)`,
    rationale: "Accurate milestone framing without overhyping. We've been transparent post-launch to build trust (see Dec 2025 X thread). Clear value prop (\"what this means for YOU\"), thread format for depth. Target: Systems developers evaluating Solana's infrastructure maturity."
  },
  {
    id: 'tweet-2',
    category: 'Quick Tip',
    pillar: 'Developer Education',
    content: `Solana transactions can fail under network load.

That's not a bug — it's how optimistic execution works.

Here's the pattern that just works:

const sendWithRetry = async (tx, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try { return await connection.sendTransaction(tx); }
    catch { await sleep(500 * (i + 1)); }
  }
}

Your users don't see retries. They see fast confirmations.

Full guide → [docs link]`,
    rationale: "Addresses real developer pain point honestly. Code snippet for immediate value. Links to docs (journey stage: Evaluation → Trial). Target: Web devs hitting first errors."
  },
  {
    id: 'tweet-3',
    category: 'Spotlight',
    pillar: 'Ecosystem Spotlights',
    content: `Hive took home $60K at the Solana AI Hackathon (Dec 2024-Jan 2025).

400+ AI projects submitted. They won.

What impressed judges:
→ Novel AI agent coordination
→ Clean SDK integration
→ Production-ready in weeks, not months

Breakout (Jun 2025) had 10K participants + 1,412 submissions — winners like Unruggable.

The path from hackathon → funding is real.

Next up: solana.com/events`,
    rationale: "Social proof + aspirational story. Shows career path, not just tech. CTA to events page. Target: Students, career changers considering Solana."
  },
  {
    id: 'tweet-4',
    category: 'Engagement',
    pillar: 'Culture & Memes',
    content: `What's the hardest part of building on Solana right now?

Be honest. We're listening.

👇`,
    rationale: "Short, invites authentic feedback, shows humility. Creates content ideas for future posts. Respond to every reply with resources. Target: Active builders with pain points."
  },
  {
    id: 'tweet-5',
    category: 'Data Drop',
    pillar: 'Technical Deep-Dives',
    content: `Solana daily fees: $24.54M
Base daily fees: ~$2.1M
Arbitrum daily fees: ~$1.3M

30-day DEX volume:
Solana: $110.91B
Ethereum ecosystem: ~$152B

Solana isn't just fast and cheap.
It's generating real economic activity.

Different game.

(Data: DefiLlama, Jan 28, 2026)`,
    rationale: "Data speaks for itself. No trash talk, just facts. Fees are our monetization edge — outdated numbers undersell us. Source cited with hyperlinks. Competitive positioning without being defensive. Target: Developers evaluating chains. Note: Always verify exact figures from DefiLlama before posting — numbers change daily."
  },
  {
    id: 'tweet-6',
    category: 'Meme',
    pillar: 'Culture & Memes',
    content: `Ethereum: 12s finality
Solana: ~12.8s now (400ms slots)

*Alpenglow enters chat*

Solana 2026: 150ms 🔜

"I didn't hear no bell"

(Stats: Solana Validator Call, Jan 22, 2026)`,
    rationale: "Honest current state (~12.8s) + forward-looking (150ms with Alpenglow). Punches up (Ethereum, not smaller chains). Technically accurate humor. Target: Crypto Twitter audience for reach."
  },
  {
    id: 'tweet-7',
    category: 'Demo',
    pillar: 'AI x Solana',
    content: `Built an AI agent with a Solana wallet in 47 minutes.

[VIDEO: Screen recording showing the build]

It can:
→ Check balances
→ Execute swaps
→ Send payments
→ All autonomously

Code: [GitHub link]
Tutorial: [docs link]

The agent economy is here. What will you build?`,
    rationale: "Specific time creates curiosity. Video for engagement. Links to both code AND tutorial. Open-ended question. Target: AI developers exploring crypto. Distribution: Reply to @karpathy's AI threads for visibility. Cross-post to Solana Tech Discord (67K members) #ai-dev channel."
  },
  {
    id: 'tweet-8',
    category: 'Deep Dive',
    pillar: 'Technical Deep-Dives',
    content: `"Solana's account model is confusing"

It's actually simpler than EVM once it clicks.

Here's the mental model that took me from confused → productive:

Programs = stateless functions
Accounts = where data lives
PDAs = addresses your program controls

That's it. Everything else is details.

Thread with examples 🧵`,
    rationale: "Addresses common objection directly. Simplifies complex topic. \"Once it clicks\" validates the struggle. Target: EVM devs considering Solana."
  },
  {
    id: 'tweet-9',
    category: 'Quote Tweet',
    pillar: 'Ecosystem Spotlights',
    content: `[QT of ecosystem project launch]

This is what "build in public" looks like.

@builder went from hackathon project → mainnet in 8 weeks.

No VC. No team. Just shipped.

The tools exist. The documentation exists. The community helps.

What's stopping you?`,
    rationale: "Amplifies community while telling a story. Inspirational without being fake. Challenges readers to take action. Target: Devs on the fence about building."
  },
  {
    id: 'tweet-10',
    category: 'Announcement',
    pillar: 'AI x Solana',
    content: `Solana Agent Kit v2.0 is live.

What's new:
→ 60+ protocol integrations (up from 40)
→ Python SDK (finally)
→ Built-in retry logic
→ LangChain native support

For AI devs: this is the fastest path from idea → agent.

Docs: [link]
Examples: [GitHub]
Discord: [link to AI channel]

What are you building with it?`,
    rationale: "Announcement with CONTEXT (what's new, why it matters). Multiple CTAs for different journey stages. Question for engagement. Target: AI developers ready to try."
  },
  {
    id: 'tweet-11',
    category: 'Honest Thread',
    pillar: 'Developer Education',
    content: `Let's talk about the hard stuff.

Congestion?
→ Use priority fees + exponential backoff retries
→ Pattern: 500ms × (attempt + 1)

MEV?
→ Jito bundles help. Not perfect, but better.

Account model confusion?
→ Anchor abstracts 90% of it. Start there.

2026 roadmap fixes:
→ Alpenglow: 150ms finality
→ Firedancer: multi-client resilience
→ Better error messages (finally)

We read the feedback. We're shipping.

What's still painful? 👇`,
    rationale: "Authenticity builds trust. Our sentiment surveys show \"honesty\" boosts developer retention 20%. Addresses real complaints directly, provides solutions, shows roadmap progress. Invites continued dialogue. Target: Devs who've hit real friction."
  }
];
