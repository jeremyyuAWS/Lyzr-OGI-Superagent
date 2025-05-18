import { ReactNode } from 'react';

export interface Agent {
  id: string;
  name: string;
  description: string;
  department: string;
  status: 'healthy' | 'degraded';
  usageCount: number;
  roi: number;
  icon: ReactNode;
  // Additional metrics
  timeSaved?: number; // Hours saved
  successRate?: number; // Percentage of successful task completions
  confidenceScore?: number; // Confidence in responses (for LLMs)
  lastUsed?: string; // Last used timestamp
  uniqueUsers?: number; // Number of unique users
  tasksCompleted?: number; // Total tasks completed
  automationRatio?: number; // Percentage automated vs. manual
  costSavings?: number; // Dollar value saved
}

export interface ReportOptions {
  name: string;
  sections: string[];
  dateRange: string;
  format: 'pdf' | 'csv' | 'xlsx';
}

export interface DemoConversation {
  isOpen: boolean;
  agentId: string | null;
}