import { useState } from 'react';
import { Network, Globe, Users, PieChart, MessageSquare, Code, TrendingUp, Zap } from 'lucide-react';

interface QuickActionButtonsProps {
  onQuickActionClick: (query: string) => void;
}

const QuickActionButtons = ({ onQuickActionClick }: QuickActionButtonsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const quickActions = [
    { 
      icon: <Network className="h-4 w-4" />, 
      label: "Network Overview", 
      query: "Give me an overview of our agent network connections" 
    },
    { 
      icon: <TrendingUp className="h-4 w-4" />, 
      label: "Performance Stats", 
      query: "What are the key performance metrics for our agent network?"
    },
    { 
      icon: <PieChart className="h-4 w-4" />, 
      label: "ROI Analysis", 
      query: "What's the ROI breakdown of our sales development agents?"
    },
    { 
      icon: <Globe className="h-4 w-4" />, 
      label: "Data Sources", 
      query: "What data sources feed into our sales intelligence network?"
    },
    { 
      icon: <Users className="h-4 w-4" />, 
      label: "Team Adoption", 
      query: "How do sales teams interact with our OGI agent network?"
    },
    { 
      icon: <Code className="h-4 w-4" />, 
      label: "Integration", 
      query: "What external systems does our OGI framework connect with?"
    },
    { 
      icon: <MessageSquare className="h-4 w-4" />, 
      label: "Use Cases", 
      query: "What are the main use cases for our sales agent network?"
    }
  ];
  
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xs font-medium text-gray-500">Quick Actions</h4>
        {quickActions.length > 4 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {(isExpanded ? quickActions : quickActions.slice(0, 4)).map((action, index) => (
          <button
            key={index}
            onClick={() => onQuickActionClick(action.query)}
            className="flex flex-col items-center justify-center p-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors text-center"
          >
            <span className="p-1.5 rounded-full bg-blue-50 text-blue-600 mb-1">
              {action.icon}
            </span>
            <span className="text-xs text-gray-700 line-clamp-1">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionButtons;