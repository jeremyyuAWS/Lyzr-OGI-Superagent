import { MessageSquare, Users, Mail, Calendar, BarChart3, CheckCircle, Target, FileSearch, ListTodo, Briefcase, BookOpen, TrendingUp, LineChart, PieChart, Link, Database, ArrowUpCircle, Shield, Settings, Clock, Globe, Search, Laptop, BellRing } from 'lucide-react';
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
      },
      {
        id: '2',
        sender: 'user',
        content: "We're currently targeting the SaaS industry, but I'm not sure if we're being specific enough.",
        timestamp: new Date(Date.now() - 60000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "SaaS is a good starting point, but you're right that it's quite broad. Let me help you narrow it down.\n\nBased on analysis of your current customer base and market trends, I recommend focusing on these SaaS sub-segments:\n\n1. **B2B SaaS platforms** with 100-500 employees\n2. **Vertical SaaS solutions** in fintech, healthtech, and martech\n3. **Growth-stage SaaS companies** that raised Series B or C funding in the last 18 months\n\nThese segments show higher conversion rates and shorter sales cycles for solutions like yours. Would you like me to help you further refine any of these segments?",
        timestamp: new Date(Date.now() - 30000)
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
      },
      {
        id: '2',
        sender: 'user',
        content: "We have a list of companies but we're missing key contact information and tech stack details.",
        timestamp: new Date(Date.now() - 45000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "I'll help you enrich those records with the critical data points. Here's what I recommend:\n\n**Step 1: Contact Enrichment**\n- I can identify key decision-makers at each company based on your target personas\n- For each company, I'll find relevant VP/Director/Manager of Marketing, Sales, and Operations\n- Each contact will include verified email, phone, and LinkedIn profile\n\n**Step 2: Technographic Enrichment**\n- I'll identify their current tech stack, focusing on CRM, Marketing Automation, and Sales Engagement platforms\n- This will help you tailor your outreach based on integration capabilities and tech-based pain points\n\n**Step 3: Intent Signal Overlay**\n- I'll scan for buying signals like content consumption, job postings, and competitor research\n- This helps prioritize accounts showing active interest in solutions like yours\n\nWould you like to start with a batch of 100 companies as a test?",
        timestamp: new Date(Date.now() - 15000)
      }
    ],
    questions: [
      "How can we enrich our lead data most effectively?",
      "What intent signals should we look for in our target accounts?",
      "Which enrichment sources provide the most accurate data?",
      "How can we verify contact information at scale?"
    ]
  },
  
  '4': {
    title: 'Crafting High-Converting Emails',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hi there! I'm your Email Assistant. I can help craft personalized, high-converting emails for your sales outreach. What specific audience or persona are you reaching out to?",
        timestamp: new Date()
      },
      {
        id: '2',
        sender: 'user',
        content: "I need to reach out to VPs of Marketing at SaaS companies with 500+ employees.",
        timestamp: new Date(Date.now() - 50000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "Great target audience! VPs of Marketing at enterprise SaaS companies typically respond best to data-driven, results-focused messaging that addresses their strategic challenges. Here's a draft email for this persona:\n\n```\nSubject: [Research] Marketing attribution challenge at {Company}\n\nHi {FirstName},\n\nI was reviewing {Company}'s recent product launch for {Recent Product} and noticed you're expanding into the {Specific Market} segment – impressive positioning, especially the focus on {Specific Feature/Benefit}.\n\nThis typically creates challenges with:\n\n• Multi-touch attribution across longer enterprise sales cycles\n• Aligning marketing activities with revenue outcomes\n• Demonstrating ROI to leadership, especially with current market pressures\n\nWe've helped marketing leaders at {Similar Company 1} and {Similar Company 2} address these challenges, resulting in 40% more accurate attribution and typically a 15-25% higher marketing-sourced pipeline.\n\nCould I share how these companies implemented this approach during a 15-minute call next week?\n\n{Your Signature}\n```\n\nThis template succeeds because it:\n1. Uses research-focused subject line (52% higher open rates)\n2. Shows you've done specific homework on their company\n3. Addresses common VP-level pain points\n4. Provides social proof with similar companies\n5. Includes specific metrics for credibility\n6. Offers a clear, low-friction next step\n\nWould you like me to customize this further for your specific product or value proposition?",
        timestamp: new Date(Date.now() - 20000)
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
      },
      {
        id: '2',
        sender: 'user',
        content: "We're launching a new feature and want to reengage dormant opportunities from the last 6 months.",
        timestamp: new Date(Date.now() - 55000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "Perfect! Reengaging dormant opportunities with a new feature launch is a great strategy. Here's a multi-channel sequence I recommend for this specific scenario:\n\n**Day 1: Email - New Feature Announcement**\n- Subject: \"New for {Company}: {Feature Name} Now Available\"\n- Focus on how this feature addresses the specific challenge they mentioned in previous conversations\n- Include a visual (GIF or image) of the new feature\n- Soft CTA: \"Would this capability address the {specific pain point} we discussed?\"\n\n**Day 3: LinkedIn Comment + Message**\n- Comment on a recent post (if available) with relevant insight\n- Send connection request if not connected\n- Send InMail/message referencing your comment and the new feature\n\n**Day 5: Email - Case Study**\n- Subject: \"How {Similar Company} used our new {Feature} to {achieve specific result}\"\n- Include specific metrics and outcomes from early adopters\n- End with \"Curious if these results would be valuable for {Company}?\"\n\n**Day 8: Phone Call**\n- Brief voicemail referencing the new feature and previous conversation\n- Focus on new value proposition based on past objections\n\n**Day 10: Email - Break-up**\n- Subject: \"Closing the loop on {Feature Name}\"\n- Brief note mentioning that you'll stop reaching out\n- Include a \"by the way\" mention of one more compelling benefit\n\n**Best Practices for This Sequence:**\n- Personalize each touch with reference to your previous conversations\n- Focus on what's changed since you last spoke (new feature, new market conditions)\n- A/B test mentioning vs. not mentioning the pandemic delay\n\nWould you like me to draft the specific content for each of these touchpoints?",
        timestamp: new Date(Date.now() - 25000)
      }
    ],
    questions: [
      "How many touches should my sequence include?",
      "What's the optimal spacing between touchpoints?",
      "How should we mix email and LinkedIn in our sequence?",
      "When should we include phone calls in our outreach?"
    ]
  },
  
  '8': {
    title: 'SDR Performance Coaching',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Welcome! I'm your SDR Performance Coach. I analyze sales outreach metrics and provide tactical improvements for sales outreach. What specific aspect of your performance would you like to work on?",
        timestamp: new Date()
      },
      {
        id: '2',
        sender: 'user',
        content: "My reply rates are really low compared to the rest of the team. I need help figuring out why and how to fix it.",
        timestamp: new Date(Date.now() - 40000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "I've analyzed your outreach patterns compared to team members with higher reply rates, and I've identified several areas for improvement:\n\n**Key Issues in Your Current Approach:**\n\n1. **Email Structure Issues:**\n   - Your emails average 185 words vs. top performers' 120 words\n   - You use 3+ features per email vs. top performers' focus on 1 key value point\n   - Your CTAs often ask for too much commitment too early\n\n2. **Personalization Approach:**\n   - Your personalization is often generic (\"I noticed your company...\") \n   - Top performers reference specific content, news, or triggers\n   - You're using the same level of personalization for all prospects\n\n3. **Follow-up Effectiveness:**\n   - Your follow-ups often just \"check in\" without adding new value\n   - Your timing clusters around 9-10am when inbox competition is highest\n\n**Recommended Action Plan:**\n\n1. **Immediate Changes (Next 5 days):**\n   - Reduce all email length by 30-40%\n   - Move your sends to 7-8am or 3-4pm (63% higher reply rates)\n   - Test subject lines that ask a question related to their role\n\n2. **Process Improvements (Next 2 weeks):**\n   - Schedule 15 min daily for deeper prospect research before writing\n   - Create a \"value nugget\" document to include in follow-ups\n   - A/B test with more assertive CTAs vs. your current approach\n\nWould you like me to review one of your recent emails and rewrite it using these principles?",
        timestamp: new Date(Date.now() - 10000)
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
      },
      {
        id: '2',
        sender: 'user',
        content: "Can you analyze our current outreach campaign to enterprise accounts? We're not getting the results we expected.",
        timestamp: new Date(Date.now() - 50000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "I've analyzed your enterprise outreach campaign, and I've identified several performance issues and opportunities:\n\n**Campaign Performance Overview:**\n- Open Rate: 28.4% (10.2% below benchmark)\n- Reply Rate: 3.8% (5.7% below benchmark) ⚠️\n- Meeting Rate: 0.8% (2.1% below benchmark) ⚠️\n- Sequence Completion: 64% (on par with benchmark)\n\n**Key Issues Identified:**\n\n1. **Engagement Drop-off:**\n   - 72% of opens occur, but only 13% convert to replies\n   - Highest drop-off occurs after email #2 in the sequence\n\n2. **Persona Performance Disparity:**\n   - CTO persona: 2.1% reply rate\n   - CIO persona: 6.4% reply rate\n   - VP IT persona: 2.8% reply rate\n   - This suggests your CIO messaging is significantly more effective\n\n3. **Content Effectiveness:**\n   - Case study links: 0.4% click rate\n   - Product overview links: 1.2% click rate\n   - ROI calculator: 4.8% click rate ✓\n\n**Recommended Adjustments:**\n\n1. **Immediate Optimization:**\n   - Shift messaging toward ROI/cost-focused value props for all personas\n   - Replace email #2 with the template pattern used for CIO persona\n   - A/B test including the ROI calculator earlier in sequence\n\n2. **Targeting Adjustments:**\n   - Increase focus on companies with recent budget announcements (2.7x more responsive)\n   - Prioritize contacts with 5+ years tenure (responding 40% more frequently)\n\nWould you like me to prepare a more detailed analysis of any specific aspect of the campaign?",
        timestamp: new Date(Date.now() - 20000)
      }
    ],
    questions: [
      "How is our current campaign performing?",
      "Which segments show the highest engagement?",
      "What's our current meeting conversion rate?",
      "How do our metrics compare to industry benchmarks?"
    ]
  },
  
  '12': {
    title: 'Lead Qualification Strategy',
    initialMessages: [
      {
        id: '1',
        sender: 'agent',
        content: "Hello! I'm your Meeting Qualifier Agent. I help ensure you're booking meetings with prospects who are a good fit for your solution. How are you currently qualifying your leads?",
        timestamp: new Date()
      },
      {
        id: '2',
        sender: 'user',
        content: "We're mostly focusing on company size and industry, but we're getting a lot of meetings that don't convert to opportunities. We need better qualification criteria.",
        timestamp: new Date(Date.now() - 45000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "You're right that going beyond basic firmographics will significantly improve your meeting quality. Let me suggest a comprehensive qualification framework that will help book more meaningful meetings:\n\n**MEDPIC Qualification Framework**\n\n1. **M - Metrics:**\n   - What specific KPIs is the prospect trying to improve?\n   - Qualification criteria: Must have at least 2 of these quantifiable pain points:\n     • CAC above industry benchmark\n     • Lead-to-opportunity rate below 15%\n     • Sales cycle longer than 60 days\n     • SDR ramp time exceeding 3 months\n\n2. **E - Economic Buyer:**\n   - Who has budget authority for this purchase?\n   - Qualification criteria: Must have confirmed access to:\n     • Director+ level for initial meeting\n     • VP+ level involved by opportunity stage\n     • Budget owner identified by name\n\n3. **D - Decision Process:**\n   - What's their evaluation and purchase process?\n   - Qualification criteria:\n     • Process can be completed in <90 days\n     • No more than 5 stakeholders required\n     • No competing priorities that would delay decision\n\n4. **P - Pain Points:**\n   - What specific challenges are they facing?\n   - Qualification criteria: Must acknowledge at least 1 primary and 1 secondary:\n     • Primary: Pipeline generation, sales efficiency, conversion rates\n     • Secondary: Analytics, onboarding, scaling, territory management\n\n5. **I - Implementation Timeline:**\n   - When would they implement a solution?\n   - Qualification criteria:\n     • Implementation within next quarter\n     • Resources already allocated for deployment\n     • No major organizational changes pending\n\n6. **C - Current Solution:**\n   - What are they using now to solve this problem?\n   - Qualification criteria:\n     • Using manual process or underperforming tool\n     • Contract renewal within 6 months\n     • Experiencing specific limitations you solve\n\n**Implementation Process:**\n1. Create a pre-call checklist of 5-7 key questions\n2. Add qualification fields to your CRM opportunity records\n3. Score each opportunity against this framework (0-100)\n4. Set minimum threshold for AE handoff at 70+\n\nWould you like me to help you build a custom version of this framework specific to your product and market?",
        timestamp: new Date(Date.now() - 15000)
      }
    ],
    questions: [
      "What qualification criteria should we use?",
      "How can we identify prospects who are ready for a meeting?",
      "What disqualification signals should we watch for?",
      "How do we balance quantity and quality of meetings?"
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
      },
      {
        id: '2',
        sender: 'user',
        content: "I have a first call with the VP of Sales at Acme Corp tomorrow. They're a mid-market SaaS company in the HR tech space.",
        timestamp: new Date(Date.now() - 55000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "I've prepared a comprehensive briefing for your call with the VP of Sales at Acme Corp. Here's everything you need to know:\n\n**Prospect Profile: Acme Corp**\n\n- **Company Overview:**\n  - HR Tech SaaS platform, 280 employees, $42M annual revenue\n  - Series C funding ($25M) closed 7 months ago\n  - Growth rate: ~40% YoY for the past 2 years\n\n- **Sales Organization:**\n  - Team structure: 4 sales managers, ~25 AEs, 12 SDRs\n  - Recently reorganized territories (Q1 2025)\n  - Using Salesforce + Outreach.io + Gong\n\n- **Competitive Landscape:**\n  - Key competitors: Workday, BambooHR, Rippling\n  - Recent market changes: Increased focus on AI-powered recruiting\n\n- **Contact: Sarah Johnson, VP of Sales**\n  - At company for 2.1 years, promoted 6 months ago\n  - Background: Previously Sales Director at ZoomInfo (4 years)\n  - LinkedIn activity: Recently posted about sales productivity challenges\n  - Possible pain points: SDR productivity, pipeline predictability, scaling sales org with new funding\n\n**Recommended Approach:**\n\n- **Key Discussion Points:**\n  1. Congratulate on promotion and recent funding\n  2. Ask about priorities following the territory reorganization\n  3. Explore scaling challenges with 40% growth rate\n  4. Connect their background at ZoomInfo to your data-driven approach\n\n- **Discovery Questions:**\n  - \"What metrics are most important for your SDR team right now?\"\n  - \"How are you currently measuring sales productivity across teams?\"\n  - \"With your recent growth, what's been the biggest challenge in maintaining pipeline quality?\"\n  - \"How satisfied are you with your current tech stack's ability to support your growth?\"\n\n- **Potential Objections & Responses:**\n  - \"We just implemented new tools\" → Focus on complementary value, not replacement\n  - \"Our process is working fine\" → Use industry benchmarks to create healthy tension\n  - \"This isn't a priority right now\" → Tie to post-funding growth objectives\n\n- **Next Steps Strategy:**\n  - If positive: Suggest technical discovery with their Salesforce admin\n  - If hesitant: Offer to share case study from similar HR Tech company\n\nWould you like me to prepare any additional information before your call?",
        timestamp: new Date(Date.now() - 20000)
      }
    ],
    questions: [
      "What should I research before a first meeting?",
      "How do I prepare for common objections?",
      "What discovery questions should I ask?",
      "How should I structure my first call?"
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
      },
      {
        id: '2',
        sender: 'user',
        content: "We're expanding our outreach into Europe. What privacy considerations do we need to be aware of?",
        timestamp: new Date(Date.now() - 40000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "Expanding outreach to Europe involves several critical privacy considerations, primarily around GDPR compliance. Here's what you need to implement:\n\n**1. Legal Basis for Contact**\n\n- **Required Actions:**\n  - Ensure you have a lawful basis for initial contact (legitimate interest most common for B2B)\n  - Document your legitimate interest assessment for each campaign\n  - Create a Prospects Rights Policy document\n\n- **Practical Implementation:**\n  - Add GDPR-compliant language to email footers\n  - Store consent receipts in your CRM\n  - Set up processes to handle right to access/delete requests\n\n**2. Data Minimization & Purpose Limitation**\n\n- **Required Actions:**\n  - Collect only necessary business contact information\n  - Clearly define and limit data usage purposes\n  - Implement data retention policies (typically 12-24 months for prospects)\n\n- **Technical Controls:**\n  - Automatic data purging for inactive prospects older than retention period\n  - Limit prospect data visible to SDRs to necessary fields only\n\n**3. Transparency Requirements**\n\n- **Required Disclosures:**\n  - Identity of your company\n  - Purpose of communication\n  - Source of their contact information\n  - How to opt-out of communications\n\n- **Implementation Examples:**\n```\nYour data: We found your business contact on LinkedIn. View our privacy policy at example.com/privacy or reply \"unsubscribe\" to opt out.  \n```\n\n**4. Cross-Border Transfer Considerations**\n\n- **Required Actions:**\n  - Ensure your CRM and email platforms have EU-approved data transfer mechanisms\n  - Document data flows between EU and non-EU systems\n  - Consider Standard Contractual Clauses for your vendor agreements\n\n**5. AI-Specific Considerations**\n\n- **Required Controls:**\n  - Transparency about AI-assistance in communications\n  - Human review of AI-generated outreach to high-risk sectors\n  - Training datasets should exclude any illegitimately obtained contact data\n\nWould you like me to help you create a GDPR-compliant outreach template for European prospects?",
        timestamp: new Date(Date.now() - 10000)
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
      },
      {
        id: '2',
        sender: 'user',
        content: "How can you help our SDR team be more productive?",
        timestamp: new Date(Date.now() - 50000)
      },
      {
        id: '3',
        sender: 'agent',
        content: "I can help your SDR team dramatically improve productivity in several key areas:\n\n**1. Research & Targeting Automation**\n- Instantly enrich lead data with relevant firmographic and technographic details\n- Create prioritized prospect lists based on your ideal customer profile\n- Identify buying signals and intent data to focus on high-potential accounts\n\n**2. Personalized Outreach at Scale**\n- Draft highly personalized emails tailored to specific personas and industries\n- Create multi-channel sequences across email, LinkedIn, and phone\n- Optimize messaging based on data-driven insights about what works\n\n**3. Process Optimization**\n- Analyze your team's performance to identify areas for improvement\n- Provide coaching based on patterns from top performers\n- Suggest optimal outreach timing based on engagement analysis\n\n**4. Knowledge Acceleration**\n- Instantly access product information, competitor details, and talk tracks\n- Get real-time suggestions for handling objections\n- Identify relevant case studies and content for each prospect\n\nSDR teams using AI assistance typically see:\n- 40-60% reduction in research time\n- 25-35% increase in response rates\n- 15-30% more meetings booked\n- 20-40% faster ramp time for new SDRs\n\nWould you like me to show you a specific example of how this works for a particular part of your SDR workflow?",
        timestamp: new Date(Date.now() - 25000)
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
    
    "How do we balance quantity and quality of meetings?": "To optimize the quantity-quality balance of your meetings, I recommend this framework:\n\n**Step 1: Establish Quality Scoring Criteria**\n\n- Define a clear meeting quality score (MQS) with these components:\n  - Fit score (0-40 points): Alignment with your ICP\n  - Need score (0-30 points): Clear, confirmed pain points\n  - Authority score (0-20 points): Decision-making ability\n  - Timing score (0-10 points): Readiness to evaluate\n\n- Define quality thresholds:\n  - 80-100: High-quality (ideal meetings)\n  - 60-79: Medium-quality (qualified opportunities)\n  - Below 60: Low-quality (should be avoided)\n\n**Step 2: Set Balanced SDR Metrics**\n\nAdjust your SDR metrics from pure quantity to a balanced approach:\n\n- Primary KPIs:\n  - Meeting Acceptance Rate (target: 25-30%)\n  - Quality-Adjusted Meeting Score (= # meetings × avg. quality score)\n  - Meeting-to-Opportunity Conversion (target:, 60%+)\n\n- Secondary KPIs:\n  - Qualification Accuracy Rating (% of meetings meeting quality threshold)\n  - Sales Acceptance Rate (% of meetings accepted by AEs)\n\n**Step 3: Operational Implementation**\n\n- Implement a pre-meeting qualification checklist\n- Create a meeting quality feedback loop with AEs\n- Set minimum quality thresholds rather than pure meeting counts\n- Reward quality-adjusted performance rather than raw meeting numbers\n\nThis approach typically results in 35% fewer total meetings but a 65% increase in opportunities created - a much more efficient use of selling time."
  },
  
  // Default agent responses
  'default': {
    "What capabilities do you offer?": "As an AI assistant for sales development, I offer several capabilities to help streamline and optimize your outreach efforts:\n\n**Prospect Research & Targeting:**\n- Lead enrichment with firmographic and technographic data\n- ICP definition and refinement\n- Buyer persona development\n- Target account prioritization\n\n**Outreach Optimization:**\n- Email writing and optimization\n- Multi-channel sequence design\n- LinkedIn messaging assistance\n- A/B testing of messaging\n\n**Performance Analysis:**\n- Campaign analytics and insights\n- Conversion metrics tracking\n- SDR performance coaching\n- Pipeline forecasting\n\n**Meeting Support:**\n- Lead qualification frameworks\n- Meeting preparation assistance\n- Conversation guidance\n- Meeting note-taking and summarization\n\nI can work within your existing workflow to provide recommendations, generate content, analyze results, and help you continuously improve your sales development process.",
    
    "How can you help improve our sales process?": "I can help improve your sales development process in several impactful ways:\n\n1. **Increase Efficiency:**\n   - Automate repetitive tasks like data entry and enrichment\n   - Pre-qualify leads to focus on high-probability prospects\n   - Generate personalized outreach at scale\n   - Provide quick access to relevant information during calls\n\n2. **Improve Effectiveness:**\n   - Analyze what messaging resonates with different personas\n   - Optimize outreach timing and cadence\n   - Provide data-driven coaching to improve performance\n   - Surface insights from successful patterns\n\n3. **Drive Consistency:**\n   - Standardize qualification criteria\n   - Ensure follow-up on all leads and opportunities\n   - Maintain data quality across your tech stack\n   - Create repeatable, scalable processes\n\n4. **Enable Continuous Improvement:**\n   - Analyze conversion metrics at each funnel stage\n   - Identify bottlenecks in your sales process\n   - Test and measure different approaches\n   - Share best practices across the team\n\nMost teams see a 30-40% increase in productivity and a 15-25% improvement in conversion rates after implementing these AI-assisted workflows.",
    
    "What data do you need to be effective?": "To provide maximum value, I work best with these data sources:\n\n**Essential Data (Minimum Requirements):**\n- **CRM Data:** Contact information, company details, activity history\n- **Email Data:** Message content, open/reply rates, sequence performance\n- **Campaign Data:** Target segments, messaging, conversion metrics\n\n**Enhanced Data (For Advanced Features):**\n- **Enrichment Data:** Firmographic, technographic, and intent signals\n- **Conversation Intelligence:** Call recordings, meeting transcripts\n- **Website Analytics:** Visitor behavior, content engagement\n- **Sales Engagement Platform:** Multi-channel activity tracking\n\n**Integration Methods:**\n- Direct API connections to your key systems\n- Scheduled data imports/exports\n- Manual uploads for specific analyses\n\nI employ strong data security practices including encryption, access controls, and data minimization to protect sensitive information. All data processing adheres to relevant privacy regulations including GDPR, CCPA, and industry standards.",
    
    "How do you integrate with our existing tools?": "I can integrate with your sales tech stack in multiple ways:\n\n**CRM Systems:**\n- Salesforce: Native integration via API\n- HubSpot: Two-way sync with workflows\n- Pipedrive/Close/Zoho: API connections\n\n**Sales Engagement Platforms:**\n- Outreach/SalesLoft: Template libraries, sequence analytics\n- Apollo/ZoomInfo: Contact data enrichment\n- Reply/Lemlist: Campaign performance analysis\n\n**Communication Tools:**\n- Email providers: Gmail, Outlook, custom SMTP\n- Calendar apps: Google Calendar, Outlook Calendar\n- Meeting tools: Zoom, Teams, Google Meet\n\n**Data & Analytics:**\n- BI tools: Power BI, Tableau, Looker\n- Spreadsheets: Excel, Google Sheets\n- Custom dashboards: Embedded analytics\n\n**Setup Process:**\n1. API configuration (typically 1-2 hours with IT support)\n2. Data mapping customization (1 day)\n3. Permission and access controls (1-2 hours)\n4. Testing and validation (1-2 days)\n\nMost teams can be fully operational with all integrations in less than a week with minimal IT resources required."
  }
};