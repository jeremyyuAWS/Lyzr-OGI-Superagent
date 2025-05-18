import { useState } from 'react';
import { Check, AlertTriangle, Download, Code, Book, MessageSquare, Mail, Shield, Briefcase, Layers, Users } from 'lucide-react';

const EthicalGuidelinesPanel = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>('email');
  
  const domains = [
    { id: 'email', name: 'Email Outreach', icon: <Mail className="h-5 w-5" /> },
    { id: 'linkedin', name: 'LinkedIn Outreach', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'targeting', name: 'Lead Targeting', icon: <Users className="h-5 w-5" /> },
    { id: 'qualification', name: 'Lead Qualification', icon: <Layers className="h-5 w-5" /> },
    { id: 'response', name: 'Response Handling', icon: <MessageSquare className="h-5 w-5" /> }
  ];
  
  // Guidelines specific to each domain
  const domainGuidelines: Record<string, Array<{title: string, guidelines: string[], severity: 'critical' | 'important' | 'recommended'}>> = {
    email: [
      {
        title: 'Consent & Transparency',
        guidelines: [
          'Always include a clear unsubscribe mechanism in every email',
          'Do not use misleading subject lines that create false urgency',
          'Disclose the use of AI assistance in email generation',
          'Honor opt-out requests within 10 business days',
          'Include your physical address and clear sender identification'
        ],
        severity: 'critical'
      },
      {
        title: 'Personalization Ethics',
        guidelines: [
          'Only use publicly available professional information for personalization',
          'Avoid references to personal circumstances or non-public information',
          'Do not falsely imply a pre-existing relationship when none exists',
          'Be transparent about how you obtained their information',
          'Provide business value with every communication'
        ],
        severity: 'important'
      },
      {
        title: 'Content Standards',
        guidelines: [
          'Ensure all claims are factually accurate and verifiable',
          'Avoid manipulative or pressure tactics in messaging',
          'Maintain professional tone and respectful language',
          'Do not use excessive personalization that may feel invasive',
          'Focus on solving business problems, not exploiting pain points'
        ],
        severity: 'recommended'
      }
    ],
    linkedin: [
      {
        title: 'Connection Requests',
        guidelines: [
          'Always include a personalized note with connection requests',
          'Clearly identify yourself and your company',
          'Do not send bulk generic connection requests',
          'Respect "I don\'t know this person" flags',
          'Limit follow-up attempts after no response'
        ],
        severity: 'important'
      },
      {
        title: 'Message Content',
        guidelines: [
          'Respect LinkedIn\'s Professional Community Policies',
          'Do not scrape profile information for outbound campaigns',
          'Avoid direct pitching in initial connection messages',
          'Provide context for why you\'re reaching out',
          'Keep initial messages concise and respectful'
        ],
        severity: 'critical'
      },
      {
        title: 'Engagement Ethics',
        guidelines: [
          'Do not automate engagement activities (likes, comments, etc.)',
          'Add value in group conversations, don\'t just promote',
          'Respect people\'s professional boundaries',
          'Do not misrepresent your role or company',
          'Honor explicit requests to stop communication'
        ],
        severity: 'recommended'
      }
    ],
    targeting: [
      {
        title: 'Data Collection',
        guidelines: [
          'Only use lawfully obtained data sources',
          'Verify data accuracy before use in targeting',
          'Do not use discriminatory criteria for targeting',
          'Keep records of data sources for compliance',
          'Apply least-privilege principle to data access'
        ],
        severity: 'critical'
      },
      {
        title: 'Segmentation Ethics',
        guidelines: [
          'Base targeting on legitimate business criteria only',
          'Do not infer sensitive characteristics about prospects',
          'Document targeting logic for auditing purposes',
          'Use inclusive language in segment definitions',
          'Review targeting algorithms for unintended bias'
        ],
        severity: 'important'
      },
      {
        title: 'Intent Signal Usage',
        guidelines: [
          'Respect privacy when using intent signals',
          'Do not track individuals across devices without consent',
          'Maintain transparency about signal collection',
          'Apply reasonable timelines for intent signal use',
          'Regularly purge outdated intent data'
        ],
        severity: 'recommended'
      }
    ],
    qualification: [
      {
        title: 'Scoring Transparency',
        guidelines: [
          'Document all criteria used in lead scoring models',
          'Ensure scoring logic is explainable to prospects if asked',
          'Do not use protected characteristics as scoring factors',
          'Regularly validate scoring models for accuracy',
          'Maintain human oversight of qualification decisions'
        ],
        severity: 'important'
      },
      {
        title: 'Disqualification Ethics',
        guidelines: [
          'Document reasons for lead disqualification',
          'Base disqualification on objective business factors',
          'Provide a path back for disqualified leads when appropriate',
          'Do not discriminate based on non-business factors',
          'Apply consistent disqualification criteria across segments'
        ],
        severity: 'critical'
      },
      {
        title: 'Meeting Qualification',
        guidelines: [
          'Do not mislead prospects about meeting purpose',
          'Ensure meeting invites clearly state who will attend',
          'Respect timezone preferences and working hours',
          'Honor meeting cancellations promptly',
          'Provide advance information about meeting agenda'
        ],
        severity: 'recommended'
      }
    ],
    response: [
      {
        title: 'Response Handling',
        guidelines: [
          'Acknowledge all replies from prospects within one business day',
          'Honor all unsubscribe or stop contact requests immediately',
          'Do not continue outreach after explicit "not interested" responses',
          'Avoid manipulative tactics to overcome objections',
          'Document all correspondence for compliance purposes'
        ],
        severity: 'critical'
      },
      {
        title: 'AI-Assisted Responses',
        guidelines: [
          'Maintain human review of AI-generated responses when required',
          'Ensure AI responses match the brand voice and tone',
          'Disclose AI assistance in complex response scenarios',
          'Validate factual claims in AI-generated content',
          'Maintain context awareness in conversation threads'
        ],
        severity: 'important'
      },
      {
        title: 'Objection Handling',
        guidelines: [
          'Respond honestly to product or service capability questions',
          'Do not use high-pressure tactics after objections',
          'Respect the prospect\'s decision-making process',
          'Provide relevant information without overloading',
          'Capture feedback from objections to improve future outreach'
        ],
        severity: 'recommended'
      }
    ]
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
        <h3 className="font-medium text-gray-800 flex items-center">
          <Book className="h-5 w-5 text-blue-600 mr-2" />
          Ethical Outreach Guidelines
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - Domain Selector */}
        <div className="md:w-64 border-r border-gray-200 p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Channel-Specific Guidelines</h4>
          <div className="space-y-1">
            {domains.map(domain => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center ${
                  selectedDomain === domain.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className={`mr-2 ${selectedDomain === domain.id ? 'text-blue-600' : 'text-gray-500'}`}>
                  {domain.icon}
                </span>
                {domain.name}
              </button>
            ))}
          </div>
          
          <div className="mt-6">
            <div className="border-t border-gray-200 pt-4">
              <button className="w-full flex items-center justify-center text-blue-600 hover:text-blue-800 text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download Complete Guidelines
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content - Guidelines Display */}
        <div className="flex-1 p-6 overflow-auto max-h-[600px]">
          {selectedDomain && (
            <>
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                {domains.find(d => d.id === selectedDomain)?.icon}
                <span className="ml-2">{domains.find(d => d.id === selectedDomain)?.name} Guidelines</span>
              </h3>
              
              <div className="space-y-6">
                {domainGuidelines[selectedDomain].map((section, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    section.severity === 'critical' ? 'border-red-200 bg-red-50' :
                    section.severity === 'important' ? 'border-amber-200 bg-amber-50' :
                    'border-blue-200 bg-blue-50'
                  }`}>
                    <div className="flex items-center mb-3">
                      {section.severity === 'critical' ? (
                        <AlertTriangle className={`h-5 w-5 mr-2 text-red-600`} />
                      ) : section.severity === 'important' ? (
                        <AlertTriangle className={`h-5 w-5 mr-2 text-amber-600`} />
                      ) : (
                        <Shield className={`h-5 w-5 mr-2 text-blue-600`} />
                      )}
                      <h4 className={`text-base font-medium ${
                        section.severity === 'critical' ? 'text-red-800' :
                        section.severity === 'important' ? 'text-amber-800' :
                        'text-blue-800'
                      }`}>
                        {section.title}
                      </h4>
                      <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                        section.severity === 'critical' ? 'bg-red-200 text-red-800' :
                        section.severity === 'important' ? 'bg-amber-200 text-amber-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {section.severity.charAt(0).toUpperCase() + section.severity.slice(1)}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {section.guidelines.map((guideline, i) => (
                        <li key={i} className={`flex items-start ${
                          section.severity === 'critical' ? 'text-red-700' :
                          section.severity === 'important' ? 'text-amber-700' :
                          'text-blue-700'
                        }`}>
                          <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span className="text-sm">{guideline}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {section.severity === 'critical' && (
                      <div className="mt-3 p-2 bg-white rounded border border-red-200 text-xs text-red-800">
                        <div className="flex items-center">
                          <Code className="h-4 w-4 mr-1.5" />
                          <span className="font-medium">Enforcement: </span>
                          <span className="ml-1">These guidelines are automatically enforced by system guardrails.</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-1.5 text-gray-500" />
                  Compliance Requirements
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-1.5 text-green-500" />
                    {selectedDomain === 'email' && 'CAN-SPAM Act compliance required for all email campaigns'}
                    {selectedDomain === 'linkedin' && 'LinkedIn Professional Community Policies compliance required'}
                    {selectedDomain === 'targeting' && 'GDPR Article 6 legitimate interest assessment required'}
                    {selectedDomain === 'qualification' && 'Documented qualification criteria with audit trail required'}
                    {selectedDomain === 'response' && 'Timely response to data subject rights requests required'}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-1.5 text-green-500" />
                    {selectedDomain === 'email' && 'GDPR legitimate interest/consent validation for EU prospects'}
                    {selectedDomain === 'linkedin' && 'Account restrictions monitoring and remediation procedures'}
                    {selectedDomain === 'targeting' && 'CCPA/CPRA compliance for California residents'}
                    {selectedDomain === 'qualification' && 'Explainable AI documentation for scoring algorithms'}
                    {selectedDomain === 'response' && 'GDPR Article 22 compliance for automated decision making'}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-1.5 text-green-500" />
                    {selectedDomain === 'email' && 'Customer consent repository with timestamp and source tracking'}
                    {selectedDomain === 'linkedin' && 'Sales Navigator account usage compliance monitoring'}
                    {selectedDomain === 'targeting' && 'Regular bias assessment and mitigation reviews'}
                    {selectedDomain === 'qualification' && 'Regular scoring model validation and calibration'}
                    {selectedDomain === 'response' && 'Response time SLAs for critical inquiries (24hr)'}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EthicalGuidelinesPanel;