/**
 * Solana Developer Marketing - TypeScript Type Definitions
 *
 * This file contains all interfaces and types used throughout the application,
 * derived from the data structures in the original HTML implementation.
 */

import React from 'react';

// ============================================
// Tab Types
// ============================================

/** Valid tab identifiers for the main navigation */
export type TabId = 'q1' | 'q3';

// ============================================
// Calendar Types
// ============================================

/** Event type categories for calendar events */
export type EventType =
  | 'thread'
  | 'tip'
  | 'meme'
  | 'spotlight'
  | 'engagement'
  | 'demo'
  | 'collab'
  | 'ai';

/** Full calendar event data stored in the event database */
export interface CalendarEvent {
  id: string;
  title: string;
  type: 'Thread' | 'Quick Tip' | 'Meme' | 'Spotlight' | 'Engagement';
  bestTime: string;
  content: string;
  notes: string;
  imageUrl: string | null;
}

/** Event reference displayed within a calendar day cell */
export interface CalendarDayEvent {
  eventType: EventType;
  eventId: string;
  label: string;
}

/** Represents a single day in the calendar grid */
export interface CalendarDay {
  date: number;
  events: CalendarDayEvent[];
  isEmpty?: boolean;
  isFaded?: boolean;
}

/** Calendar event data record (maps event ID to event details) */
export type CalendarEventData = Record<string, CalendarEvent>;

// ============================================
// Twitter Audit Types
// ============================================

/** Twitter account analysis data */
export interface TwitterAccount {
  account: string;
  handle: string;
  followers: string;
  engagementRate: string;
  topFormat: string;
  postCadence: string;
  stealThis: string;
  isBaseline?: boolean;
}

/** Engagement pattern that works for content strategy */
export interface Pattern {
  icon: string;
  title: string;
  description: string;
  indicator: string;
  indicatorType: 'bookmarks' | 'replies' | 'viral' | 'retweets';
}

// ============================================
// Tweet Types
// ============================================

/** Example tweet for the content library */
export interface TweetExample {
  id: string;
  category: string;
  pillar?: string;
  content: string;
  rationale: string;
}

// ============================================
// Metrics Types
// ============================================

/** Success metric with baselines and targets */
export interface SuccessMetric {
  metric: string;
  currentBaseline: string;
  thirtyDayTarget: string;
  ninetyDayTarget?: string;
  howToTrack: string;
}

/** Engagement tactic with priority level */
export interface EngagementTactic {
  tactic: string;
  description: string;
  frequency?: string;
  priority: 'high' | 'medium' | 'low';
}

// ============================================
// Collaboration Types
// ============================================

/** Collaboration target for partnerships */
export interface CollaborationTarget {
  name: string;
  handle: string;
  followers: string;
  whyTheyMatter: string;
  collaborationIdea: string;
}

/** Collaboration type categories */
export type CollaborationType = 'enterprise' | 'event' | 'influencer';

/** High-risk/high-reward collaboration idea */
export interface BonusCollaborationIdea {
  target: string;
  idea: string;
  type: CollaborationType;
}

// ============================================
// AI Campaign Types
// ============================================

/** Technical specification comparison across chains */
export interface TechnicalSpec {
  feature: string;
  solana: string;
  ethereumL2s: string;
  otherL1s: string;
}

/** Competition week structure */
export interface CompetitionWeek {
  week: string;
  theme: string;
  prize: string;
  contentFocus: string;
}

/** Competition sponsor information */
export interface Sponsor {
  name: string;
  whyTheyCare: string;
  askAmount: string;
}

/** Distribution channel for campaigns */
export interface Channel {
  name: string;
  type: string;
  audience: string;
  priority: 'high' | 'medium' | 'low';
  activationStrategy: string;
}

/** Strategic partner for AI campaign */
export interface StrategicPartner {
  partner: string;
  whyItMatters: string;
  thePlay: string;
}

/** AI project in the Solana ecosystem */
export interface AIProject {
  name: string;
  category: string;
  keyStats: string;
  showcaseAngle: string;
}

/** AI technical positioning spec */
export interface AITechnicalSpec {
  metric: string;
  solanaSpecs: string;
  whyItMatters: string;
}

/** Competition category */
export interface CompetitionCategory {
  icon: string;
  title: string;
  description: string;
}

// ============================================
// Content Pillar Types
// ============================================

/** Content pillar for strategic messaging */
export interface ContentPillar {
  icon: string;
  name: string;
  description: string;
  frequency?: string;
}

// ============================================
// Calendar Legend Types
// ============================================

/** Legend item for calendar event types */
export interface LegendItem {
  type: EventType;
  label: string;
  color: string;
}

// ============================================
// Section Types
// ============================================

/** Section icon variant for styling */
export type SectionIconVariant =
  | 'default'
  | 'calendar'
  | 'metrics'
  | 'bonus'
  | 'content'
  | 'ai'
  | 'channels'
  | 'events';

/** Collapsible section state */
export interface CollapsibleSectionState {
  id: string;
  isCollapsed: boolean;
}

// ============================================
// Component Props Types
// ============================================

/** Props for collapsible section component */
export interface CollapsibleSectionProps {
  id: string;
  icon: string;
  iconVariant?: SectionIconVariant;
  title: string;
  subtitle?: string;
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

/** Props for modal component */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: CalendarEvent | null;
}

/** Props for calendar component */
export interface CalendarProps {
  month: string;
  year: number;
  days: CalendarDay[];
  events: CalendarEventData;
  onEventClick: (eventId: string) => void;
}

/** Props for tab navigation */
export interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

/** Props for metrics table */
export interface MetricsTableProps {
  metrics: SuccessMetric[];
  caption?: string;
}

/** Props for tweet box */
export interface TweetBoxProps {
  handle: string;
  category: string;
  content: string;
  rationale?: string;
}

/** Props for pillar card */
export interface PillarCardProps {
  icon: string;
  title: string;
  description: string;
  indicator?: string;
  indicatorType?: Pattern['indicatorType'];
}

/** Props for pattern grid */
export interface PatternGridProps {
  patterns: Pattern[];
}

/** Props for positioning box */
export interface PositioningBoxProps {
  title: string;
  children: React.ReactNode;
}

/** Props for channel card */
export interface ChannelCardProps {
  name: string;
  icon?: string;
  description: string;
}

// ============================================
// Table Types
// ============================================

/** Generic table column definition */
export interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

/** Table props with generic row type */
export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  ariaLabel: string;
  highlightCondition?: (row: T) => boolean;
}

// ============================================
// Header Types
// ============================================

/** Header metadata badge */
export interface HeaderMetaBadge {
  icon: string;
  text: string;
}

/** Header component props */
export interface HeaderProps {
  title: string;
  subtitle: string;
  metaBadges: HeaderMetaBadge[];
}

// ============================================
// Footer Types
// ============================================

/** Footer section with links */
export interface FooterSection {
  title: string;
  links?: { text: string; href: string }[];
  content?: string;
}

/** Footer component props */
export interface FooterProps {
  sections: FooterSection[];
  meta: string;
  brandName: string;
}

// ============================================
// Utility Types
// ============================================

/** Priority level for various items */
export type Priority = 'high' | 'medium' | 'low';

/** CSS color variables from the design system */
export interface ThemeColors {
  solanaPurple: string;
  solanaGreen: string;
  solanaBlue: string;
  darkBg: string;
  cardBg: string;
  cardBgHover: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  borderColor: string;
}

/** Animation timing from the design system */
export interface AnimationTiming {
  instant: string;
  fast: string;
  normal: string;
  slow: string;
  dramatic: string;
}

/** Spacing scale from the design system */
export interface SpacingScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}
