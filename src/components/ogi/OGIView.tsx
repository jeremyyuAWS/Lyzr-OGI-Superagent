import { useState } from 'react';
import KnowledgeGraph from './KnowledgeGraph';
import OGIAgentUI from './OGIAgentUI';

const OGIView = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Organization General Intelligence</h2>
        <p className="text-sm md:text-base text-gray-600">
          Visualize connections between agents, data sources, and sales tools
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-medium text-gray-800">Knowledge Graph</h3>
          </div>
          <div className="p-2 h-[400px] md:h-[600px]">
            <KnowledgeGraph onNodeSelect={setSelectedNode} />
          </div>
        </div>
        
        <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-medium text-gray-800">OGI Assistant</h3>
          </div>
          <div className="h-[400px] md:h-[600px]">
            <OGIAgentUI selectedNode={selectedNode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGIView;