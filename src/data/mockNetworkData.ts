export const networkData = {
  nodes: [
    // SDR Team Agents (blue)
    { id: 'icp-agent', label: 'ICP Assistant', group: 'agent', x: 200, y: 100, size: 18 },
    { id: 'lead-enrichment-agent', label: 'Lead Enrichment', group: 'agent', x: 300, y: 80, size: 20 },
    { id: 'email-assistant', label: 'Email Assistant', group: 'agent', x: 350, y: 180, size: 22 },
    { id: 'sequence-builder', label: 'Sequence Builder', group: 'agent', x: 450, y: 120, size: 19 },
    { id: 'linkedin-agent', label: 'LinkedIn Outreach', group: 'agent', x: 300, y: 140, size: 17 },
    { id: 'analytics-agent', label: 'Analytics Agent', group: 'agent', x: 150, y: 170, size: 16 },
    
    // Qualification & Meeting Agents (blue)
    { id: 'meeting-qualifier', label: 'Meeting Qualifier', group: 'agent', x: 550, y: 350, size: 21 },
    { id: 'scheduler-agent', label: 'Meeting Scheduler', group: 'agent', x: 500, y: 290, size: 18 },
    { id: 'call-prep-agent', label: 'Call Prep Agent', group: 'agent', x: 580, y: 260, size: 17 },
    { id: 'meeting-notes-agent', label: 'Meeting Notes', group: 'agent', x: 630, y: 300, size: 16 },
    { id: 'objection-handler', label: 'Objection Handler', group: 'agent', x: 450, y: 400, size: 15 },
    { id: 'timing-agent', label: 'Timing Optimizer', group: 'agent', x: 530, y: 420, size: 16 },
    
    // Performance & Analytics Agents (blue)
    { id: 'sdr-coach', label: 'SDR Coach', group: 'agent', x: 200, y: 350, size: 19 },
    { id: 'ab-testing', label: 'A/B Testing', group: 'agent', x: 150, y: 420, size: 17 },
    { id: 'performance-analytics', label: 'Performance Analytics', group: 'agent', x: 250, y: 400, size: 16 },
    { id: 'pipeline-forecast', label: 'Pipeline Forecast', group: 'agent', x: 200, y: 280, size: 18 },
    
    // Technical & Support Agents (blue)
    { id: 'integration-agent', label: 'Integration Agent', group: 'agent', x: 300, y: 440, size: 15 },
    { id: 'crm-updater', label: 'CRM Updater', group: 'agent', x: 350, y: 350, size: 14 },
    { id: 'data-cleansing', label: 'Data Cleansing', group: 'agent', x: 280, y: 320, size: 15 },
    { id: 'responsible-ai', label: 'Responsible AI', group: 'agent', x: 330, y: 380, size: 14 },
    { id: 'admin-config', label: 'Admin/Config Agent', group: 'agent', x: 280, y: 250, size: 15 },
    
    // Research & Knowledge Agents (blue)
    { id: 'industry-research', label: 'Industry Research', group: 'agent', x: 650, y: 150, size: 17 },
    { id: 'competitor-intel', label: 'Competitor Intel', group: 'agent', x: 700, y: 200, size: 16 },
    { id: 'product-knowledge', label: 'Product Knowledge', group: 'agent', x: 730, y: 130, size: 16 },
    { id: 'content-recommender', label: 'Content Recommender', group: 'agent', x: 680, y: 80, size: 16 },
    { id: 'notification-agent', label: 'Notification Agent', group: 'agent', x: 730, y: 240, size: 15 },
    
    // Data Sources (green)
    { id: 'lead-db', label: 'Lead Database', group: 'data', x: 400, y: 230, size: 19 },
    { id: 'engagement-db', label: 'Engagement Data', group: 'data', x: 450, y: 280, size: 20 },
    { id: 'company-db', label: 'Company Database', group: 'data', x: 380, y: 170, size: 16 },
    { id: 'analytics-db', label: 'Analytics Data', group: 'data', x: 550, y: 180, size: 17 },
    { id: 'content-db', label: 'Content Library', group: 'data', x: 400, y: 360, size: 16 },
    { id: 'templates-db', label: 'Email Templates', group: 'data', x: 330, y: 220, size: 16 },
    { id: 'intent-data', label: 'Intent Data Feed', group: 'data', x: 300, y: 500, size: 17 },
    
    // Sales Tools (amber)
    { id: 'crm-system', label: 'CRM System', group: 'system', x: 400, y: 80, size: 22 },
    { id: 'email-platform', label: 'Email Platform', group: 'system', x: 600, y: 120, size: 19 },
    { id: 'linkedin-sales', label: 'LinkedIn Sales', group: 'system', x: 250, y: 220, size: 18 },
    { id: 'lead-enrichment', label: 'Lead Enrichment Tool', group: 'system', x: 500, y: 220, size: 19 },
    { id: 'calendar-system', label: 'Calendar System', group: 'system', x: 450, y: 500, size: 17 },
    { id: 'sales-enablement', label: 'Sales Enablement', group: 'system', x: 550, y: 480, size: 16 },
    
    // Users/Roles (pink)
    { id: 'sdr-team', label: 'SDR Team', group: 'user', x: 200, y: 50, size: 16 },
    { id: 'ae-team', label: 'AE Team', group: 'user', x: 120, y: 230, size: 15 },
    { id: 'marketing-team', label: 'Marketing Team', group: 'user', x: 700, y: 300, size: 15 },
    { id: 'sales-mgmt', label: 'Sales Managers', group: 'user', x: 650, y: 380, size: 16 },
    { id: 'prospects', label: 'Prospects', group: 'user', x: 500, y: 550, size: 18 },
    { id: 'customers', label: 'Customers', group: 'user', x: 580, y: 500, size: 15 }
  ],
  links: [
    // ICP & Lead Enrichment Connections
    { source: { x: 200, y: 100 }, target: { x: 380, y: 170 }, value: 3 },  // ICP -> Company DB
    { source: { x: 200, y: 100 }, target: { x: 400, y: 80 }, value: 2 },   // ICP -> CRM
    { source: { x: 200, y: 100 }, target: { x: 200, y: 50 }, value: 3 },   // ICP -> SDR Team
    
    { source: { x: 300, y: 80 }, target: { x: 380, y: 170 }, value: 3 },   // Lead Enrichment -> Company DB
    { source: { x: 300, y: 80 }, target: { x: 400, y: 230 }, value: 3 },   // Lead Enrichment -> Lead DB
    { source: { x: 300, y: 80 }, target: { x: 500, y: 220 }, value: 2 },   // Lead Enrichment -> Lead Enrichment Tool
    { source: { x: 300, y: 80 }, target: { x: 300, y: 500 }, value: 2 },   // Lead Enrichment -> Intent Data
    
    // Outreach Agents Connections
    { source: { x: 350, y: 180 }, target: { x: 330, y: 220 }, value: 3 },  // Email Assistant -> Email Templates
    { source: { x: 350, y: 180 }, target: { x: 600, y: 120 }, value: 3 },  // Email Assistant -> Email Platform
    { source: { x: 350, y: 180 }, target: { x: 400, y: 230 }, value: 2 },  // Email Assistant -> Lead DB
    
    { source: { x: 450, y: 120 }, target: { x: 330, y: 220 }, value: 3 },  // Sequence Builder -> Email Templates
    { source: { x: 450, y: 120 }, target: { x: 600, y: 120 }, value: 2 },  // Sequence Builder -> Email Platform
    { source: { x: 450, y: 120 }, target: { x: 250, y: 220 }, value: 2 },  // Sequence Builder -> LinkedIn Sales
    
    { source: { x: 300, y: 140 }, target: { x: 250, y: 220 }, value: 3 },  // LinkedIn Outreach -> LinkedIn Sales
    { source: { x: 300, y: 140 }, target: { x: 400, y: 230 }, value: 2 },  // LinkedIn Outreach -> Lead DB
    
    { source: { x: 150, y: 170 }, target: { x: 450, y: 280 }, value: 3 },  // Analytics Agent -> Engagement Data
    { source: { x: 150, y: 170 }, target: { x: 550, y: 180 }, value: 3 },  // Analytics Agent -> Analytics Data
    { source: { x: 150, y: 170 }, target: { x: 400, y: 230 }, value: 2 },  // Analytics Agent -> Lead DB
    
    // Meeting & Qualification Connections
    { source: { x: 550, y: 350 }, target: { x: 400, y: 230 }, value: 3 },  // Meeting Qualifier -> Lead DB
    { source: { x: 550, y: 350 }, target: { x: 450, y: 280 }, value: 2 },  // Meeting Qualifier -> Engagement Data
    { source: { x: 550, y: 350 }, target: { x: 400, y: 80 }, value: 2 },   // Meeting Qualifier -> CRM
    
    { source: { x: 500, y: 290 }, target: { x: 450, y: 500 }, value: 3 },  // Meeting Scheduler -> Calendar
    { source: { x: 500, y: 290 }, target: { x: 400, y: 80 }, value: 2 },   // Meeting Scheduler -> CRM
    { source: { x: 500, y: 290 }, target: { x: 500, y: 550 }, value: 2 },  // Meeting Scheduler -> Prospects
    
    { source: { x: 580, y: 260 }, target: { x: 400, y: 230 }, value: 3 },  // Call Prep -> Lead DB
    { source: { x: 580, y: 260 }, target: { x: 380, y: 170 }, value: 2 },  // Call Prep -> Company DB
    { source: { x: 580, y: 260 }, target: { x: 120, y: 230 }, value: 2 },  // Call Prep -> AE Team
    
    { source: { x: 630, y: 300 }, target: { x: 400, y: 80 }, value: 3 },   // Meeting Notes -> CRM
    { source: { x: 630, y: 300 }, target: { x: 450, y: 280 }, value: 2 },  // Meeting Notes -> Engagement Data
    
    // Performance & Analytics Connections
    { source: { x: 200, y: 350 }, target: { x: 450, y: 280 }, value: 3 },  // SDR Coach -> Engagement Data
    { source: { x: 200, y: 350 }, target: { x: 550, y: 180 }, value: 3 },  // SDR Coach -> Analytics Data
    { source: { x: 200, y: 350 }, target: { x: 200, y: 50 }, value: 3 },   // SDR Coach -> SDR Team
    
    { source: { x: 150, y: 420 }, target: { x: 550, y: 180 }, value: 3 },  // A/B Testing -> Analytics Data
    { source: { x: 150, y: 420 }, target: { x: 330, y: 220 }, value: 2 },  // A/B Testing -> Email Templates
    
    { source: { x: 250, y: 400 }, target: { x: 550, y: 180 }, value: 3 },  // Performance Analytics -> Analytics Data
    { source: { x: 250, y: 400 }, target: { x: 400, y: 230 }, value: 2 },  // Performance Analytics -> Lead DB
    { source: { x: 250, y: 400 }, target: { x: 450, y: 280 }, value: 2 },  // Performance Analytics -> Engagement Data
    
    { source: { x: 200, y: 280 }, target: { x: 400, y: 80 }, value: 3 },   // Pipeline Forecast -> CRM
    { source: { x: 200, y: 280 }, target: { x: 550, y: 180 }, value: 2 },  // Pipeline Forecast -> Analytics Data
    { source: { x: 200, y: 280 }, target: { x: 120, y: 230 }, value: 2 },  // Pipeline Forecast -> AE Team
    
    // Technical & Support Connections
    { source: { x: 300, y: 440 }, target: { x: 400, y: 80 }, value: 3 },   // Integration Agent -> CRM
    { source: { x: 300, y: 440 }, target: { x: 600, y: 120 }, value: 3 },  // Integration Agent -> Email Platform
    { source: { x: 300, y: 440 }, target: { x: 250, y: 220 }, value: 3 },  // Integration Agent -> LinkedIn Sales
    { source: { x: 300, y: 440 }, target: { x: 450, y: 500 }, value: 2 },  // Integration Agent -> Calendar
    { source: { x: 300, y: 440 }, target: { x: 500, y: 220 }, value: 2 },  // Integration Agent -> Lead Enrichment Tool
    
    { source: { x: 350, y: 350 }, target: { x: 400, y: 80 }, value: 3 },   // CRM Updater -> CRM
    { source: { x: 350, y: 350 }, target: { x: 400, y: 230 }, value: 2 },  // CRM Updater -> Lead DB
    
    { source: { x: 280, y: 320 }, target: { x: 400, y: 230 }, value: 3 },  // Data Cleansing -> Lead DB
    { source: { x: 280, y: 320 }, target: { x: 380, y: 170 }, value: 2 },  // Data Cleansing -> Company DB
    
    { source: { x: 330, y: 380 }, target: { x: 400, y: 230 }, value: 2 },  // Responsible AI -> Lead DB
    { source: { x: 330, y: 380 }, target: { x: 330, y: 220 }, value: 2 },  // Responsible AI -> Email Templates
    
    { source: { x: 280, y: 250 }, target: { x: 400, y: 80 }, value: 3 },   // Admin/Config -> CRM
    { source: { x: 280, y: 250 }, target: { x: 200, y: 50 }, value: 2 },   // Admin/Config -> SDR Team
    { source: { x: 280, y: 250 }, target: { x: 650, y: 380 }, value: 2 },  // Admin/Config -> Sales Managers
    
    // Research & Content Connections
    { source: { x: 650, y: 150 }, target: { x: 380, y: 170 }, value: 3 },  // Industry Research -> Company DB
    { source: { x: 650, y: 150 }, target: { x: 400, y: 360 }, value: 2 },  // Industry Research -> Content Library
    
    { source: { x: 700, y: 200 }, target: { x: 380, y: 170 }, value: 3 },  // Competitor Intel -> Company DB
    { source: { x: 700, y: 200 }, target: { x: 400, y: 230 }, value: 2 },  // Competitor Intel -> Lead DB
    
    { source: { x: 730, y: 130 }, target: { x: 550, y: 480 }, value: 3 },  // Product Knowledge -> Sales Enablement
    { source: { x: 730, y: 130 }, target: { x: 400, y: 360 }, value: 2 },  // Product Knowledge -> Content Library
    
    { source: { x: 680, y: 80 }, target: { x: 400, y: 360 }, value: 3 },   // Content Recommender -> Content Library
    { source: { x: 680, y: 80 }, target: { x: 400, y: 230 }, value: 2 },   // Content Recommender -> Lead DB
    
    { source: { x: 730, y: 240 }, target: { x: 400, y: 80 }, value: 3 },   // Notification Agent -> CRM
    { source: { x: 730, y: 240 }, target: { x: 200, y: 50 }, value: 2 },   // Notification Agent -> SDR Team
    
    // Core System Connections
    { source: { x: 400, y: 80 }, target: { x: 500, y: 220 }, value: 3 },   // CRM -> Lead Enrichment Tool
    { source: { x: 400, y: 80 }, target: { x: 600, y: 120 }, value: 3 },   // CRM -> Email Platform
    { source: { x: 400, y: 80 }, target: { x: 250, y: 220 }, value: 2 },   // CRM -> LinkedIn Sales
    
    { source: { x: 600, y: 120 }, target: { x: 500, y: 550 }, value: 3 },  // Email Platform -> Prospects
    
    { source: { x: 250, y: 220 }, target: { x: 500, y: 550 }, value: 3 },  // LinkedIn Sales -> Prospects
    
    { source: { x: 450, y: 500 }, target: { x: 120, y: 230 }, value: 3 },  // Calendar System -> AE Team
    { source: { x: 450, y: 500 }, target: { x: 200, y: 50 }, value: 3 },   // Calendar System -> SDR Team
    { source: { x: 450, y: 500 }, target: { x: 500, y: 550 }, value: 2 }   // Calendar System -> Prospects
  ]
};

// Demo questions for different nodes
export const nodeQuestions = {
  // Strategy & Lead Agents
  'icp-agent': [
    "What industries are our ICP currently targeting?",
    "How does the ICP Assistant determine company fit scores?",
    "What data sources inform our ideal customer profile?",
    "How do we prioritize different personas within target accounts?",
    "What firmographic criteria best predict conversion?"
  ],
  
  'lead-enrichment-agent': [
    "What enrichment sources do we use for lead data?",
    "How does the Lead Enrichment Agent prioritize leads?",
    "What technographic signals indicate sales readiness?",
    "How accurate is our enrichment data?",
    "What are the key data points we append to leads?"
  ],
  
  'email-assistant': [
    "What email templates perform best for our top persona?",
    "How does the Email Assistant personalize messages?",
    "What tone of voice works best for our industry?",
    "Show me the most successful subject lines this month",
    "How does the Email Assistant handle follow-ups?"
  ],
  
  'sequence-builder': [
    "What's the optimal sequence length for enterprise prospects?",
    "How does the Sequence Builder determine channel mix?",
    "What cadence performs best for our top vertical?",
    "How do we integrate LinkedIn touches in our sequences?",
    "What's the recommended sequence for cold outreach?"
  ],
  
  'linkedin-agent': [
    "What types of LinkedIn messages get the highest response rate?",
    "How does the agent customize connection requests?",
    "What LinkedIn engagement signals indicate interest?",
    "How does the LinkedIn Agent coordinate with email outreach?",
    "What's the optimal timing between LinkedIn touches?"
  ],
  
  'analytics-agent': [
    "What are our current email open and reply rates?",
    "Which outreach channels are most effective?",
    "How do our conversion metrics compare to industry benchmarks?",
    "What day of week shows the highest engagement?",
    "Which messaging themes drive the most meetings?"
  ],
  
  // Meeting & Qualification Agents
  'meeting-qualifier': [
    "What qualification criteria determine meeting readiness?",
    "How does the Meeting Qualifier evaluate lead quality?",
    "What disqualification rules are currently active?",
    "How accurately does the agent predict meeting outcomes?",
    "What signals indicate a prospect is ready to buy?"
  ],
  
  'scheduler-agent': [
    "How does the Meeting Scheduler optimize for conversion?",
    "What's the average time to schedule after a prospect responds?",
    "How does the agent handle timezone differences?",
    "What's the meeting show rate for AI-scheduled meetings?",
    "How does the agent reduce scheduling friction?"
  ],
  
  'call-prep-agent': [
    "What information does the Call Prep Agent provide before meetings?",
    "How does it highlight relevant talking points?",
    "What research does it conduct on prospects?",
    "How does it prepare objection handlers?",
    "What company intelligence does it surface?"
  ],
  
  'meeting-notes-agent': [
    "How does the Meeting Notes Agent capture key points?",
    "What follow-up actions does it recommend?",
    "How does it sync notes with the CRM system?",
    "What patterns does it identify across meetings?",
    "How does it prioritize action items?"
  ],
  
  // Performance & Analytics Agents
  'sdr-coach': [
    "What SDR behaviors correlate with higher conversion?",
    "How does the Coach provide personalized guidance?",
    "What areas do most SDRs need improvement in?",
    "How does the Coach analyze messaging effectiveness?",
    "What performance metrics does it track per SDR?"
  ],
  
  'ab-testing': [
    "What elements should we A/B test in our next campaign?",
    "How large a sample size do we need for valid results?",
    "What subject line test showed the biggest improvement?",
    "How does the agent determine statistical significance?",
    "What's our current A/B testing methodology?"
  ],
  
  'performance-analytics': [
    "How do our top performers compare to team average?",
    "What's the correlation between outreach volume and success?",
    "Which personas have the highest conversion rates?",
    "What's our current pipeline velocity?",
    "How have response rates changed over the last quarter?"
  ],
  
  'pipeline-forecast': [
    "What's our projected pipeline value this quarter?",
    "How accurate have previous forecasts been?",
    "Where are the risks in our current pipeline?",
    "What conversion assumptions drive the forecast model?",
    "How does lead quality impact forecast accuracy?"
  ],
  
  // Technical & Support Agents
  'integration-agent': [
    "What systems does the Integration Agent connect?",
    "How does it sync data between platforms?",
    "What data validation does it perform during syncs?",
    "How often does it update records across systems?",
    "What error handling does it implement?"
  ],
  
  'crm-updater': [
    "How does the CRM Updater maintain data hygiene?",
    "What fields does it automatically update?",
    "How does it prevent duplicate records?",
    "What automation does it provide for activity logging?",
    "How does it prioritize records for updates?"
  ],
  
  'data-cleansing': [
    "What data quality issues does it most commonly fix?",
    "How does it identify and merge duplicate contacts?",
    "What validation rules does it apply to contact data?",
    "How does it handle conflicting information?",
    "What's our current data quality score?"
  ],
  
  'responsible-ai': [
    "How does the Responsible AI Agent ensure ethical outreach?",
    "What bias detection mechanisms are in place?",
    "How do we handle prospect consent and opt-outs?",
    "What sensitive topics does the agent monitor for?",
    "What compliance regulations does it enforce?"
  ],
  
  // Research & Knowledge Agents
  'industry-research': [
    "What industry trends are most relevant to our ICP?",
    "How does the Industry Research Agent gather information?",
    "What sources does it monitor for market intelligence?",
    "How does it identify trigger events?",
    "What industry insights have been valuable recently?"
  ],
  
  'competitor-intel': [
    "What competitor information does this agent track?",
    "How does it monitor competitor positioning?",
    "What competitive differentiators does it identify?",
    "How does it gather competitive intelligence?",
    "What competitive trends has it identified recently?"
  ],
  
  'product-knowledge': [
    "How does the Product Knowledge Agent stay updated?",
    "What product features align with our top personas?",
    "How does it match product benefits to prospect needs?",
    "What product messaging resonates most with prospects?",
    "How does it support objection handling around features?"
  ],
  
  // Data Sources
  'lead-db': [
    "What lead data is shared across agents?",
    "How is sensitive prospect data protected?",
    "Show me data access patterns across teams",
    "How many unique leads are in our database?",
    "What lead scoring models are active?"
  ],
  'engagement-db': [
    "How many prospect interactions do we track daily?",
    "Which engagement signals are most predictive of conversion?",
    "Show email open and reply rate trends",
    "What's the retention policy for engagement data?",
    "How do we measure multi-touch attribution?"
  ],
  'company-db': [
    "What company information do we maintain?",
    "How frequently is company data refreshed?",
    "Which agents use company data most frequently?",
    "What technographic data do we track?",
    "How do we identify company growth signals?"
  ],
  'analytics-db': [
    "What performance metrics do we track?",
    "How is historical performance data used?",
    "What benchmarks do we maintain?",
    "How do we segment performance data?",
    "What reporting capabilities are available?"
  ],
  'templates-db': [
    "How many email templates do we maintain?",
    "What categorization system do we use for templates?",
    "Which templates have the highest success rates?",
    "How are templates tested and optimized?",
    "What personalization variables are available?"
  ],
  
  // Sales Tools
  'crm-system': [
    "How do our agents integrate with the CRM?",
    "What automation workflows are active in the CRM?",
    "Show CRM system dependencies",
    "What CRM data is most utilized by our AI agents?",
    "How do we ensure data consistency across systems?"
  ],
  'email-platform': [
    "What email deliverability safeguards do we have?",
    "How does it handle email scheduling and follow-ups?",
    "Which agents interact with the email platform?",
    "What email tracking capabilities do we use?",
    "How do we manage email throttling and limits?"
  ],
  'linkedin-sales': [
    "How do our agents integrate with LinkedIn?",
    "What LinkedIn engagement metrics do we track?",
    "How do we coordinate LinkedIn outreach with email?",
    "What connection request limits do we enforce?",
    "How do we measure LinkedIn campaign effectiveness?"
  ],
  'lead-enrichment': [
    "What data sources does our lead enrichment tool use?",
    "How do we validate enriched data accuracy?",
    "What enrichment fields have the highest value?",
    "How frequently do we refresh enrichment data?",
    "What budget do we allocate to data enrichment?"
  ],
  
  // People/Teams
  'sdr-team': [
    "What insights do agents provide to the SDR team?",
    "How has agent use improved outreach effectiveness?",
    "Show SDR productivity metrics",
    "How do SDRs collaborate with the AI system?",
    "What tasks do SDRs still perform manually?"
  ],
  'ae-team': [
    "How do agents prepare AEs for sales conversations?",
    "What feedback loop exists between AEs and SDRs?",
    "How do agents help with sales handoff?",
    "What meeting insights do AEs value most?",
    "How do AEs rate the quality of AI-assisted meetings?"
  ],
  'marketing-team': [
    "How do SDR agents coordinate with marketing campaigns?",
    "What insights do agents share with the marketing team?",
    "How is marketing content used in SDR outreach?",
    "What feedback do SDR agents provide to marketing?",
    "How do we align marketing and sales messaging?"
  ]
};

// General OGI assistant questions
export const generalQuestions = [
  "How are agents connected in our sales development network?",
  "Which agent has the highest usage in our SDR workflow?",
  "Show me the ROI of all sales development agents",
  "Which data sources are most critical for prospecting?",
  "How does information flow between our sales tools?",
  "What security measures protect our prospect data?",
  "Which teams benefit most from our AI agents?",
  "How do our SDR agents coordinate outreach decisions?",
  "What's the overall health of our agent network?",
  "How has SDR agent adoption changed over time?",
  "What are the most common cross-agent workflows?",
  "How do we measure agent effectiveness for SDRs?",
  "What data governance policies apply to prospect data?",
  "How do we ensure consistent messaging across multiple channels?"
];