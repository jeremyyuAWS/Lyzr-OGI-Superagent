import { Agent } from '../types/agents';

export interface Message {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

interface DemoScenario {
  title: string;
  initialMessages: Message[];
  questions: string[];
}

export const agentDemoScenarios: Record<string, DemoScenario> = {
  // ICP & Strategy Agents
  '1': {
    title: 'Defining Your Ideal Customer Profile',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome to the ICP Assistant! I'll help you define and refine your ideal customer profile to focus your sales development efforts. What industry or segment are you currently targeting?",
        timestamp: new Date()
      }
    ],
    questions: [
      "Which industries should we focus on for our product?",
      "What company size range is ideal for our solution?",
      "How do we identify the right decision makers?",
      "What are the key indicators of a good-fit company?"
    ]
  },
  
  '2': {
    title: 'Lead Enrichment Strategies',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your Lead Enrichment Agent. I can help add valuable firmographic, technographic, and intent data to your prospect records. What kind of information are you looking to enhance?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How can we enrich our lead data most effectively?",
      "What intent signals should we look for in our target accounts?",
      "Which enrichment sources provide the most accurate data?",
      "How can we verify contact information at scale?"
    ]
  },
  
  '3': {
    title: 'Creating Effective Buyer Personas',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome to the Persona Generator! I'll help you create detailed buyer personas for testing and targeting. Let's start by identifying the key roles involved in your purchase process.",
        timestamp: new Date()
      }
    ],
    questions: [
      "How do we create effective buyer personas?",
      "What attributes should be included in our personas?",
      "How many personas should we target in our outreach?",
      "How can we test which personas respond best to our message?"
    ]
  },
  
  // Outreach Agents
  '4': {
    title: 'Crafting High-Converting Emails',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your Email Assistant. I can help craft personalized, high-converting emails for your sales outreach. What specific audience or persona are you reaching out to?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How can we improve our email open rates?",
      "What subject lines are performing best right now?",
      "Help me craft a follow-up email for a prospect who went cold",
      "What's the ideal length for a cold outreach email?"
    ]
  },
  
  '5': {
    title: 'Building Multi-Channel Sequences',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome to the Sequence Builder! I'll help you design effective multi-channel outreach sequences that combine email, LinkedIn, and other touchpoints. What's the goal of your campaign?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How many touches should my sequence include?",
      "What's the optimal spacing between touchpoints?",
      "How should we mix email and LinkedIn in our sequence?",
      "When should we include phone calls in our outreach?"
    ]
  },
  
  '6': {
    title: 'LinkedIn Outreach Optimization',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your LinkedIn Outreach Agent. I can help you optimize connection requests, InMail messages, and engagement strategies on LinkedIn. What aspect of LinkedIn outreach are you focusing on?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What's the best way to write LinkedIn connection requests?",
      "How can we improve our InMail response rates?",
      "What LinkedIn engagement strategies work best?",
      "How should our LinkedIn messaging differ from email?"
    ]
  },
  
  '7': {
    title: 'Content Recommendations',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your Content Recommendations Agent. I can help you find the most relevant content to share with prospects based on their interests, industry, and stage in the buyer journey. What are you looking for today?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What content works best for initial outreach?",
      "How should we share case studies effectively?",
      "What content should I share with a finance leader?",
      "How do I know which content to use at each stage?"
    ]
  },
  
  // Analytics & Performance
  '8': {
    title: 'SDR Performance Coaching',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome! I'm your SDR Performance Coach. I analyze sales outreach metrics and provide tactical recommendations to improve your results. What specific aspect of your performance would you like to work on?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How can our team improve response rates?",
      "What are top performers doing differently?",
      "How can we optimize our outreach timing?",
      "What metrics should we focus on improving?"
    ]
  },
  
  '9': {
    title: 'Campaign Analytics Review',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your Analytics Agent. I can help you understand your campaign performance metrics and identify opportunities for improvement. What data would you like to analyze?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How is our current campaign performing?",
      "Which segments show the highest engagement?",
      "What's our current meeting conversion rate?",
      "How do our metrics compare to industry benchmarks?"
    ]
  },
  
  '10': {
    title: 'A/B Testing Analysis',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome to the A/B Testing Analyst! I help design and analyze experiments to optimize your sales outreach. What aspect of your messaging would you like to test and improve?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How should we structure our next A/B test?",
      "What sample size do we need for reliable results?",
      "What elements have the biggest impact on response rates?",
      "How do we interpret our testing results properly?"
    ]
  },
  
  '11': {
    title: 'Pipeline Forecasting',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your Pipeline Forecast Agent. I can help predict future sales pipeline based on your current outreach activities and historical conversion data. What would you like to know about your future pipeline?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What will our pipeline look like next quarter?",
      "How many meetings do we need to hit our targets?",
      "What's our projected conversion rate?",
      "Where are the biggest risks in our forecast?"
    ]
  },
  
  // Meeting & Qualification 
  '12': {
    title: 'Lead Qualification Strategy',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your Meeting Qualifier Agent. I help ensure you're booking meetings with prospects who are a good fit for your solution. How are you currently qualifying your leads?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What qualification criteria should we use?",
      "How can we identify prospects who are ready for a meeting?",
      "What disqualification signals should we watch for?",
      "How do we balance quantity and quality of meetings?"
    ]
  },
  
  '13': {
    title: 'Optimizing Meeting Scheduling',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your Meeting Scheduler Agent. I help streamline the process of getting meetings on the calendar while minimizing friction. What challenges are you facing with scheduling?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How can we reduce no-show rates?",
      "What's the best way to schedule with busy executives?",
      "How many time options should we offer?",
      "What information should we collect before scheduling?"
    ]
  },
  
  '14': {
    title: 'Meeting Preparation',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your Call Prep Agent. I help you prepare for sales calls by researching prospects, identifying talking points, and preparing for potential objections. What upcoming call would you like help with?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What should I research before a first meeting?",
      "How do I prepare for common objections?",
      "What discovery questions should I ask?",
      "How should I structure my first call?"
    ]
  },
  
  '15': {
    title: 'Meeting Note Optimization',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your Meeting Notes Agent. I can help you capture and organize key information from your sales conversations, identify action items, and suggest follow-up strategies. How can I assist with your meeting notes today?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What should be included in effective meeting notes?",
      "How can we standardize our meeting summaries?",
      "What follow-up actions should I take after a meeting?",
      "How can we track key insights across multiple meetings?"
    ]
  },
  
  // Technical & Support
  '16': {
    title: 'Integration Strategy',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your Integration Agent. I can help connect and optimize your sales tools and data flows between systems. What integrations are you looking to set up or improve?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How should we integrate our CRM with other tools?",
      "What data should flow between systems?",
      "How can we reduce manual data entry?",
      "What's the best way to keep our data in sync?"
    ]
  },
  
  '17': {
    title: 'CRM Data Management',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your CRM Updater Agent. I help maintain accurate data in your CRM by automating updates, ensuring clean records, and syncing information from various sources. What CRM challenges are you facing?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How can we improve our CRM data quality?",
      "What fields should we track for effective reporting?",
      "How should we structure our contact and account records?",
      "What automation can we set up for data maintenance?"
    ]
  },
  
  '19': {
    title: 'General SDR Assistance',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your SDR General Assistant. I can help with any questions about your sales development process, tools, or best practices. What can I help you with today?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What's the typical day of a high-performing SDR?",
      "How should I prioritize my tasks for maximum output?",
      "What resources are available for improving my skills?",
      "How can I use the various SDR agents effectively?"
    ]
  },
  
  '20': {
    title: 'Responsible AI in Sales',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome! I'm your Responsible AI Agent. I ensure our sales development AI practices remain ethical, compliant, and respectful of prospect privacy. What aspect of responsible AI would you like to explore?",
        timestamp: new Date()
      }
    ],
    questions: [
      "How do we ensure compliance with privacy regulations?",
      "What ethical considerations apply to AI-assisted outreach?",
      "How do we maintain transparency with prospects?",
      "What data practices should we follow for responsible use?"
    ]
  },
  
  // Default for other agents
  'default': {
    title: 'AI Assistant Demo',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome to the AI assistant demo. I'm here to help with your sales development needs. What can I assist you with today?",
        timestamp: new Date()
      }
    ],
    questions: [
      "What capabilities do you offer?",
      "How can you help improve our sales process?",
      "What data do you need to be effective?",
      "How do you integrate with our existing tools?"
    ]
  }
};

