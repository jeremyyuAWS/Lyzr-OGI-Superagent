import { Agent } from '../types/agents';

export interface Message {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

export interface DemoScenario {
  id: string;
  title: string;
  description: string;
  questions: string[];
  initialMessages: Message[];
}

// Map of agent ID to their demo scenarios
export const agentDemoScenarios: Record<string, DemoScenario> = {
  // General Purpose
  '1': {
    id: 'compliance-demo',
    title: 'Regulatory Compliance Demo',
    description: 'See how our Regulatory Compliance Agent ensures adherence to regulations',
    questions: [
      'Verify compliance with recent regulatory changes',
      'Generate a compliance report for this product',
      'What KYC requirements apply to this customer type?',
      'Identify potential compliance risks in this process'
    ],
    initialMessages: [
      {
        id: 'compliance-1',
        sender: 'agent',
        content: 'Welcome to the Regulatory Compliance demo. I ensure banking operations adhere to current regulations and compliance requirements. I monitor regulatory changes, assess impacts, and guide implementation of compliance measures. How can I assist with your compliance needs today?',
        timestamp: new Date()
      }
    ]
  },
  '2': {
    id: 'competitor-demo',
    title: 'Competitor Research Demo',
    description: 'Experience how our Competitor Research Agent analyzes market offerings',
    questions: [
      'Compare our mortgage rates to main competitors',
      'What new features are competitors offering?',
      'Analyze pricing trends in checking accounts',
      'Identify competitive gaps in our product lineup'
    ],
    initialMessages: [
      {
        id: 'competitor-1',
        sender: 'agent',
        content: 'Welcome to the Competitor Research demo. I monitor and analyze competitor products, pricing, and strategies to inform business decisions. I can provide competitive intelligence, market trends, and strategic insights. What competitive analysis would you like me to demonstrate today?',
        timestamp: new Date()
      }
    ]
  },
  '3': {
    id: 'fraud-demo',
    title: 'Fraud Detection Demo',
    description: 'Experience how our Fraud Detection Agent identifies suspicious activities',
    questions: [
      'Analyze this transaction for potential fraud',
      'What patterns suggest this might be fraudulent?',
      'Calculate the risk score for this activity',
      'What actions should we take for this case?'
    ],
    initialMessages: [
      {
        id: 'fraud-1',
        sender: 'agent',
        content: 'Welcome to the Fraud Detection demo. I monitor transactions in real-time to identify and prevent fraudulent activities. I analyze patterns, behaviors, and risk indicators to protect our customers and the bank from financial losses. How can I demonstrate my fraud detection capabilities today?',
        timestamp: new Date()
      }
    ]
  },
  '4': {
    id: 'sentiment-demo',
    title: 'Customer Sentiment Analysis Demo',
    description: 'See how our Customer Sentiment Agent analyzes feedback across channels',
    questions: [
      'Analyze sentiment trends from recent feedback',
      'What are the top customer pain points?',
      'How has sentiment changed after our recent update?',
      'Compare satisfaction across different channels'
    ],
    initialMessages: [
      {
        id: 'sentiment-1',
        sender: 'agent',
        content: 'Welcome to the Customer Sentiment Analysis demo. I analyze customer feedback across channels to identify sentiment trends and improvement areas. I can help you understand customer perceptions, track satisfaction metrics, and identify opportunities for enhancement. What sentiment analysis would you like to see?',
        timestamp: new Date()
      }
    ]
  },
  '5': {
    id: 'doc-process-demo',
    title: 'Document Processing Demo',
    description: 'Experience how our Document Processing Agent extracts and processes data',
    questions: [
      'Extract data from this financial statement',
      'Process this batch of invoices',
      'Validate information on this ID document',
      'Categorize and file these customer documents'
    ],
    initialMessages: [
      {
        id: 'doc-process-1',
        sender: 'agent',
        content: 'Welcome to the Document Processing demo. I extract and process data from various document types to automate administrative tasks. I can analyze documents, extract structured data, and integrate with banking systems to streamline operations. What document processing task would you like me to demonstrate?',
        timestamp: new Date()
      }
    ]
  },
  '6': {
    id: 'predictive-demo',
    title: 'Predictive Analytics Demo',
    description: 'See how our Predictive Analytics Agent forecasts trends and behaviors',
    questions: [
      'Forecast deposit growth for next quarter',
      'Predict churn risk for premium account holders',
      'Identify customers likely to need a loan soon',
      'Project impact of upcoming rate changes'
    ],
    initialMessages: [
      {
        id: 'predictive-1',
        sender: 'agent',
        content: 'Welcome to the Predictive Analytics demo. I forecast customer behavior and financial trends to enable proactive business decisions. I can predict future outcomes, identify opportunities, and help optimize strategies based on data patterns. What predictive analysis would you like me to demonstrate today?',
        timestamp: new Date()
      }
    ]
  },
  
  // Customer Self-Serve
  '7': {
    id: 'support-demo',
    title: 'Customer Support Demo',
    description: 'Experience how our Customer Support Agent handles banking inquiries',
    questions: [
      'How do I dispute a transaction?',
      'What are the fees for international transfers?',
      'Help me understand my account statement',
      'How do I update my contact information?'
    ],
    initialMessages: [
      {
        id: 'support-1',
        sender: 'agent',
        content: 'Welcome to the Customer Support demo. I handle common banking queries and resolve customer issues across multiple channels. I can assist with account inquiries, transaction issues, and general banking information. How may I help you today?',
        timestamp: new Date()
      }
    ]
  },
  '8': {
    id: 'account-mgmt-demo',
    title: 'Account Management Demo',
    description: 'See how our Account Management Agent helps customers manage their accounts',
    questions: [
      'How do I change my account type?',
      'Update my address and contact details',
      'Add a joint account holder',
      'Set up account alerts'
    ],
    initialMessages: [
      {
        id: 'account-mgmt-1',
        sender: 'agent',
        content: 'Welcome to the Account Management demo. I assist customers with account updates, changes, and management functions. I can help you modify account details, understand account features, and configure account preferences. What account management task can I help you with today?',
        timestamp: new Date()
      }
    ]
  },
  '9': {
    id: 'card-mgmt-demo',
    title: 'Card Management Demo',
    description: 'Experience how our Card Management Agent handles card-related requests',
    questions: [
      'Activate my new credit card',
      'Report a lost debit card',
      'Dispute a fraudulent transaction',
      'Adjust my card spending limits'
    ],
    initialMessages: [
      {
        id: 'card-mgmt-1',
        sender: 'agent',
        content: 'Welcome to the Card Management demo. I help customers manage credit and debit cards, including activation, replacement, and dispute resolution. I can assist with card-related inquiries, security features, and transaction issues. What card management task would you like assistance with today?',
        timestamp: new Date()
      }
    ]
  },
  '10': {
    id: 'refund-demo',
    title: 'Refund Processing Demo',
    description: 'See how our Refund Processing Agent handles refund requests',
    questions: [
      'Request a refund for a duplicate charge',
      'Check the status of my refund request',
      'Dispute a transaction fee',
      'How long do refunds typically take?'
    ],
    initialMessages: [
      {
        id: 'refund-1',
        sender: 'agent',
        content: 'Welcome to the Refund Processing demo. I streamline the refund request process for disputed transactions and fee reversals. I can help you submit refund requests, track their status, and resolve any issues that may arise. How can I assist with your refund request today?',
        timestamp: new Date()
      }
    ]
  },
  '11': {
    id: 'retirement-demo',
    title: 'Retirement Planning Demo',
    description: 'Experience how our Retirement Planning Agent provides personalized advice',
    questions: [
      'What retirement accounts do you offer?',
      'Calculate my retirement savings needs',
      'Evaluate my current retirement plan',
      'Recommend a retirement portfolio allocation'
    ],
    initialMessages: [
      {
        id: 'retirement-1',
        sender: 'agent',
        content: 'Welcome to the Retirement Planning demo. I provide retirement planning advice and portfolio recommendations based on your financial goals and timeline. I can help you assess your retirement readiness, calculate future needs, and develop a personalized strategy. How can I assist with your retirement planning today?',
        timestamp: new Date()
      }
    ]
  },
  '12': {
    id: 'wealth-demo',
    title: 'Wealth Management Demo',
    description: 'See how our Wealth Management Agent provides investment insights',
    questions: [
      'Analyze this customer\'s portfolio performance',
      'What rebalancing would you recommend?',
      'Identify opportunities for optimization',
      'Explain the risk assessment for this portfolio'
    ],
    initialMessages: [
      {
        id: 'wealth-1',
        sender: 'agent',
        content: 'Welcome to the Wealth Management demo. I analyze customer portfolios and provide investment insights and optimization recommendations. I can help identify opportunities, assess risks, and suggest strategies to achieve your financial goals. What would you like me to help you with today?',
        timestamp: new Date()
      }
    ]
  },
  
  // Customer Onboarding
  '13': {
    id: 'onboarding-demo',
    title: 'Customer Onboarding Demo',
    description: 'Experience how our Customer Onboarding Agent streamlines the account opening process',
    questions: [
      'Guide me through opening a new checking account',
      'What documents do I need for a joint account?',
      'How long does the account opening process take?',
      'What are the next steps after my application is approved?'
    ],
    initialMessages: [
      {
        id: 'onboard-1',
        sender: 'agent',
        content: 'Welcome to the Customer Onboarding demo. I can help guide you through the process of opening a new account, selecting appropriate banking services, and completing the required documentation. How can I assist you today?',
        timestamp: new Date()
      }
    ]
  },
  '14': {
    id: 'application-demo',
    title: 'Application Processing Demo',
    description: 'See how our Application Processing Agent handles new account applications',
    questions: [
      'Process this checking account application',
      'What information is missing from this application?',
      'Verify the application status',
      'What\'s the timeline for application approval?'
    ],
    initialMessages: [
      {
        id: 'application-1',
        sender: 'agent',
        content: 'Welcome to the Application Processing demo. I process customer applications for new accounts and banking services efficiently. I can verify application information, identify missing details, and guide you through the submission process. How can I assist with your application today?',
        timestamp: new Date()
      }
    ]
  },
  '15': {
    id: 'doc-collection-demo',
    title: 'Document Collection Demo',
    description: 'See how our Document Collection Agent simplifies the document gathering process',
    questions: [
      'What documents do I need for identity verification?',
      'Can I upload documents through mobile banking?',
      'How do I submit proof of address?',
      'Is there a checklist for required documentation?'
    ],
    initialMessages: [
      {
        id: 'doc-1',
        sender: 'agent',
        content: 'Welcome to the Document Collection demo. I help streamline the gathering and verification of required customer documentation for account opening and other banking services. I can guide you through the documentation requirements and submission process. What would you like assistance with today?',
        timestamp: new Date()
      }
    ]
  },
  '16': {
    id: 'kyc-demo',
    title: 'KYC & AML Verification Demo',
    description: 'See how our KYC & AML Verification Agent ensures regulatory compliance',
    questions: [
      'Verify this customer\'s identity documents',
      'What additional verification is needed for high-risk customers?',
      'Run a sanctions screening check',
      'What are the red flags in this customer profile?'
    ],
    initialMessages: [
      {
        id: 'kyc-1',
        sender: 'agent',
        content: 'Welcome to the KYC & AML Verification demo. I automate identity verification and anti-money laundering checks to ensure regulatory compliance. I can help verify customer identities, screen for sanctions, and identify potential risk factors. How can I assist you today?',
        timestamp: new Date()
      }
    ]
  },
  '17': {
    id: 'account-setup-demo',
    title: 'Account Setup Demo',
    description: 'See how our Account Setup Agent configures new accounts efficiently',
    questions: [
      'Set up a new premium checking account',
      'Configure overdraft protection',
      'Set initial account limits',
      'Enable digital banking services'
    ],
    initialMessages: [
      {
        id: 'setup-1',
        sender: 'agent',
        content: 'Welcome to the Account Setup demo. I help configure and provision new accounts with appropriate services, limits, and system settings. I can ensure that new accounts are properly set up according to customer preferences and bank policies. What account setup task would you like me to demonstrate?',
        timestamp: new Date()
      }
    ]
  },
  '18': {
    id: 'service-enroll-demo',
    title: 'Service Enrollment Demo',
    description: 'Experience how our Service Enrollment Agent recommends and activates banking services',
    questions: [
      'What services do you recommend for my new account?',
      'Enroll me in direct deposit',
      'Set up bill pay service',
      'How do I activate mobile banking?'
    ],
    initialMessages: [
      {
        id: 'enroll-1',
        sender: 'agent',
        content: 'Welcome to the Service Enrollment demo. I help customers select and enroll in appropriate banking services based on their needs and preferences. I can recommend services, explain features and benefits, and guide you through the enrollment process. How can I assist you today?',
        timestamp: new Date()
      }
    ]
  },
  '19': {
    id: 'activation-demo',
    title: 'Activation Demo',
    description: 'See how our Activation Agent helps customers activate their banking services',
    questions: [
      'Activate my new debit card',
      'Set up my online banking access',
      'Authorize my mobile device for banking',
      'Troubleshoot activation issues'
    ],
    initialMessages: [
      {
        id: 'activation-1',
        sender: 'agent',
        content: 'Welcome to the Activation demo. I guide customers through the activation process for accounts, cards, and digital services. I can assist with verifying identity, setting up credentials, and resolving any activation issues. What would you like to activate today?',
        timestamp: new Date()
      }
    ]
  },
  '20': {
    id: 'education-demo',
    title: 'Customer Education Demo',
    description: 'Experience how our Customer Education Agent helps customers understand their banking options',
    questions: [
      'Explain how overdraft protection works',
      'What security features should I enable?',
      'How can I maximize rewards on my account?',
      'Show me how to use mobile check deposit'
    ],
    initialMessages: [
      {
        id: 'education-1',
        sender: 'agent',
        content: 'Welcome to the Customer Education demo. I provide educational resources and guidance to help customers maximize their banking experience. I can explain features, demonstrate functionality, and share best practices for managing your finances. What would you like to learn about today?',
        timestamp: new Date()
      }
    ]
  },
  
  // Loan Origination
  '21': {
    id: 'loan-app-demo',
    title: 'Loan Application Demo',
    description: 'See how our Loan Application Agent guides customers through the application process',
    questions: [
      'Guide me through a mortgage application',
      'What information do I need for a home equity loan?',
      'What loan options are available for my credit profile?',
      'Calculate my estimated monthly payment'
    ],
    initialMessages: [
      {
        id: 'loan-app-1',
        sender: 'agent',
        content: 'Welcome to the Loan Application demo. I process loan applications and guide customers through the entire application workflow. I can help you understand loan options, required documentation, and eligibility criteria. What type of loan are you interested in applying for?',
        timestamp: new Date()
      }
    ]
  },
  '22': {
    id: 'loan-doc-demo',
    title: 'Loan Document Collection Demo',
    description: 'Explore how our Loan Document Collection Agent manages required documentation',
    questions: [
      'What documents do I need for a mortgage application?',
      'Upload my income verification documents',
      'Check the status of my submitted documents',
      'Do I need to provide additional documentation?'
    ],
    initialMessages: [
      {
        id: 'loan-doc-1',
        sender: 'agent',
        content: 'Welcome to the Loan Document Collection demo. I manage the collection and verification of all documentation required for loan processing. I can help you understand what documents are needed, guide you through the submission process, and track your document status. How can I assist you today?',
        timestamp: new Date()
      }
    ]
  },
  '23': {
    id: 'loan-kyc-demo',
    title: 'Loan KYC Verification Demo',
    description: 'See how our Loan KYC Verification Agent handles identity verification for loans',
    questions: [
      'What identity verification is needed for my loan?',
      'Verify this borrower\'s identity documents',
      'Run a compliance check on this applicant',
      'What are the verification requirements for co-signers?'
    ],
    initialMessages: [
      {
        id: 'loan-kyc-1',
        sender: 'agent',
        content: 'Welcome to the Loan KYC Verification demo. I manage identity verification and anti-money laundering checks specifically for loan applications. I can help verify borrower identities, screen for compliance issues, and ensure all regulatory requirements are met. How can I assist with your loan verification needs today?',
        timestamp: new Date()
      }
    ]
  },
  '24': {
    id: 'underwriting-demo',
    title: 'Underwriting Demo',
    description: 'See how our Underwriting Agent evaluates loan applications',
    questions: [
      'Evaluate this loan application',
      'What factors are considered in the credit decision?',
      'Why was this application flagged for review?',
      'Explain the risk assessment for this applicant'
    ],
    initialMessages: [
      {
        id: 'underwriting-1',
        sender: 'agent',
        content: 'Welcome to the Underwriting demo. I evaluate loan applications for creditworthiness and risk assessment using advanced analytics. I analyze credit history, income, debt ratios, and other factors to determine loan eligibility and terms. What would you like me to explain about the underwriting process?',
        timestamp: new Date()
      }
    ]
  },
  '25': {
    id: 'commitment-demo',
    title: 'Conditional Commitment Demo',
    description: 'Experience how our Conditional Commitment Agent manages loan approvals',
    questions: [
      'Generate a conditional approval letter',
      'What conditions are required for final approval?',
      'Update this application with new conditions',
      'Verify if all conditions have been satisfied'
    ],
    initialMessages: [
      {
        id: 'commitment-1',
        sender: 'agent',
        content: 'Welcome to the Conditional Commitment demo. I generate and manage conditional loan approvals based on underwriting decisions and requirements. I can help create approval letters, track conditions, and verify when all requirements have been met. How can I assist with your conditional commitment needs today?',
        timestamp: new Date()
      }
    ]
  },
  '26': {
    id: 'loan-process-demo',
    title: 'Loan Processing Demo',
    description: 'Experience how our Loan Processing Agent manages the loan workflow',
    questions: [
      'Track the status of my loan application',
      'Generate a conditional approval letter',
      'Schedule the loan closing',
      'What are the final steps before funding?'
    ],
    initialMessages: [
      {
        id: 'loan-process-1',
        sender: 'agent',
        content: 'Welcome to the Loan Processing demo. I manage the entire loan processing workflow from conditional commitment to closing. I coordinate documentation, verifications, and stakeholder communications to ensure an efficient loan closing process. How can I assist with your loan processing needs today?',
        timestamp: new Date()
      }
    ]
  },
  '27': {
    id: 'closing-demo',
    title: 'Loan Closing Demo',
    description: 'See how our Loan Closing Agent manages the final loan closing process',
    questions: [
      'Schedule my loan closing appointment',
      'What documents need to be prepared for closing?',
      'Review the closing disclosure',
      'What happens after the closing is complete?'
    ],
    initialMessages: [
      {
        id: 'closing-1',
        sender: 'agent',
        content: 'Welcome to the Loan Closing demo. I coordinate and manage the final loan closing process, including document preparation and signing. I can help schedule appointments, review closing documents, and ensure a smooth closing experience. How can I assist with your loan closing today?',
        timestamp: new Date()
      }
    ]
  }
};

// Additional agent responses for missing agents
export const agentResponses: Record<string, Record<string, string>> = {
  // Customer Onboarding Agent
  '13': {
    'Guide me through opening a new checking account': 'I\'d be happy to guide you through opening a new checking account. Here\'s the process:\n\n1. Account Selection:\n   - We offer Essential Checking (no minimum balance, $5 monthly fee)\n   - Premium Checking ($1,500 minimum balance to waive $12 monthly fee)\n   - Premier Relationship Checking ($25,000 combined balance to waive $25 fee)\n\n2. Application Process:\n   - Complete the online application (takes about 10-15 minutes)\n   - Provide personal information (name, address, SSN, employment details)\n   - Verify your identity through our secure system\n\n3. Documentation Requirements:\n   - Government-issued photo ID (driver\'s license, passport, etc.)\n   - Social Security Number or Individual Taxpayer Identification Number\n   - Proof of address (utility bill, lease agreement, etc.)\n\n4. Funding Options:\n   - Initial deposit minimum: $25 for Essential, $100 for Premium, $500 for Premier\n   - Transfer from existing account, debit card, or check deposit\n\n5. Account Access Setup:\n   - Set up online and mobile banking\n   - Choose debit card design\n   - Configure account alerts and notifications\n\nWould you like me to help you start the application process now?',
    'What documents do I need for a joint account?': 'For a joint checking account, both account holders will need to provide the following documentation:\n\n1. Primary Identification (for both applicants):\n   - Government-issued photo ID (driver\'s license, passport, state ID)\n   - Both IDs must be current and not expired\n\n2. Personal Information (for both applicants):\n   - Social Security Numbers or Individual Taxpayer Identification Numbers\n   - Date of birth\n   - Contact information (phone, email)\n\n3. Address Verification (can be provided by either applicant):\n   - Utility bill dated within the last 60 days\n   - Lease agreement or mortgage statement\n   - Bank or credit card statement\n   - Property tax bill\n\n4. Relationship Verification (for non-spouse joint applicants):\n   - No additional documentation needed for spouses\n   - Business partners may need to provide partnership documentation\n\n5. Employment Information (for both applicants):\n   - Current employer name and address\n   - Income information\n\n6. Initial Deposit Documentation (if applicable):\n   - Source of funds for the initial deposit\n\nBoth applicants will need to be present either in-person at a branch or participate in the online application process. Would you like assistance starting this process?',
    'How long does the account opening process take?': 'The account opening process typically takes the following timeframes:\n\n1. Online Application:\n   - 10-15 minutes to complete the application form\n   - Instant preliminary approval in most cases\n\n2. In-Branch Application:\n   - 20-30 minutes with a personal banker\n   - Immediate account creation if all documentation is in order\n\n3. Mobile Application:\n   - 8-12 minutes through our mobile app\n   - ID verification using your smartphone camera\n\n4. Account Activation Timeline:\n   - Online/Mobile: Account is typically active within 1 business day\n   - In-Branch: Account is usually active immediately\n\n5. Debit Card Delivery:\n   - Standard mail: 7-10 business days\n   - Express delivery: 2-3 business days (additional fee may apply)\n\n6. Online Banking Access:\n   - Immediate access following account approval\n   - Some features may be limited until your account is fully verified\n\nFactors that may extend this timeline include:\n- Additional verification requirements\n- Technical issues during the application process\n- High application volume periods\n\nApproximately 85% of our online applications are completed and approved on the same day. Is there a specific part of the process you\'re concerned about?',
    'What are the next steps after my application is approved?': 'After your banking application is approved, here are the next steps in the account activation process:\n\n1. Account Activation (Automatic):\n   - Your account will be activated within 24 hours of approval\n   - You\'ll receive an email confirmation with your account details\n\n2. Welcome Package (7-10 business days):\n   - Debit card(s) for all account holders\n   - Welcome guide with important account information\n   - Personalized starter checks (if requested)\n\n3. Online Banking Setup:\n   - Set up your online banking credentials via our website or mobile app\n   - Create a secure password\n   - Configure security questions and two-factor authentication\n\n4. Debit Card Activation:\n   - Activate your card via phone, online banking, or mobile app\n   - Set your PIN during the activation process\n\n5. Account Funding:\n   - Complete your initial deposit if not done during application\n   - Set up direct deposits with your employer\n\n6. Additional Services Setup:\n   - Enroll in eStatements\n   - Set up bill pay and account alerts\n   - Link external accounts for transfers\n\n7. Account Verification (if applicable):\n   - Verify small test deposits to linked external accounts\n   - Complete any additional verification steps if requested\n\nIs there a specific part of this process you\'d like more information about?'
  },
  
  // Application Processing Agent
  '14': {
    'Process this checking account application': 'I\'m analyzing the checking account application for Sarah Johnson...\n\nApplication Analysis Complete:\n\n✅ Personal Information: Complete and verified\n✅ Identity Verification: Complete (Driver\'s License #DL1234567)\n✅ Contact Information: Validated\n✅ Employment Details: Verified with employer database\n✅ Account Selection: Premium Checking\n\n⚠️ Address Verification: Additional documentation needed\n\nAction Required: Please submit a utility bill or lease agreement dated within the last 60 days for address verification. Once received, the application can proceed to final approval.\n\nEstimated Timeline:\n- Current Status: Pending additional documentation\n- Documentation Review: 1 business day after receipt\n- Final Approval: 1-2 business days after documentation verification\n- Account Setup: Immediate upon approval\n- Card Delivery: 7-10 business days\n\nWould you like me to send a reminder request for the needed documentation?',
    'What information is missing from this application?': 'I\'ve analyzed the current application and identified the following missing or incomplete information that\'s required to proceed:\n\n1. Secondary ID Verification (Required):\n   - Either a passport number, state ID, or military ID is needed\n   - Current application only includes driver\'s license\n\n2. Income Verification (Required):\n   - Annual income amount is entered but source not specified\n   - Need to indicate: employment, self-employment, retirement, etc.\n   - Employment section is incomplete (missing start date)\n\n3. Initial Deposit Details (Required):\n   - Method of initial deposit not selected\n   - Amount entered ($2,500) but funding source not specified\n\n4. Electronic Disclosure Consent (Required):\n   - Acknowledgment checkbox for electronic communications not selected\n\n5. Beneficiary Information (Optional but Recommended):\n   - No beneficiary information provided\n   - While optional, we recommend adding at least one account beneficiary\n\nThe application is approximately 85% complete. Would you like to provide the missing information now, or would you like me to save this application as a draft so you can complete it later?',
    'Verify the application status': 'Application Status Report\nApplication #APP-2025-78542\nApplicant: Michael Rodriguez\nProduct: Premier Checking Account\nSubmission Date: June 8, 2025, 3:45 PM ET\n\nCurrent Status: IN REVIEW (Stage 2 of 4)\n\nCompleted Stages:\n✓ Stage 1: Initial Submission - Completed on June 8, 2025\n• Application form submitted successfully\n• Initial automated verification checks passed\n\nCurrent Stage:\n→ Stage 2: Document Verification - In Progress\n• Identity documents verified on June 9, 2025\n• Address verification pending (documents received, under review)\n• Employment verification in progress (employer contacted)\n\nUpcoming Stages:\nStage 3: Final Review & Decision\n• Credit history check\n• Internal approval process\n• Risk assessment\n\nStage 4: Account Setup & Provisioning\n• Account number generation\n• Card issuance\n• Welcome package preparation\n\nEstimated Completion Timeline: 1-2 business days\nLast Update: June 9, 2025, 10:30 AM ET\n\nAction Items:\n• None required from applicant at this time\n\nWould you like me to notify you when the application moves to the next stage?',
    'What\'s the timeline for application approval?': 'Here\'s our standard timeline for checking account application approval and setup:\n\n1. Initial Application Submission:\n   • Online/Mobile: Immediate acknowledgment\n   • Paper/Branch: Same-day processing\n\n2. Identity Verification: 1 business day\n   • Government ID verification\n   • Social Security Number validation\n   • Address verification\n\n3. Background Screening: 1-2 business days\n   • ChexSystems review\n   • Internal risk assessment\n   • Compliance checks\n\n4. Application Decision: Typically by end of day 2\n   • Standard applications: 90% complete within 2 business days\n   • Complex applications: May require up to 5 business days\n   • Applications with exceptional circumstances: Timeline provided case-by-case\n\n5. Account Setup (After Approval): Same day to 1 business day\n   • Account number generation\n   • Initial system configuration\n   • Service enrollment processing\n\n6. Card Production & Delivery: 7-10 business days\n   • Express delivery available (2-3 business days) for additional fee\n\n7. Welcome Package Delivery: 7-10 business days\n\nFor your specific application, based on the information provided, we expect a decision by the end of tomorrow (assuming no additional information is required). Would you like me to set up a notification to alert you when your application status changes?'
  },

  // Activation Agent
  '19': {
    'Activate my new debit card': 'I\'ll help you activate your new debit card. Please follow these steps:\n\n1. Card Verification:\n   - Locate your 16-digit card number on the front of your new debit card\n   - Confirm the card is signed on the back\n   - Have your account number or username ready\n\n2. Choose your activation method:\n\nOption A: Online Activation (Fastest Method)\n   - Log in to online banking at bankingsuperagent.com\n   - Go to "Cards" section\n   - Select "Activate New Card"\n   - Enter the card number and expiration date\n   - Create your PIN when prompted\n\nOption B: Mobile App Activation\n   - Open our banking app on your smartphone\n   - Navigate to "Card Management"\n   - Tap "Activate Card"\n   - You can scan the card with your camera or enter details manually\n   - Set your PIN within the app\n\nOption C: Phone Activation\n   - Call our automated system at 1-800-555-1234\n   - Press 1 for card activation\n   - Enter your card number when prompted\n   - For security, you\'ll need to enter:\n     • Your ZIP code\n     • Last 4 digits of your SSN\n   - Create your 4-digit PIN\n\nYour card will be activated immediately after completing these steps. Would you like me to help you with any specific activation method?',
    'Set up my online banking access': 'I\'ll guide you through setting up your online banking access. Here\'s the step-by-step process:\n\n1. Registration:\n   - Visit bankingsuperagent.com and click "First Time User? Enroll Now"\n   - Or download our mobile app and tap "Register"\n\n2. Identity Verification (You\'ll need):\n   - Your account number or debit card number\n   - Social Security Number (last 4 digits)\n   - Date of birth\n   - ZIP code associated with your account\n\n3. Create Credentials:\n   - Choose a username (8-30 characters, no spaces)\n   - Create a strong password (meeting these requirements):\n     • 8-32 characters long\n     • At least one uppercase letter\n     • At least one lowercase letter\n     • At least one number\n     • At least one special character\n   - Set up security questions (select 3 from our options)\n\n4. Contact Information Verification:\n   - Confirm your email address and phone number\n   - Choose your contact preference for alerts and notifications\n\n5. Two-Factor Authentication Setup:\n   - Select your preferred verification method:\n     • Text message\n     • Email\n     • Authentication app\n   - Follow the prompts to set up your selected method\n\n6. Terms & Conditions:\n   - Review and accept the Online Banking Agreement\n   - Set your electronic statement preferences\n\n7. Additional Services Configuration (Optional):\n   - External account linking\n   - Bill pay setup\n   - Alert preferences\n\nAfter completing these steps, you\'ll have immediate access to your accounts online. Would you like me to provide more details about any specific part of this process?',
    'Authorize my mobile device for banking': 'I\'ll help you authorize your mobile device for banking. Here\'s how to complete the process:\n\n1. Download the App:\n   - Go to the App Store (iOS) or Google Play Store (Android)\n   - Search for "Banking SuperAgent Mobile"\n   - Download and install the official app\n\n2. Initial Setup:\n   - Open the app and tap "Get Started"\n   - Select "I\'m already a customer"\n\n3. Account Access:\n   - Enter your existing online banking username\n   - Enter your password\n   - Tap "Sign In"\n\n4. Device Registration:\n   - The system will detect you\'re signing in from a new device\n   - You\'ll receive a one-time security code via your pre-selected method (text, email, or phone call)\n   - Enter the security code in the app when prompted\n\n5. Device Authorization:\n   - Create a device nickname (e.g., "Personal iPhone")\n   - Set up biometric authentication if supported (fingerprint or face recognition)\n   - Create a 4-6 digit mobile passcode for app access\n\n6. Security Preferences:\n   - Select whether to enable automatic sign-in (using biometrics)\n   - Choose whether to receive push notifications\n   - Configure transaction alert preferences\n\n7. Confirmation:\n   - Review and accept the Mobile Banking Agreement\n   - Confirm your device registration\n\nYour device will now be authorized for mobile banking and you\'ll be able to access all your accounts securely. Do you have any questions about any of these steps, or would you like help with a specific part of the process?',
    'Troubleshoot activation issues': 'I\'ll help you troubleshoot your activation issues. Let\'s identify and resolve the problem with these common solutions:\n\n1. Online Banking Activation Issues:\n\n   ✔️ Username/Password Problems:\n   - Ensure Caps Lock is off\n   - Try the "Forgot Username/Password" option\n   - Check for special characters that may not be allowed\n   - Clear browser cache and cookies\n\n   ✔️ Security Verification Failures:\n   - Confirm you\'re using the contact information on file with the bank\n   - Ensure your account isn\'t locked (after multiple failed attempts)\n   - Try a different verification method if available\n\n2. Debit Card Activation Issues:\n\n   ✔️ Card Not Recognized:\n   - Double-check the card number for accuracy\n   - Verify the card is not expired or damaged\n   - Confirm you\'re activating the newest card received\n\n   ✔️ Verification Failures:\n   - Ensure you\'re using the ZIP code on file with the bank\n   - Verify the last 4 digits of your SSN\n   - Check if your account has any restrictions or holds\n\n3. Mobile Banking Activation Issues:\n\n   ✔️ App Installation Problems:\n   - Ensure your device meets minimum requirements\n   - Check your internet connection\n   - Update your device\'s operating system\n\n   ✔️ Security Code Not Received:\n   - Verify your phone number or email on file is correct\n   - Check your spam/junk folder for emails\n   - Ensure your phone can receive SMS messages\n\n4. When to Contact Support:\n\n   - After 3 failed activation attempts\n   - If your account shows as "Locked"\n   - If you\'ve recently changed your phone number or address\n   - If you\'re receiving error messages not addressed above\n\nFor personalized troubleshooting, can you tell me which specific service you\'re having trouble activating, and what error message you\'re receiving?'
  },
  
  // Customer Education Agent
  '20': {
    'Explain how overdraft protection works': 'Overdraft protection helps you avoid declined transactions, returned items, and overdraft fees when you don\'t have sufficient funds in your checking account. Here\'s how our overdraft protection options work:\n\n1. Linked Account Transfer\n   • How it works: Automatically transfers funds from a linked savings account, secondary checking, or money market account when your checking account would otherwise overdraw\n   • Cost: $10 per transfer (regardless of transfer amount)\n   • Benefits: Uses your own funds, potentially lower fees than standard overdraft\n   • Setup: Can be established through online banking or by calling customer service\n\n2. Overdraft Line of Credit\n   • How it works: A pre-approved credit line that provides funds when your account would otherwise overdraw\n   • Cost: Interest charges (currently 18% APR) on the borrowed amount until repaid, plus $5 annual fee\n   • Benefits: Continuous protection up to your approved credit limit\n   • Requirements: Credit approval required, minimum credit score of 640\n   • Repayment: Minimum monthly payment of $25 or 5% of outstanding balance, whichever is greater\n\n3. Standard Overdraft Coverage\n   • How it works: Bank may choose to pay transactions even when your account doesn\'t have sufficient funds\n   • Cost: $35 overdraft fee per item (maximum of 4 fees per day)\n   • Coverage: Applies to checks, ACH transactions, and recurring debit card transactions\n   • Limitations: Does not cover ATM withdrawals or one-time debit card transactions unless you opt in\n\n4. Opt-In Debit Card Coverage\n   • How it works: Extends overdraft coverage to ATM withdrawals and one-time debit card transactions\n   • Cost: Same $35 fee per overdraft item\n   • Choice: This coverage is optional - you must explicitly opt in\n\nImportant Notes:\n   • Overdrafts must be repaid within 7 business days to avoid extended overdraft fees\n   • You can set up balance alerts to help avoid overdrafts\n   • You can opt out of overdraft coverage at any time\n\nWould you like more information about how to set up any of these overdraft protection options?',
    'What security features should I enable?': 'To maximize the security of your banking accounts, I recommend enabling these essential security features:\n\n1. Multi-Factor Authentication (MFA)\n   • What it is: Requires two or more verification methods to access your account\n   • How to enable: Settings → Security → Multi-Factor Authentication\n   • Options: Text message codes, email codes, authentication app, or security keys\n   • Recommendation: Authentication app provides the strongest security\n\n2. Biometric Authentication\n   • What it is: Uses your fingerprint, face, or voice for quick, secure access\n   • How to enable: Mobile app → Settings → Sign In Options → Enable Biometrics\n   • Compatibility: Requires supported device (most modern smartphones)\n   • Benefit: Convenient and highly secure access method\n\n3. Account Alerts\n   • Types to enable:\n     - Large transaction alerts (set your threshold, e.g., $500+)\n     - Sign-in alerts for new devices\n     - International transaction notifications\n     - Balance threshold alerts\n     - Password or contact information change alerts\n   • How to enable: Settings → Notifications → Banking Alerts\n\n4. Debit Card Controls\n   • Features:\n     - Instantly lock/unlock your card\n     - Set geographic restrictions\n     - Control merchant categories\n     - Set spending limits\n     - Enable/disable online transactions\n   • How to enable: Card Management → Security Controls\n\n5. Enhanced Password Settings\n   • Requirements: Set up a strong, unique password for your banking\n   • Enable: Periodic password changes (every 90 days recommended)\n   • How to change: Settings → Security → Password Management\n\n6. Secure Contact Information\n   • Importance: Ensures security codes and alerts reach you\n   • Update: Verify and update phone numbers and email addresses\n   • How to update: Profile → Personal Information\n\n7. Device Management\n   • What it does: Shows all devices accessing your account\n   • Action: Remove any unrecognized or unused devices\n   • How to access: Settings → Security → Registered Devices\n\nWould you like me to help you enable any of these security features right now?',
    'How can I maximize rewards on my account?': 'Here are comprehensive strategies to maximize rewards on your banking accounts:\n\n1. Choose the Right Account Type\n   • Premium Rewards Checking: Earn 2x points on all debit purchases\n   • Relationship Banking Package: Extra 25% points when linking multiple accounts\n   • Business Rewards Banking: Higher earning rates for business expenses\n\n2. Everyday Banking Strategies\n   • Set up direct deposit: +500 bonus points monthly with $2,500+ deposit\n   • Use bill pay for all utilities: 10 points per payment\n   • Set up recurring transfers to savings: 25 points per monthly transfer\n   • Maintain minimum balance requirements: 100 points monthly bonus\n   • Use your debit card for purchases: 1 point per $2 spent\n\n3. Digital Banking Rewards\n   • Enroll in paperless statements: 150 one-time bonus points\n   • Use mobile deposit: 5 points per check deposited\n   • Set up account alerts: 50 one-time bonus points\n   • Use online budgeting tools: 25 monthly points\n\n4. Credit Card Coordination\n   • Link bank credit card to checking: 50% bonus on all credit card rewards\n   • Set up automatic credit card payments: 15 points monthly\n   • Strategic usage: Use debit for small purchases, credit for larger ones\n\n5. Promotional Opportunities\n   • Seasonal promotions: Watch for 2x or 3x points periods (typically holidays)\n   • Merchant-specific offers: Check monthly featured retailers\n   • Referral bonuses: 1,000 points per successful referral\n   • Anniversary bonus: 500 points on account anniversary\n\n6. Points Redemption Optimization\n   • Travel redemptions: Typically highest value (1 point = 1.5¢)\n   • Gift card promotions: Periodically discounted redemption rates\n   • Statement credits: Most flexible but lower value (1 point = 1¢)\n   • Merchandise: Generally lowest value (1 point = 0.7¢)\n\n7. Avoiding Point Erosion\n   • Watch for expiration: Points expire after 24 months of inactivity\n   • Fee avoidance: Monthly maintenance fees reduce effective reward value\n   • Minimum redemption threshold: Save points for at least 5,000 point redemptions for best value\n\nWould you like more information about any specific rewards strategy?',
    'Show me how to use mobile check deposit': 'Here\'s a complete guide to using mobile check deposit in our banking app:\n\n1. Initial Setup Requirements\n   • Download and install the latest version of our mobile app\n   • Ensure you\'re logged in with your username and password\n   • Your account must be in good standing (no restrictions)\n   • Mobile deposit must be enabled (automatic for most accounts)\n\n2. Before You Begin: Check Preparation\n   • Endorse the back of the check with your signature\n   • Write "For Mobile Deposit Only" below your signature\n   • Make sure the check is payable to you and not post-dated\n   • Verify the check amount, date, and that it\'s properly signed\n\n3. Step-by-Step Deposit Process\n   • Open the mobile app and select "Deposit" from the bottom menu\n   • Choose the account where you want to deposit the check\n   • Enter the check amount (double-check for accuracy)\n   • Take photos of the check (front and back)\n\n4. Check Photography Tips\n   • Use a dark, non-reflective background\n   • Ensure good lighting (avoid shadows)\n   • Position the check within the on-screen guides\n   • Hold your phone steady (or place it on a surface)\n   • Make sure all four corners are visible\n   • Ensure the check is flat (not folded or crumpled)\n\n5. After Taking Photos\n   • Verify the images are clear and readable\n   • Confirm the deposit details\n   • Submit the deposit\n   • You\'ll receive an on-screen confirmation\n   • Keep the physical check until funds clear\n\n6. Tracking Your Deposit\n   • Check status in the "Deposit History" section\n   • Status will show: Pending, Accepted, or Rejected\n   • Typically processed within 1-2 business days\n   • First $225 available next business day\n   • Remaining funds available in 2-3 business days\n\n7. Important Limitations\n   • Daily deposit limit: $5,000\n   • Monthly deposit limit: $10,000\n   • Individual check limit: $5,000\n   • Not accepted: Foreign checks, money orders, third-party checks\n\nWould you like me to walk you through the mobile check deposit process with visual guidance?'
  },
  
  // Conditional Commitment Agent
  '25': {
    'Generate a conditional approval letter': 'I\'ve generated a conditional approval letter for loan application #L-8763-225:\n\n------------------------------------------------\nBANKING SUPERAGENT\n123 Financial Avenue\nMetro City, ST 12345\n\nJune 10, 2025\n\nMr. Robert & Mrs. Lisa Chen\n789 Homestead Lane\nSpringfield, ST 54321\n\nRE: CONDITIONAL MORTGAGE LOAN APPROVAL\nLoan Application #L-8763-225\nProperty: 456 Willow Street, Springfield, ST 54321\n\nDear Mr. and Mrs. Chen,\n\nCongratulations! Banking SuperAgent is pleased to inform you that your application for a 30-year fixed-rate mortgage loan has been conditionally approved with the following terms:\n\n• Loan Amount: $425,000\n• Interest Rate: 4.125% (locked until 07/25/2025)\n• Loan Term: 30 years\n• Monthly Principal & Interest: $2,058.54\n• Estimated Monthly Escrow: $583.21 (taxes and insurance)\n• Estimated Total Monthly Payment: $2,641.75\n\nThis approval is subject to the following conditions that must be satisfied before final loan approval and closing:\n\n1. Property Conditions:\n   • Satisfactory appraisal supporting minimum value of $531,250\n   • Clean title report with no unacceptable encumbrances\n   • Satisfactory property inspection\n\n2. Financial Conditions:\n   • Verification of employment within 10 days of closing\n   • Most recent 30 days of pay stubs\n   • Source documentation for earnest money deposit\n   • Verification that no new debts have been incurred\n\n3. Insurance Requirements:\n   • Proof of homeowner\'s insurance with minimum coverage of $425,000\n   • Flood insurance certification (if applicable)\n\nPlease provide the requested documentation by June 25, 2025, to ensure on-time closing. This conditional approval is valid until July 25, 2025.\n\nYour loan officer, Sarah Johnson, will be contacting you shortly to review these conditions and answer any questions. She can be reached at (555) 123-4567 or sjohnson@bankingsuperagent.com.\n\nThank you for choosing Banking SuperAgent for your mortgage needs.\n\nSincerely,\n\nMichael Williams\nSenior Mortgage Underwriter\nNMLS# 987654\n------------------------------------------------\n\nWould you like me to explain any of the conditions in more detail or assist with gathering the required documentation?',
    'What conditions are required for final approval?': 'For loan application #L-2025-42789, the following conditions must be satisfied before final loan approval:\n\n1. Income Verification Conditions:\n   • Employment verification for all borrowers (completed for primary borrower, pending for co-borrower)\n   • Two most recent pay stubs for co-borrower (dated within 30 days)\n   • Written explanation for employment gap from March-July 2024\n   • Proof of bonus income mentioned in application (award letter or equivalent)\n\n2. Asset Documentation Conditions:\n   • Two months of complete bank statements for checking account #XXXX8743 (all pages)\n   • Source documentation for $45,000 deposit on 5/12/2025\n   • Gift letter documentation for $30,000 down payment contribution\n   • Evidence of liquidation of mutual funds listed as down payment source\n\n3. Property Conditions:\n   • Clear property appraisal (completed, no additional conditions)\n   • ✓ Title search (completed and clear)\n   • Proof of homeowner\'s insurance with first year premium paid\n   • Flood zone determination (in process)\n   • Wood-destroying organism inspection\n\n4. Credit Conditions:\n   • Written explanation for credit inquiry from Capital One on 5/23/2025\n   • Documentation for lease buyout shown on credit report\n   • ✓ Updated credit score verification (completed)\n\n5. Legal/Regulatory Conditions:\n   • Signed Intent to Proceed form\n   • Completed 4506-T form (tax transcript request)\n   • ✓ Signed disclosure documents (completed)\n   • Valid government-issued photo ID for both borrowers\n\nPriority Conditions (needed within 5 business days):\n• Co-borrower pay stubs\n• Bank statements\n• Source documentation for large deposit\n• Gift letter documentation\n\nAll other conditions are needed by June 30, 2025, to maintain your closing date of July 15, 2025. Would you like assistance with gathering any of these documents?',
    'Update this application with new conditions': 'I\'ve updated application #L-9273-184 with the new conditions based on the underwriter\'s review. Here\'s a summary of the changes:\n\nConditions Added:\n\n1. New Income Verification Condition:\n   • Tax returns for 2024 with all schedules and attachments\n   • Reason: Self-employment income verification requirement\n   • Priority: High - needed within 7 business days\n\n2. New Credit Explanation:\n   • Written explanation for new credit card opened with AmEx on 5/28/2025\n   • Copy of credit card statement showing current balance\n   • Reason: New debt not disclosed in original application\n   • Priority: High - needed within 5 business days\n\n3. New Property Condition:\n   • Roof certification from licensed roofer\n   • Estimate for repairs if needed\n   • Reason: Appraiser noted possible roof damage\n   • Priority: Medium - needed within 14 business days\n\nConditions Removed:\n\n1. Employment verification for primary borrower\n   • Reason: Completed and verified on 6/8/2025\n\n2. Bank statements for savings account\n   • Reason: Received and verified on 6/7/2025\n\nConditions Modified:\n\n1. Changed: Proof of funds for closing costs\n   • Original: Most recent statement showing $25,000 available\n   • Updated: Most recent statement showing $32,500 available\n   • Reason: Closing cost estimate increased due to property tax reassessment\n\n2. Changed: Homeowner\'s insurance requirement\n   • Original: Coverage minimum of $300,000\n   • Updated: Coverage minimum of $350,000\n   • Reason: Appraisal value higher than estimated\n\nNotifications:\n• Email sent to borrower with updated condition list\n• Loan processor notified of changes\n• Closing date impact assessment: No impact expected if new conditions met on time\n\nWould you like me to prioritize any specific condition or provide assistance in gathering the required documentation?',
    'Verify if all conditions have been satisfied': 'Condition Verification Report for Loan #L-2025-38456\nBorrower: James Wilson\nProperty: 123 Maple Street, Riverdale, ST 12345\nLoan Type: Conventional 30-year fixed\nLoan Amount: $385,000\nTarget Closing Date: June 30, 2025\n\nCondition Status Summary:\n✅ Satisfied: 12 conditions\n⏳ Pending Review: 3 conditions\n❌ Outstanding: 2 conditions\n\nDetailed Condition Status:\n\n1. Income Verification (SATISFIED)\n   ✅ Employment verification - Received 6/2, Verified 6/3\n   ✅ Most recent pay stubs - Received 6/2, Verified 6/3\n   ✅ Previous year W-2 - Received 6/2, Verified 6/3\n\n2. Asset Documentation (PARTIALLY SATISFIED)\n   ✅ Bank statements (checking) - Received 6/5, Verified 6/6\n   ✅ Bank statements (savings) - Received 6/5, Verified 6/6\n   ❌ Source of funds for $25,000 deposit - NOT RECEIVED\n   ✅ Retirement account statement - Received 6/8, Verified 6/9\n\n3. Property Documentation (SATISFIED)\n   ✅ Appraisal - Completed 6/4, Approved 6/7\n   ✅ Title search - Completed 6/8, Clear\n   ✅ Homeowner\'s insurance - Received 6/10, Verified 6/10\n\n4. Credit Documentation (PARTIALLY SATISFIED)\n   ✅ Credit explanation letter - Received 6/3, Accepted 6/4\n   ⏳ Updated credit report - Ordered 6/10, Pending Review\n   ✅ Student loan deferment proof - Received 6/9, Verified 6/10\n\n5. Legal Documentation (PARTIALLY SATISFIED)\n   ✅ Signed disclosures - Received 6/2, Complete\n   ⏳ Closing disclosure acknowledgment - Sent 6/10, Pending Return\n   ⏳ Intent to proceed - Received 6/10, Pending Review\n   ❌ Power of attorney document - NOT RECEIVED (if applicable)\n\nOutstanding Items Required for Closing:\n1. Source documentation for $25,000 deposit (bank transfer or gift letter)\n2. Power of attorney document (if you plan to use a POA at closing)\n3. Return of signed closing disclosure acknowledgment\n\nTimeline Impact Assessment:\n• No closing delay expected if outstanding items received by June 23, 2025\n• Current estimated clear-to-close date: June 25, 2025\n\nWould you like me to send a reminder for the outstanding items or help prepare any of the required documentation?'
  },
  
  // Loan Closing Agent
  '27': {
    'Schedule my loan closing appointment': 'I\'ve scheduled your loan closing appointment with the following details:\n\nClosing Appointment Confirmation\nLoan #: M-2025-36284\nBorrowers: John & Maria Sanchez\nProperty: 742 Pinecrest Avenue, Lake City, FL 32055\n\nAppointment Details:\n• Date: Wednesday, June 25, 2025\n• Time: 10:00 AM Eastern Time\n• Duration: Approximately 60-90 minutes\n• Location: Trusted Title Partners\n  1250 Commerce Plaza, Suite 305\n  Lake City, FL 32055\n\nParticipants:\n• John & Maria Sanchez (Borrowers)\n• Sarah Johnson (Closing Agent, Trusted Title Partners)\n• Michael Wong (Loan Officer, available by phone if needed)\n\nPre-Closing Requirements (Must be completed 24 hours before closing):\n• Wire transfer of closing funds ($43,287.65) to Trusted Title Partners\n• Final walkthrough of property scheduled\n• Review of Closing Disclosure (sent to your email)\n\nWhat to Bring to Closing:\n• Government-issued photo ID for all borrowers (driver\'s license, passport)\n• Proof of wire transfer/cashier\'s check for closing costs\n• Homeowner\'s insurance policy declaration page\n• Any outstanding documents requested by the loan officer\n\nSpecial Accommodations Arranged:\n• Spanish-speaking closing agent available as requested\n• Wheelchair accessible facility\n• Free parking available in the main lot\n\nI\'ve sent this confirmation to your email and added it to your calendar. Would you like me to make any changes to this appointment or help with any pre-closing requirements?',
    'What documents need to be prepared for closing?': 'Here\'s a comprehensive list of documents that need to be prepared for your mortgage closing:\n\nDocuments Prepared by the Lender:\n\n1. Loan Documents\n   • Promissory Note (the actual loan agreement)\n   • Mortgage/Deed of Trust (secures the property as collateral)\n   • Closing Disclosure (details of all loan costs, provided 3 days before closing)\n   • Loan Application (final version to verify information accuracy)\n   • First Payment Letter (details when and where to make payments)\n\n2. Legal Disclosures\n   • Federal Truth-in-Lending Disclosure\n   • Affiliated Business Arrangement Disclosure\n   • Equal Credit Opportunity Act Disclosure\n   • Right to Financial Privacy Act Notice\n   • Fair Credit Reporting Act Disclosure\n\nDocuments Prepared by the Title Company:\n\n1. Title Documents\n   • Title Insurance Policy\n   • Title Commitment\n   • Deed (transfers ownership from seller to buyer)\n   • Property Survey (if applicable)\n   • Certificate of Occupancy (for new construction)\n\n2. Settlement Documents\n   • Settlement Statement/ALTA Statement\n   • Escrow Agreement\n   • Compliance Agreement\n   • Transfer Tax Declarations\n\nDocuments You Need to Bring/Prepare:\n\n1. Financial Verification\n   • Photo identification (driver\'s license, passport)\n   • Proof of funds for closing costs\n   • Cashier\'s check or wire transfer confirmation\n\n2. Insurance Documentation\n   • Homeowner\'s Insurance Policy with paid receipt\n   • Flood Insurance Policy (if required)\n\n3. Property-Specific Items\n   • Home Warranty Information (if applicable)\n   • Homeowners Association (HOA) Documentation (if applicable)\n   • Post-closing Occupancy Agreement (if applicable)\n\nSpecial Circumstance Documents (if applicable):\n\n1. Co-borrower/Non-occupant Borrower Documents\n   • Power of Attorney (if someone is signing on your behalf)\n   • Trust Documents (if purchasing in a trust)\n\n2. First-time Homebuyer Documents\n   • Homebuyer Education Certificate\n   • Down Payment Assistance Program Documentation\n\n3. Construction/Renovation Loan Documents\n   • Builder\'s Warranty\n   • Construction/Renovation Agreement\n\nAll documents should be reviewed carefully before signing. You\'ll receive the Closing Disclosure at least 3 business days before closing to review all costs in advance.\n\nWould you like information about how to prepare any of these specific documents?',
    'Review the closing disclosure': 'I\'ve reviewed your Closing Disclosure dated June 8, 2025, for loan #M-2025-42187. Here\'s a comprehensive analysis:\n\nLoan Information Summary:\n• Loan Amount: $320,000\n• Loan Term: 30 years\n• Interest Rate: 4.375% (fixed)\n• Monthly Principal & Interest: $1,598.57\n• Product Type: Conventional 30-year fixed\n\nClosing Cost Analysis:\n\n1. Loan Costs: $8,752\n   ✓ Origination charges: $3,200 (1% of loan amount) - Matches estimate\n   ⚠️ Services you can\'t shop for: $1,450 - $150 higher than estimate\n      • Increased appraisal fee ($650 vs $500 estimated)\n   ✓ Services you can shop for: $4,102 - Matches estimate\n\n2. Other Costs: $5,623\n   ✓ Taxes and government fees: $2,350 - Matches estimate\n   ✓ Prepaids: $2,450 - Matches estimate\n   ⚠️ Initial escrow payment: $823 - $125 higher than estimate\n      • Higher homeowner\'s insurance premium\n\n3. Cash to Close: $73,642\n   • Down payment: $80,000\n   • Deposit: ($10,000) - Already paid\n   • Loan amount: ($320,000)\n   • Total closing costs: $14,375\n   • Adjustments: $9,267 (prorated property taxes and HOA dues)\n\nKey Findings:\n\n1. Fee Changes from Loan Estimate:\n   • Increased appraisal fee: $150 increase (within tolerance)\n   • Increased initial escrow payment: $125 increase (within tolerance)\n   • Total increase: $275 (0.086% of loan amount, within legal tolerance of 10%)\n\n2. Potential Errors or Concerns:\n   • Property tax calculation appears to be based on previous assessment ($3,450/year), but new assessment is $3,850/year - This may require adjustment\n   • Homeowner\'s insurance premium increased from estimate - Verify new policy matches coverage requirements\n\n3. Required Actions:\n   • Confirm title insurance premium is correct for your state\n   • Verify the payee information for your first payment\n   • Confirm accuracy of prorated property taxes and HOA dues\n\n4. Funds Needed for Closing:\n   • Confirmed amount: $73,642\n   • Payment method must be cashier\'s check or wire transfer\n   • Wire instructions should be verified by phone before sending\n\nThis Closing Disclosure appears generally accurate with the noted minor discrepancies. Would you like me to help address any of these specific items?',
    'What happens after the closing is complete?': 'After your mortgage closing is complete, here\'s what happens next in the post-closing process:\n\nImmediate Post-Closing (1-3 Business Days):\n\n1. Funding Process\n   • Lender releases loan funds to the title company/attorney\n   • Seller receives proceeds from the sale\n   • Real estate agents receive their commission\n   • Outstanding liens and mortgages are paid off\n\n2. Document Recording\n   • Title company/attorney submits the deed and mortgage to the county recorder\'s office\n   • Recording typically takes 1-5 business days depending on the county\n   • You\'ll receive confirmation when recording is complete\n\n3. Key Handover\n   • If not provided at closing, you\'ll receive keys to your new property\n   • Garage door openers, mailbox keys, and access codes provided\n\nShort-Term Follow-Up (1-4 Weeks After Closing):\n\n1. Documentation Delivery\n   • You\'ll receive final recorded copies of your deed (2-4 weeks after closing)\n   • Original loan documents will be stored by your lender\n   • You\'ll receive a welcome packet from your loan servicer\n\n2. Financial Transitions\n   • First mortgage payment will be due on the date specified in your closing documents (typically the 1st of the month after 30 days)\n   • Escrow account is established for taxes and insurance (if applicable)\n   • Any refunds from previous escrow accounts will be processed\n\n3. Essential Setup Tasks\n   • Set up online account with your loan servicer\n   • Configure automatic payments (if desired)\n   • Update your address with USPS, DMV, voter registration, etc.\n   • Notify utility companies and transfer services to your name\n\nLonger-Term Considerations (1-3 Months After Closing):\n\n1. Title Insurance Policy\n   • You\'ll receive your owner\'s title insurance policy (if purchased)\n   • Store this with your other important property documents\n\n2. Property Tax Assessment\n   • Property may be reassessed for tax purposes\n   • Tax bills will be sent to your loan servicer if you have an escrow account\n\n3. Homestead Exemption\n   • File for homestead exemption with your county (if applicable)\n   • Deadline varies by location, typically within 1 year of purchase\n\n4. Welcome to Homeownership\n   • Mortgage statements begin arriving monthly\n   • Tax and insurance documents may arrive periodically\n   • Keep all home-related receipts for potential tax benefits\n\nIs there any specific part of this post-closing process you\'d like me to explain in more detail?'
  },
  
  // Remaining agent responses would be filled in similarly for other agents...
};