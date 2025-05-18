import { useState, useRef, useEffect } from 'react';
import { X, Send, User, Bot, RefreshCw, Info, Zap, MessageSquare, AlertCircle } from 'lucide-react';
import { Agent } from '../../types/agents';

interface AgentChatModalProps {
  agent: Agent;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

const AgentChatModal = ({ agent, onClose }: AgentChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'agent',
      content: `Hello, I'm the ${agent.name}. How can I assist you today with your sales development needs?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const generateAgentResponse = (userQuery: string): string => {
    // This would be replaced with an actual API call to a real agent
    const responses = [
      `Based on my analysis of your query about "${userQuery.substring(0, 30)}${userQuery.length > 30 ? '...' : ''}", I recommend reviewing our latest sales outreach techniques. In a real implementation, I would provide precise information based on your specific situation.`,
      `I've analyzed your question regarding "${userQuery.substring(0, 30)}${userQuery.length > 30 ? '...' : ''}". As the ${agent.name}, I can help with this specific sales workflow. In a production environment, I would connect to sales systems to provide accurate, real-time guidance.`,
      `Thank you for your query about "${userQuery.substring(0, 30)}${userQuery.length > 30 ? '...' : ''}". I've processed this request and would typically access our sales knowledge base to provide a compliant, accurate response tailored to your specific situation.`,
      `I understand you're asking about "${userQuery.substring(0, 30)}${userQuery.length > 30 ? '...' : ''}". As a specialized sales agent, I would normally analyze this against our best practices and organizational policies to provide personalized guidance.`,
      `Your query regarding "${userQuery.substring(0, 30)}${userQuery.length > 30 ? '...' : ''}" falls within my expertise as the ${agent.name}. In a production environment, I would securely access relevant sales data and provide a comprehensive, actionable response.`
    ];
    
    // Choose a random response
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate thinking state with progress
    setIsThinking(true);
    
