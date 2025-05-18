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
  },
  
  // New enhanced responses for common questions
  'integration capabilities': {
    text: "Our Organization General Intelligence (OGI) integrates with 24 different systems across the sales tech stack. The Integration Agent maintains connections with Salesforce, HubSpot, Outreach, and LinkedIn Sales Navigator as tier-1 systems with bidirectional data flow. We process approximately 842,000 integration events daily with a 99.98% success rate. The most data-intensive integration is with the Lead Database, which syncs 3.4 million records daily. Each agent has specific integration permissions defined by the Admin/Config Agent, with the Responsible AI Agent enforcing data privacy controls across all integrations. Our system handles 14 different authentication methods including OAuth 2.0, API keys, and custom JWT implementations. The Integration Agent automatically detects and repairs broken connections with a mean time to recovery of 4.2 minutes.",
    contributingAgents: ['Integration Agent', 'Admin/Config Agent', 'CRM System', 'Lead Database', 'Responsible AI Agent']
  },
  
  'system architecture': {
    text: "The OGI system architecture follows a hub-and-spoke model with the central OGI core acting as the orchestration engine for all 32 specialized agents. Each agent operates as a microservice with defined inputs, outputs, and permissions. The architecture employs event-driven communication using a publish-subscribe model for real-time interactions, with a message queue handling approximately 2.8 million events per day. Data is stored in a combination of graph databases (for relationship mapping), time-series databases (for performance metrics), and document stores (for rich content). The system maintains a maximum response latency of 850ms for 99.9% of requests, with automated horizontal scaling triggering when latency exceeds 500ms. All components are deployed in containerized environments with automated failover, achieving 99.992% availability over the past quarter. The architecture includes built-in observability with distributed tracing across all agent interactions.",
    contributingAgents: ['Admin/Config Agent', 'Integration Agent', 'Lead Database', 'Performance Analytics Agent', 'CRM System']
  },
  
  'decision making': {
    text: "Decision making across our sales development agent network follows a multi-stage process combining rule-based logic with machine learning models. The ICP Assistant establishes baseline targeting criteria, which is enhanced by the Lead Enrichment Agent's data gathering. Decision authority is mapped to specific agents based on their domain expertise - for example, the Meeting Qualifier Agent has final authority on qualification decisions, while the Email Assistant has authority over messaging personalization. Cross-agent decisions leverage a consensus protocol where multiple agents contribute weighted insights based on confidence scores. All critical decisions (like prospect qualification or sequence design) maintain a human-in-the-loop review option for cases below confidence thresholds. Our system logs all decision factors for auditability, with the Responsible AI Agent enforcing ethical guidelines across all decision processes. This architecture has improved decision quality by 37% while reducing required human intervention by 64%.",
    contributingAgents: ['ICP Assistant', 'Meeting Qualifier Agent', 'Email Assistant', 'Analytics Agent', 'Responsible AI Agent']
  },
  
  'team collaboration': {
    text: "The OGI framework has transformed collaboration between teams and AI agents across the sales development process. SDR team members now spend 42% less time on administrative tasks, with the highest time savings in data entry (68% reduction) and meeting scheduling (74% reduction). AI agents now handle 84% of routine prospect research, allowing SDRs to focus on relationship building. The most effective human-AI workflows involve the SDR Coach Agent providing real-time guidance during prospecting, the Meeting Notes Agent capturing conversation details, and the Email Assistant drafting follow-ups based on conversation summaries. Cross-functional collaboration has improved with Marketing teams receiving automatic feedback on content effectiveness from the Content Recommendations Agent. Sales Managers leverage the Performance Analytics Agent for coaching insights, with SDRs showing 28% faster skill development under this collaborative model.",
    contributingAgents: ['SDR Coach Agent', 'Meeting Notes Agent', 'Email Assistant', 'Content Recommendations Agent', 'Performance Analytics Agent', 'SDR Team', 'Marketing Team']
  },
  
  'future roadmap': {
    text: "The OGI system roadmap for the next two quarters focuses on four key enhancement areas. First, we're expanding specialized vertical agents for industries like healthcare, financial services, and manufacturing, with industry-specific compliance knowledge and messaging frameworks. Second, we're implementing advanced anomaly detection capabilities to identify potential issues in the sales process before they impact results, which is projected to increase pipeline accuracy by 23%. Third, we're enhancing the multi-language capabilities of outreach agents to support global sales teams across 12 additional languages. Finally, we're developing deeper integrations with conversation intelligence platforms to provide real-time coaching during sales calls. Beta testing of these features has shown a potential 18% increase in meeting conversion rates and a 9% increase in deal sizes through more effective discovery conversations.",
    contributingAgents: ['Admin/Config Agent', 'Integration Agent', 'Email Assistant', 'Meeting Qualifier Agent', 'Analytics Agent', 'SDR Team']
  }
};

// Define categorized pre-built conversations
export const categorizedOGIConversations = {
  connections: [
    {
      id: 'agent-interactions',
      title: 'Agent Interactions',
      context: "This conversation explores how different agents interact and communicate across the sales development ecosystem.",
      messages: [
        { 
          id: '1', 
          sender: 'user', 
          content: "How do our sales development agents interact with each other?", 
          timestamp: new Date() 
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our sales development agents interact through a structured event-based system managed by the OGI framework. Each agent serves a specific function and communicates with others through standardized APIs. For example, when a new lead enters our system, the Lead Enrichment Agent collects additional data points and passes the enriched profile to the ICP Assistant for scoring. This score is then sent to the Sequence Builder, which designs an appropriate outreach plan.\n\nThe most frequent interactions occur between the Email Assistant and Sequence Builder (approximately 4,800 interactions daily) and between the Analytics Agent and SDR Coach (2,300 daily interactions). Data is shared through our secure Knowledge Graph, with permissions enforced for all cross-agent communications.\n\nThis interconnected approach allows specialized agents to focus on their core competencies while leveraging the capabilities of other agents, creating a more intelligent and effective sales development ecosystem.",
          timestamp: new Date(),
          contributingAgents: ['Lead Enrichment Agent', 'ICP Assistant', 'Sequence Builder Agent', 'Email Assistant', 'Integration Agent']
        }
      ]
    },
    {
      id: 'system-touchpoints',
      title: 'System Touchpoints',
      context: "This conversation details how our OGI framework interfaces with external systems and data sources.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "What external systems does our OGI framework connect with?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "The OGI framework maintains connections with 18 external systems and data sources, managed through secure API integrations. The primary system connections include:\n\n1. CRM Platforms: Bidirectional sync with Salesforce, HubSpot, and Microsoft Dynamics, handling 1.2 million daily transactions\n\n2. Sales Engagement Platforms: Outreach, SalesLoft, and Apollo for sequence execution and engagement tracking\n\n3. Data Providers: ZoomInfo, Clearbit, and 6sense for lead enrichment and intent signals\n\n4. Communication Tools: Email servers, calendar systems, and LinkedIn via their official APIs\n\n5. Analytics Platforms: PowerBI, Looker, and custom dashboards\n\nThe Integration Agent maintains these connections with a 99.98% uptime record. Each integration follows strict data governance protocols established by the Responsible AI Agent, with AES-256 encryption for all data in transit and at rest. Integration activities are continuously monitored, with automatic alerts for any anomalies or authentication failures.",
          timestamp: new Date(),
          contributingAgents: ['Integration Agent', 'Responsible AI Agent', 'CRM System', 'Email Platform', 'Lead Enrichment Tool']
        }
      ]
    }
  ],
  performance: [
    {
      id: 'roi-analysis',
      title: 'ROI Analysis',
      context: "This conversation examines the return on investment from our OGI framework and AI agents.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "What's the ROI breakdown of our sales development agents?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our sales development agents have generated a combined ROI of $283,450 over the past quarter, with value coming from several key areas:\n\n1. Efficiency Improvements ($120,450): The Lead Enrichment Agent provides the highest value here by automating data gathering that previously took SDRs 15-20 minutes per prospect, now completed in seconds. This automation has saved 2,463 hours this quarter alone.\n\n2. Lead Quality Enhancement ($80,650): The ICP Assistant and Meeting Qualifier Agent have improved targeting precision, resulting in a 23% increase in meeting-to-opportunity conversion rates.\n\n3. Response Rate Optimization ($42,800): The Email Assistant and Sequence Builder have increased response rates from 12% to 28.4% through personalization and optimal timing.\n\n4. Meeting Conversion ($28,400): Improved qualification and preparation have resulted in 467 additional meetings booked this quarter.\n\n5. Pipeline Accuracy ($14,250): The Pipeline Forecast Agent has reduced forecast variance by 31%, allowing more efficient resource allocation.\n\nThe highest individual ROI comes from the Lead Enrichment Agent ($156,450), followed by the Email Assistant ($92,300). On a percentage basis, the Pipeline Forecast Agent shows the highest return at 842% of investment.",
          timestamp: new Date(),
          contributingAgents: ['Analytics Agent', 'Lead Enrichment Agent', 'ICP Assistant', 'Email Assistant', 'Pipeline Forecast Agent'],
          visualization: {
            type: 'chart',
            data: {
              title: 'ROI by Agent Category',
              description: 'Return on investment breakdown by agent type',
              chartType: 'bar'
            }
          }
        }
      ]
    },
    {
      id: 'performance-metrics',
      title: 'Performance Metrics',
      context: "This conversation details key performance indicators across our agent network.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "What are the key performance metrics for our agent network?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our agent network's performance is tracked through comprehensive metrics across accuracy, efficiency, and business impact dimensions:\n\n1. Accuracy Metrics:\n   • A/B Testing Agent leads with 97% accuracy in test design and analysis\n   • Meeting Qualifier Agent achieves 94% accuracy in predicting qualified meetings\n   • LinkedIn Outreach Agent currently underperforming at 85% due to API integration issues\n   • Overall accuracy average is 93.4% across all agents\n\n2. Efficiency Metrics:\n   • Response time ranges from 1.8s (Lead Enrichment Agent) to 8.2s (Integration Agent)\n   • Processing capacity: 14,328 agent runs daily across all systems\n   • Automation level: 82% of previously manual tasks now fully automated\n   • Time saved: 7,891 hours quarterly across all SDRs\n\n3. Business Impact Metrics:\n   • Pipeline influence: $3.6M attributed to agent-assisted activities\n   • Conversion improvements: 28.4% email reply rate (up from 12%)\n   • Meeting quality: 38.5% meeting-to-opportunity conversion (up from 22%)\n   • SDR productivity: 34.7 meaningful prospect interactions daily vs previous 18.4\n\nOur Analytics Agent continuously monitors these metrics through an integrated dashboard with hourly updates, allowing for real-time optimization of agent configurations and workflows.",
          timestamp: new Date(),
          contributingAgents: ['Analytics Agent', 'Performance Analytics', 'A/B Testing Agent', 'Meeting Qualifier Agent'],
          visualization: {
            type: 'metrics',
            data: {
              title: 'Agent Performance Dashboard',
              description: 'Key performance indicators across agent network'
            }
          }
        }
      ]
    }
  ],
  data: [
    {
      id: 'data-sources',
      title: 'Data Sources',
      context: "This conversation explores the various data sources integrated into our OGI framework.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "What data sources feed into our sales intelligence network?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our sales intelligence network integrates multiple data sources to create a comprehensive view of prospects and market dynamics:\n\n1. Core Data Repositories:\n   • Lead Database: 4.7M company profiles and 27.2M contact records\n   • Engagement Database: 89.3M prospect interactions with full context\n   • Templates Database: 2,450 messaging templates with performance data\n   • Analytics Database: 18 months of historical performance metrics\n\n2. External Data Sources:\n   • Firmographic Data: ZoomInfo, Clearbit (refreshed weekly)\n   • Technographic Data: BuiltWith, HG Insights (refreshed bi-weekly)\n   • Intent Signals: Bombora, 6sense (refreshed daily)\n   • Social Data: LinkedIn Sales Navigator (real-time API)\n\n3. Internal Systems Data:\n   • CRM Data: Account/contact history, opportunity data, notes\n   • Email Platform: Open, click, and reply data\n   • Calendar Systems: Meeting frequency, attendance, outcomes\n   • Product Usage: For existing customers, product engagement metrics\n\nData integration is managed by the Data Cleansing Agent and Integration Agent, with an average data freshness of 3.2 days across all sources. The Lead Enrichment Agent applies 42 different enrichment attributes to each prospect record. All data access is governed by role-based permissions enforced by the Responsible AI Agent.",
          timestamp: new Date(),
          contributingAgents: ['Data Cleansing Agent', 'Lead Enrichment Agent', 'Integration Agent', 'Lead Database', 'Engagement Database']
        }
      ]
    },
    {
      id: 'data-quality',
      title: 'Data Quality',
      context: "This conversation examines how data quality is maintained across the OGI system.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "How do we ensure data quality across our agent network?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our OGI framework maintains data quality through a comprehensive multi-layer approach:\n\n1. Ingestion Controls:\n   • Syntax validation for all incoming data (99.8% filtering accuracy)\n   • Source reliability scoring (each data vendor has a trust score)\n   • De-duplication algorithms with 97.2% accuracy using ML-powered fuzzy matching\n   • Anomaly detection flags statistically improbable data for review\n\n2. Continuous Maintenance:\n   • The Data Cleansing Agent runs 24/7 cleaning cycles with 8.4M records processed daily\n   • Field-level data validation rules (273 distinct rules across all schemas)\n   • Aging policies automatically flag data older than defined thresholds\n   • Cross-reference verification against multiple sources for key fields\n\n3. Usage-Based Improvement:\n   • Feedback loops from SDRs flag inaccurate data in real time\n   • Usage patterns identify high-value fields for enhanced validation\n   • Confidence scoring for all data points (visible to consuming agents)\n   • Automated A/B testing of data sources to identify quality trends\n\n4. Governance Framework:\n   • Centralized data dictionary with 1,482 field definitions\n   • Data lineage tracking for audit purposes\n   • Data quality SLAs monitored through dashboards\n   • Monthly data quality reviews with data stewards\n\nThis approach has yielded an overall data quality score of 94.3% (up from 87.1% prior quarter), with contact data accuracy at 92.8% and company data accuracy at 96.4%.",
          timestamp: new Date(),
          contributingAgents: ['Data Cleansing Agent', 'Integration Agent', 'Analytics Agent', 'Lead Database', 'CRM System']
        }
      ]
    }
  ],
  governance: [
    {
      id: 'compliance-framework',
      title: 'Compliance Framework',
      context: "This conversation details our compliance framework for responsible AI use in sales development.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "How does our OGI system ensure compliance with privacy regulations?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our OGI framework includes a comprehensive compliance system with multiple safeguards:\n\n1. Regulatory Compliance Layer:\n   • GDPR: Full implementation of Art. 5-9 requirements for EU prospects\n   • CCPA/CPRA: Automated rights handling for California residents\n   • CAN-SPAM: Automated enforcement of required email components\n   • CASL: Explicit consent tracking for Canadian prospects\n   • Regional monitoring for 87 local privacy regulations\n\n2. Technical Controls:\n   • Data Minimization: Agents only access required fields for specific functions\n   • Purpose Limitation: Usage logging for all data access with Responsible AI Agent oversight\n   • Consent Management: Centralized repository with timestamp, source, and scope\n   • Data Retention: Automated purging based on configurable retention rules\n   • Subject Rights: Automated request processing for access, delete, and portability\n\n3. Procedural Controls:\n   • Compliance verification checklist before campaign launch\n   • Weekly audit reviews of agent actions by Responsible AI Agent\n   • Quarterly compliance reviews with legal team\n   • Automated DPIAs for high-risk processing operations\n   • Incident response plan with established escalation paths\n\n4. Documentation Framework:\n   • Data protection policies accessible to all teams\n   • Comprehensive Record of Processing Activities\n   • Vendor assessment documentation for all integrated systems\n   • Training materials for all users of the platform\n\nThis framework is continuously monitored by the Responsible AI Agent, which performed 273,450 compliance checks last quarter with 99.92% compliance rate.",
          timestamp: new Date(),
          contributingAgents: ['Responsible AI Agent', 'Data Cleansing Agent', 'Admin/Config Agent', 'CRM System', 'Integration Agent']
        }
      ]
    },
    {
      id: 'security-infrastructure',
      title: 'Security Infrastructure',
      context: "This conversation outlines the security infrastructure protecting our OGI framework.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "What security measures protect our OGI system and sales data?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our OGI security framework implements defense-in-depth protection across multiple layers:\n\n1. Authentication & Authorization:\n   • Zero-trust security model with continuous verification\n   • MFA required for all admin access points\n   • Role-based access control with least privilege enforcement\n   • Session management with automatic timeout after 15 minutes\n   • API authentication via OAuth 2.0 with short-lived tokens\n\n2. Data Protection:\n   • AES-256 encryption for all data at rest\n   • TLS 1.3 for all data in transit\n   • Field-level encryption for sensitive data with separate key management\n   • Data tokenization for sensitive PII/contact information\n   • Secure deletion protocols with verification\n\n3. Infrastructure Security:\n   • Containerized microservices with isolated execution environments\n   • Network segmentation between agent clusters\n   • Web application firewall with ML-powered threat detection\n   • Regular penetration testing (last performed: 43 days ago)\n   • Automated vulnerability scanning on all components\n\n4. Operational Security:\n   • 24/7 security monitoring with automated alerts\n   • Comprehensive audit logging of all system activities\n   • Incident response plan with defined roles and procedures\n   • Disaster recovery capabilities with 15-minute RTO\n   • Secure DevOps pipeline with code signing and verification\n\n5. Compliance & Governance:\n   • SOC 2 Type II certified infrastructure\n   • GDPR and CCPA compliance validated by external assessors\n   • Quarterly security reviews by the Admin/Config Agent\n   • Admin access requires time-limited privilege escalation\n\nThese measures have resulted in zero security incidents over the past 18 months of operation.",
          timestamp: new Date(),
          contributingAgents: ['Admin/Config Agent', 'Responsible AI Agent', 'Integration Agent', 'CRM System', 'Lead Database']
        }
      ]
    }
  ],
  teams: [
    {
      id: 'team-collaboration',
      title: 'Team Collaboration',
      context: "This conversation explores how sales teams collaborate with AI agents within our OGI framework.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "How do sales teams interact with our OGI agent network?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Sales teams interact with our OGI agent network through multiple touchpoints designed for seamless collaboration:\n\n1. SDR Team Interactions:\n   • Chat-based interfaces for direct agent querying (avg. 34.7 interactions per SDR daily)\n   • Auto-generated outreach content with human editing capability\n   • Intelligence briefings before prospect engagement (generated by Call Prep Agent)\n   • Notification system for real-time alerts on prospect activities\n   • Performance coaching from SDR Coach Agent with personalized tips\n\n2. Sales Manager Touchpoints:\n   • Team performance dashboards with agent contribution metrics\n   • Pipeline insights with AI-identified risk factors and opportunities\n   • Coaching recommendations based on team performance patterns\n   • Resource allocation suggestions for optimal team productivity\n   • A/B test results for outreach strategy optimization\n\n3. AE Team Integration:\n   • Meeting briefs with prospect research from the Call Prep Agent\n   • Automatic CRM updates from the Meeting Notes Agent\n   • Competitive intelligence alerts from Industry Research Agent\n   • Customer sentiment analysis during sales process\n   • Next-best-action recommendations for opportunity advancement\n\n4. Cross-Team Collaboration:\n   • Shared insights between Marketing and Sales through Content Recommendations Agent\n   • Feedback loops to improve ICP definition and lead scoring\n   • Knowledge sharing of effective messaging across teams\n   • Collaborative sequence design with agent-assisted optimization\n\nThis human-AI collaboration model has reduced administrative tasks by 62% while improving key performance metrics across all teams. The most valued agents (based on user feedback) are the Email Assistant, Call Prep Agent, and Lead Enrichment Agent.",
          timestamp: new Date(),
          contributingAgents: ['SDR Team', 'AE Team', 'Email Assistant', 'Call Prep Agent', 'SDR Coach Agent', 'Lead Enrichment Agent']
        }
      ]
    },
    {
      id: 'user-adoption',
      title: 'User Adoption',
      context: "This conversation examines adoption patterns and best practices among users of our OGI system.",
      messages: [
        {
          id: '1',
          sender: 'user',
          content: "What are the adoption patterns for our sales agents across different teams?",
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'agent',
          content: "Our analysis shows distinct adoption patterns across different teams using the OGI sales agent network:\n\n1. SDR Team Adoption:\n   • Highest overall adoption at 94% active usage\n   • Top agents used: Email Assistant (96%), Lead Enrichment Agent (92%), Sequence Builder (89%)\n   • Usage pattern: Frequent, short interactions (avg. 34.7 daily interactions of ~2 minutes)\n   • Adoption driver: Productivity gains (62% time saved on administrative tasks)\n   • Best practice: Daily morning planning session with ICP Assistant\n\n2. AE Team Adoption:\n   • Moderate adoption at 78% active usage\n   • Top agents used: Call Prep Agent (83%), Meeting Notes Agent (81%), Objection Handler (74%)\n   • Usage pattern: Less frequent, deeper interactions (avg. 8.3 daily interactions of ~4-5 minutes)\n   • Adoption driver: Deal intelligence and preparation support\n   • Best practice: Post-meeting debriefs with Meeting Notes Agent\n\n3. Sales Management Adoption:\n   • Growing adoption at 82% active usage\n   • Top agents used: Performance Analytics (88%), Pipeline Forecast (84%), SDR Coach (79%)\n   • Usage pattern: Scheduled weekly deep dives (avg. 12.4 weekly interactions of ~7-8 minutes)\n   • Adoption driver: Data-driven decision making support\n   • Best practice: Weekly pipeline reviews with Pipeline Forecast Agent\n\n4. Marketing Team Integration:\n   • Selective adoption at 63% active usage\n   • Top agents used: Content Recommendations (87%), Industry Research (72%), ICP Assistant (68%)\n   • Usage pattern: Project-based collaboration (avg. 18.6 weekly interactions)\n   • Adoption driver: Sales-marketing alignment on messaging\n   • Best practice: Monthly content effectiveness reviews\n\nThe most successful adoption pattern includes structured daily rituals (10-15 min) with specific agents, combined with on-demand assistance throughout the day. Teams showing highest performance gains integrate agent insights directly into their workflows rather than treating agent interactions as separate activities.",
          timestamp: new Date(),
          contributingAgents: ['Analytics Agent', 'SDR Team', 'AE Team', 'Sales Managers', 'Marketing Team'],
          visualization: {
            type: 'chart',
            data: {
              title: 'Agent Adoption by Team',
              description: 'Adoption patterns across different departments',
              chartType: 'bar'
            }
          }
        }
      ]
    }
  ]
};