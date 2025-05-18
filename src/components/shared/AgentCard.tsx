import { useState } from 'react';
import { CheckCircle, AlertTriangle, Clock, Users, Zap, TrendingUp, BarChart3, ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';
import { Agent } from '../../types/agents';
import AgentDemoModal from '../agentGallery/AgentDemoModal';
import AgentChatModal from '../agentGallery/AgentChatModal';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              {agent.icon}
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-gray-900">{agent.name}</h3>
              <p className="text-sm text-gray-500">{agent.department}</p>
            </div>
          </div>
          <div className="flex items-center">
            {agent.status === 'healthy' ? (
              <span className="flex items-center text-xs text-green-700 bg-green-50 py-1 px-2 rounded-full">
                <CheckCircle className="w-3 h-3 mr-1" />
                Healthy
              </span>
            ) : (
              <span className="flex items-center text-xs text-red-700 bg-red-50 py-1 px-2 rounded-full">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Degraded
              </span>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
        
        {/* Core Metrics (Always Visible) */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-blue-50 rounded p-2">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Zap className="w-3 h-3 mr-1 text-blue-500" />
              <span>Runs</span>
            </div>
            <div className="font-medium text-sm">{agent.usageCount.toLocaleString()}</div>
          </div>
          
          <div className="bg-green-50 rounded p-2">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Clock className="w-3 h-3 mr-1 text-green-500" />
              <span>Time Saved</span>
            </div>
            <div className="font-medium text-sm">{agent.timeSaved || Math.round(agent.usageCount * 0.25)} hrs</div>
          </div>
        </div>
        
        {/* Expandable Detailed Metrics */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-amber-50 rounded p-2">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <TrendingUp className="w-3 h-3 mr-1 text-amber-500" />
                <span>Cost Savings</span>
              </div>
              <div className="font-medium text-sm">${agent.costSavings || agent.roi.toLocaleString()}</div>
            </div>
            
            <div className="bg-pink-50 rounded p-2">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <BarChart3 className="w-3 h-3 mr-1 text-pink-500" />
                <span>Success Rate</span>
              </div>
              <div className="font-medium text-sm">
                {agent.successRate || Math.round(85 + Math.random() * 13)}%
              </div>
            </div>
          </div>
          
          {/* Confidence Score */}
          {agent.confidenceScore && (
            <div className="mb-3">
              <div className="text-xs text-gray-500 mb-1">Confidence Score</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-500 h-2 rounded-full" 
                  style={{ width: `${agent.confidenceScore}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">{agent.confidenceScore}%</div>
            </div>
          )}
          
          {/* Tasks Completed */}
          {agent.tasksCompleted && (
            <div className="mb-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Tasks Completed:</span>
                <span className="font-medium">{agent.tasksCompleted.toLocaleString()}</span>
              </div>
            </div>
          )}
          
          {/* Automation Ratio */}
          {agent.automationRatio && (
            <div className="mb-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Automation Ratio:</span>
                <span className="font-medium">{agent.automationRatio}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                <div 
                  className="bg-blue-400 h-1.5 rounded-full" 
                  style={{ width: `${agent.automationRatio}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Additional Metrics & ROI Badge (Always Visible) */}
        <div className="border-t border-gray-100 pt-3 mb-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1 text-gray-400" />
              <span>{agent.uniqueUsers || Math.round(agent.usageCount / 25)} users</span>
            </div>
            <div>{agent.lastUsed || 'Last used: 3h ago'}</div>
          </div>
          
          {/* ROI Badge */}
          <div className="flex items-center mt-2">
            <div className={`text-xs rounded-full px-2 py-0.5 flex items-center 
              ${agent.roi > 50000 ? 'bg-green-100 text-green-800' : 
                agent.roi > 30000 ? 'bg-amber-100 text-amber-800' : 
                'bg-gray-100 text-gray-700'}`}
            >
              <span className="font-medium mr-1">ROI</span>
              <span className={agent.roi > 50000 ? 'text-green-700' : agent.roi > 30000 ? 'text-amber-700' : 'text-gray-700'}>
                {agent.roi > 50000 ? '🔥 High' : agent.roi > 30000 ? '⭐ Good' : '📊 Moderate'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={toggleExpand}
          className="w-full flex items-center justify-center text-xs font-medium text-gray-500 hover:text-gray-700 py-1 mt-1 border-t border-gray-50"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show More Metrics
            </>
          )}
        </button>
        
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button 
            onClick={() => setShowDemo(true)}
            className="flex justify-center items-center bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-md font-medium transition-colors text-sm border border-blue-100"
          >
            <PlayCircle className="w-4 h-4 mr-1" />
            See Demo
          </button>
          
          <button 
            onClick={() => setShowChat(true)}
            className="bg-black hover:bg-gray-800 text-white py-2 rounded-md font-medium transition-colors text-sm"
          >
            Try Agent
          </button>
        </div>
      </div>
      
      {showDemo && (
        <AgentDemoModal agent={agent} onClose={() => setShowDemo(false)} />
      )}

      {showChat && (
        <AgentChatModal agent={agent} onClose={() => setShowChat(false)} />
      )}
    </div>
  );
};

export default AgentCard;