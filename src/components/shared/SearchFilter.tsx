import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFilterProps {
  onFilterChange: (category: string) => void;
  onSearchChange: (searchTerm: string) => void;
  categories?: Record<string, string>;
}

const SearchFilter = ({ onFilterChange, onSearchChange, categories }: SearchFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const defaultCategories = {
    'all': 'All Agents',
    'strategy-research': 'Strategy & Research',
    'outreach-engagement': 'Outreach & Engagement',
    'analytics-performance': 'Analytics & Performance',
    'technical-governance': 'Technical & Governance'
  };
  
  const displayCategories = categories || defaultCategories;
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };
  
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 py-2 rounded-md border border-gray-300 focus:ring-gray-500 focus:border-gray-500 shadow-sm text-sm"
          placeholder="Search agents..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-3 py-2 rounded-md text-xs md:text-sm whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-gray-900 text-white font-medium'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Agents
        </button>
        
        {Object.keys(displayCategories).filter(key => key !== 'all').map((categoryKey) => (
          <button
            key={categoryKey}
            onClick={() => handleCategoryChange(categoryKey)}
            className={`px-3 py-2 rounded-md text-xs md:text-sm whitespace-nowrap ${
              selectedCategory === categoryKey
                ? 'bg-gray-900 text-white font-medium'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {displayCategories[categoryKey]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;