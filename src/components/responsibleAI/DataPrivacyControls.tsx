import { useState } from 'react';
import { Shield, Eye, EyeOff, Check, AlertTriangle, HelpCircle, Lock, Unlock, User, Database, FileText, Sliders } from 'lucide-react';

const DataPrivacyControls = () => {
  const [retention, setRetention] = useState(90);
  const [anonymizeLevel, setAnonymizeLevel] = useState(2);
  const [dataCollectionLevel, setDataCollectionLevel] = useState<'minimal' | 'standard' | 'comprehensive'>('standard');
  const [accessLevels, setAccessLevels] = useState({
    personalData: false,
    contactData: true,
    companyData: true,
    behavioralData: false,
    intentData: true
  });
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent flex justify-between items-center">
        <h3 className="font-medium text-gray-800 flex items-center">
          <Shield className="h-5 w-5 text-blue-600 mr-2" />
          Data Privacy Controls
        </h3>
        
        <div>
          <button className="text-sm font-medium text-blue-600 flex items-center">
            <Check className="h-4 w-4 mr-1" />
            Save Configuration
          </button>
        </div>
      </div>
      
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Collection Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Data Collection Settings</h4>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Data Collection Level</label>
            <div className="flex space-x-0 rounded-lg overflow-hidden border border-gray-200">
              <button 
                onClick={() => setDataCollectionLevel('minimal')}
                className={`flex-1 py-2 text-xs ${
                  dataCollectionLevel === 'minimal' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Minimal
              </button>
              <button 
                onClick={() => setDataCollectionLevel('standard')}
                className={`flex-1 py-2 text-xs ${
                  dataCollectionLevel === 'standard' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Standard
              </button>
              <button 
                onClick={() => setDataCollectionLevel('comprehensive')}
                className={`flex-1 py-2 text-xs ${
                  dataCollectionLevel === 'comprehensive' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Comprehensive
              </button>
            </div>
            <div className="mt-2 p-2 rounded bg-gray-50 text-xs text-gray-600">
              {dataCollectionLevel === 'minimal' && (
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <Shield className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <p>Collects only basic contact information and explicit consent records. Highly privacy-focused but limits personalization.</p>
                </div>
              )}
              {dataCollectionLevel === 'standard' && (
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <Shield className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <p>Balanced approach collecting business contact data, company information, and basic engagement metrics. Recommended setting.</p>
                </div>
              )}
              {dataCollectionLevel === 'comprehensive' && (
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                  </div>
                  <p>Collects detailed behavior data, content preferences, and third-party data. Enables maximum personalization but requires strict governance.</p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Data Retention Period (Days)</label>
            <div className="flex items-center">
              <input
                type="range"
                min="30"
                max="730"
                value={retention}
                onChange={(e) => setRetention(parseInt(e.target.value))}
                className="flex-1 h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
              />
              <span className="ml-3 text-sm font-medium w-12">{retention}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>30 days</span>
              <span>365 days</span>
              <span>730 days</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Anonymization Level</label>
            <div className="mt-2 space-y-2">
              <div 
                className={`flex items-center p-2 rounded border ${
                  anonymizeLevel === 1 ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                } cursor-pointer`}
                onClick={() => setAnonymizeLevel(1)}
              >
                <div className={`h-4 w-4 mr-2 rounded-full border ${
                  anonymizeLevel === 1 ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                }`}>
                  {anonymizeLevel === 1 && <Check className="h-3 w-3 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Level 1: Basic Anonymization</div>
                  <div className="text-xs text-gray-500">Remove direct identifiers only</div>
                </div>
              </div>
              
              <div 
                className={`flex items-center p-2 rounded border ${
                  anonymizeLevel === 2 ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                } cursor-pointer`}
                onClick={() => setAnonymizeLevel(2)}
              >
                <div className={`h-4 w-4 mr-2 rounded-full border ${
                  anonymizeLevel === 2 ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                }`}>
                  {anonymizeLevel === 2 && <Check className="h-3 w-3 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Level 2: Standard Anonymization</div>
                  <div className="text-xs text-gray-500">Remove direct and some indirect identifiers</div>
                </div>
              </div>
              
              <div 
                className={`flex items-center p-2 rounded border ${
                  anonymizeLevel === 3 ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                } cursor-pointer`}
                onClick={() => setAnonymizeLevel(3)}
              >
                <div className={`h-4 w-4 mr-2 rounded-full border ${
                  anonymizeLevel === 3 ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                }`}>
                  {anonymizeLevel === 3 && <Check className="h-3 w-3 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Level 3: Advanced Anonymization</div>
                  <div className="text-xs text-gray-500">Apply k-anonymity and differential privacy</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100 text-xs text-yellow-800">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Data Retention Notice</p>
                <p>Retention periods longer than 365 days should be reviewed with legal counsel for compliance with applicable privacy regulations.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Access Control Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Data Access Control</h4>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Access Permissions by Data Type</label>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <User className="h-4 w-4 text-red-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Personal Data</div>
                    <div className="text-xs text-gray-500">Names, contact details</div>
                  </div>
                </div>
                <div className="relative inline-block w-10 h-5">
                  <input
                    type="checkbox"
                    checked={accessLevels.personalData}
                    onChange={() => setAccessLevels({...accessLevels, personalData: !accessLevels.personalData})}
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                      accessLevels.personalData ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                  <span
                    className={`absolute h-4 w-4 bg-white rounded-full transition-transform left-0.5 top-0.5 ${
                      accessLevels.personalData ? 'transform translate-x-5' : ''
                    }`}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <Database className="h-4 w-4 text-blue-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Company Data</div>
                    <div className="text-xs text-gray-500">Firmographics, industry info</div>
                  </div>
                </div>
                <div className="relative inline-block w-10 h-5">
                  <input
                    type="checkbox"
                    checked={accessLevels.companyData}
                    onChange={() => setAccessLevels({...accessLevels, companyData: !accessLevels.companyData})}
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                      accessLevels.companyData ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                  <span
                    className={`absolute h-4 w-4 bg-white rounded-full transition-transform left-0.5 top-0.5 ${
                      accessLevels.companyData ? 'transform translate-x-5' : ''
                    }`}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 text-green-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Contact Data</div>
                    <div className="text-xs text-gray-500">Business email, phone, title</div>
                  </div>
                </div>
                <div className="relative inline-block w-10 h-5">
                  <input
                    type="checkbox"
                    checked={accessLevels.contactData}
                    onChange={() => setAccessLevels({...accessLevels, contactData: !accessLevels.contactData})}
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                      accessLevels.contactData ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                  <span
                    className={`absolute h-4 w-4 bg-white rounded-full transition-transform left-0.5 top-0.5 ${
                      accessLevels.contactData ? 'transform translate-x-5' : ''
                    }`}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 text-amber-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Behavioral Data</div>
                    <div className="text-xs text-gray-500">Website visits, content interactions</div>
                  </div>
                </div>
                <div className="relative inline-block w-10 h-5">
                  <input
                    type="checkbox"
                    checked={accessLevels.behavioralData}
                    onChange={() => setAccessLevels({...accessLevels, behavioralData: !accessLevels.behavioralData})}
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                      accessLevels.behavioralData ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                  <span
                    className={`absolute h-4 w-4 bg-white rounded-full transition-transform left-0.5 top-0.5 ${
                      accessLevels.behavioralData ? 'transform translate-x-5' : ''
                    }`}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <Sliders className="h-4 w-4 text-purple-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Intent Data</div>
                    <div className="text-xs text-gray-500">Research activity, buying signals</div>
                  </div>
                </div>
                <div className="relative inline-block w-10 h-5">
                  <input
                    type="checkbox"
                    checked={accessLevels.intentData}
                    onChange={() => setAccessLevels({...accessLevels, intentData: !accessLevels.intentData})}
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                      accessLevels.intentData ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                  <span
                    className={`absolute h-4 w-4 bg-white rounded-full transition-transform left-0.5 top-0.5 ${
                      accessLevels.intentData ? 'transform translate-x-5' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Data Access Governance</label>
            <div className="p-3 border border-gray-200 rounded-lg">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">GDPR Subject Access Requests</span>
                  <div className="flex items-center">
                    <span className="text-green-600 text-xs mr-1">Enabled</span>
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Automatic Deletion Workflow</span>
                  <div className="flex items-center">
                    <span className="text-green-600 text-xs mr-1">Enabled</span>
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Data Portability Export</span>
                  <div className="flex items-center">
                    <span className="text-green-600 text-xs mr-1">Enabled</span>
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Consent Change Tracking</span>
                  <div className="flex items-center">
                    <span className="text-green-600 text-xs mr-1">Enabled</span>
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-md border border-green-100 text-xs text-green-800">
            <div className="flex items-start">
              <Shield className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Current Data Protection Status</p>
                <p>Your current configuration complies with GDPR, CCPA, and CASL requirements. Data retention policy aligns with your company's privacy policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
        <div className="space-x-3">
          <button className="px-4 py-2 border border-gray-300 bg-white rounded text-sm text-gray-700 hover:bg-gray-50">
            Reset to Default
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacyControls;