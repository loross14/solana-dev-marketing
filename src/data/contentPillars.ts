export interface ContentPillar {
  name: string;
  icon: string;
  description: string;
  examples: string;
  frequency: string;
  priority: 'High' | 'Medium' | 'Low';
}

export const contentPillars: ContentPillar[] = [
  {
    name: 'Building in Public',
    icon: '🔧',
    description: 'Showcase what developers are shipping on Solana. Highlight real projects, real code, real progress.',
    examples: 'Project launches, hackathon winners, migration stories, open source contributions, dev journey threads',
    frequency: 'culture',
    priority: 'Medium',
  },
  {
    name: 'Accessible Education',
    icon: '🧠',
    description: 'Educational threads explaining Solana concepts, architecture, and best practices. High bookmark potential.',
    examples: 'Firedancer explained, Token Extensions guide, PDA deep dive, security best practices, performance optimization',
    frequency: 'education',
    priority: 'Medium',
  },
  {
    name: 'Builder Spotlights',
    icon: '🌟',
    description: 'Highlight projects, tools, and developers in the ecosystem. Build community relationships.',
    examples: 'Tool spotlights (Helius, Anchor), project features, developer interviews, weekly wins roundups',
    frequency: 'ecosystem',
    priority: 'Medium',
  },
  {
    name: 'Quick Tips',
    icon: '⚡',
    description: 'Bite-sized, actionable developer tips and tricks. High engagement, easy to consume.',
    examples: 'Code snippets, error fixes, optimization tricks, tooling tips, SDK features most devs don\'t know',
    frequency: 'education',
    priority: 'Medium',
  },
  {
    name: 'Viral Trends',
    icon: '🚀',
    description: 'Data-driven humor and relatable developer content. Humanizes the account, drives engagement.',
    examples: 'Chain comparison memes, dev life humor, FUD rebuttals with data, celebration posts',
    frequency: 'community',
    priority: 'Medium',
  },
  {
    name: 'A Part of the Convo',
    icon: '💬',
    description: 'Direct interaction with the community. AMAs, polls, reply threads, and feedback gathering.',
    examples: 'What are you building threads, pain point polls, AMA sessions, reply marathons',
    frequency: 'culture',
    priority: 'Medium',
  },
];