    // Simulate agent response time
    setTimeout(() => {
      setIsThinking(false);
      
      const responseContent = generateAgentResponse(userMessage.content);
      
      const agentMessage: Message = {
        id: Date.now().toString(),
        sender: 'agent',
        content: responseContent,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, agentMessage]);
      setIsTyping(false);
    }, 2000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleResetConversation = () => {
    setMessages([
      {
        id: '1',
        sender: 'agent',
        content: `Hello, I'm the ${agent.name}. How can I assist you today with your sales development needs?`,
        timestamp: new Date()
      }
    ]);
    setInputValue('');
    setIsTyping(false);
    setIsThinking(false);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <div className="bg-gray-100 p-2 rounded-lg mr-3">
              {agent.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{agent.name}</h2>
              <p className="text-sm text-gray-500">{agent.department}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={handleResetConversation}
              className="mr-3 text-gray-500 hover:text-gray-700 flex items-center text-xs"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Reset
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Conversation Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-800'
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
                          <span className="text-xs font-medium">{agent.name}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className="text-xs text-right mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isThinking && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
                      <span className="text-xs text-gray-500">Analyzing sales data...</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {isTyping && !isThinking && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:ring-black focus:border-black text-sm max-h-24"
                  placeholder="Ask me anything about sales development..."
                  rows={1}
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim()}
                  className={`${
                    isTyping || !inputValue.trim() ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
                  } text-white py-2 px-4 rounded-r-md h-full transition-colors`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-gray-600 flex items-start">
                <AlertCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800 mb-1">Interactive Demo Mode</p>
                  <p>
                    This is a simulated interaction with the {agent.name}. In a real implementation, this agent would connect to your CRM, engagement tools, and use advanced AI to provide accurate, actionable insights for your sales development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Agent Info Sidebar */}
          <div className="w-64 border-l border-gray-200 p-4 overflow-y-auto bg-gray-50 hidden md:block">
            <h3 className="font-medium text-gray-700 mb-3">Agent Capabilities</h3>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-center text-blue-700 font-medium text-sm mb-1">
                  <Zap className="w-4 h-4 mr-1" />
                  Key Features
                </div>
                <ul className="text-xs text-gray-600 space-y-1 ml-1">
                  {agent.id === '1' && (
                    <>
                      <li>• Target account identification</li>
                      <li>• Persona definition</li>
                      <li>• Segment prioritization</li>
                      <li>• ICP modeling</li>
                    </>
                  )}
                  {agent.id === '2' && (
                    <>
                      <li>• Firmographic enrichment</li>
                      <li>• Technographic analysis</li>
                      <li>• Intent signal detection</li>
                      <li>• Contact verification</li>
                    </>
                  )}
                  {agent.id === '3' && (
                    <>
                      <li>• Buyer persona generation</li>
                      <li>• Objection mapping</li>
                      <li>• Role-based targeting</li>
                      <li>• Persona prioritization</li>
                    </>
                  )}
                  {agent.id === '4' && (
                    <>
                      <li>• Email personalization</li>
                      <li>• Subject line optimization</li>
                      <li>• Message structure</li>
                      <li>• Tone adjustment</li>
                    </>
                  )}
                  {agent.id === '5' && (
                    <>
                      <li>• Multichannel sequence design</li>
                      <li>• Cadence timing</li>
                      <li>• Touch optimization</li>
                      <li>• Follow-up automation</li>
                    </>
                  )}
                  {agent.id === '6' && (
                    <>
                      <li>• Connection requests</li>
                      <li>• InMail formatting</li>
                      <li>• Profile research</li>
                      <li>• Social engagement</li>
                    </>
                  )}
                  {agent.id === '7' && (
                    <>
                      <li>• Content relevance scoring</li>
                      <li>• Case study matching</li>
                      <li>• Resource curation</li>
                      <li>• Value alignment</li>
                    </>
                  )}
                  {agent.id === '8' && (
                    <>
                      <li>• Performance analysis</li>
                      <li>• Personalized coaching</li>
                      <li>• Productivity improvement</li>
                      <li>• Best practice sharing</li>
                    </>
                  )}
                  {agent.id === '9' && (
                    <>
                      <li>• Campaign measurement</li>
                      <li>• Conversion tracking</li>
                      <li>• Performance visualization</li>
                      <li>• Segment comparison</li>
                    </>
                  )}
                  {agent.id === '10' && (
                    <>
                      <li>• Test design</li>
                      <li>• Statistical analysis</li>
                      <li>• Performance comparison</li>
                      <li>• Insight generation</li>
                    </>
                  )}
                  {agent.id === '11' && (
                    <>
                      <li>• Revenue forecasting</li>
                      <li>• Pipeline visualization</li>
                      <li>• Conversion projection</li>
                      <li>• Risk assessment</li>
                    </>
                  )}
                  {agent.id === '12' && (
                    <>
                      <li>• Lead scoring</li>
                      <li>• Qualification criteria</li>
                      <li>• BANT assessment</li>
                      <li>• Meeting readiness</li>
                    </>
                  )}
                  {agent.id === '13' && (
                    <>
                      <li>• Calendar optimization</li>
                      <li>• Booking automation</li>
                      <li>• Reminder management</li>
                      <li>• Follow-up coordination</li>
                    </>
                  )}
                  {agent.id === '14' && (
                    <>
                      <li>• Prospect research</li>
                      <li>• Discovery questions</li>
                      <li>• Talking points</li>
                      <li>• Objection preparation</li>
                    </>
                  )}
                  {agent.id === '15' && (
                    <>
                      <li>• Automatic transcription</li>
                      <li>• Summary generation</li>
                      <li>• Action item extraction</li>
                      <li>• Next steps tracking</li>
                    </>
                  )}
                  {agent.id >= '16' && (
                    <>
                      <li>• System integration</li>
                      <li>• Process automation</li>
                      <li>• Custom configuration</li>
                      <li>• Workflow optimization</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-center text-green-700 font-medium text-sm mb-1">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Try Asking About
                </div>
                <ul className="text-xs text-gray-600 space-y-1 ml-1">
                  {agent.id === '1' && (
                    <>
                      <li>• How to define an ICP</li>
                      <li>• Which industries to target</li>
                      <li>• Best personas to prioritize</li>
                      <li>• Target account selection</li>
                    </>
                  )}
                  {agent.id === '2' && (
                    <>
                      <li>• Lead enrichment sources</li>
                      <li>• Data accuracy metrics</li>
                      <li>• Contact validation</li>
                      <li>• Intent data signals</li>
                    </>
                  )}
                  {agent.id === '3' && (
                    <>
                      <li>• Creating buyer personas</li>
                      <li>• Testing different personas</li>
                      <li>• Persona attributes</li>
                      <li>• Role-based messaging</li>
                    </>
                  )}
                  {agent.id === '4' && (
                    <>
                      <li>• Email effectiveness</li>
                      <li>• Subject line advice</li>
                      <li>• Personalization techniques</li>
                      <li>• Message structures</li>
                    </>
                  )}
                  {agent.id === '5' && (
                    <>
                      <li>• Optimal sequence length</li>
                      <li>• Multi-channel sequences</li>
                      <li>• Timing between touches</li>
                      <li>• Sequence performance</li>
                    </>
                  )}
                  {agent.id === '6' && (
                    <>
                      <li>• LinkedIn connection rate</li>
                      <li>• Connection message format</li>
                      <li>• Profile optimization</li>
                      <li>• Social selling tactics</li>
                    </>
                  )}
                  {agent.id === '7' && (
                    <>
                      <li>• Best content for my persona</li>
                      <li>• Case study selection</li>
                      <li>• Content engagement</li>
                      <li>• Asset recommendation</li>
                    </>
                  )}
                  {agent.id === '8' && (
                    <>
                      <li>• Improving response rates</li>
                      <li>• Coaching on message quality</li>
                      <li>• Best practices advice</li>
                      <li>• Performance improvement</li>
                    </>
                  )}
                  {agent.id === '9' && (
                    <>
                      <li>• Campaign performance</li>
                      <li>• Conversion metrics</li>
                      <li>• Benchmark comparison</li>
                      <li>• Trend analysis</li>
                    </>
                  )}
                  {agent.id === '10' && (
                    <>
                      <li>• A/B test setup</li>
                      <li>• Test result analysis</li>
                      <li>• Statistical significance</li>
                      <li>• Test optimization</li>
                    </>
                  )}
                  {agent.id === '11' && (
                    <>
                      <li>• Pipeline forecast</li>
                      <li>• Conversion projections</li>
                      <li>• Revenue estimates</li>
                      <li>• Forecast accuracy</li>
                    </>
                  )}
                  {agent.id === '12' && (
                    <>
                      <li>• Qualification criteria</li>
                      <li>• Lead scoring models</li>
                      <li>• Meeting readiness</li>
                      <li>• Disqualification reasons</li>
                    </>
                  )}
                  {agent.id === '13' && (
                    <>
                      <li>• Meeting scheduling</li>
                      <li>• Calendar optimization</li>
                      <li>• Booking processes</li>
                      <li>• No-show reduction</li>
                    </>
                  )}
                  {agent.id === '14' && (
                    <>
                      <li>• Meeting preparation</li>
                      <li>• Prospect research</li>
                      <li>• Discovery questions</li>
                      <li>• Company intelligence</li>
                    </>
                  )}
                  {agent.id === '15' && (
                    <>
                      <li>• Meeting notes format</li>
                      <li>• Action item tracking</li>
                      <li>• Follow-up recommendations</li>
                      <li>• CRM integration</li>
                    </>
                  )}
                  {agent.id >= '16' && (
                    <>
                      <li>• System configuration</li>
                      <li>• Process automation</li>
                      <li>• Integration setup</li>
                      <li>• Workflow design</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                <div className="flex items-center text-gray-700 font-medium text-sm mb-1">
                  <Info className="w-4 h-4 mr-1" />
                  Agent Performance
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-gray-600">
                      <span>Success Rate</span>
                      <span className="font-medium">{agent.successRate || Math.round(85 + Math.random() * 13)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full" 
                        style={{ width: `${agent.successRate || Math.round(85 + Math.random() * 13)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-gray-600">
                      <span>Avg Response Time</span>
                      <span className="font-medium">{Math.round(10 + Math.random() * 20) / 10}s</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-gray-600">
                      <span>Automation Rate</span>
                      <span className="font-medium">{agent.automationRatio || Math.round(60 + Math.random() * 30)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentChatModal;