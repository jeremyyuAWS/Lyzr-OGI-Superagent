import { useState } from 'react';
import { X, Shield, Filter, Calendar, Download, RefreshCw, Bell, AlertTriangle, CheckCircle, Info, ChevronDown, ChevronUp, Eye, Clock, Search, Zap } from 'lucide-react';

interface ComplianceMonitoringPanelProps {
  onClose: () => void;
}

const ComplianceMonitoringPanel = ({ onClose }: ComplianceMonitoringPanelProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'alerts' | 'audit' | 'settings'>('overview');
  const [timeRange, setTimeRange] = useState<'1d' | '7d' | '30d' | '90d'>('7d');
  const [filter, setFilter] = useState<'all' | 'gdpr' | 'consent' | 'optout' | 'content'>('all');
  const [expandedAlert, setExpandedAlert] = useState<number | null>(null);
  
  // Sample compliance data
  const complianceMetrics = {
    overallScore: 94,
    gdprCompliance: 96,
    consentManagement: 100,
    optoutProcessing: 88,
    contentCompliance: 94,
    totalAlerts: 8,
    criticalAlerts: 1,
    resolvedAlerts: 162
  };
  
  // Sample alerts data
  const alerts = [
    {
      id: 1,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      type: 'Opt-out',
      severity: 'critical',
      message: 'Delayed opt-out processing detected for 3 contacts',
      details: 'Opt-out requests for 3 contacts were processed after the 72-hour compliance window. Affected campaigns: Enterprise Q2 Outreach. Root cause: Database synchronization delay.',
      status: 'open',
      assignedTo: 'AI Ethics Team',
      system: 'Email Outreach System'
    },
    {
      id: 2,
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      type: 'Content',
      severity: 'warning',
      message: 'Potentially misleading claim in email template',
      details: 'Email template ID #4582 contains a claim about ROI that may not have sufficient supporting evidence. The phrase "guaranteed results" should be modified to reflect realistic expectations.',
      status: 'investigating',
      assignedTo: 'Content Review Team',
      system: 'Email Template Library'
    },
    {
      id: 3,
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      type: 'GDPR',
      severity: 'info',
      message: 'Right to erasure request received',
      details: 'A formal right to erasure request was received from a prospect in the EU. The 30-day compliance window has been initiated. All systems have been notified and initial data removal has begun.',
      status: 'in progress',
      assignedTo: 'Privacy Compliance Team',
      system: 'Data Management System'
    },
    {
      id: 4,
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      type: 'Consent',
      severity: 'warning',
      message: 'Missing consent documentation for imported list',
      details: 'The recently imported contact list "Enterprise Finance Q2" lacks proper consent documentation for 43 contacts. These contacts have been temporarily excluded from all outreach campaigns pending verification.',
      status: 'resolved',
      assignedTo: 'Data Governance Team',
      system: 'Lead Import System'
    },
    {
      id: 5,
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      type: 'Content',
      severity: 'info',
      message: 'AI-generated content review required',
      details: 'New AI-generated email variants for the "Product Update Announcement" campaign require human review before deployment. 12 variations have been flagged for approval.',
      status: 'resolved',
      assignedTo: 'Content Review Team',
      system: 'Email Assistant Agent'
    }
  ];
  
  // Filter alerts based on selected filter and time range
  const getFilteredAlerts = () => {
    const now = new Date();
    const timeFilterDate = new Date();
    
    if (timeRange === '1d') timeFilterDate.setDate(now.getDate() - 1);
    else if (timeRange === '7d') timeFilterDate.setDate(now.getDate() - 7);
    else if (timeRange === '30d') timeFilterDate.setDate(now.getDate() - 30);
    else if (timeRange === '90d') timeFilterDate.setDate(now.getDate() - 90);
    
    return alerts.filter(alert => {
      const matchesType = filter === 'all' || alert.type.toLowerCase() === filter;
      const matchesTime = alert.timestamp >= timeFilterDate;
      return matchesType && matchesTime;
    });
  };
  
  const filteredAlerts = getFilteredAlerts();
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Responsible AI Compliance Dashboard</h2>
              <p className="text-sm text-gray-500">Real-time monitoring and oversight of AI ethical practices</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 p-1 bg-gray-50">
          <div className="flex space-x-1">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-white border border-b-0 border-gray-200' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('alerts')} 
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === 'alerts' 
                  ? 'bg-white border border-b-0 border-gray-200' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Alerts & Incidents
            </button>
            <button 
              onClick={() => setActiveTab('audit')} 
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === 'audit' 
                  ? 'bg-white border border-b-0 border-gray-200' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Audit Trail
            </button>
            <button 
              onClick={() => setActiveTab('settings')} 
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-white border border-b-0 border-gray-200' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Compliance Settings
            </button>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* Compliance Score Section */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">Compliance Overview</h3>
                  <span className="ml-auto text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Last updated: {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="col-span-1 md:col-span-2">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="relative">
                          {/* Circular progress indicator */}
                          <svg className="w-32 h-32" viewBox="0 0 100 100">
                            <circle 
                              className="text-gray-200" 
                              strokeWidth="8" 
                              stroke="currentColor" 
                              fill="transparent" 
                              r="40" 
                              cx="50" 
                              cy="50" 
                            />
                            <circle 
                              className={`${
                                complianceMetrics.overallScore >= 90 ? 'text-green-500' : 
                                complianceMetrics.overallScore >= 75 ? 'text-amber-500' : 
                                'text-red-500'
                              }`} 
                              strokeWidth="8" 
                              strokeDasharray="251.2" 
                              strokeDashoffset={251.2 - (251.2 * complianceMetrics.overallScore / 100)} 
                              strokeLinecap="round" 
                              stroke="currentColor" 
                              fill="transparent" 
                              r="40" 
                              cx="50" 
                              cy="50" 
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold">{complianceMetrics.overallScore}%</span>
                            <span className="text-sm text-gray-500">Overall Score</span>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center mx-auto">
                            <Download className="h-4 w-4 mr-1" />
                            Export Compliance Report
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                          <div className="text-xs text-blue-500 font-medium mb-1">GDPR Compliance</div>
                          <div className="flex items-end">
                            <div className="text-xl font-semibold">{complianceMetrics.gdprCompliance}%</div>
                            <div className="text-xs text-green-600 ml-2">+2.4%</div>
                          </div>
                          <div className="w-full bg-blue-200 h-1.5 mt-2 rounded-full">
                            <div
                              className="bg-blue-600 h-1.5 rounded-full"
                              style={{ width: `${complianceMetrics.gdprCompliance}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <div className="text-xs text-green-500 font-medium mb-1">Consent Management</div>
                          <div className="flex items-end">
                            <div className="text-xl font-semibold">{complianceMetrics.consentManagement}%</div>
                            <div className="text-xs text-green-600 ml-2">+4.3%</div>
                          </div>
                          <div className="w-full bg-green-200 h-1.5 mt-2 rounded-full">
                            <div
                              className="bg-green-600 h-1.5 rounded-full"
                              style={{ width: `${complianceMetrics.consentManagement}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                          <div className="text-xs text-amber-500 font-medium mb-1">Opt-out Processing</div>
                          <div className="flex items-end">
                            <div className="text-xl font-semibold">{complianceMetrics.optoutProcessing}%</div>
                            <div className="text-xs text-amber-600 ml-2">-2.1%</div>
                          </div>
                          <div className="w-full bg-amber-200 h-1.5 mt-2 rounded-full">
                            <div
                              className="bg-amber-600 h-1.5 rounded-full"
                              style={{ width: `${complianceMetrics.optoutProcessing}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                          <div className="text-xs text-purple-500 font-medium mb-1">Content Compliance</div>
                          <div className="flex items-end">
                            <div className="text-xl font-semibold">{complianceMetrics.contentCompliance}%</div>
                            <div className="text-xs text-green-600 ml-2">+1.8%</div>
                          </div>
                          <div className="w-full bg-purple-200 h-1.5 mt-2 rounded-full">
                            <div
                              className="bg-purple-600 h-1.5 rounded-full"
                              style={{ width: `${complianceMetrics.contentCompliance}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <div className="bg-red-50 rounded-lg p-3 border border-red-100 flex flex-col items-center">
                          <div className="text-xs text-red-500 font-medium mb-1">Critical Alerts</div>
                          <div className="text-lg font-semibold">{complianceMetrics.criticalAlerts}</div>
                          <div className="text-xs text-gray-500">Requires attention</div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex flex-col items-center">
                          <div className="text-xs text-gray-500 font-medium mb-1">Open Alerts</div>
                          <div className="text-lg font-semibold">{complianceMetrics.totalAlerts}</div>
                          <div className="text-xs text-gray-500">To be resolved</div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-3 border border-green-100 flex flex-col items-center">
                          <div className="text-xs text-green-500 font-medium mb-1">Resolved</div>
                          <div className="text-lg font-semibold">{complianceMetrics.resolvedAlerts}</div>
                          <div className="text-xs text-gray-500">Past 30 days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI System Compliance Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">AI System Compliance Status</h3>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI Agent</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Score</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Reviewed</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">Email Assistant</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '96%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">96%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">2 days ago</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Compliant
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">Lead Enrichment Agent</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '92%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">92%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">1 week ago</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Compliant
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">LinkedIn Outreach Agent</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">85%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">3 days ago</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                            Requires Review
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">Meeting Qualifier Agent</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '97%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">97%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">5 days ago</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Compliant
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">Responsible AI Agent</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '98%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">98%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">1 day ago</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Compliant
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Recent Activity Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Compliance Activity</h3>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1.5 rounded-full mr-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800">Quarterly GDPR compliance review completed</p>
                          <span className="ml-auto text-xs text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-xs text-gray-500">All systems passed compliance checks with improved scores</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-1.5 rounded-full mr-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800">Opt-out processing delay detected and resolved</p>
                          <span className="ml-auto text-xs text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-xs text-gray-500">Affected contacts removed from all active sequences</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800">Content review process updated</p>
                          <span className="ml-auto text-xs text-gray-500">1 week ago</span>
                        </div>
                        <p className="text-xs text-gray-500">Enhanced review workflow for AI-generated content implemented</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800">New privacy training module deployed</p>
                          <span className="ml-auto text-xs text-gray-500">2 weeks ago</span>
                        </div>
                        <p className="text-xs text-gray-500">All sales team members completed updated GDPR compliance training</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1.5 rounded-full mr-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-800">Consent management system updated</p>
                          <span className="ml-auto text-xs text-gray-500">3 weeks ago</span>
                        </div>
                        <p className="text-xs text-gray-500">Enhanced granular consent options for all prospect touchpoints</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div>
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center bg-white border border-gray-200 rounded-md">
                  <button 
                    className={`px-3 py-2 text-sm ${timeRange === '1d' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setTimeRange('1d')}
                  >
                    24h
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${timeRange === '7d' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setTimeRange('7d')}
                  >
                    7d
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${timeRange === '30d' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setTimeRange('30d')}
                  >
                    30d
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${timeRange === '90d' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setTimeRange('90d')}
                  >
                    90d
                  </button>
                </div>
                
                <div className="flex items-center bg-white border border-gray-200 rounded-md ml-auto">
                  <button 
                    className={`px-3 py-2 text-sm ${filter === 'all' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${filter === 'gdpr' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setFilter('gdpr')}
                  >
                    GDPR
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${filter === 'consent' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setFilter('consent')}
                  >
                    Consent
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${filter === 'optout' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setFilter('optout')}
                  >
                    Opt-out
                  </button>
                  <button 
                    className={`px-3 py-2 text-sm ${filter === 'content' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'}`}
                    onClick={() => setFilter('content')}
                  >
                    Content
                  </button>
                </div>
                
                <div className="relative">
                  <Search className="h-4 w-4 absolute top-2.5 left-2.5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search alerts..." 
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm"
                  />
                </div>
              </div>
              
              {/* Alerts List */}
              <div className="space-y-3">
                {filteredAlerts.length === 0 ? (
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">No alerts matching your filters.</p>
                  </div>
                ) : (
                  filteredAlerts.map((alert, index) => (
                    <div 
                      key={alert.id}
                      className={`bg-white rounded-lg shadow-sm border ${
                        alert.severity === 'critical' ? 'border-red-200' : 
                        alert.severity === 'warning' ? 'border-amber-200' : 
                        'border-gray-200'
                      } overflow-hidden`}
                    >
                      <div 
                        className={`p-4 ${expandedAlert === index ? 'border-b border-gray-200' : ''} cursor-pointer`}
                        onClick={() => setExpandedAlert(expandedAlert === index ? null : index)}
                      >
                        <div className="flex items-start">
                          <div className={`p-1.5 rounded-full mr-3 ${
                            alert.severity === 'critical' ? 'bg-red-100' : 
                            alert.severity === 'warning' ? 'bg-amber-100' : 
                            'bg-blue-100'
                          }`}>
                            {alert.severity === 'critical' ? (
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            ) : alert.severity === 'warning' ? (
                              <AlertTriangle className="h-5 w-5 text-amber-600" />
                            ) : (
                              <Info className="h-5 w-5 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <div className={`text-xs px-2 py-0.5 rounded-full mr-2 ${
                                alert.status === 'open' ? 'bg-red-100 text-red-800' :
                                alert.status === 'investigating' ? 'bg-amber-100 text-amber-800' :
                                alert.status === 'in progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                              </div>
                              <div className="text-xs text-gray-500">{alert.type}</div>
                              <div className="ml-auto text-xs text-gray-500">
                                {alert.timestamp.toLocaleString()}
                              </div>
                            </div>
                            <h4 className="text-sm font-medium text-gray-800 mt-1">{alert.message}</h4>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-gray-500 mr-2">{alert.assignedTo}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500 ml-2">{alert.system}</span>
                              <button className="ml-auto">
                                {expandedAlert === index ? (
                                  <ChevronUp className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expanded Details */}
                      {expandedAlert === index && (
                        <div className="p-4 bg-gray-50">
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">Details:</h5>
                            <p className="text-sm text-gray-600">{alert.details}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 mb-1">Assigned To:</h5>
                              <p className="text-sm text-gray-600">{alert.assignedTo}</p>
                            </div>
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 mb-1">System:</h5>
                              <p className="text-sm text-gray-600">{alert.system}</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-end space-x-2">
                            <button className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-md">
                              View Full Details
                            </button>
                            {alert.status !== 'resolved' && (
                              <button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md">
                                Take Action
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
          
          {/* Audit Trail Tab */}
          {activeTab === 'audit' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Compliance Audit Trail</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Calendar className="h-4 w-4 absolute top-2.5 left-2.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Filter by date..."
                      className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm"
                    />
                  </div>
                  <button className="p-2 text-gray-500 hover:text-gray-700 bg-white rounded-md border border-gray-200">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 bg-white rounded-md border border-gray-200">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">System</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User/Agent</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Critical Alert
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Opt-out Processing
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          System Monitor
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Delayed opt-out processing detected for 3 contacts
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(Date.now() - 6 * 60 * 60 * 1000).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Compliance Check
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Email Assistant
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Compliance Agent
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Weekly compliance scan completed with 96% score
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(Date.now() - 12 * 60 * 60 * 1000).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Data Request
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Data Management
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          John Smith
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          GDPR data access request processed for prospect ID #8294
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                            Content Flag
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Email Templates
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Content Review Bot
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Potentially misleading claim detected in template #4582
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            Policy Update
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Governance Framework
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Sarah Johnson
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Updated email consent policy for EU prospects
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Showing 5 of 127 entries
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 border border-gray-300 rounded text-sm text-gray-600 bg-white">Previous</button>
                    <button className="px-2 py-1 border border-gray-300 rounded text-sm text-white bg-blue-600">1</button>
                    <button className="px-2 py-1 border border-gray-300 rounded text-sm text-gray-600 bg-white">2</button>
                    <button className="px-2 py-1 border border-gray-300 rounded text-sm text-gray-600 bg-white">3</button>
                    <button className="px-2 py-1 border border-gray-300 rounded text-sm text-gray-600 bg-white">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Compliance Settings & Controls</h3>
                <p className="text-sm text-gray-600">Configure how the system monitors and enforces responsible AI principles</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="font-medium text-gray-800">Alert Configuration</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">GDPR Compliance Alerts</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Monitor for GDPR related issues and violations</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-gdpr" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-gdpr" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Opt-out Processing Monitoring</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Alert on delayed opt-out processing and compliance issues</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-optout" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-optout" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Content Compliance Scanning</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Monitor outbound content for compliance with messaging guidelines</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-content" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-content" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Bias Detection</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Monitor for potential bias in AI-generated content and decisions</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-bias" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-bias" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <h5 className="text-sm font-medium text-gray-700">Alert Severity Thresholds</h5>
                          <button className="text-xs text-blue-600 hover:text-blue-800">Configure</button>
                        </div>
                        <div className="mt-2 p-3 bg-gray-50 rounded-md text-xs">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600">Critical:</span>
                            <span className="font-medium">90% threshold</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600">Warning:</span>
                            <span className="font-medium">75% threshold</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Info:</span>
                            <span className="font-medium">60% threshold</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="font-medium text-gray-800">Enforcement Controls</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center">
                            <h5 className="text-sm font-medium text-gray-700">Automatic Guardrails</h5>
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">Recommended</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">Automatically block non-compliant actions from executing</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-automatic" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-automatic" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Human-in-the-Loop Reviews</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Require human approval for high-risk actions</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-hitl" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-hitl" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Consent Verification</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Verify consent status before any outreach</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-consent" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-consent" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Automatic Response to Critical Issues</h5>
                          <p className="text-xs text-gray-500 mt-0.5">Take immediate corrective action for critical compliance issues</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-green-400 rounded-full">
                          <input type="checkbox" id="toggle-autoresponse" className="absolute w-0 h-0 opacity-0" defaultChecked />
                          <label htmlFor="toggle-autoresponse" className="block w-6 h-6 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out translate-x-6 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <h5 className="text-sm font-medium text-gray-700">Risk Thresholds for Automation</h5>
                          <button className="text-xs text-blue-600 hover:text-blue-800">Configure</button>
                        </div>
                        <div className="mt-2 p-3 bg-gray-50 rounded-md text-xs">
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-0.5">
                                <span>Low Risk Actions</span>
                                <span>Fully Automated</span>
                              </div>
                              <div className="w-full bg-green-100 rounded-full h-1.5">
                                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-xs mb-0.5">
                                <span>Medium Risk Actions</span>
                                <span>Automated with Audit</span>
                              </div>
                              <div className="w-full bg-amber-100 rounded-full h-1.5">
                                <div className="bg-amber-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-xs mb-0.5">
                                <span>High Risk Actions</span>
                                <span>Human Review Required</span>
                              </div>
                              <div className="w-full bg-red-100 rounded-full h-1.5">
                                <div className="bg-red-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-4">
                <div className="p-4 border-b border-gray-100">
                  <h4 className="font-medium text-gray-800">Notification Settings</h4>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Alert Recipients</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="notify-critical"
                              checked
                              readOnly
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="notify-critical" className="ml-2 text-sm text-gray-700">Critical Alerts</label>
                          </div>
                          <button className="text-xs text-blue-600 hover:text-blue-800">Edit Recipients</button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="notify-warning"
                              checked
                              readOnly
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="notify-warning" className="ml-2 text-sm text-gray-700">Warning Alerts</label>
                          </div>
                          <button className="text-xs text-blue-600 hover:text-blue-800">Edit Recipients</button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="notify-info"
                              checked
                              readOnly
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="notify-info" className="ml-2 text-sm text-gray-700">Info Alerts</label>
                          </div>
                          <button className="text-xs text-blue-600 hover:text-blue-800">Edit Recipients</button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="notify-resolved"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="notify-resolved" className="ml-2 text-sm text-gray-700">Resolved Issues</label>
                          </div>
                          <button className="text-xs text-blue-600 hover:text-blue-800">Edit Recipients</button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Notification Channels</h5>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="channel-email"
                            checked
                            readOnly
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="channel-email" className="ml-2 text-sm text-gray-700">Email Notifications</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="channel-slack"
                            checked
                            readOnly
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="channel-slack" className="ml-2 text-sm text-gray-700">Slack Integration</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="channel-dashboard"
                            checked
                            readOnly
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="channel-dashboard" className="ml-2 text-sm text-gray-700">Dashboard Alerts</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="channel-webhook"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="channel-webhook" className="ml-2 text-sm text-gray-700">Webhook Notifications</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                    <div className="flex items-start">
                      <div className="mr-3">
                        <Info className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-800">Alert Configuration Recommendations</p>
                        <p className="text-xs text-blue-700 mt-1">
                          Based on your current setup, we recommend enabling Webhook Notifications to integrate with your ticketing system for more efficient resolution workflows.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button className="text-xs text-blue-600 font-medium">Apply Recommendations</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
          <div className="text-sm text-gray-500 flex items-center">
            <Zap className="h-4 w-4 text-amber-500 mr-1" />
            <span>Real-time monitoring active</span>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50">
              Save Settings
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              Export Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceMonitoringPanel;