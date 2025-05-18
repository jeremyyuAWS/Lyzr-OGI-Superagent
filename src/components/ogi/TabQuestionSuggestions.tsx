import { useState, useEffect } from 'react';
import { Network, TrendingUp, Database, Shield, Users } from 'lucide-react';

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabQuestionSuggestionsProps {
  categories: Category[];
  questions: string[];
  onQuestionClick: (question: string) => void;
  selectedNode: string | null;
}

// Helper function to categorize questions based on keywords
const categorizeQuestions = (questions: string[], selectedNode: string | null): Record<string, string[]> => {
  const categorizedQuestions: Record<string, string[]> = {
    connections: [],
    performance: [],
    data: [],
    governance: [],
    teams: []
  };
  
  // Keywords to identify categories
  const categoryKeywords = {
    connections: ['connect', 'connection', 'integrated', 'integration', 'flow', 'network', 'linked', 'relationship', 'depend', 'communicate'],
    performance: ['roi', 'performance', 'metrics', 'effective', 'success', 'rate', 'impact', 'improve', 'optimization', 'trend', 'forecast'],
    data: ['data', 'information', 'insights', 'analytics', 'database', 'fields', 'records', 'content', 'storage', 'report'],
    governance: ['security', 'compliance', 'privacy', 'governance', 'risk', 'protected', 'access', 'permission', 'secure', 'restriction'],
    teams: ['team', 'user', 'people', 'department', 'employee', 'staff', 'member', 'role', 'responsibility', 'manager']
  };
  
  // Node-based categorization boost - emphasize specific categories for specific nodes
  const nodeCategoryBoost: Record<string, string[]> = {
    'crm-system': ['data', 'connections'],
    'lead-db': ['data', 'governance'],
    'email-platform': ['performance', 'data'],
    'integration-agent': ['connections', 'governance'],
    'analytics-agent': ['performance', 'data'],
    'sdr-team': ['teams', 'performance'],
    'responsible-ai': ['governance', 'teams'],
    'lead-enrichment-agent': ['data', 'connections']
  };
  
  // Categorize questions
  questions.forEach(question => {
    const lowercaseQuestion = question.toLowerCase();
    
    // Score each category based on keyword matches
    const scores = {
      connections: 0,
      performance: 0,
      data: 0,
      governance: 0,
      teams: 0
    };
    
    // Add scores based on keywords
    Object.entries(categoryKeywords).forEach(([category, keywords]) => {
      keywords.forEach(keyword => {
        if (lowercaseQuestion.includes(keyword.toLowerCase())) {
          scores[category as keyof typeof scores] += 1;
        }
      });
    });
    
    // Add boost for node-specific categories
    if (selectedNode && nodeCategoryBoost[selectedNode]) {
      nodeCategoryBoost[selectedNode].forEach(category => {
        scores[category as keyof typeof scores] += 2;
      });
    }
    
    // Find category with highest score
    let highestScore = 0;
    let topCategory = 'connections';
    
    Object.entries(scores).forEach(([category, score]) => {
      if (score > highestScore) {
        highestScore = score;
        topCategory = category;
      }
    });
    
    // If no clear category (score = 0), distribute evenly
    if (highestScore === 0) {
      const categories = Object.keys(categorizedQuestions);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      categorizedQuestions[randomCategory].push(question);
    } else {
      categorizedQuestions[topCategory].push(question);
    }
  });
  
  return categorizedQuestions;
};

const TabQuestionSuggestions = ({ 
  categories,
  questions,
  onQuestionClick,
  selectedNode
}: TabQuestionSuggestionsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('connections');
  const [categorizedQuestions, setCategorizedQuestions] = useState<Record<string, string[]>>({});
  
  // Categorize questions when they change
  useEffect(() => {
    const newCategorizedQuestions = categorizeQuestions(questions, selectedNode);
    setCategorizedQuestions(newCategorizedQuestions);
    
    // If current active category has no questions, switch to one that does
    if (newCategorizedQuestions[activeCategory]?.length === 0) {
      const categoryWithQuestions = Object.entries(newCategorizedQuestions)
        .find(([_, categoryQuestions]) => categoryQuestions.length > 0);
      
      if (categoryWithQuestions) {
        setActiveCategory(categoryWithQuestions[0]);
      }
    }
  }, [questions, selectedNode]);
  
  return (
    <div className="px-4 pb-4">
      {/* Category Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide space-x-2 mb-3">
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex items-center px-3 py-2 text-xs whitespace-nowrap rounded-md ${
              activeCategory === category.id 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="mr-1.5">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Questions for active category */}
      <div className="space-y-2">
        {categorizedQuestions[activeCategory]?.length > 0 ? (
          categorizedQuestions[activeCategory].slice(0, 4).map((question, index) => (
            <button
              key={index}
              onClick={() => onQuestionClick(question)}
              className="w-full text-left bg-white hover:bg-gray-50 text-sm p-3 rounded-md border border-gray-200 transition-colors"
            >
              {question}
            </button>
          ))
        ) : (
          <div className="text-center p-4 text-sm text-gray-500">
            No questions available for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default TabQuestionSuggestions;