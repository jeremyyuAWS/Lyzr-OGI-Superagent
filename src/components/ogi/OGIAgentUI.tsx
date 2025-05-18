import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Send, User, Bot, Clock, Maximize2, ChevronLeft, AlertTriangle, X, Link, TrendingUp, Network, Database, Settings, Shield, Users } from 'lucide-react';
import { networkData, nodeQuestions, generalQuestions } from '../../data/mockNetworkData';
import { enhancedOGIResponses } from '../../data/mockOGIResponses';
import OGIVisualization from './OGIVisualization';
import TabQuestionSuggestions from './TabQuestionSuggestions';

interface OGIAgentUIProps {
  selectedNode: string | null;
}

interface Message {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: Date;
  visualization?: {
    type: 'chart' | 'table' | 'network' | 'map' | 'process' | 'metrics';
    data: any;
  };
  contributingAgents?: string[];
}

const OGIAgentUI = ({ selectedNode }: OGIAgentUIProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: 'agent',
      content: "Hello, I'm your Organization General Intelligence (OGI) Assistant. I can answer questions about your sales development agents, data sources, and system connections. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // If a node is selected, update the welcome message
  useEffect(() => {
    if (selectedNode) {
      const node = networkData.nodes.find(n => n.id === selectedNode);
      if (node) {
        const newMessage: Message = {
          id: Date.now().toString(),
          sender: 'agent',
          content: `I see you're interested in the ${node.label}. What would you like to know about it? I can provide information about its connections, functionality, and performance metrics.`,
          timestamp: new Date()
        };
        setMessages([newMessage]);
        setShowSuggestions(true);
      }
    }
  }, [selectedNode]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    handleOGIResponse(inputValue);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleOGIResponse = (query: string) => {
    setTimeout(() => {
      // Generate a simulated response
      let response: Message = {
        id: Date.now().toString(),
        sender: 'agent',
        content: "I'm analyzing our sales development network to answer your question. Let me provide you with some insights based on the information available across our systems.",
        timestamp: new Date()
      };

      // Check if the query contains keywords that match enhanced responses
      const lowercaseQuery = query.toLowerCase();
      
      // Enhanced response topics
      const topics = [
        { key: 'core sales functions', match: ['core sales', 'core functions', 'sales functions'] },
        { key: 'email optimization', match: ['email', 'messaging', 'outreach'] },
        { key: 'outreach compliance', match: ['compliance', 'gdpr', 'regulations'] },
        { key: 'data flow', match: ['data flow', 'information flow', 'data connections'] },
        { key: 'sequence design', match: ['sequence', 'cadence', 'outreach workflow'] },
        { key: 'lead qualification', match: ['qualification', 'leads', 'meeting ready'] },
        { key: 'security measures', match: ['security', 'protection', 'privacy'] },
        { key: 'agent connections', match: ['connections', 'network', 'connected'] },
        { key: 'adoption trends', match: ['adoption', 'usage trends', 'utilization'] },
        { key: 'roi metrics', match: ['roi', 'return on investment', 'value'] },
        { key: 'agent performance', match: ['performance', 'metrics', 'effectiveness'] },
        { key: 'coordination workflows', match: ['coordination', 'workflow', 'together'] },
        { key: 'real-time monitoring', match: ['monitoring', 'real-time', 'tracking'] }
      ];
      
      // Try to find a matching topic
      let matchedTopic = null;
      for (const topic of topics) {
        if (topic.match.some(keyword => lowercaseQuery.includes(keyword))) {
          matchedTopic = topic.key;
          break;
        }
      }
      
      if (matchedTopic && enhancedOGIResponses[matchedTopic]) {
        const enhancedResponse = enhancedOGIResponses[matchedTopic];
        response.content = enhancedResponse.text;
        response.contributingAgents = enhancedResponse.contributingAgents;
        
        // Add visualization based on the topic
        if (matchedTopic === 'email optimization' || matchedTopic === 'roi metrics') {
          response.visualization = {
            type: 'chart',
            data: {
              title: matchedTopic === 'email optimization' ? 'Email Response Optimization' : 'ROI by Agent Category',
              description: matchedTopic === 'email optimization' ? 'Monthly statistics on email effectiveness' : 'Return on investment by agent type',
              chartType: matchedTopic === 'email optimization' ? 'line' : 'bar'
            }
          };
        } else if (matchedTopic === 'agent performance') {
          response.visualization = {
            type: 'metrics',
            data: {
              title: 'Agent Performance Dashboard',
              description: 'Key performance indicators across agent network'
            }
          };
        } else if (matchedTopic === 'data flow') {
          response.visualization = {
            type: 'network',
            data: {
              title: 'Data Flow Network',
              description: 'Visualization of data flow between systems'
            }
          };
        } else if (matchedTopic === 'sequence design' || matchedTopic === 'coordination workflows') {
          response.visualization = {
            type: 'process',
            data: {
              title: matchedTopic === 'sequence design' ? 'Outreach Sequence Workflow' : 'Agent Coordination Process',
              description: 'Visual representation of the process steps and dependencies'
            }
          };
        } else if (matchedTopic === 'lead qualification') {
          response.visualization = {
            type: 'table',
            data: {
              title: 'Lead Qualification Process',
              description: 'Detailed breakdown of the qualification workflow'
            }
          };
        }
      } else {
        // Generic response if no match found
        response.content = `Based on my analysis of our sales development network, I can provide insights on your question about "${query}". In a production environment, I would synthesize information from multiple agents and data sources to give you a comprehensive answer. This would involve analyzing patterns across our sales operations, monitoring performance metrics, and integrating data from various systems.`;
        response.contributingAgents = [
          'Analytics Agent',
          'ICP Assistant',
          'Lead Database',
          'CRM System'
        ];
      }
      
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };
  
  const handleSuggestionClick = (question: string) => {
    setInputValue(question);
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: question,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    handleOGIResponse(question);
  };
  
  const resetConversation = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: 'agent',
        content: "Hello, I'm your Organization General Intelligence (OGI) Assistant. I can answer questions about your sales development agents, data sources, and system connections. How can I help you today?",
        timestamp: new Date(),
      }
    ]);
    setShowSuggestions(true);
    setShowResetConfirm(false);
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Get relevant questions based on selected node
  const getSuggestedQuestions = () => {
    if (selectedNode && nodeQuestions[selectedNode]) {
      return nodeQuestions[selectedNode];
    }
    return generalQuestions;
  };

  // Define question categories
  const questionCategories = [
    { id: 'connections', label: 'Network Connections', icon: <Network className="h-4 w-4" /> },
    { id: 'performance', label: 'Performance & ROI', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'data', label: 'Data & Information', icon: <Database className="h-4 w-4" /> },
    { id: 'governance', label: 'Security & Governance', icon: <Shield className="h-4 w-4" /> },
    { id: 'teams', label: 'Teams & Users', icon: <Users className="h-4 w-4" /> }
  ];
  
  return (
    <div className={`flex flex-col h-full ${expanded ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          {expanded && (
            <button onClick={toggleExpand} className="mr-2 text-gray-500 hover:text-gray-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          <div className="bg-blue-100 p-2 rounded-lg mr-2">
            <Bot className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">OGI Assistant</h3>
            <p className="text-xs text-gray-500">Organizational General Intelligence</p>
          </div>
        </div>
        <div className="flex items-center">
          <button 
            onClick={() => setShowResetConfirm(true)}
            className="mr-2 text-gray-500 hover:text-gray-700"
            title="Reset conversation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
          <button 
            onClick={toggleExpand}
            className="text-gray-500 hover:text-gray-700"
            title={expanded ? "Minimize" : "Maximize"}
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-lg p-3 ${
                message.sender === 'user' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100'
              }`}>
                <div className="flex items-center mb-1">
                  {message.sender === 'user' ? (
                    <>
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">You</span>
                    </>
                  ) : (
                    <>
                      <Bot className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">OGI Assistant</span>
                    </>
                  )}
                  <span className="text-xs ml-2 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                
                {/* Visualization if present */}
                {message.visualization && (
                  <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <OGIVisualization 
                      type={message.visualization.type} 
                      data={message.visualization.data} 
                    />
                  </div>
                )}
                
                {/* Contributing agents */}
                {message.contributingAgents && message.contributingAgents.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs text-gray-500">Synthesized from:</span>
                      {message.contributingAgents.map((agent, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full"
                        >
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <Bot className="h-4 w-4 mr-2 text-blue-600" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggested Questions Tabs */}
      {showSuggestions && messages.length < 3 && (
        <div className="bg-white border-t border-gray-200">
          <div className="flex justify-between items-center p-4 pb-2">
            <h4 className="text-sm font-medium text-gray-700">Suggested Questions</h4>
            <button 
              onClick={() => setShowSuggestions(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Hide
            </button>
          </div>
          
          <TabQuestionSuggestions 
            categories={questionCategories}
            questions={getSuggestedQuestions()}
            onQuestionClick={handleSuggestionClick}
            selectedNode={selectedNode}
          />
        </div>
      )}
      
      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:ring-black focus:border-black text-sm max-h-24"
            placeholder="Ask about sales agents, connections, or metrics..."
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !inputValue.trim()}
            className={`${
              isTyping || !inputValue.trim() ? 'bg-gray-300' : 'bg-black hover:bg-gray-800'
            } text-white py-2 px-4 rounded-r-md h-full transition-colors`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>Last updated: Today at 9:45 AM</span>
          </div>
          
          {!showSuggestions && (
            <button 
              onClick={() => setShowSuggestions(true)}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Show Suggestions
            </button>
          )}
        </div>
      </div>
      
      {/* Reset confirmation modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-start mb-4">
              <div className="bg-red-50 p-2 rounded-full mr-3">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Reset Conversation</h3>
                <p className="text-sm text-gray-600">This will clear all messages in the current conversation. This action cannot be undone.</p>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={resetConversation}
                className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OGIAgentUI;