export const agentResponses: Record<string, Record<string, string>> = {
  // ICP Assistant
  '1': {
    "Which industries should we focus on for our product?": "Based on your solution's capabilities and current market conditions, I recommend focusing on these top 3 industries:\n\n1. **SaaS/Technology** - High digital adoption, clear ROI for your solution\n2. **Financial Services** - Strong budget allocation for your type of solution\n3. **Healthcare Tech** - Growing rapidly with increasing needs for your capabilities\n\nI'd suggest starting with SaaS companies with 100-500 employees that have recently raised Series B or C funding, as they typically have the budget, need, and agility to adopt new solutions quickly.",
    
    "What company size range is ideal for our solution?": "For your solution, the sweet spot appears to be mid-market companies with 100-1000 employees. Here's why:\n\n- **100-250 employees**: Organizations at this size are establishing formal processes but lack extensive resources. They have the pain point but may have limited budget.\n\n- **250-500 employees**: This is your primary ICP segment. These companies have the budget, sophisticated enough needs, and aren't too complex for implementation.\n\n- **500-1000 employees**: Secondary ICP with higher deal values but longer sales cycles.\n\nCompanies under 100 employees typically don't have enough complexity to justify your solution, while enterprise (1000+) requires more customization and introduces longer sales cycles.",
    
    "How do we identify the right decision makers?": "For your solution, you should target a combination of these key roles:\n\n**Primary decision makers:**\n- VP/Director of Operations (economic buyer, 42% of cases)\n- Head of Revenue Operations (technical evaluator, 37% of cases)\n\n**Important influencers:**\n- Sales Operations Manager (user buyer, critical for adoption)\n- CRO/VP Sales (executive sponsor for larger deals)\n\nLook for signals like:\n- Recent promotion to role (within 3-9 months)\n- Engagement with relevant content topics\n- Prior experience with similar solutions\n- LinkedIn posts about scaling challenges\n\nThe most successful approach is a multi-threaded strategy targeting both the economic buyer and user buyer simultaneously.",
    
    "What are the key indicators of a good-fit company?": "Based on analysis of your successful customers, these are the top indicators of a good-fit company:\n\n**Firmographic Signals:**\n- Growth rate: 20%+ year-over-year\n- Recent funding: Series B+ in last 18 months\n- Sales team size: 10+ SDRs/AEs\n\n**Technographic Signals:**\n- CRM: Salesforce or HubSpot (required for integration)\n- Marketing Automation: Active users of Marketo, Pardot, or HubSpot\n- Sales Engagement: Using Outreach, SalesLoft, or similar platforms\n\n**Behavioral Signals:**\n- Hiring for sales/growth roles\n- Recently appointed new CRO/VP Sales\n- Content engagement around scaling sales operations\n\n**Additional Good-fit Indicators:**\n- Multiple product lines/offerings (complexity you solve for)\n- International or multi-region operations\n- Partner/channel sales component\n\nI can help you build a scoring model based on these criteria to prioritize your outreach efforts."
  },
  
  // Lead Enrichment
  '2': {
    "How can we enrich our lead data most effectively?": "For maximum enrichment effectiveness, I recommend a layered approach:\n\n1. **Foundational Data (Tier 1):**\n   - Company: Size, industry, location, revenue\n   - Contact: Title, department, seniority, reporting structure\n   - Technology: Current tech stack relevant to your solution\n\n2. **Engagement Data (Tier 2):**\n   - Intent signals: Content consumption, research behavior\n   - Social activity: LinkedIn engagement, posts, comments\n   - Event participation: Webinars, conferences\n\n3. **Predictive Data (Tier 3):**\n   - Growth signals: Hiring patterns, funding, expansion\n   - Competitive dynamics: Vendor switches, contract renewals\n   - Buying committee mapping\n\n**Recommended Data Providers:**\n- ZoomInfo + Clearbit for foundational data (highest accuracy)\n- Bombora for intent data\n- 6sense for predictive insights\n\nYou should refresh this data on different schedules: Tier 1 quarterly, Tier 2 monthly, and Tier 3 weekly for the most active prospects.",
    
    "What intent signals should we look for in our target accounts?": "The most predictive intent signals for your solution category are:\n\n**High Intent (Immediate Outreach Priority):**\n- Researching your specific competitors (indicates active buying cycle)\n- Consuming content on implementation methodologies (late-stage intent)\n- Multiple stakeholders researching relevant topics\n- Job postings for roles your solution would support\n\n**Medium Intent (24-48 Hour Outreach):**\n- Research on pain points your product solves\n- Technology review activity (evaluation stage)\n- Industry-specific solution research\n\n**Early Intent (Nurture Campaign):**\n- General category education content\n- Related topic consumption\n- Early-stage problem identification content\n\nI'd recommend configuring your intent data provider to track these specific topics and setting up automated alerts for high-intent signals to trigger immediate outreach by your SDR team.",
    
    "Which enrichment sources provide the most accurate data?": "Based on comparative accuracy analysis across data providers for your specific target market:\n\n**Company Data Accuracy:**\n1. ZoomInfo (92% accuracy) - Best for company size, revenue\n2. Clearbit (89% accuracy) - Best for technographics\n3. Crunchbase (85% accuracy) - Best for funding data\n\n**Contact Data Accuracy:**\n1. LinkedIn Sales Navigator (94% accuracy) - Best for titles, roles\n2. ZoomInfo (88% accuracy) - Best for direct dials\n3. Lusha (84% accuracy) - Good value for email verification\n\n**Intent Data Quality:**\n1. Bombora (78% signal relevance) - Widest B2B coverage\n2. G2 (92% accuracy but limited scope) - Highly specific but narrower\n3. 6sense (83% relevance) - Best for anonymous visitor identification\n\nI recommend a hybrid approach: Use ZoomInfo as your primary source, supplement with LinkedIn Sales Navigator for contact validation, and layer in Bombora for intent signals. This combination provides the best balance of accuracy and coverage for your target market.",
    
    "How can we verify contact information at scale?": "Here's a comprehensive strategy for contact verification at scale:\n\n1. **Multi-tier Verification Process**\n   - First pass: Email syntax validation (immediate)\n   - Second pass: Domain verification (immediate)\n   - Third pass: Email ping verification (batched)\n   - Fourth pass: AI pattern recognition for suspected role-based emails\n\n2. **Frequency & Timing**\n   - Verify contacts immediately upon import\n   - Re-verify contacts older than 90 days before campaign inclusion\n   - Implement verification triggers (job changes, company news)\n\n3. **Tool Recommendations**\n   - Primary: NeverBounce (98.2% accuracy in your industry)\n   - Secondary: Clearout (cost-effective for bulk verification)\n   - Verification API: Connect directly to your CRM\n\n4. **Process Optimization**\n   - Use pattern matching for pre-verification\n   - Implement progressive profiling in forms\n   - Deploy fallback verification for critical accounts\n\nWith this approach, you can achieve >95% deliverability while maintaining a verification cost of <$0.03 per contact."
  },
  
  // Email Assistant 
  '4': {
    "How can we improve our email open rates?": "Based on your current campaign data, here are the top strategies to improve open rates:\n\n**Subject Line Optimization:**\n- Use 4-7 word subject lines (your best performers average 5.3 words)\n- Include either specificity or curiosity gap, not both\n- Remove all buzzwords and jargon\n- Top-performing formats: question, statistic, personalized insight\n\n**Send Time Optimization:**\n- For your C-suite prospects: Tuesday/Wednesday 6:30-8:00am\n- For Directors/VPs: Tuesday/Thursday 10:00-11:00am\n- For Managers: Wednesday/Thursday 2:00-3:30pm\n\n**Personalization Elements:**\n- Reference specific company events in subject line (+42% open rate)\n- Include prospect's company name in subject line (+18% open rate)\n- Avoid first name in subject line for cold outreach (-8% open rate)\n\n**Technical Improvements:**\n- Set up DKIM/SPF/DMARC records (reduces spam filtering)\n- Warm up new sending domains gradually\n- Segment sending domains by prospect industry\n\nImplementing these changes should increase your average open rate from current 22% to 30-35% within 30 days.",
    
    "What subject lines are performing best right now?": "Here's an analysis of your top-performing subject lines by category based on the last 90 days of data:\n\n**Question Format (38.4% average open rate):**\n- \"Quick question about {Company}'s approach to {relevant process}?\"\n- \"Have you considered this for {Company's} {department}?\"\n\n**Personalized Insight (37.2% average open rate):**\n- \"Noticed {Company} recently {specific event or news}\"\n- \"Thoughts on {Company's} approach to {industry challenge}\"\n\n**Value-Driven (35.8% average open rate):**\n- \"{Specific metric} improvement for companies like {Company}\"\n- \"How {similar companies} are addressing {specific pain point}\"\n\n**Contrarian/Pattern Interrupt (34.1% average open rate):**\n- \"Contrary to popular belief about {industry topic}\"\n- \"The problem with most {industry} approaches\"\n\n**Poorly Performing Approaches:**\n- Generic benefit statements (18.2% open rate)\n- \"Checking in\" or \"Following up\" (12.1% open rate)\n- Long, feature-focused subjects (16.5% open rate)\n\nI recommend A/B testing variations of the top two categories with your next campaign.",
    
    "Help me craft a follow-up email for a prospect who went cold": "Here's a tailored follow-up email for re-engaging a cold prospect:\n\n```\nSubject: Still worth a conversation, {FirstName}?\n\nHi {FirstName},\n\nI noticed we haven't connected since my last message about {brief value proposition}.\n\nThere could be many reasons – perhaps the timing wasn't right, priorities shifted, or my message didn't address your specific challenges around {specific pain point relevant to role}.\n\nRecently, I helped {similar company} achieve {specific result} by {brief explanation of how}. They were facing similar challenges with {pain point}.\n\nWould it make sense to have a quick 15-minute call to explore if we could deliver similar results for {Company}? If not, would you mind sharing what changed or where I missed the mark?\n\n{standard signature with calendar link}\n\nP.S. If this isn't relevant anymore, just let me know, and I'll close this thread.\n```\n\nThis template works because it:\n1. Uses a direct subject line that prompts a decision\n2. Acknowledges the silence without being accusatory\n3. Provides fresh value through a relevant customer story\n4. Offers a clear, low-commitment next step\n5. Makes it easy to say no (which often increases response rates)\n\nFor best results, personalize the {similar company} and {specific result} with actual data relevant to the prospect's industry and role.",
    
    "What's the ideal length for a cold outreach email?": "Based on analysis of over 25,000 cold emails, the ideal length varies by prospect seniority and outreach stage:\n\n**C-Suite Executives:**\n- Optimal length: 50-75 words\n- Format: 2-3 short paragraphs\n- Key elements: Direct value statement, social proof, clear CTA\n- Above 100 words sees a 38% drop in response rate\n\n**Directors and VPs:**\n- Optimal length: 75-125 words\n- Format: 3-4 paragraphs with bullets for scanning\n- Key elements: Personalization, problem statement, proof point\n- Response rates highest with 1-2 specific questions included\n\n**Managers/Individual Contributors:**\n- Optimal length: 100-150 words\n- Format: More detailed with clear section breaks\n- Key elements: Specific value metrics, role-relevant challenges\n\n**Cold Email Template Structure (75-125 words):**\n- Opening: 1 sentence personalized hook (15-20 words)\n- Problem: 1-2 sentences on relevant challenge (25-30 words)\n- Solution/Value: 1-2 sentences with clear value (25-30 words)\n- CTA: 1 clear, simple next step (15-20 words)\n\nRemember to focus on value-to-word ratio rather than just word count. Every sentence should earn its place in the email with a clear purpose."
  },
  
  // Meeting Qualifier
  '12': {
    "What qualification criteria should we use?": "Based on your solution and market, I recommend this qualification framework:\n\n**Primary Qualification Criteria (Required):**\n\n1. **Fit** (40% of qualification score)\n   - Company size: 250-2,500 employees\n   - Industry: Technology, Financial Services, Healthcare\n   - Annual revenue: $25M-$500M\n   - Technology stack: Using {complementary technologies}\n\n2. **Need** (30% of qualification score)\n   - Experiencing at least 2 of your top 3 pain points\n   - Currently using a competitive or legacy solution\n   - Growth rate >20% (creating scaling challenges)\n\n3. **Authority** (20% of qualification score)\n   - Director+ level for initial meetings\n   - Direct involvement in {relevant process}\n   - Budget ownership or influence\n\n4. **Timing** (10% of qualification score)\n   - Active initiative in related area\n   - Recent trigger event (new leadership, funding)\n   - Contract renewal within 3-6 months\n\n**Implementation Recommendation:**\n- Create a weighted scoring model in CRM (0-100)\n- Auto-route leads scoring 70+ to direct outreach\n- Leads scoring 40-69 to nurture campaigns\n- Below 40 points: deprioritize\n\nThis model has shown 2.4x higher conversion to opportunity in similar organizations.",
    
    "How can we identify prospects who are ready for a meeting?": "Here's how to identify meeting-ready prospects using behavioral and contextual signals:\n\n**High-Intent Behavioral Signals (Immediate Outreach):**\n\n1. **Digital Body Language:**\n   - Multiple visits to pricing or product pages (3+ in 7 days)\n   - Bottom-of-funnel content consumption (case studies, comparison guides)\n   - Multiple stakeholders from same company viewing content\n   - Demo request or assessment tool engagement\n\n2. **Engagement Patterns:**\n   - Replied to 2+ emails in a sequence\n   - Engaged with personalized video content (>75% watched)\n   - Asked specific questions about capabilities\n   - Engaged across multiple channels (email + social)\n\n**Contextual Readiness Signals:**\n\n1. **Company Triggers:**\n   - New executive hire in relevant role (past 60 days)\n   - Recent funding announcement (Series B or later)\n   - Reorganization or strategic shift announcements\n   - Implementation of complementary technology\n\n2. **Contact Triggers:**\n   - Job change to decision-making role (past 90 days)\n   - LinkedIn posts about relevant challenges\n   - Engagement with competitor content\n\n**Implementation Actions:**\n- Create trigger-based alert system for sales team\n- Develop a fast-track outreach process for high-intent leads\n- Create a \"meeting ready\" lead stage with automated routing\n\nThis approach typically increases meeting acceptance rates by 3.2x compared to traditional time-based sequences.",
    
    "What disqualification signals should we watch for?": "Here are the key disqualification signals that help avoid wasting time on poor-fit opportunities:\n\n**Hard Disqualification Signals (Exit from sequences):**\n\n1. **Firmographic Misfit:**\n   - Company size <50 employees or >10,000 employees\n   - Industries with regulatory barriers to your solution\n   - Geographic regions you cannot service\n   - Annual revenue below minimum threshold for ROI\n\n2. **Technical Blockers:**\n   - Incompatible core systems that prevent integration\n   - Recently signed with direct competitor (past 6 months)\n   - Technical requirements you cannot meet\n\n3. **Explicit Rejection:**\n   - Clear opt-out or \"not interested\" response\n   - Legal/compliance concerns stated\n   - Specific negative feedback about solution fit\n\n**Soft Disqualification Signals (Reduce priority/change approach):**\n\n1. **Buying Process Indicators:**\n   - Excessive stakeholders required (>5 for decision)\n   - Unrealistic timeline expectations\n   - Historical pattern of evaluating but not purchasing\n   - Budget holder not involved after 2+ conversations\n\n2. **Engagement Patterns:**\n   - No response to 5+ personalized outreach attempts\n   - Repeated meeting no-shows or cancellations\n   - Engagement only with low-intent top-funnel content\n\n**Recommended Actions:**\n- Create a disqualification checklist in your CRM\n- Add automated tagging for key disqualification signals\n- Develop specific \"deferred interest\" sequences for soft disqualifications\n- Track opportunity cost of pursuing low-fit prospects\n\nProperly disqualifying leads can improve your team's productive selling time by up to 28%.",
    
    "How do we balance quantity and quality of meetings?": "To optimize the quantity-quality balance of your meetings, I recommend this framework:\n\n**Step 1: Establish Quality Scoring Criteria**\n\n- Define a clear meeting quality score (MQS) with these components:\n  - Fit score (0-40 points): Alignment with your ICP\n  - Need score (0-30 points): Clear, confirmed pain points\n  - Authority score (0-20 points): Decision-making ability\n  - Timing score (0-10 points): Readiness to evaluate\n\n- Define quality thresholds:\n  - 80-100: High-quality (ideal meetings)\n  - 60-79: Medium-quality (qualified opportunities)\n  - Below 60: Low-quality (should be avoided)\n\n**Step 2: Set Balanced SDR Metrics**\n\nAdjust your SDR metrics from pure quantity to a balanced approach:\n\n- Primary KPIs:\n  - Meeting Acceptance Rate (target: 25-30%)\n  - Quality-Adjusted Meeting Score (= # meetings × avg. quality score)\n  - Meeting-to-Opportunity Conversion (target: 60%+)\n\n- Secondary KPIs:\n  - Qualification Accuracy Rating (% of meetings meeting quality threshold)\n  - Sales Acceptance Rate (% of meetings accepted by AEs)\n\n**Step 3: Operational Implementation**\n\n- Implement a pre-meeting qualification checklist\n- Create a meeting quality feedback loop with AEs\n- Set minimum quality thresholds rather than pure meeting counts\n- Reward quality-adjusted performance rather than raw meeting numbers\n\nThis approach typically results in 35% fewer total meetings but a 65% increase in opportunities created - a much more efficient use of selling time."
  },
  
  // Default agent responses
  'default': {
    "What capabilities do you offer?": "As an AI assistant for sales development, I offer several capabilities to help streamline and optimize your outreach efforts:\n\n**Prospect Research & Targeting:**\n- Lead enrichment with firmographic and technographic data\n- ICP definition and refinement\n- Buyer persona development\n- Target account prioritization\n\n**Outreach Optimization:**\n- Email writing and optimization\n- Multi-channel sequence design\n- LinkedIn messaging assistance\n- A/B testing of messaging\n\n**Performance Analysis:**\n- Campaign analytics and insights\n- Conversion metrics tracking\n- SDR performance coaching\n- Pipeline forecasting\n\n**Meeting Support:**\n- Lead qualification frameworks\n- Meeting preparation assistance\n- Conversation guidance\n- Meeting note-taking and summarization\n\nI can work within your existing workflow to provide recommendations, generate content, analyze results, and help you continuously improve your sales development process.",
    
    "How can you help improve our sales process?": "I can help improve your sales development process in several impactful ways:\n\n1. **Increase Efficiency:**\n   - Automate repetitive tasks like data entry and enrichment\n   - Pre-qualify leads to focus on high-probability prospects\n   - Generate personalized outreach at scale\n   - Provide quick access to relevant information during calls\n\n2. **Improve Effectiveness:**\n   - Analyze what messaging resonates with different personas\n   - Optimize outreach timing and cadence\n   - Provide data-driven coaching to improve performance\n   - Surface insights from successful patterns\n\n3. **Drive Consistency:**\n   - Standardize qualification criteria\n   - Ensure follow-up on all leads and opportunities\n   - Maintain data quality across your tech stack\n   - Create repeatable, scalable processes\n\n4. **Enable Continuous Improvement:**\n   - Analyze conversion metrics at each funnel stage\n   - Identify bottlenecks in your sales process\n   - Test and measure different approaches\n   - Share best practices across the team\n\nMost teams see a 30-40% increase in productivity and a 15-25% improvement in conversion rates after implementing these AI-assisted workflows.",
    
    "What data do you need to be effective?": "To provide maximum value, I work best with these data sources:\n\n**Essential Data (Minimum Requirements):**\n- **CRM Data:** Contact information, company details, activity history\n- **Email Data:** Message content, open/reply rates, sequence performance\n- **Campaign Data:** Target segments, messaging, conversion metrics\n\n**Enhanced Data (For Advanced Features):**\n- **Enrichment Data:** Firmographic, technographic, and intent signals\n- **Conversation Intelligence:** Call recordings, meeting transcripts\n- **Website Analytics:** Visitor behavior, content engagement\n- **Sales Engagement Platform:** Multi-channel activity tracking\n\n**Integration Methods:**\n- Direct API connections to your key systems\n- Scheduled data imports/exports\n- Manual uploads for specific analyses\n\nI employ strong data security practices including encryption, access controls, and data minimization to protect sensitive information. All data processing adheres to relevant privacy regulations including GDPR, CCPA, and industry standards.",
    
    "How do you integrate with our existing tools?": "I can integrate with your sales tech stack in multiple ways:\n\n**CRM Systems:**\n- Salesforce: Native integration via API\n- HubSpot: Two-way sync with workflows\n- Pipedrive/Close/Zoho: API connections\n\n**Sales Engagement Platforms:**\n- Outreach/SalesLoft: Template libraries, sequence analytics\n- Apollo/ZoomInfo: Contact data enrichment\n- Reply/Lemlist: Campaign performance analysis\n\n**Communication Tools:**\n- Email providers: Gmail, Outlook, custom SMTP\n- Calendar apps: Google Calendar, Outlook Calendar\n- Meeting tools: Zoom, Teams, Google Meet\n\n**Data & Analytics:**\n- BI tools: Power BI, Tableau, Looker\n- Spreadsheets: Excel, Google Sheets\n- Custom dashboards: Embedded analytics\n\n**Setup Process:**\n1. API configuration (typically 1-2 hours with IT support)\n2. Data mapping customization (1 day)\n3. Permission and access controls (1-2 hours)\n4. Testing and validation (1-2 days)\n\nMost teams can be fully operational with all integrations in less than a week with minimal IT resources required."
  }
};