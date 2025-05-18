import { useState } from 'react';
import { Shield, AlignLeft, FileText, MessageSquare, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

const ResponsibleAIView = () => {
  const [activeTab, setActiveTab] = useState<'principles' | 'governance' | 'explainability' | 'ethical'>('principles');
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Responsible AI Framework</h2>
        <p className="text-sm md:text-base text-gray-600">
          Our approach to ethical, transparent and accountable AI in sales outreach
        </p>
      </div>
      
      {/* Secondary Tab Navigation */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px space-x-4 md:space-x-8 overflow-x-auto">
          {[
            { id: 'principles', label: 'Principles', icon: <Shield className="w-4 h-4" /> },
            { id: 'governance', label: 'Governance', icon: <AlignLeft className="w-4 h-4" /> },
            { id: 'explainability', label: 'Explainability', icon: <FileText className="w-4 h-4" /> },
            { id: 'ethical', label: 'Ethical Guardrails', icon: <MessageSquare className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center py-3 px-1 whitespace-nowrap border-b-2 font-medium text-xs md:text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-1 md:mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Core Principles Content */}
      {activeTab === 'principles' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
              <h3 className="font-medium text-gray-800">Core Principles</h3>
            </div>
            <div className="p-5">
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Consent & Transparency</h4>
                    <p className="text-sm text-gray-600">Our AI systems maintain clear records of prospect consent and ensure transparency in all outreach communications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Privacy & Data Minimization</h4>
                    <p className="text-sm text-gray-600">We collect only necessary prospect data, use it only for stated purposes, and maintain strict data retention policies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-3">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Fairness & Non-discrimination</h4>
                    <p className="text-sm text-gray-600">Our outreach algorithms are designed to be equitable across all prospect demographics and company characteristics.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Human Oversight</h4>
                    <p className="text-sm text-gray-600">Sales professionals maintain appropriate supervision of AI systems, with clear escalation paths for sensitive communications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-transparent">
              <h3 className="font-medium text-gray-800">Implementation Framework</h3>
            </div>
            <div className="p-5">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200"></div>
                
                <div className="relative mb-6">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500 h-3 w-3 rounded-full z-10"></div>
                    <div className="h-0.5 w-5 bg-blue-200"></div>
                    <div className="bg-blue-100 rounded-lg px-3 py-1.5 text-sm font-medium text-blue-800">Design Phase</div>
                  </div>
                  <div className="ml-10 text-sm text-gray-600">
                    <p>• Ethical risk assessment for all new AI agents</p>
                    <p>• Privacy impact assessment for data collection</p>
                    <p>• Outreach message tone and content guidelines</p>
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-500 h-3 w-3 rounded-full z-10"></div>
                    <div className="h-0.5 w-5 bg-green-200"></div>
                    <div className="bg-green-100 rounded-lg px-3 py-1.5 text-sm font-medium text-green-800">Development Phase</div>
                  </div>
                  <div className="ml-10 text-sm text-gray-600">
                    <p>• Secure coding practices</p>
                    <p>• Cross-regional compliance testing</p>
                    <p>• Documentation of model features & limitations</p>
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <div className="flex items-center mb-2">
                    <div className="bg-amber-500 h-3 w-3 rounded-full z-10"></div>
                    <div className="h-0.5 w-5 bg-amber-200"></div>
                    <div className="bg-amber-100 rounded-lg px-3 py-1.5 text-sm font-medium text-amber-800">Deployment Phase</div>
                  </div>
                  <div className="ml-10 text-sm text-gray-600">
                    <p>• Gradual rollout with human oversight</p>
                    <p>• Clear escalation paths for sensitive communications</p>
                    <p>• Ongoing monitoring for response sentiment</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <div className="bg-pink-500 h-3 w-3 rounded-full z-10"></div>
                    <div className="h-0.5 w-5 bg-pink-200"></div>
                    <div className="bg-pink-100 rounded-lg px-3 py-1.5 text-sm font-medium text-pink-800">Operational Phase</div>
                  </div>
                  <div className="ml-10 text-sm text-gray-600">
                    <p>• Quarterly ethical reviews</p>
                    <p>• Prospect feedback collection</p>
                    <p>• Continuous improvement process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Governance Content */}
      {activeTab === 'governance' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
              <h3 className="font-medium text-gray-800">Governance Structure</h3>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">Executive Leadership</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>AI Ethics Committee</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Quarterly policy reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Strategic AI direction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Annual ethics audit</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">Sales Operations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>AI risk assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Regulatory compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Incident response</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Monthly risk reporting</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">Development Teams</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Ethics-by-design approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Bias testing protocols</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Documentation standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Continuous integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-5 pt-5 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-800 mb-3">Governance Workflow</h4>
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-5">
                    <div className="ml-6 relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
                      <h5 className="text-sm font-medium text-gray-800">1. Initial Assessment</h5>
                      <p className="text-xs text-gray-600 mt-1">All new AI agents undergo ethical and privacy assessment before approval.</p>
                    </div>
                    <div className="ml-6 relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
                      <h5 className="text-sm font-medium text-gray-800">2. Development Oversight</h5>
                      <p className="text-xs text-gray-600 mt-1">Sales operations team reviews message content and targeting logic for compliance.</p>
                    </div>
                    <div className="ml-6 relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
                      <h5 className="text-sm font-medium text-gray-800">3. Testing & Validation</h5>
                      <p className="text-xs text-gray-600 mt-1">Rigorous testing across diverse scenarios and prospect segments.</p>
                    </div>
                    <div className="ml-6 relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
                      <h5 className="text-sm font-medium text-gray-800">4. Deployment Approval</h5>
                      <p className="text-xs text-gray-600 mt-1">Final sign-off from Sales Operations, Legal, and Ethics Committee.</p>
                    </div>
                    <div className="ml-6 relative">
                      <div className="absolute -left-6 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
                      <h5 className="text-sm font-medium text-gray-800">5. Continuous Monitoring</h5>
                      <p className="text-xs text-gray-600 mt-1">Regular performance reviews and ethics audits of live systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-transparent">
              <h3 className="font-medium text-gray-800">Regulatory Compliance</h3>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-3 py-1">
                  <h4 className="text-sm font-medium text-gray-800">Privacy Regulations</h4>
                  <ul className="mt-2 space-y-1 text-xs text-gray-600">
                    <li>• GDPR (European Union)</li>
                    <li>• CCPA (California)</li>
                    <li>• CASL (Canada)</li>
                    <li>• CAN-SPAM Act compliance</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-3 py-1">
                  <h4 className="text-sm font-medium text-gray-800">Prospect Protection</h4>
                  <ul className="mt-2 space-y-1 text-xs text-gray-600">
                    <li>• Right to explanation</li>
                    <li>• Right to be forgotten</li>
                    <li>• Opt-out management</li>
                    <li>• Do Not Contact list compliance</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-3 py-1">
                  <h4 className="text-sm font-medium text-gray-800">Data Privacy</h4>
                  <ul className="mt-2 space-y-1 text-xs text-gray-600">
                    <li>• Data minimization practices</li>
                    <li>• Data accuracy verification</li>
                    <li>• Retention policy enforcement</li>
                    <li>• Third-party data handling</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-3 py-1">
                  <h4 className="text-sm font-medium text-gray-800">AI-Specific Frameworks</h4>
                  <ul className="mt-2 space-y-1 text-xs text-gray-600">
                    <li>• NIST AI Risk Management Framework</li>
                    <li>• EU AI Act preparedness</li>
                    <li>• Industry-specific sales ethics standards</li>
                    <li>• Voluntary AI commitments</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-800">Compliance Dashboard</h4>
                  <span className="text-xs text-gray-500">Updated Weekly</span>
                </div>
                
                <div className="mt-3 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Consent Documentation</span>
                      <span className="font-medium text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>GDPR Compliance</span>
                      <span className="font-medium text-green-600">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Opt-out Management</span>
                      <span className="font-medium text-amber-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Messaging Compliance</span>
                      <span className="font-medium text-green-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Explainability Content */}
      {activeTab === 'explainability' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
              <h3 className="font-medium text-gray-800">Model Explainability Approaches</h3>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Email Response Factors</h4>
                  <p className="text-xs text-gray-700 mb-3">We identify which factors have the most significant impact on email response rates.</p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Subject Line Clarity</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Personalization</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Value Proposition</span>
                        <span>22%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Send Time</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <h4 className="text-sm font-medium text-green-800 mb-2">Lead Scoring Explanations</h4>
                  <p className="text-xs text-gray-700 mb-3">We demonstrate how specific factors influence lead qualification scores.</p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-gray-100 text-xs">
                      <p className="font-medium text-gray-800 mb-1">Current Score: 72/100 (Qualified)</p>
                      <p className="text-gray-700">Title: VP of Marketing, Company size: 500+, Recent web visit: Yes</p>
                      <hr className="my-2 border-dashed border-gray-200" />
                      <p className="font-medium text-green-700">Key scoring factors:</p>
                      <ul className="mt-1 space-y-1 ml-4 list-disc text-gray-700">
                        <li>VP title: +25 points</li>
                        <li>Enterprise segment: +18 points</li>
                        <li>Recent web activity: +15 points</li>
                        <li>Technology match: +14 points</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <h4 className="text-sm font-medium text-amber-800 mb-2">Sequence Design Logic</h4>
                  <p className="text-xs text-gray-700 mb-3">We visualize the decision path taken by AI agents for sequence orchestration.</p>
                  <div className="bg-white p-3 rounded border border-gray-100">
                    <div className="text-xs text-center">
                      <div className="bg-amber-100 p-2 rounded">
                        <span className="font-medium">Is prospect senior decision-maker?</span>
                      </div>
                      <div className="flex items-center justify-center mt-2 space-x-10">
                        <div className="flex flex-col items-center">
                          <span className="text-green-700 font-medium">Yes</span>
                          <div className="h-5 w-0.5 bg-green-300 my-1"></div>
                          <div className="bg-green-100 p-2 rounded w-24">
                            <span className="font-medium">Direct Approach</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-red-700 font-medium">No</span>
                          <div className="h-5 w-0.5 bg-red-300 my-1"></div>
                          <div className="bg-red-100 p-2 rounded w-24">
                            <span className="font-medium">Value-First</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
                  <h4 className="text-sm font-medium text-pink-800 mb-2">Local Interpretable Model-Agnostic Explanations</h4>
                  <p className="text-xs text-gray-700 mb-3">We break down complex models into simpler, interpretable components.</p>
                  <div className="bg-white p-3 rounded border border-gray-100 text-xs">
                    <p className="font-medium text-gray-800 mb-2">Meeting Qualification Decision Factors:</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-16 text-right mr-2">Job Level</div>
                        <div className="w-32 h-3 bg-green-100 rounded-sm">
                          <div className="h-3 bg-green-500 rounded-sm" style={{ width: '85%' }}></div>
                        </div>
                        <div className="ml-2">+85%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 text-right mr-2">Intent Signals</div>
                        <div className="w-32 h-3 bg-green-100 rounded-sm">
                          <div className="h-3 bg-green-500 rounded-sm" style={{ width: '65%' }}></div>
                        </div>
                        <div className="ml-2">+65%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 text-right mr-2">Engagement</div>
                        <div className="w-32 h-3 bg-green-100 rounded-sm">
                          <div className="h-3 bg-green-500 rounded-sm" style={{ width: '45%' }}></div>
                        </div>
                        <div className="ml-2">+45%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 text-right mr-2">Company Size</div>
                        <div className="w-32 h-3 bg-red-100 rounded-sm">
                          <div className="h-3 bg-red-500 rounded-sm" style={{ width: '30%' }}></div>
                        </div>
                        <div className="ml-2">-30%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-transparent">
              <h3 className="font-medium text-gray-800">Prospect Transparency</h3>
            </div>
            <div className="p-5">
              <div className="space-y-5">
                <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                  <div className="p-3 bg-gray-50 border-b border-gray-200">
                    <h4 className="text-sm font-medium text-gray-800">AI Outreach Disclosure</h4>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <MessageSquare className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Personalized Email</div>
                        <div className="text-xs text-gray-500">Template #A428-C</div>
                      </div>
                    </div>
                    
                    <div className="text-xs bg-gray-50 p-3 rounded mb-3">
                      <div className="font-medium mb-1">Personalization Factors:</div>
                      <ul className="space-y-1 ml-4 list-disc">
                        <li>Job title: VP Marketing</li>
                        <li>Recent company announcement</li>
                        <li>Industry-specific challenge</li>
                        <li>Mutual connection</li>
                      </ul>
                    </div>
                    
                    <div className="text-xs text-gray-600">
                      <p className="mb-1">This email was created with AI assistance while maintaining human oversight for authenticity and relevance.</p>
                      <p>All data was ethically sourced from publicly available information.</p>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-200 text-xs flex justify-end">
                      <button className="text-blue-600 font-medium">Manage Communication Preferences</button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-800">AI Disclosure Examples</h4>
                  
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-xs">
                    <div className="flex items-start">
                      <Info className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-blue-800">Email Footer</p>
                        <p className="text-gray-700 mt-1">This email was crafted with AI assistance to deliver relevant information based on your professional profile. Your data privacy is important to us.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-xs">
                    <div className="flex items-start">
                      <Info className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">Lead Response</p>
                        <p className="text-gray-700 mt-1">Your inquiry has been processed using our AI-assisted system to provide the most accurate information. A sales representative may follow up for any specific questions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-xs">
                    <div className="flex items-start">
                      <Info className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-amber-800">Consent Management</p>
                        <p className="text-gray-700 mt-1">We use AI to personalize your experience. You can manage communication preferences at any time. Your data is never sold to third parties and is processed in accordance with our privacy policy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Ethical Guardrails Content */}
      {activeTab === 'ethical' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
              <h3 className="font-medium text-gray-800">Ethical Guardrails</h3>
            </div>
            <div className="p-5">
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Prohibited Use Cases</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span>Misrepresentation of AI as human without disclosure</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span>Outreach to prospects who have opted out</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span>Deceptive or misleading messaging</span>
                      </li>
                      <li className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span>Use of non-public personal information</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Restricted Use Cases</h4>
                    <p className="text-xs text-gray-600 mb-2">These use cases require additional oversight and safeguards:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span>Outreach to highly regulated industries</span>
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span>Personalization based on inferred characteristics</span>
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span>Use of third-party intent data</span>
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span>High-frequency outreach cadences</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Approved Use Cases</h4>
                    <p className="text-xs text-gray-600 mb-2">These use cases align with our ethical framework:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Personalized outreach based on public professional data</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Lead scoring based on transparent criteria</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Content recommendations based on prospect interests</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Meeting scheduling with clear opt-out options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-transparent">
              <h3 className="font-medium text-gray-800">Model Cards & Ethical Documentation</h3>
            </div>
            <div className="p-5">
              <div className="mb-5 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="text-sm font-medium text-blue-800 mb-3">Sample Model Card: Email Assistant</h4>
                <div className="space-y-3 text-xs text-gray-700">
                  <div>
                    <h5 className="font-medium text-blue-700">Model Details</h5>
                    <p>Large language model fine-tuned for effective sales outreach communications</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700">Intended Use</h5>
                    <p>Crafting personalized sales emails that are relevant, respectful, and compelling</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700">Performance Metrics</h5>
                    <ul className="ml-4 list-disc">
                      <li>Open Rate: 38%</li>
                      <li>Reply Rate: 12%</li>
                      <li>Meeting Rate: 3.2%</li>
                      <li>Fairness assessment: Consistent performance across industries</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700">Limitations</h5>
                    <ul className="ml-4 list-disc">
                      <li>Not designed for highly regulated industries</li>
                      <li>May require human review for complex value propositions</li>
                      <li>Limited effectiveness with cold prospects</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700">Ethical Considerations</h5>
                    <ul className="ml-4 list-disc">
                      <li>All emails include clear unsubscribe mechanism</li>
                      <li>Transparency about AI assistance in communications</li>
                      <li>Respects prospect preferences and time</li>
                      <li>Avoids misleading claims or pressure tactics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-800 mb-1">Ethics Review Process</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs">
                    <div className="font-medium text-gray-800 mb-1.5">1. Pre-Development</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Ethical impact assessment</li>
                      <li>• Stakeholder consultation</li>
                      <li>• Use case review</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs">
                    <div className="font-medium text-gray-800 mb-1.5">2. Development</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Messaging bias mitigation</li>
                      <li>• Privacy safeguards</li>
                      <li>• Explainability design</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs">
                    <div className="font-medium text-gray-800 mb-1.5">3. Testing</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Tone analysis</li>
                      <li>• Cross-region compliance</li>
                      <li>• Opt-out functionality</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs">
                    <div className="font-medium text-gray-800 mb-1.5">4. Deployment</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Transparent disclosures</li>
                      <li>• Escalation paths</li>
                      <li>• Performance monitoring</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-xs mt-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-amber-800 mb-1">Quarterly Ethics Certification</h5>
                      <p className="text-gray-700">All AI outreach systems undergo quarterly ethical review and certification. This includes messaging review, opt-out testing, and GDPR compliance verification.</p>
                      <div className="mt-2 pt-2 border-t border-amber-200 flex justify-between">
                        <span>Next review date:</span>
                        <span className="font-medium">March 15, 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content relevant to all tabs - certifications and commitments */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
            <h3 className="font-medium text-gray-800">Industry Commitments & Certifications</h3>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <h4 className="text-sm font-medium text-gray-800 mb-1">Responsible AI Certified</h4>
                <p className="text-xs text-gray-600">Sales Tech Consortium</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <h4 className="text-sm font-medium text-gray-800 mb-1">Privacy by Design</h4>
                <p className="text-xs text-gray-600">GDPR Excellence Initiative</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <FileText className="h-8 w-8 text-amber-600 mb-2" />
                <h4 className="text-sm font-medium text-gray-800 mb-1">NIST AI RMF Aligned</h4>
                <p className="text-xs text-gray-600">Risk Management Framework</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <AlertTriangle className="h-8 w-8 text-pink-600 mb-2" />
                <h4 className="text-sm font-medium text-gray-800 mb-1">AI Ethics Transparency</h4>
                <p className="text-xs text-gray-600">Global Standards Initiative</p>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">Our commitment to responsible AI is continuously evolving. We regularly review our practices against industry standards and emerging best practices.</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Download Full AI Ethics Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleAIView;