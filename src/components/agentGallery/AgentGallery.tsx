import { useState } from 'react';
import { Plus } from 'lucide-react';
import AgentCard from '../shared/AgentCard';
import SearchFilter from '../shared/SearchFilter';
import { agents } from '../../data/mockAgents';

const AgentGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Define agent categories
  const categories = {
    'all': 'All Agents',
    'strategy-research': 'Strategy & Research',
    'outreach-engagement': 'Outreach & Engagement',
    'analytics-performance': 'Analytics & Performance',
    'technical-governance': 'Technical & Governance'
  };
  
  // Map agents to categories
  const categorizedAgents = {
    'strategy-research': agents.filter(agent => 
      agent.name.includes('ICP') || 
      agent.name.includes('Persona') || 
      agent.name.includes('Industry Research') || 
      agent.name.includes('Competitor') || 
      agent.name.includes('Product Knowledge')
    ),
    'outreach-engagement': agents.filter(agent => 
      agent.name.includes('Email') || 
      agent.name.includes('Sequence') || 
      agent.name.includes('LinkedIn') || 
      agent.name.includes('Content') || 
      agent.name.includes('Objection') || 
      agent.name.includes('Timing')
    ),
    'analytics-performance': agents.filter(agent => 
      agent.name.includes('Performance') || 
      agent.name.includes('Analytics') || 
      agent.name.includes('Testing') || 
      agent.name.includes('Pipeline') || 
      agent.name.includes('Meeting')
    ),
    'technical-governance': agents.filter(agent => 
      agent.name.includes('Integration') || 
      agent.name.includes('CRM') || 
      agent.name.includes('Data') || 
      agent.name.includes('Admin') ||
      agent.name.includes('Responsible AI') ||
      agent.name.includes('General Assistant')
    )
  };
  
  // Apply search filter
  const filterAgentsBySearch = (agent) => {
    if (!searchTerm) return true;
    
    const term = searchTerm.toLowerCase();
    return (
      agent.name.toLowerCase().includes(term) || 
      agent.description.toLowerCase().includes(term)
    );
  };
  
  // Get filtered agents
  const getFilteredAgents = () => {
    if (selectedCategory === 'all') {
      return agents.filter(filterAgentsBySearch);
    } else {
      return categorizedAgents[selectedCategory].filter(filterAgentsBySearch);
    }
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Agent Gallery</h2>
        <p className="text-sm md:text-base text-gray-600">
          Explore our specialized AI agents designed for sales development workflows
        </p>
      </div>
      
      <SearchFilter 
        onFilterChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        categories={categories}
      />
      
      {selectedCategory === 'all' ? (
        // Display by categories when showing all
        Object.keys(categories).filter(cat => cat !== 'all').map(categoryKey => {
          const categoryAgents = categorizedAgents[categoryKey].filter(filterAgentsBySearch);
          
          // Only show categories that have agents matching the search
          if (categoryAgents.length === 0) return null;
          
          return (
            <div key={categoryKey} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">
                {categories[categoryKey]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {categoryAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        // Display flat list when filtering by category
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {getFilteredAgents().map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center p-4 md:p-6 h-full">
            <div className="bg-gray-100 p-3 rounded-full mb-3">
              <Plus className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-700 mb-1 text-center">Add Custom Agent</h3>
            <p className="text-xs md:text-sm text-gray-500 text-center mb-4">
              Deploy a specialized agent for your unique sales development needs
            </p>
            <button className="text-sm text-black hover:text-gray-700 font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentGallery;