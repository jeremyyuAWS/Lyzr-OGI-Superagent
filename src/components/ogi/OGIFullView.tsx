import { useState } from 'react';
import KnowledgeGraph from './KnowledgeGraph';
import OGIAgentUI from './OGIAgentUI';
import QuickActionButtons from './QuickActionButtons';
import TabQuestionSuggestions from './TabQuestionSuggestions';
import { Network, TrendingUp, Database, Shield, Users } from 'lucide-react';
import { categorizedOGIConversations } from '../../data/mockOGIResponses';
import OGIPrebuiltConversations from './OGIPrebuiltConversations';

const OGIFullView = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('graph');
  const [selectedConversationType, setSelectedConversationType] = useState<string>('connections');
  
  const handleQuickActionClick = (query: string) => {
    console.log("Quick action clicked:", query);
    // This would be implemented to pass the query to the OGI assistant
  };
  
  const handlePrebuiltConversationSelect = (messages: any[]) => {
    console.log("Prebuilt conversation selected:", messages);
    // This would be implemented to load the conversation into the OGI assistant
  };
  
  // Define category information for the conversation library
  const conversationCategories = [
    { id: 'connections', label: 'Network Connections', icon: <Network className="h-4 w-4" />, count: categorizedOGIConversations.connections?.length || 0 },
    { id: 'performance', label: 'Performance & ROI', icon: <TrendingUp className="h-4 w-4" />, count: categorizedOGIConversations.performance?.length || 0 },
    { id: 'data', label: 'Data & Information', icon: <Database className="h-4 w-4" />, count: categorizedOGIConversations.data?.length || 0 },
    { id: 'governance', label: 'Security & Governance', icon: <Shield className="h-4 w-4" />, count: categorizedOGIConversations.governance?.length || 0 },
    { id: 'teams', label: 'Teams & Users', icon: <Users className="h-4 w-4" />, count: categorizedOGIConversations.teams?.length || 0 }
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Organization General Intelligence</h2>
        <p className="text-sm md:text-base text-gray-600">
          Visualize connections between agents, data sources, and sales tools
        </p>
      </div>
      
      {/* Main tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-6 -mb-px">
          <button
            onClick={() => setActiveTab('graph')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'graph'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Knowledge Graph
          </button>
          <button
            onClick={() => setActiveTab('conversations')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'conversations'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Conversation Library
          </button>
        </nav>
      </div>
      
      {activeTab === 'graph' && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-medium text-gray-800">Knowledge Graph</h3>
              <div className="text-sm text-gray-500">
                {selectedNode ? 'Node selected: ' + networkData.nodes.find(n => n.id === selectedNode)?.label : 'Click on a node to explore'}
              </div>
            </div>
            <div className="p-2 h-[400px] md:h-[600px]">
              <KnowledgeGraph onNodeSelect={setSelectedNode} />
            </div>
          </div>
          
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">OGI Assistant</h3>
            </div>
            <div className="p-4 border-b border-gray-100">
              <QuickActionButtons onQuickActionClick={handleQuickActionClick} />
            </div>
            <div className="h-[350px] md:h-[490px]">
              <OGIAgentUI selectedNode={selectedNode} />
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'conversations' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left sidebar - conversation categories */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">Conversation Categories</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {conversationCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedConversationType(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedConversationType === category.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-100'
                        : 'bg-gray-50 text-gray-700 border border-gray-100 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`p-2 rounded-md mr-3 ${
                        selectedConversationType === category.id ? 'bg-blue-100' : 'bg-white'
                      }`}>
                        {category.icon}
                      </span>
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedConversationType === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <h4 className="font-medium flex items-center mb-1">
                  <Info className="h-4 w-4 mr-1.5 text-gray-500" />
                  About Conversation Library
                </h4>
                <p className="text-xs text-gray-600">
                  These pre-built conversations demonstrate how the OGI assistant can answer questions about various aspects of your sales development ecosystem. Select a category to see available conversations.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right area - conversation library */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">
                {conversationCategories.find(c => c.id === selectedConversationType)?.label} Conversations
              </h3>
            </div>
            <div className="p-4">
              <OGIPrebuiltConversations 
                category={selectedConversationType}
                onConversationSelect={handlePrebuiltConversationSelect}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OGIFullView;