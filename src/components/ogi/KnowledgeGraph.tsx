import { useEffect, useRef, useState } from 'react';
import { networkData } from '../../data/mockNetworkData';
import { Info, ZoomIn, ZoomOut, Maximize2, Activity, Database, BarChart3, Clock, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Eye, Settings, Lock, X, Lightbulb, ClipboardCheck, Check, Filter, Search, Layers, Share, Download } from 'lucide-react';

interface KnowledgeGraphProps {
  onNodeSelect: (nodeId: string | null) => void;
}

const KnowledgeGraph = ({ onNodeSelect }: KnowledgeGraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [showNodeDetails, setShowNodeDetails] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0.6); // Starting with a more zoomed out view
  const [zoomCenter, setZoomCenter] = useState({ x: 400, y: 300 });
  const [nodeStats, setNodeStats] = useState<{
    connections: number;
    type: string;
    importance: string;
    activity: string;
  } | null>(null);
  const [graphRotation, setGraphRotation] = useState(0);
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Auto-rotation animation
  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      if (animationEnabled && !selectedNode) {
        setGraphRotation(prev => (prev + 0.05) % 360);
      }
      animationFrame = requestAnimationFrame(animate);
    };
    
    if (animationEnabled && !selectedNode) {
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [animationEnabled, selectedNode]);
  
  useEffect(() => {
    // Simulate loading the graph
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    onNodeSelect(nodeId);
    
    // Stop rotation when a node is selected
    setAnimationEnabled(false);
    
    // Calculate node stats based on connections
    const node = networkData.nodes.find(n => n.id === nodeId);
    const connections = networkData.links.filter(
      link => networkData.nodes.find(n => n.id === nodeId)?.x === link.source.x || 
             networkData.nodes.find(n => n.id === nodeId)?.x === link.target.x
    ).length;
    
    setNodeStats({
      connections,
      type: node?.group || 'unknown',
      importance: connections > 5 ? 'Critical' : connections > 3 ? 'Important' : 'Standard',
      activity: Math.random() > 0.5 ? 'High' : 'Moderate'
    });
    
    setShowNodeDetails(true);
    
    // Zoom in to the selected node
    const selectedNodeObj = networkData.nodes.find(n => n.id === nodeId);
    if (selectedNodeObj) {
      setZoomCenter({ x: selectedNodeObj.x, y: selectedNodeObj.y });
      setZoomLevel(1.2);
    }
  };

  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId);
  };
  
  const handleZoomIn = () => {
    if (zoomLevel < 1.8) setZoomLevel(prev => prev + 0.2);
  };
  
  const handleZoomOut = () => {
    if (zoomLevel > 0.4) setZoomLevel(prev => prev - 0.2);
  };
  
  const handleReset = () => {
    setZoomLevel(0.6);
    setZoomCenter({ x: 400, y: 300 });
    setSelectedNode(null);
    onNodeSelect(null);
    setShowNodeDetails(false);
    setAnimationEnabled(true);
    setGraphRotation(0);
    setActiveFilter(null);
    setSearchTerm('');
  };
  
  // Function to get coordinates after rotation
  const getRotatedCoordinates = (x: number, y: number, centerX = 400, centerY = 300) => {
    if (!animationEnabled || selectedNode) return { x, y };
    
    const radians = (graphRotation * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    
    // Translate point to origin
    const translatedX = x - centerX;
    const translatedY = y - centerY;
    
    // Rotate point
    const rotatedX = translatedX * cos - translatedY * sin;
    const rotatedY = translatedX * sin + translatedY * cos;
    
    // Translate point back
    return {
      x: rotatedX + centerX,
      y: rotatedY + centerY
    };
  };
  
  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  // Filter nodes based on search and active filter
  const getFilteredNodes = () => {
    return networkData.nodes.filter(node => {
      const matchesSearch = searchTerm === '' || 
        node.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
        node.id.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesFilter = !activeFilter || node.group === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
  };
  
  const filteredNodes = getFilteredNodes();
  
  // Find connections to filtered nodes
  const getRelevantLinks = () => {
    if (!activeFilter && !searchTerm) return networkData.links;
    
    const filteredNodeIds = filteredNodes.map(node => node.id);
    return networkData.links.filter(link => {
      const sourceNode = networkData.nodes.find(n => n.x === link.source.x);
      const targetNode = networkData.nodes.find(n => n.x === link.target.x);
      return (sourceNode && filteredNodeIds.includes(sourceNode.id)) || 
             (targetNode && filteredNodeIds.includes(targetNode.id));
    });
  };
  
  // Function to export network as image (simplified version)
  const exportNetworkImage = () => {
    if (containerRef.current) {
      // In a real implementation, this would use html2canvas or similar
      alert('Network visualization exported! In a real implementation, this would save the visualization as an image.');
    }
  };
  
  // Function to share network
  const shareNetwork = () => {
    // In a real implementation, this would generate a shareable link
    alert('Shareable link generated! In a real implementation, this would create a unique URL to share this view.');
  };
  
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  // Custom color palette for different node types
  const nodeColors = {
    agent: {
      fill: '#3B82F6', // Bright blue
      stroke: '#2563EB',
      textColor: '#FFFFFF'
    },
    data: {
      fill: '#10B981', // Emerald green
      stroke: '#059669',
      textColor: '#FFFFFF'
    },
    system: {
      fill: '#F59E0B', // Amber
      stroke: '#D97706',
      textColor: '#FFFFFF'
    },
    user: {
      fill: '#EC4899', // Pink
      stroke: '#DB2777',
      textColor: '#FFFFFF'
    }
  };
  
  // Calculate the transform for the entire SVG based on zoom level and center
  const svgTransform = `scale(${zoomLevel}) translate(${(400 - zoomCenter.x) * (1/zoomLevel)}px, ${(300 - zoomCenter.y) * (1/zoomLevel)}px)`;
  
  return (
    <div ref={containerRef} className="h-full relative">
      {/* Enhanced Controls */}
      <div className="absolute top-2 right-2 z-10 flex space-x-1">
        <button 
          onClick={() => setShowSearch(!showSearch)}
          className={`p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 ${
            showSearch ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white'
          }`}
          title="Search Nodes"
        >
          <Search size={16} />
        </button>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 ${
            showFilters ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white'
          }`}
          title="Filter Nodes"
        >
          <Filter size={16} />
        </button>
        <div className="h-4 border-r border-gray-200 mx-0.5"></div>
        <button 
          onClick={handleZoomIn}
          className="bg-white p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
          title="Zoom In"
        >
          <ZoomIn size={16} />
        </button>
        <button 
          onClick={handleZoomOut}
          className="bg-white p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
          title="Zoom Out"
        >
          <ZoomOut size={16} />
        </button>
        <button 
          onClick={handleReset}
          className="bg-white p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
          title="Reset View"
        >
          <Maximize2 size={16} />
        </button>
        <button 
          onClick={() => setAnimationEnabled(!animationEnabled)}
          className={`p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 ${
            animationEnabled ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white'
          }`}
          title={animationEnabled ? "Pause Animation" : "Enable Animation"}
        >
          <Activity size={16} />
        </button>
        <div className="h-4 border-r border-gray-200 mx-0.5"></div>
        <button 
          onClick={exportNetworkImage}
          className="bg-white p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
          title="Export as Image"
        >
          <Download size={16} />
        </button>
        <button 
          onClick={shareNetwork}
          className="bg-white p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
          title="Share Network View"
        >
          <Share size={16} />
        </button>
      </div>
      
      {/* Search Bar */}
      {showSearch && (
        <div className="absolute top-12 right-2 z-10 bg-white rounded-md shadow-md p-2 border border-gray-200 w-64 animate-fade-in">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search nodes..."
              className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="mt-2 text-xs text-gray-500">
              {filteredNodes.length} {filteredNodes.length === 1 ? 'result' : 'results'} found
            </div>
          )}
        </div>
      )}
      
      {/* Filters */}
      {showFilters && (
        <div className="absolute top-12 left-2 z-10 bg-white rounded-md shadow-md p-2 border border-gray-200 w-64 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xs font-medium text-gray-700">Filter by Type</h4>
            <button 
              onClick={() => setActiveFilter(null)}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Reset
            </button>
          </div>
          
          <div className="space-y-1">
            <button
              onClick={() => handleFilterClick('agent')}
              className={`flex items-center w-full px-2 py-1.5 text-xs rounded ${
                activeFilter === 'agent' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span>AI Agents</span>
              <span className="ml-auto">{networkData.nodes.filter(n => n.group === 'agent').length}</span>
            </button>
            
            <button
              onClick={() => handleFilterClick('data')}
              className={`flex items-center w-full px-2 py-1.5 text-xs rounded ${
                activeFilter === 'data' ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>Data Sources</span>
              <span className="ml-auto">{networkData.nodes.filter(n => n.group === 'data').length}</span>
            </button>
            
            <button
              onClick={() => handleFilterClick('system')}
              className={`flex items-center w-full px-2 py-1.5 text-xs rounded ${
                activeFilter === 'system' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              <span>Sales Systems</span>
              <span className="ml-auto">{networkData.nodes.filter(n => n.group === 'system').length}</span>
            </button>
            
            <button
              onClick={() => handleFilterClick('user')}
              className={`flex items-center w-full px-2 py-1.5 text-xs rounded ${
                activeFilter === 'user' ? 'bg-pink-100 text-pink-800' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
              <span>Users & Teams</span>
              <span className="ml-auto">{networkData.nodes.filter(n => n.group === 'user').length}</span>
            </button>
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-100">
            <h4 className="text-xs font-medium text-gray-700 mb-1.5">Advanced Filters</h4>
            <div className="space-y-1">
              <button
                onClick={() => {
                  // Filter to show only nodes with high connections
                  const highConnectionNodes = networkData.nodes.filter(node => {
                    const connections = networkData.links.filter(
                      link => node.x === link.source.x || node.x === link.target.x
                    ).length;
                    return connections > 4;
                  });
                  setActiveFilter('high-connection');
                }}
                className={`flex items-center w-full px-2 py-1.5 text-xs rounded ${
                  activeFilter === 'high-connection' ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Layers className="w-3 h-3 mr-2 text-indigo-500" />
                <span>High Connection Nodes</span>
              </button>
              
              <button
                onClick={() => {
                  // Show only nodes connected to the CRM
                  setActiveFilter('crm-connected');
                }}
                className={`flex items-center w-full px-2 py-1.5 text-xs rounded ${
                  activeFilter === 'crm-connected' ? 'bg-violet-100 text-violet-800' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Database className="w-3 h-3 mr-2 text-violet-500" />
                <span>CRM-Connected</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 800 600" 
        className="bg-gray-50 rounded-lg"
        style={{ transform: svgTransform, transformOrigin: 'center', transition: 'transform 0.3s ease-out' }}
      >
        <defs>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <marker 
            id="arrowhead" 
            markerWidth="10" 
            markerHeight="7" 
            refX="0" 
            refY="3.5" 
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8" />
          </marker>
          
          {/* Data flow animation */}
          <marker 
            id="dataFlow" 
            markerWidth="10" 
            markerHeight="7" 
            refX="0" 
            refY="3.5" 
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
          </marker>
          
          {/* Linear gradient for connections */}
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Radial gradient for node glow */}
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          
          {/* Different colored gradients for connections */}
          <linearGradient id="agentToDataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="dataToSystemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="systemToUserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="agentToAgentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Background grid */}
        <g>
          {Array.from({ length: 20 }, (_, i) => (
            <line 
              key={`grid-h-${i}`} 
              x1="0" 
              y1={i * 30} 
              x2="800" 
              y2={i * 30} 
              stroke="#E5E7EB" 
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
          ))}
          {Array.from({ length: 27 }, (_, i) => (
            <line 
              key={`grid-v-${i}`} 
              x1={i * 30} 
              y1="0" 
              x2={i * 30} 
              y2="600" 
              stroke="#E5E7EB" 
              strokeWidth="0.5"
              strokeDasharray="4,4"
            />
          ))}
        </g>
        
        {/* Central hub */}
        <circle 
          cx="400" 
          cy="300" 
          r="30" 
          fill="#F3F4F6" 
          stroke="#D1D5DB" 
          strokeWidth="1.5"
          opacity="0.9"
        >
          <animate 
            attributeName="r"
            values="30;32;30"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;1;0.9"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        
        <text
          x="400"
          y="295"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#6B7280"
          className="select-none"
        >
          OGI
        </text>
        <text
          x="400"
          y="310"
          textAnchor="middle"
          fontSize="8"
          fill="#6B7280"
          className="select-none"
        >
          Organizational Graph Intelligence
        </text>
        
        {/* Radial lines from center */}
        {networkData.nodes.map((node, i) => {
          const center = { x: 400, y: 300 };
          const rotated = getRotatedCoordinates(node.x, node.y);
          // Skip if the node is filtered out
          if (filteredNodes.findIndex(n => n.id === node.id) === -1) return null;
          
          return (
            <line 
              key={`radial-${i}`}
              x1={center.x}
              y1={center.y}
              x2={rotated.x}
              y2={rotated.y}
              stroke="#E5E7EB"
              strokeWidth="0.5"
              strokeDasharray="3,3"
              opacity="0.3"
            />
          );
        })}
        
        {/* Circular orbits around center */}
        {[50, 100, 150, 200, 250, 300].map((radius, i) => (
          <circle
            key={`orbit-${i}`}
            cx="400"
            cy="300"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="0.5"
            strokeDasharray="3,3"
            opacity="0.5"
          />
        ))}
        
        {/* Render connections first so they appear behind nodes */}
        {getRelevantLinks().map((link, index) => {
          // Calculate if this link is connected to the hovered or selected node
          const isConnectedToHovered = 
            hoveredNode && 
            (networkData.nodes.find(n => n.id === hoveredNode)?.x === link.source.x || 
             networkData.nodes.find(n => n.id === hoveredNode)?.x === link.target.x);
             
          const isConnectedToSelected = 
            selectedNode && 
            (networkData.nodes.find(n => n.id === selectedNode)?.x === link.source.x || 
             networkData.nodes.find(n => n.id === selectedNode)?.x === link.target.x);
          
          const isHighlighted = isConnectedToHovered || isConnectedToSelected;
          
          // Apply rotation to source and target
          const rotatedSource = getRotatedCoordinates(link.source.x, link.source.y);
          const rotatedTarget = getRotatedCoordinates(link.target.x, link.target.y);
          
          // Determine the source and target node groups for gradient selection
          const sourceNode = networkData.nodes.find(n => n.x === link.source.x);
          const targetNode = networkData.nodes.find(n => n.x === link.target.x);
          
          let gradientId = "linkGradient";
          
          if (sourceNode && targetNode) {
            if (sourceNode.group === 'agent' && targetNode.group === 'data') {
              gradientId = "agentToDataGradient";
            } else if (sourceNode.group === 'data' && targetNode.group === 'system') {
              gradientId = "dataToSystemGradient";
            } else if (sourceNode.group === 'system' && targetNode.group === 'user') {
              gradientId = "systemToUserGradient";
            } else if (sourceNode.group === 'agent' && targetNode.group === 'agent') {
              gradientId = "agentToAgentGradient";
            }
          }
          
          return (
            <g key={`link-${index}`}>
              <line
                x1={rotatedSource.x}
                y1={rotatedSource.y}
                x2={rotatedTarget.x}
                y2={rotatedTarget.y}
                stroke={isHighlighted ? `url(#${gradientId})` : "#CBD5E1"}
                strokeWidth={isHighlighted ? link.value + 1 : link.value}
                strokeOpacity={isHighlighted ? 0.9 : 0.5}
                markerEnd={isHighlighted ? "url(#dataFlow)" : "url(#arrowhead)"}
                className="transition-all duration-300"
              />
              
              {/* Pulse animation for all connections */}
              <line
                x1={rotatedSource.x}
                y1={rotatedSource.y}
                x2={rotatedTarget.x}
                y2={rotatedTarget.y}
                stroke={isHighlighted ? "#3B82F6" : "#94A3B8"}
                strokeWidth={link.value * 0.8}
                strokeOpacity={isHighlighted ? "0.3" : "0.1"}
                strokeDasharray="5,5"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="10" 
                  dur={`${1 + Math.random()}s`} 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Animated data flow for all connections */}
              {(isHighlighted || animationEnabled) && (
                <>
                  <circle r={isHighlighted ? "3" : "2"} fill={isHighlighted ? "#3B82F6" : "#94A3B8"} opacity={isHighlighted ? "0.8" : "0.4"}>
                    <animateMotion
                      path={`M${rotatedSource.x},${rotatedSource.y} L${rotatedTarget.x},${rotatedTarget.y}`}
                      dur={`${2 + Math.random() * 3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  {/* Add a second data point for busy connections */}
                  {isHighlighted && (
                    <circle r="2.5" fill="#3B82F6" opacity="0.6">
                      <animateMotion
                        path={`M${rotatedSource.x},${rotatedSource.y} L${rotatedTarget.x},${rotatedTarget.y}`}
                        dur={`${2 + Math.random() * 3}s`}
                        repeatCount="indefinite"
                        begin={`${Math.random()}s`}
                      />
                    </circle>
                  )}
                </>
              )}
              
              {/* Bandwidth/value indicator */}
              {isHighlighted && (
                <g transform={`translate(${(rotatedSource.x + rotatedTarget.x) / 2}, ${(rotatedSource.y + rotatedTarget.y) / 2})`}>
                  <rect
                    x="-25"
                    y="-12"
                    width="50"
                    height="24"
                    rx="6"
                    fill="white"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    opacity="0.9"
                  />
                  <text
                    textAnchor="middle"
                    dy="0.3em"
                    fontSize="10"
                    fill="#334155"
                    fontWeight="500"
                  >
                    {Math.round(link.value * 1000)} req/min
                  </text>
                </g>
              )}
            </g>
          );
        })}
        
        {/* Render nodes */}
        {filteredNodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isSelected = selectedNode === node.id;
          const isHighlighted = isHovered || isSelected;
          const isFiltered = activeFilter && node.group !== activeFilter && activeFilter !== 'high-connection' && activeFilter !== 'crm-connected';
          const colors = nodeColors[node.group as keyof typeof nodeColors];
          
          // Apply rotation to node coordinates
          const rotated = getRotatedCoordinates(node.x, node.y);
          
          // Connection count for sizing node rings
          const connectionCount = networkData.links.filter(
            link => node.x === link.source.x || node.x === link.target.x
          ).length;
          
          // Determine node size scale based on connections
          const sizeMultiplier = Math.min(1.5, 1 + (connectionCount * 0.05));
          
          // Skip if the node is filtered out
          if (isFiltered) return null;
          
          // Skip if this is 'crm-connected' filter and the node isn't connected to CRM
          if (activeFilter === 'crm-connected') {
            const crmNode = networkData.nodes.find(n => n.id === 'crm-system');
            const isConnectedToCRM = crmNode && networkData.links.some(
              link => (node.x === link.source.x && crmNode.x === link.target.x) || 
                     (node.x === link.target.x && crmNode.x === link.source.x)
            );
            if (!isConnectedToCRM) return null;
          }
          
          // Skip if this is 'high-connection' filter and the node doesn't have many connections
          if (activeFilter === 'high-connection' && connectionCount <= 4) return null;
          
          return (
            <g
              key={node.id}
              transform={`translate(${rotated.x},${rotated.y})`}
              onClick={() => handleNodeClick(node.id)}
              onMouseEnter={() => handleNodeHover(node.id)}
              onMouseLeave={() => handleNodeHover(null)}
              style={{ cursor: 'pointer' }}
              className="transition-transform duration-300"
            >
              {/* Outer ring that shows connection strength */}
              <circle
                r={node.size * 1.5 * sizeMultiplier}
                fill="none"
                stroke={colors.stroke}
                strokeWidth="0.5"
                strokeDasharray="3,2"
                opacity="0.3"
              >
                <animate
                  attributeName="r"
                  values={`${node.size * 1.5 * sizeMultiplier};${node.size * 1.6 * sizeMultiplier};${node.size * 1.5 * sizeMultiplier}`}
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.5;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Shadow/Glow effect for all nodes */}
              <circle
                r={node.size * 1.2}
                fill="url(#nodeGlow)"
                opacity={isHovered || isSelected ? "0.7" : "0.3"}
                filter={isHovered || isSelected ? "url(#glow)" : ""}
              />
              
              {/* Connection count indicator */}
              <circle
                r={node.size * 1.8 * sizeMultiplier}
                fill="none"
                stroke={colors.stroke}
                strokeWidth={isHighlighted ? "2" : "1"}
                strokeDasharray={`${Math.min(connectionCount * 10, 360 * 0.9)},${360 - Math.min(connectionCount * 10, 360 * 0.9)}`}
                opacity={isHighlighted ? "0.5" : "0.2"}
                transform="rotate(-90)"
              />
              
              {/* Main circle for the node */}
              <circle
                r={node.size * (isHovered || isSelected ? 1.1 : 1)}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={isHovered || isSelected ? 3 : 2}
                className="transition-all duration-300"
              >
                <animate
                  attributeName="r"
                  values={`${node.size * (isHovered || isSelected ? 1.1 : 1)};${node.size * (isHovered || isSelected ? 1.15 : 1.05)};${node.size * (isHovered || isSelected ? 1.1 : 1)}`}
                  dur={`${2 + Math.random()}s`}
                  repeatCount="indefinite"
                  additive="sum"
                />
              </circle>
              
              {/* Node label - first two letters */}
              <text
                textAnchor="middle"
                dy=".3em"
                fontSize="10"
                fontWeight={isHovered ? "bold" : "normal"}
                fill={colors.textColor}
                className="select-none"
              >
                {node.label.substring(0, 2)}
              </text>
              
              {/* Connection count badge */}
              <g transform={`translate(${node.size * 0.7}, ${node.size * 0.7})`}>
                <circle r="8" fill="white" stroke={colors.stroke} strokeWidth="1" />
                <text
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="8"
                  fontWeight="bold"
                  fill={colors.stroke}
                  className="select-none"
                >
                  {connectionCount}
                </text>
              </g>
              
              {/* Pulse animation for selected node */}
              {isSelected && (
                <circle
                  r={node.size + 5}
                  fill="none"
                  stroke={colors.stroke}
                  strokeWidth="1"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from={node.size + 5}
                    to={node.size + 25}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              
              {/* Node label tooltip on hover */}
              {isHovered && (
                <g transform={`translate(0, ${-node.size - 15})`}>
                  <rect
                    x="-60"
                    y="-20"
                    width="120"
                    height="20"
                    rx="4"
                    fill="white"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                  />
                  <text
                    textAnchor="middle"
                    dy="-5"
                    fontSize="12"
                    fill="#334155"
                    fontWeight="500"
                  >
                    {node.label}
                  </text>
                </g>
              )}
              
              {/* Status indicators for different node types */}
              {node.group === 'agent' && (
                <g transform={`translate(${node.size * 0.7}, ${-node.size * 0.7})`}>
                  <circle r="4" fill="#10B981" stroke="white" strokeWidth="1" />
                  <Check className="h-3 w-3 text-white" x="-1.5" y="-1.5" />
                </g>
              )}
              
              {node.group === 'system' && (
                <g transform={`translate(${node.size * 0.7}, ${-node.size * 0.7})`}>
                  <circle r="4" fill="#F59E0B" stroke="white" strokeWidth="1" />
                  <Settings className="h-3 w-3 text-white" x="-1.5" y="-1.5" />
                </g>
              )}
              
              {node.group === 'data' && (
                <g transform={`translate(${node.size * 0.7}, ${-node.size * 0.7})`}>
                  <circle r="4" fill="#10B981" stroke="white" strokeWidth="1" />
                  <Database className="h-3 w-3 text-white" x="-1.5" y="-1.5" />
                </g>
              )}
              
              {node.group === 'user' && (
                <g transform={`translate(${node.size * 0.7}, ${-node.size * 0.7})`}>
                  <circle r="4" fill="#EC4899" stroke="white" strokeWidth="1" />
                  <Users className="h-3 w-3 text-white" x="-1.5" y="-1.5" />
                </g>
              )}
            </g>
          );
        })}
        
        {/* Central hub label */}
        <g transform="translate(400, 300)">
          <text
            textAnchor="middle"
            dy=".3em"
            fontSize="10"
            fontWeight="bold"
            fill="#6B7280"
            className="select-none"
          >
            OGI
          </text>
        </g>
      </svg>
      
      {/* Node details panel with enhanced information */}
      {showNodeDetails && selectedNode && nodeStats && (
        <div className="absolute bottom-4 left-4 w-72 bg-white p-4 rounded-lg shadow-lg border border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-sm flex items-center">
              <div className={`w-2.5 h-2.5 rounded-full mr-2 ${
                nodeStats.type === 'agent' ? 'bg-blue-500' :
                nodeStats.type === 'data' ? 'bg-green-500' :
                nodeStats.type === 'system' ? 'bg-amber-500' : 'bg-pink-500'
              }`}></div>
              {networkData.nodes.find(n => n.id === selectedNode)?.label}
            </h4>
            <button 
              onClick={() => setShowNodeDetails(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Type:</span>
              <span className="font-medium capitalize px-2 py-1 rounded-full bg-gray-100">{nodeStats.type}</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Connections:</span>
                <span className="font-medium">{nodeStats.connections}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, nodeStats.connections * 10)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Importance:</span>
              <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                nodeStats.importance === 'Critical' ? 'bg-red-100 text-red-600' : 
                nodeStats.importance === 'Important' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
              }`}>{nodeStats.importance}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Activity Level:</span>
              <div className="flex items-center">
                <span className={`mr-1 h-2 w-2 rounded-full ${
                  nodeStats.activity === 'High' ? 'bg-green-500' : 'bg-amber-500'
                }`}></span>
                <span className="font-medium">{nodeStats.activity}</span>
              </div>
            </div>
            
            {/* Key connections subsection */}
            <div className="pt-2 border-t border-gray-100">
              <div className="font-medium text-gray-700 mb-2">Key Connections</div>
              <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                {networkData.links
                  .filter(link => {
                    const sourceNode = networkData.nodes.find(n => n.x === link.source.x);
                    const targetNode = networkData.nodes.find(n => n.x === link.target.x);
                    return (sourceNode && sourceNode.id === selectedNode) || 
                           (targetNode && targetNode.id === selectedNode);
                  })
                  .sort((a, b) => b.value - a.value) // Sort by connection strength
                  .slice(0, 5) // Top 5 connections
                  .map((link, index) => {
                    const sourceNode = networkData.nodes.find(n => n.x === link.source.x);
                    const targetNode = networkData.nodes.find(n => n.x === link.target.x);
                    const connectedNode = sourceNode?.id === selectedNode ? targetNode : sourceNode;
                    
                    if (!connectedNode) return null;
                    
                    // Determine connection type icon based on connected node group
                    const connectionIcon = connectedNode.group === 'agent' ? (
                      <Zap className="h-3 w-3 text-blue-500" />
                    ) : connectedNode.group === 'data' ? (
                      <Database className="h-3 w-3 text-green-500" />
                    ) : connectedNode.group === 'system' ? (
                      <Settings className="h-3 w-3 text-amber-500" />
                    ) : (
                      <Users className="h-3 w-3 text-pink-500" />
                    );
                    
                    return (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-1.5 rounded">
                        <div className="flex items-center">
                          {connectionIcon}
                          <span className="ml-1.5 text-gray-700">{connectedNode.label}</span>
                        </div>
                        <span className={`text-xs ${
                          link.value > 2 ? 'text-green-600' : 'text-amber-600'
                        }`}>
                          {link.value > 2 ? 'High' : 'Med'} {sourceNode?.id === selectedNode ? 'Out' : 'In'}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            
            {/* Added system metrics specific to node type */}
            {nodeStats.type === 'agent' && (
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Success Rate:</span>
                  <span className="font-medium">{Math.round(85 + Math.random() * 10)}%</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">{(1 + Math.random() * 5).toFixed(1)}s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">ROI:</span>
                  <span className="font-medium">${Math.round(20000 + Math.random() * 40000)}</span>
                </div>
              </div>
            )}
            
            {nodeStats.type === 'data' && (
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Storage:</span>
                  <span className="font-medium">{Math.round(10 + Math.random() * 90)}GB</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Queries/day:</span>
                  <span className="font-medium">{Math.round(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Last updated:</span>
                  <span className="font-medium">{Math.round(1 + Math.random() * 24)}h ago</span>
                </div>
              </div>
            )}
            
            {nodeStats.type === 'system' && (
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Uptime:</span>
                  <span className="font-medium">{Math.round(98 + Math.random() * 2)}%</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Latency:</span>
                  <span className="font-medium">{Math.round(50 + Math.random() * 200)}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">API calls/day:</span>
                  <span className="font-medium">{Math.round(5000 + Math.random() * 15000)}</span>
                </div>
              </div>
            )}
            
            {nodeStats.type === 'user' && (
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Active users:</span>
                  <span className="font-medium">{Math.round(10 + Math.random() * 90)}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-500">Avg. session:</span>
                  <span className="font-medium">{Math.round(20 + Math.random() * 40)}min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Satisfaction:</span>
                  <span className="font-medium">{Math.round(80 + Math.random() * 20)}%</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between">
            <button 
              className="text-blue-600 text-xs font-medium flex items-center"
              onClick={() => onNodeSelect(selectedNode)}
            >
              <Info className="h-3 w-3 mr-1" />
              Query OGI Assistant
            </button>
            
            <button 
              className="text-gray-600 text-xs font-medium flex items-center"
              onClick={() => {
                // In a real app, this would expand to a full node detail page
                alert('This would open a detailed view of the node in a real implementation.');
              }}
            >
              <Maximize2 className="h-3 w-3 mr-1" />
              Full Details
            </button>
          </div>
        </div>
      )}
      
      {/* Network statistics panel */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-sm border border-gray-100 max-w-xs">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium mb-1">Network Overview</div>
          <div className="text-xs text-gray-500">{filteredNodes.length} nodes shown</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-gray-50 p-1.5 rounded">
            <div className="text-xs text-gray-500">AI Agents</div>
            <div className="font-medium text-sm">{networkData.nodes.filter(n => n.group === 'agent').length}</div>
          </div>
          <div className="bg-gray-50 p-1.5 rounded">
            <div className="text-xs text-gray-500">Data Sources</div>
            <div className="font-medium text-sm">{networkData.nodes.filter(n => n.group === 'data').length}</div>
          </div>
          <div className="bg-gray-50 p-1.5 rounded">
            <div className="text-xs text-gray-500">Sales Systems</div>
            <div className="font-medium text-sm">{networkData.nodes.filter(n => n.group === 'system').length}</div>
          </div>
          <div className="bg-gray-50 p-1.5 rounded">
            <div className="text-xs text-gray-500">Users & Teams</div>
            <div className="font-medium text-sm">{networkData.nodes.filter(n => n.group === 'user').length}</div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
          <div className="flex items-center mb-1">
            <Activity className="h-3 w-3 mr-1 text-green-500" />
            <span>Network health: 98% operational</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1 text-blue-500" />
            <span>Last updated: 5 minutes ago</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-sm border border-gray-100">
        <div className="text-xs font-medium mb-2">Graph Legend</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-xs text-gray-700">AI Agents</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
            <span className="text-xs text-gray-700">Data Sources</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
            <span className="text-xs text-gray-700">Sales Systems</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
            <span className="text-xs text-gray-700">Users & Teams</span>
          </div>
        </div>
      </div>
      
      {/* Interactive tips - shown only initially */}
      {!selectedNode && !hoveredNode && (
        <div className="absolute top-14 left-4 bg-white p-3 rounded-md shadow-sm border border-gray-100 max-w-xs">
          <div className="text-xs font-medium mb-2">Interactive Tips</div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Click on a node to see detailed information</li>
            <li>• Hover over nodes to highlight connections</li>
            <li>• Watch data flow between connected systems</li>
            <li>• Toggle animation with the <Activity className="h-3 w-3 inline" /> button</li>
            <li>• Use zoom controls to explore the network</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default KnowledgeGraph;