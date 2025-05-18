import { useState, useRef, useEffect } from 'react';
import { X, Send, User, Bot, MessageSquare, RefreshCw } from 'lucide-react';
import { Agent } from '../../types/agents';
import { agentDemoScenarios, agentResponses, Message } from '../../data/mockDemoScenarios';

interface AgentDemoModalProps {
  agent: Agent;
  onClose: () => void;
}

const AgentDemoModal = ({ agent, onClose }: AgentDemoModalProps) => {
  const scenario = agentDemoScenarios[agent.id];
  const [messages, setMessages] = useState<Message[]>(scenario?.initialMessages || []);
  const [inputValue, setInputValue] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim() && !selectedQuestion) return;
    
    const messageText = selectedQuestion || inputValue;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setSelectedQuestion(null);
    setIsTyping(true);
    
    // Simulate agent thinking and response
    setTimeout(() => {
      // Try to find predefined response, or use a generic one
      let responseContent = '';
      
      if (agent.id in agentResponses && messageText in agentResponses[agent.id]) {
        responseContent = agentResponses[agent.id][messageText];
      } else {
        // Generic response if no predefined one exists
        responseContent = `Thank you for your question about "${messageText}". As the ${agent.name}, I'm analyzing this request and preparing a detailed response based on banking regulations and our institutional policies. In a real implementation, this would connect to our secure APIs and knowledge base to provide accurate, compliant information.`;
      }
      
      const agentMessage: Message = {
        id: Date.now().toString(),
        sender: 'agent',
        content: responseContent,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    setInputValue(question);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleResetConversation = () => {
    setMessages(scenario?.initialMessages || []);
    setInputValue('');
    setSelectedQuestion(null);
    setIsTyping(false);
  };
  
  if (!scenario) {
    return null;
  }
  
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
              <p className="text-sm text-gray-500">{scenario.title}</p>
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
              
              {isTyping && (
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
                  placeholder="Type your message..."
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || (!inputValue.trim() && !selectedQuestion)}
                  className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-r-md h-full"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  <span>This is a demo conversation with simulated responses</span>
                </div>
                <button 
                  onClick={handleResetConversation}
                  className="text-blue-600 hover:text-blue-800 flex items-center text-xs md:hidden"
                >
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset Conversation
                </button>
              </div>
            </div>
          </div>
          
          {/* Suggested Questions Sidebar */}
          <div className="w-64 border-l border-gray-200 p-4 overflow-y-auto bg-gray-50 hidden md:block">
            <h3 className="font-medium text-gray-700 mb-2">Suggested Questions</h3>
            <div className="space-y-2">
              {scenario.questions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="text-left w-full bg-white hover:bg-gray-100 text-sm p-2 rounded border border-gray-200 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-xs font-medium text-blue-800 mb-1">About This Demo</h4>
              <p className="text-xs text-gray-600">
                This demonstration showcases how the {agent.name} helps banking professionals. Try the suggested questions or ask your own.
              </p>
              <button 
                onClick={handleResetConversation}
                className="mt-2 w-full bg-white text-blue-600 border border-blue-200 rounded py-1 text-xs font-medium flex items-center justify-center"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDemoModal;