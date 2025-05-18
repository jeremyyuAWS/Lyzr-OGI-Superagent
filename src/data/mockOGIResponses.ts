// This file contains enhanced responses for the OGI Assistant with synthesized information 
// and attribution tags for contributing agents

interface EnhancedResponse {
  text: string;
  contributingAgents: string[];
}

export const enhancedOGIResponses: Record<string, EnhancedResponse> = {
  'core sales functions': {
    text: "Based on my analysis of our sales development network, the most utilized sales functions across our AI agents are: 1) Prospect Profile Access (used by 78% of agents), 2) Engagement Tracking (65%), 3) Email Composition (54%), 4) Lead Scoring (48%), and 5) Authentication & Authorization (100%). The Email Assistant and Lead Enrichment Agent are the highest consumers of these APIs, with over 3,000 calls per hour during peak times. The ICP Assistant and Sequence Builder agents leverage the CRM system for targeting functions, while the Analytics agents primarily access historical engagement data for pattern recognition.",
    contributingAgents: ['Email Assistant', 'Lead Enrichment Agent', 'ICP Assistant', 'Analytics Agent', 'CRM System']
  },
  
  'email optimization': {
    text: "Our email optimization framework operates through continuous monitoring of engagement metrics using multiple agent integrations. The Email Assistant acts as the central coordinator, analyzing data from the Engagement Database (averaging 14,500 emails/day) and cross-referencing with A/B test results. This agent has improved reply rates by 34% in the last quarter by coordinating with the Timing Optimization Agent to incorporate behavioral patterns and with the Analytics Agent for real-time performance scoring. When successful patterns are identified, they're incorporated into the Templates Database and shared with the SDR Team. This multi-agent approach has generated approximately 467 additional meetings this quarter.",
    contributingAgents: ['Email Assistant', 'A/B Testing Agent', 'Timing Optimization Agent', 'Analytics Agent']
  },
  
  'outreach compliance': {
    text: "Our sales outreach compliance framework is maintained through coordinated agent activities. The Responsible AI Agent continuously monitors over 87 regional privacy regulations and automatically assesses impact across our systems. This information is synthesized with data from the CRM System and distributed to relevant agents including Email Assistant, LinkedIn Outreach Agent, and Sequence Builder. The Data Cleansing Agent handles consent documentation, while the Sales Management Team receives daily compliance reports. This integrated approach has reduced compliance-related issues by 56% and improved prospect experience scores from 78% to 94% over the past quarter.",
    contributingAgents: ['Responsible AI Agent', 'Email Assistant', 'LinkedIn Outreach Agent', 'Data Cleansing Agent', 'CRM System']
  },
  
  'data flow': {
    text: "Information flows through our sales network via a secure, permission-based architecture centered around the Organization General Intelligence. Prospect data originates primarily from the Lead Database and is accessed by 17 different agents with appropriate access levels. The highest data consumers are the Lead Enrichment Agent (3,624 requests/hour) and Email Assistant (2,347 requests/hour). Engagement data is processed through a pipeline starting at various sales tools, flowing through the Engagement Database, and being analyzed by multiple agents including Analytics, SDR Performance Coach, and A/B Testing agents. All data access is logged, encrypted in transit and at rest, and subject to daily audit reviews. Lead scoring information is distributed from the ICP Assistant to other targeting-focused systems with near-real-time synchronization.",
    contributingAgents: ['Data Cleansing Agent', 'Lead Enrichment Agent', 'Analytics Agent', 'Lead Database', 'Engagement Database']
  },
  
  'sequence design': {
    text: "Our outreach sequence design integrates multiple specialized agents working together through the OGI. The process begins with the ICP Assistant which defines target personas, followed by the Sequence Builder Agent which creates a multi-channel approach. The Email Assistant crafts personalized messages while the LinkedIn Outreach Agent handles social touches. The Content Recommendations Agent suggests relevant assets to share at each stage. The Timing Optimization Agent determines the optimal schedule for maximum engagement. Performance is analyzed by the Analytics Agent to continuously refine the approach. This integrated workflow has improved reply rates from 12% to 28.4% while reducing sequence creation time by 82%.",
    contributingAgents: ['Sequence Builder Agent', 'Email Assistant', 'LinkedIn Outreach Agent', 'Content Recommendations Agent', 'Timing Optimization Agent']
  },
  
  'lead qualification': {
    text: "Lead qualification is handled through an orchestrated agent workflow that begins with the Lead Enrichment Agent as the data gatherer. New leads are scored by the ICP Assistant, which evaluates fit against target criteria. The Meeting Qualifier Agent applies both explicit rules and behavioral signals to determine readiness for sales conversations. The Call Prep Agent assembles relevant information for the SDR, while the Objection Handler Agent prepares anticipated responses to common concerns. This integrated approach has increased meeting-to-opportunity conversion from 22% to 38.5%, with a 96.7% accuracy in predicting which leads will convert to meetings.",
    contributingAgents: ['Lead Enrichment Agent', 'ICP Assistant', 'Meeting Qualifier Agent', 'Call Prep Agent', 'Objection Handler Agent']
  },
  
  'security measures': {
    text: "Our AI network is protected through multiple integrated security layers. All agent interactions are encrypted using enterprise-grade TLS 1.3 with forward secrecy, and access is controlled through a robust IAM framework with granular permissions. The Responsible AI Agent monitors for compliance with privacy regulations including GDPR, CCPA, and CASL, ensuring proper consent management. Sensitive prospect data is tokenized in the Lead Database before being processed by agents, with full audit logging of all access events. Regular security assessments include daily automated scans and quarterly penetration tests. This approach has maintained a 99.97% security compliance rating for the past 18 months.",
    contributingAgents: ['Responsible AI Agent', 'Admin/Config Agent', 'CRM System', 'Integration Agent', 'Data Cleansing Agent']
  },
  
  'agent connections': {
    text: "Our sales development agent network comprises 32 specialized agents connected through 74 primary integration points. The most central nodes are the Lead Database (connected to 17 agents), CRM System (connected to 14 agents), and Engagement Database (connected to 11 agents). The Email Assistant acts as a major processing hub with 8 direct connections to other systems. Agent clusters form around key functions: strategy (ICP Assistant, Lead Enrichment, Persona Generator), outreach (Email Assistant, Sequence Builder, LinkedIn Outreach), and analytics (Performance Analytics, A/B Testing, SDR Coach). Data flows most intensively between the Engagement Database and the Analytics Agent (5,280 requests/min during peak hours) and between the Lead Database and Lead Enrichment Agent (3,240 requests/hour).",
    contributingAgents: ['Analytics Agent', 'Lead Database', 'CRM System', 'Email Assistant', 'Lead Enrichment Agent', 'Integration Agent']
  },
  
  'adoption trends': {
    text: "Agent adoption has increased 72% over the past six months, with the strongest growth in the SDR and AE teams. The SDR Team shows the highest per-user engagement metrics at 34.7 interactions per day per team member. Our newest agents - Pipeline Forecast Agent and Content Recommendations Agent - have shown the fastest adoption curves, reaching target utilization within 4 weeks versus the previous average of 9 weeks. The Email Assistant remains our most heavily utilized agent with 7,850 interactions daily, followed by Lead Enrichment Agent (9,850) and Meeting Scheduler Agent (4,732). Agent interaction quality metrics show consistent improvement, with issue escalation rates dropping from 24% to 9.3% since implementation of the Organization General Intelligence framework.",
    contributingAgents: ['Analytics Agent', 'Email Assistant', 'Meeting Scheduler Agent', 'Lead Enrichment Agent', 'SDR Team']
  },
  
  'roi metrics': {
    text: "Our sales development agents have generated a combined ROI of $283,450 over the past quarter. The Lead Enrichment Agent leads with $156,450 in value through improved targeting efficiency, followed by the Email Assistant at $92,300 through higher response rates and meeting conversions. The Pipeline Forecast Agent has delivered the highest ROI percentage at 842% despite lower absolute dollar value ($93,400). The time-saving benefits are most significant for the Lead Enrichment Agent (2,463 hours saved quarterly) and Email Assistant (1,963 hours). These efficiency gains have allowed reallocation of approximately 14.2 FTEs to higher-value activities. Our comprehensive ROI analysis shows continued improvement in agent effectiveness, with quarter-over-quarter ROI increases averaging 16% across all agent types.",
    contributingAgents: ['Lead Enrichment Agent', 'Email Assistant', 'Pipeline Forecast Agent', 'Analytics Agent']
  },
  
  'agent performance': {
    text: "Analyzing overall agent performance reveals significant variance across agent types. The A/B Testing Agent leads in accuracy at 97% while the LinkedIn Outreach Agent is underperforming at 85% due to recent API integration challenges. The fastest response times come from the Lead Enrichment Agent (1.8s) while the Integration Agent has the longest but most complex processing requirements (8.2s average). Usage leadership belongs to the Lead Enrichment Agent with 9,850 runs, followed by Email Assistant at 7,850. The most improved agent is the ICP Assistant, which has increased accuracy by 7.2 percentage points while reducing processing time by 42% through enhanced data integration. Our OGI analysis indicates opportunities for cross-agent knowledge sharing that could improve overall system performance by an estimated 12-15%.",
    contributingAgents: ['Lead Enrichment Agent', 'ICP Assistant', 'Email Assistant', 'LinkedIn Outreach Agent', 'A/B Testing Agent', 'Integration Agent']
  },
  
  'coordination workflows': {
    text: "Sales development agents coordinate decisions through structured workflows based on agent specialization. For new prospect engagement, a sequence of 8 agents work together: ICP Assistant → Lead Enrichment Agent → Sequence Builder → Email Assistant → LinkedIn Outreach Agent → Meeting Qualifier Agent → Scheduler Agent → Call Prep Agent. Response handling leverages real-time coordination between Engagement Database → Analytics Agent → SDR Coach → Email Assistant. These workflows are orchestrated through the OGI with explicit handoff protocols. Our agents use a shared knowledge graph for context, allowing the Responsible AI Agent to flag compliance requirements that influence decisions made by the Email Assistant and Sequence Builder Agent. This orchestration has improved cross-functional consistency by 32% and reduced process breaks by 78% compared to siloed operations.",
    contributingAgents: ['Sequence Builder Agent', 'Email Assistant', 'Lead Enrichment Agent', 'ICP Assistant', 'Meeting Scheduler Agent', 'Analytics Agent']
  },
  
  'real-time monitoring': {
    text: "Real-time monitoring in our sales development network operates through a multi-agent supervisory framework. Engagement anomalies are detected within 1.2 seconds by the Analytics Agent, which processes 420TB of data daily. System health is monitored with 99.996% uptime over the past quarter. Prospect interactions are analyzed by the Performance Analytics Agent, which flags concerning patterns with 93.7% accuracy. Our OGI network visualization provides real-time status of all 32 agents, showing current load, response times, and connection status. When performance degradation is detected, the system automatically redistributes workloads across redundant agent instances, maintaining SLA compliance. Over the past month, this system has automatically mitigated 13 potential service disruptions without human intervention.",
    contributingAgents: ['Analytics Agent', 'Performance Analytics Agent', 'Notification Agent', 'CRM System', 'Engagement Database']
  }
};