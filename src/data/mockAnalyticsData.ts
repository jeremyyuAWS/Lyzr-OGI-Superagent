import { 
  Target, 
  FileSearch, 
  Mail, 
  ListTodo, 
  TrendingUp, 
  CheckCircle, 
  Link,
  BarChart3
} from 'lucide-react';

export const usageTrendsData = {
  '7d': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [420, 458, 520, 498, 610, 380, 402]
  },
  '30d': {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    values: [1850, 2150, 2450, 2300, 2750]
  },
  '90d': {
    labels: ['Mar', 'Apr', 'May'],
    values: [7200, 9450, 11850]
  }
};

export const roiData = [
  { label: 'Time Savings', value: 120450 },
  { label: 'Lead Quality', value: 80650 },
  { label: 'Response Rate', value: 42800 },
  { label: 'Meeting Conversion', value: 28400 },
  { label: 'Pipeline Generated', value: 14250 }
];

export const agentPerformanceData = [
  {
    id: '1',
    name: 'ICP Assistant',
    department: 'Strategy',
    usageCount: 1841,
    successRate: 96,
    avgResponseTime: 3.2,
    responseTrend: -0.8,
    roi: 42650,
    icon: Target
  },
  {
    id: '2',
    name: 'Lead Enrichment Agent',
    department: 'Data',
    usageCount: 3624,
    successRate: 92,
    avgResponseTime: 1.8,
    responseTrend: 1.2,
    roi: 96450,
    icon: FileSearch
  },
  {
    id: '3',
    name: 'Email Assistant',
    department: 'Outreach',
    usageCount: 2347,
    successRate: 94,
    avgResponseTime: 2.7,
    responseTrend: -2.1,
    roi: 35680,
    icon: Mail
  },
  {
    id: '4',
    name: 'Sequence Builder Agent',
    department: 'Outreach',
    usageCount: 1456,
    successRate: 89,
    avgResponseTime: 3.2,
    responseTrend: -0.5,
    roi: 45720,
    icon: ListTodo
  },
  {
    id: '5',
    name: 'SDR Performance Coach',
    department: 'Analytics',
    usageCount: 742,
    successRate: 97,
    avgResponseTime: 4.8,
    responseTrend: -0.6,
    roi: 24350,
    icon: TrendingUp
  },
  {
    id: '6',
    name: 'Meeting Qualifier Agent',
    department: 'Qualification',
    usageCount: 1247,
    successRate: 92,
    avgResponseTime: 5.6,
    responseTrend: -1.4,
    roi: 38750,
    icon: CheckCircle
  },
  {
    id: '7',
    name: 'Integration Agent',
    department: 'Technical',
    usageCount: 856,
    successRate: 94,
    avgResponseTime: 8.2,
    responseTrend: -3.1,
    roi: 32420,
    icon: Link
  },
  {
    id: '8',
    name: 'Analytics Agent',
    department: 'Analytics',
    usageCount: 1580,
    successRate: 93,
    avgResponseTime: 3.4,
    responseTrend: -1.2,
    roi: 48250,
    icon: BarChart3
  }
];