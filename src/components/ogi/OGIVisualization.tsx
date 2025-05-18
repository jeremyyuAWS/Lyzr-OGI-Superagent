import { useState } from 'react';
import { BarChart3, PieChart, Map, Table as TableIcon, Network, Activity, Maximize2, Download, Share, HelpCircle, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

// This component renders different types of visualizations
interface OGIVisualizationProps {
  type: 'chart' | 'table' | 'map' | 'network' | 'process' | 'metrics';
  data: any;
}

const OGIVisualization = ({ type, data }: OGIVisualizationProps) => {
  const [expanded, setExpanded] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  const handleDownload = () => {
    // In a real application, this would generate and download the visualization
    alert('Downloading visualization! In a real implementation, this would save the data as an image or CSV.');
  };
  
  const handleShare = () => {
    // In a real application, this would create a shareable link
    alert('Creating shareable link! In a real implementation, this would generate a URL to share this visualization.');
  };
  
  const handleNextPage = () => {
    if (type === 'metrics' && activePage < 2) {
      setActivePage(activePage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (type === 'metrics' && activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  // Container for visualization with header
  const visualizationContainer = (content: React.ReactNode) => (
    <div className={`${expanded ? 'fixed inset-0 z-50 bg-white p-4' : 'relative w-full'}`}>
      <div className="flex justify-between items-center p-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          {type === 'chart' && <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />}
          {type === 'table' && <TableIcon className="h-4 w-4 mr-2 text-green-600" />}
          {type === 'map' && <Map className="h-4 w-4 mr-2 text-amber-600" />}
          {type === 'network' && <Network className="h-4 w-4 mr-2 text-indigo-600" />}
          {type === 'process' && <Activity className="h-4 w-4 mr-2 text-pink-600" />}
          {type === 'metrics' && <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />}
          <div>
            <h4 className="text-sm font-medium text-gray-800">{data.title}</h4>
            <p className="text-xs text-gray-500">{data.description}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          {type === 'metrics' && (
            <div className="flex items-center mr-2 text-xs">
              <button 
                onClick={handlePrevPage}
                disabled={activePage === 0}
                className={`p-1 rounded ${activePage === 0 ? 'text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="mx-1">{activePage + 1}/3</span>
              <button
                onClick={handleNextPage}
                disabled={activePage === 2}
                className={`p-1 rounded ${activePage === 2 ? 'text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
          
          <button
            onClick={handleShare}
            className="p-1 text-gray-400 hover:text-gray-600 mr-1"
            title="Share"
          >
            <Share className="h-4 w-4" />
          </button>
          
          <button
            onClick={handleDownload}
            className="p-1 text-gray-400 hover:text-gray-600 mr-1"
            title="Download"
          >
            <Download className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`p-1 ${showHelp ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'} mr-1`}
            title="Help"
          >
            <HelpCircle className="h-4 w-4" />
          </button>
          
          <button 
            onClick={toggleExpand}
            className="p-1 text-gray-400 hover:text-gray-600"
            title={expanded ? "Minimize" : "Maximize"}
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {showHelp && (
        <div className="bg-blue-50 p-2 text-xs text-blue-800 border-b border-blue-100">
          {type === 'chart' && "This chart visualizes key metrics over time. Hover over data points to see exact values."}
          {type === 'table' && "This table shows detailed data about connections between systems. Click column headers to sort."}
          {type === 'network' && "This network visualization shows how different components interact. Hover over nodes and connections for details."}
          {type === 'process' && "This diagram shows the workflow between different components. Follow the arrows to see the data flow."}
          {type === 'metrics' && "This dashboard shows key performance indicators. Use the pagination controls to see different metrics."}
        </div>
      )}
      
      <div className={expanded ? 'h-[calc(100%-40px)]' : 'h-[240px]'}>
        {content}
      </div>
    </div>
  );

  // Render different visualization types
  switch(type) {
    case 'chart':
      return visualizationContainer(
        <div className="w-full h-full p-4">
          {data.chartType === 'bar' ? (
            <BarChartVisualization data={data} />
          ) : data.chartType === 'pie' ? (
            <PieChartVisualization data={data} />
          ) : (
            <LineChartVisualization data={data} />
          )}
        </div>
      );
      
    case 'table':
      return visualizationContainer(
        <div className="w-full h-full p-4 overflow-auto">
          <TableVisualization data={data} />
        </div>
      );
      
    case 'network':
      return visualizationContainer(
        <div className="w-full h-full bg-gray-50 p-4">
          <NetworkVisualization data={data} />
        </div>
      );
      
    case 'process':
      return visualizationContainer(
        <div className="w-full h-full p-4">
          <ProcessVisualization data={data} />
        </div>
      );
      
    case 'metrics':
      return visualizationContainer(
        <div className="w-full h-full p-4">
          <MetricsDashboard data={data} page={activePage} />
        </div>
      );
      
    case 'map':
      return visualizationContainer(
        <div className="w-full h-full bg-gray-50 p-4">
          <MapVisualization data={data} />
        </div>
      );
      
    default:
      return <div className="text-sm text-gray-500 p-4">Visualization not available</div>;
  }
};

// Simulated Bar Chart Visualization
const BarChartVisualization = ({ data }: { data: any }) => {
  // Simulated data for bar chart
  const chartData = [
    { name: 'Email Assistant', value: 9850, color: '#3B82F6' },
    { name: 'Lead Enrichment', value: 7850, color: '#10B981' },
    { name: 'Meeting Scheduler', value: 5320, color: '#F59E0B' },
    { name: 'ICP Assistant', value: 4210, color: '#EC4899' },
    { name: 'Sequence Builder', value: 4250, color: '#8B5CF6' },
  ];
  
  const maxValue = Math.max(...chartData.map(item => item.value));
  
  // Add interactive hover state
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative">
        <svg width="100%" height="100%" viewBox="0 0 800 300">
          {/* Y-axis */}
          <line x1="60" y1="40" x2="60" y2="260" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="59" y1="260" x2="740" y2="260" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Y-axis labels */}
          <text x="55" y="260" textAnchor="end" fontSize="12" fill="#6b7280">0</text>
          <text x="55" y="180" textAnchor="end" fontSize="12" fill="#6b7280">{Math.round(maxValue / 2)}</text>
          <text x="55" y="100" textAnchor="end" fontSize="12" fill="#6b7280">{Math.round(maxValue * 0.75)}</text>
          <text x="55" y="40" textAnchor="end" fontSize="12" fill="#6b7280">{maxValue}</text>
          
          {/* Horizontal grid lines */}
          <line x1="60" y1="180" x2="740" y2="180" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="60" y1="100" x2="740" y2="100" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="60" y1="40" x2="740" y2="40" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="4,4" />
          
          {/* Bars */}
          {chartData.map((item, i) => {
            const barWidth = 80;
            const gap = 40;
            const x = 80 + i * (barWidth + gap);
            const barHeight = (item.value / maxValue) * 200;
            const isHovered = hoveredBar === i;
            
            return (
              <g 
                key={i}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Bar shadow for hover effect */}
                {isHovered && (
                  <rect
                    x={x - 2}
                    y={260 - barHeight - 2}
                    width={barWidth + 4}
                    height={barHeight + 4}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1"
                    rx="4"
                    ry="4"
                  />
                )}
                
                <rect
                  x={x}
                  y={260 - barHeight}
                  width={barWidth}
                  height={barHeight}
                  fill={isHovered ? item.color : `${item.color}cc`}
                  rx="4"
                  ry="4"
                  className="cursor-pointer transition-colors duration-150"
                >
                  <animate 
                    attributeName="height" 
                    from="0" 
                    to={barHeight} 
                    dur="1s" 
                    fill="freeze"
                  />
                  <animate 
                    attributeName="y" 
                    from="260" 
                    to={260 - barHeight} 
                    dur="1s" 
                    fill="freeze"
                  />
                </rect>
                <text 
                  x={x + barWidth / 2} 
                  y={260 - barHeight - 10} 
                  textAnchor="middle" 
                  fontSize="12" 
                  fontWeight="bold" 
                  fill={isHovered ? "#374151" : "#64748b"}
                  className="pointer-events-none"
                >
                  {item.value.toLocaleString()}
                </text>
                
                {/* Value change indicator */}
                {isHovered && (
                  <g>
                    <rect
                      x={x + barWidth / 2 - 25}
                      y={260 - barHeight - 38}
                      width="50"
                      height="18"
                      rx="9"
                      fill="#f0f9ff"
                      stroke="#bfdbfe"
                    />
                    <text
                      x={x + barWidth / 2}
                      y={260 - barHeight - 26}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#3b82f6"
                      fontWeight="500"
                    >
                      +{Math.round(Math.random() * 20)}%
                    </text>
                  </g>
                )}
                
                <text 
                  x={x + barWidth / 2} 
                  y={280} 
                  textAnchor="middle" 
                  fontSize="12" 
                  fill="#6b7280"
                  transform={`rotate(45, ${x + barWidth / 2}, 280)`}
                >
                  {item.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        {chartData.map((item, i) => (
          <div 
            key={i} 
            className={`flex items-center text-xs transition-opacity duration-150 ${hoveredBar === null || hoveredBar === i ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={() => setHoveredBar(i)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simulated Pie Chart Visualization
const PieChartVisualization = ({ data }: { data: any }) => {
  // Simulated data for pie chart
  const chartData = [
    { name: 'Time Savings', value: 156450, percentage: 55.2, color: '#3B82F6' },
    { name: 'Lead Quality', value: 92300, percentage: 32.6, color: '#10B981' },
    { name: 'Response Rate', value: 75600, percentage: 26.7, color: '#F59E0B' },
    { name: 'Meeting Conversion', value: 63400, percentage: 22.4, color: '#EC4899' },
    { name: 'Pipeline Generated', value: 93400, percentage: 33.0, color: '#8B5CF6' },
  ];
  
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  
  // Interactive hover state
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  
  // Calculate SVG pie slices
  const slices = [];
  let currentAngle = 0;
  
  chartData.forEach((item, i) => {
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    
    // SVG arc path
    const x1 = 150 + 100 * Math.cos((startAngle * Math.PI) / 180);
    const y1 = 150 + 100 * Math.sin((startAngle * Math.PI) / 180);
    const x2 = 150 + 100 * Math.cos((endAngle * Math.PI) / 180);
    const y2 = 150 + 100 * Math.sin((endAngle * Math.PI) / 180);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    const pathData = [
      `M 150 150`,
      `L ${x1} ${y1}`,
      `A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      `Z`
    ].join(' ');
    
    slices.push({
      path: pathData,
      color: item.color,
      name: item.name,
      value: item.value,
      percentage: item.percentage,
      
      // Calculation for text position
      labelX: 150 + 130 * Math.cos(((startAngle + endAngle) / 2) * (Math.PI / 180)),
      labelY: 150 + 130 * Math.sin(((startAngle + endAngle) / 2) * (Math.PI / 180))
    });
  });
  
  return (
    <div className="w-full h-full flex items-center justify-around">
      <div className="w-64 h-64 relative">
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          {slices.map((slice, i) => {
            const isHovered = hoveredSlice === i;
            const shift = isHovered ? 10 : 0;
            // Calculate the midpoint angle in radians
            const midAngle = ((currentAngle - slice.percentage / 100 * 180) + (currentAngle - slice.percentage / 100 * 360)) / 2 * Math.PI / 180;
            const shiftX = shift * Math.cos(midAngle);
            const shiftY = shift * Math.sin(midAngle);
            
            return (
              <g 
                key={i}
                onMouseEnter={() => setHoveredSlice(i)}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer"
                transform={isHovered ? `translate(${shiftX}, ${shiftY})` : ''}
              >
                <path
                  d={slice.path}
                  fill={slice.color}
                  stroke="#fff"
                  strokeWidth="1"
                  className="transition-all duration-200"
                >
                  <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur="0.8s"
                    fill="freeze"
                    begin={`${i * 0.1}s`}
                  />
                </path>
                
                {/* Label connectors for hovered slice */}
                {isHovered && (
                  <>
                    <line
                      x1="150"
                      y1="150"
                      x2={slice.labelX}
                      y2={slice.labelY}
                      stroke={slice.color}
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <circle
                      cx={slice.labelX}
                      cy={slice.labelY}
                      r="2"
                      fill={slice.color}
                    />
                    <rect
                      x={slice.labelX - 40}
                      y={slice.labelY - 10}
                      width="80"
                      height="20"
                      rx="5"
                      fill="white"
                      stroke={slice.color}
                      strokeWidth="1"
                    />
                    <text
                      x={slice.labelX}
                      y={slice.labelY + 5}
                      textAnchor="middle"
                      fontSize="10"
                      fill={slice.color}
                      fontWeight="medium"
                    >
                      ${slice.value.toLocaleString()}
                    </text>
                  </>
                )}
              </g>
            );
          })}
          <circle cx="150" cy="150" r="45" fill="white" stroke="#e5e7eb" strokeWidth="1" />
          <text x="150" y="145" textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="bold" fill="#374151">
            $283,450
          </text>
          <text x="150" y="165" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#6b7280">
            Total ROI
          </text>
          <circle cx="150" cy="150" r="70" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
        </svg>
      </div>
      <div className="space-y-2">
        {chartData.map((item, i) => {
          const isHovered = hoveredSlice === i;
          return (
            <div 
              key={i} 
              className={`flex items-center transition-all duration-200 ${isHovered ? 'bg-gray-50 p-1 rounded shadow-sm' : ''}`}
              onMouseEnter={() => setHoveredSlice(i)}
              onMouseLeave={() => setHoveredSlice(null)}
            >
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>${item.value.toLocaleString()}</span>
                  <span>({item.percentage}%)</span>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="mt-4 pt-2 border-t border-gray-100">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>YoY Growth:</span>
            <span className="font-medium text-green-600">+36.4%</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Quarter vs Quarter:</span>
            <span className="font-medium text-green-600">+12.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulated Line Chart Visualization
const LineChartVisualization = ({ data }: { data: any }) => {
  // Simulated data for line chart
  const series = [
    {
      name: 'Open Rate',
      color: '#3B82F6',
      data: [32.4, 34.6, 36.8, 38.5, 41.7, 43.8]
    },
    {
      name: 'Reply Rate',
      color: '#10B981',
      data: [12.8, 14.5, 17.7, 19.2, 23.1, 28.4]
    },
    {
      name: 'Meeting Rate',
      color: '#F59E0B',
      data: [2.8, 3.5, 4.0, 4.2, 4.6, 5.3]
    }
  ];
  
  const labels = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'];
  
  // Interactive hover state
  const [hoveredPoint, setHoveredPoint] = useState<{series: number, point: number} | null>(null);
  
  // Generate SVG paths for each series
  const generatePath = (dataPoints: number[], index: number) => {
    const maxValue = index === 0 ? 50 : index === 1 ? 30 : 10;
    const points = dataPoints.map((value, i) => {
      const x = 80 + i * ((700 - 80) / (labels.length - 1));
      const y = 260 - (value / maxValue * 200);
      return `${x},${y}`;
    }).join(' ');
    
    return `M ${points}`;
  };
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative">
        <svg width="100%" height="100%" viewBox="0 0 800 300">
          {/* Grid lines */}
          <line x1="60" y1="60" x2="740" y2="60" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="60" y1="120" x2="740" y2="120" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="60" y1="180" x2="740" y2="180" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="60" y1="240" x2="740" y2="240" stroke="#f3f4f6" strokeWidth="1" />
          
          {/* Axes */}
          <line x1="60" y1="40" x2="60" y2="260" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="59" y1="260" x2="740" y2="260" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Y-axis labels - left (Open Rate) */}
          <text x="55" y="260" textAnchor="end" fontSize="12" fill="#3B82F6">0%</text>
          <text x="55" y="180" textAnchor="end" fontSize="12" fill="#3B82F6">25%</text>
          <text x="55" y="100" textAnchor="end" fontSize="12" fill="#3B82F6">37.5%</text>
          <text x="55" y="60" textAnchor="end" fontSize="12" fill="#3B82F6">45%</text>
          
          {/* Y-axis labels - right (Reply Rate) */}
          <text x="745" y="260" textAnchor="start" fontSize="12" fill="#10B981">0%</text>
          <text x="745" y="160" textAnchor="start" fontSize="12" fill="#10B981">15%</text>
          <text x="745" y="60" textAnchor="start" fontSize="12" fill="#10B981">30%</text>
          
          {/* X-axis labels */}
          {labels.map((label, i) => {
            const x = 80 + i * ((700 - 80) / (labels.length - 1));
            return (
              <text key={i} x={x} y="280" textAnchor="middle" fontSize="12" fill="#6b7280">
                {label}
              </text>
            );
          })}
          
          {/* Vertical reference lines */}
          {labels.map((_, i) => {
            const x = 80 + i * ((700 - 80) / (labels.length - 1));
            return (
              <line
                key={`vline-${i}`}
                x1={x}
                y1="60"
                x2={x}
                y2="260"
                stroke="#f3f4f6"
                strokeWidth="1"
                strokeDasharray="2,4"
              />
            );
          })}
          
          {/* Data lines */}
          {series.map((s, i) => (
            <g key={i}>
              {/* Area fill for line chart - added for visual appeal */}
              <path
                d={`${generatePath(s.data, i)} L ${80 + (s.data.length - 1) * ((700 - 80) / (labels.length - 1))},260 L 80,260 Z`}
                fill={s.color}
                opacity="0.1"
              />
              
              <path
                d={generatePath(s.data, i)}
                fill="none"
                stroke={s.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animate 
                  attributeName="stroke-dasharray" 
                  from="0,1000" 
                  to="1000,0" 
                  dur="1.5s" 
                  fill="freeze" 
                />
              </path>
              
              {/* Data points */}
              {s.data.map((value, j) => {
                const x = 80 + j * ((700 - 80) / (labels.length - 1));
                const y = 260 - (value / (i === 0 ? 50 : i === 1 ? 30 : 10) * 200);
                const isHovered = hoveredPoint?.series === i && hoveredPoint?.point === j;
                
                return (
                  <g key={j}>
                    <circle 
                      cx={x} 
                      cy={y} 
                      r={isHovered ? "6" : "4"} 
                      fill="white" 
                      stroke={s.color} 
                      strokeWidth={isHovered ? "3" : "2"}
                      onMouseEnter={() => setHoveredPoint({series: i, point: j})}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className="cursor-pointer transition-all duration-150"
                    >
                      <animate 
                        attributeName="r" 
                        from="0" 
                        to={isHovered ? "6" : "4"} 
                        dur="0.5s" 
                        fill="freeze" 
                        begin={`${0.3 + j * 0.1}s`}
                      />
                    </circle>
                    
                    {/* Tooltip for hovered point */}
                    {isHovered && (
                      <g>
                        <rect
                          x={x - 30}
                          y={y - 30}
                          width="60"
                          height="20"
                          rx="4"
                          fill="white"
                          stroke={s.color}
                          strokeWidth="1"
                        />
                        <text
                          x={x}
                          y={y - 17}
                          textAnchor="middle"
                          fontSize="11"
                          fill={s.color}
                          fontWeight="medium"
                        >
                          {value}%
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>
      <div className="flex justify-center space-x-6 mt-2">
        {series.map((s, i) => (
          <div 
            key={i} 
            className="flex items-center text-sm"
            onMouseEnter={() => setHoveredPoint({series: i, point: s.data.length - 1})}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: s.color }}></div>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
      
      {/* Added trend assessment */}
      <div className="mt-3 bg-gray-50 p-2 rounded text-xs">
        <div className="font-medium text-gray-800 mb-1">Key Insights:</div>
        <div className="flex items-start">
          <Zap className="h-3 w-3 text-amber-500 mt-0.5 mr-1 flex-shrink-0" />
          <span className="text-gray-600">Reply rates grew 121% over 6 quarters - significantly outpacing open rates at 35%</span>
        </div>
      </div>
    </div>
  );
};

// Simulated Table Visualization
const TableVisualization = ({ data }: { data: any }) => {
  // Simulated data for table
  const tableData = {
    headers: [
      'Agent Connection', 'Data Exchanged', 'Frequency', 'Volume', 'Security Level'
    ],
    rows: [
      {
        connection: 'ICP Assistant → Lead Enrichment Agent',
        data: 'Target criteria, firmographic requirements, scoring rules',
        frequency: 'Real-time',
        volume: '2.4MB per lead',
        security: 'Enhanced TLS 1.3'
      },
      {
        connection: 'Lead Enrichment Agent → Email Assistant',
        data: 'Prospect profile, company details, personalization data',
        frequency: 'Batch (5-min)',
        volume: '24MB per batch',
        security: 'End-to-end encryption'
      },
      {
        connection: 'Email Assistant → Sequence Builder Agent',
        data: 'Message templates, personalization tokens, messaging history',
        frequency: 'Real-time',
        volume: '1.2MB per sequence',
        security: 'Enhanced TLS 1.3'
      },
      {
        connection: 'Sequence Builder → Meeting Qualifier Agent',
        data: 'Prospect responses, engagement metrics, qualification criteria',
        frequency: 'Real-time',
        volume: '3.5MB per lead',
        security: 'End-to-end encryption'
      },
      {
        connection: 'Meeting Qualifier → Meeting Scheduler Agent',
        data: 'Qualification status, next steps, calendar availability',
        frequency: 'Real-time',
        volume: '0.8MB per meeting',
        security: 'Enhanced TLS 1.3'
      },
      {
        connection: 'Meeting Scheduler → Call Prep Agent',
        data: 'Meeting details, prospect background, talking points',
        frequency: 'Batch (15-min)',
        volume: '5.2MB per meeting',
        security: 'End-to-end encryption'
      }
    ]
  };
  
  // Interactive sorting state
  const [sortField, setSortField] = useState<string>('connection');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Row hover state
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  
  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Sort rows based on current sort settings
  const sortedRows = [...tableData.rows].sort((a: any, b: any) => {
    const aValue = a[sortField === 'connection' ? 'connection' : sortField === 'data' ? 'data' : sortField === 'frequency' ? 'frequency' : sortField === 'volume' ? 'volume' : 'security'];
    const bValue = b[sortField === 'connection' ? 'connection' : sortField === 'data' ? 'data' : sortField === 'frequency' ? 'frequency' : sortField === 'volume' ? 'volume' : 'security'];
    
    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
  
  return (
    <div className="w-full overflow-auto">
      <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <thead className="bg-gray-50">
          <tr>
            {tableData.headers.map((header, i) => (
              <th 
                key={i}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort(header.toLowerCase())}
              >
                <div className="flex items-center">
                  {header}
                  {sortField === header.toLowerCase() && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedRows.map((row, i) => (
            <tr 
              key={i} 
              className={`hover:bg-blue-50 transition-colors duration-150 ${hoveredRow === i ? 'bg-blue-50' : ''}`}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.connection}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.data}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${row.frequency === 'Real-time' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                  {row.frequency}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.volume}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {row.security}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Data summary */}
      <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs text-gray-600">
        <div className="font-medium text-gray-700 mb-2">Connection Summary</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-500 mb-1">Primary Transfer Types:</div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span>Profile Data</span>
                <span className="font-medium">42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{ width: '42%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Template Data</span>
                <span className="font-medium">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Connection Statistics:</div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Total Data Volume:</span>
                <span className="font-medium">124MB/minute</span>
              </div>
              <div className="flex justify-between">
                <span>Real-time Connections:</span>
                <span className="font-medium">67%</span>
              </div>
              <div className="flex justify-between">
                <span>E2E Encrypted:</span>
                <span className="font-medium">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulated Network Visualization
const NetworkVisualization = ({ data }: { data: any }) => {
  // Interactive state for network nodes
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg p-4">
      <div className="w-full h-full relative bg-white rounded-lg shadow-inner">
        <svg width="100%" height="100%" viewBox="0 0 800 500">
          {/* Central Hub */}
          <circle 
            cx="400" 
            cy="250" 
            r="25" 
            fill="#E0E7FF" 
            stroke="#6366F1" 
            strokeWidth="2"
          >
            <animate attributeName="r" values="25;27;25" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="400" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="bold" fill="#4F46E5">
            OGI
          </text>
          
          {/* Nodes - Agents (Blue) */}
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'agent' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'agent' ? null : 'agent')}
          >
            <circle cx="200" cy="150" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="200" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#6B7280">ICP Assistant</text>
          </g>
          
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'agent' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'agent' ? null : 'agent')}
          >
            <circle cx="300" cy="100" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="300" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="300" y="130" textAnchor="middle" fontSize="10" fill="#6B7280">Lead Enrichment</text>
          </g>
          
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'agent' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'agent' ? null : 'agent')}
          >
            <circle cx="500" cy="150" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="500" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="500" y="180" textAnchor="middle" fontSize="10" fill="#6B7280">Email Assistant</text>
          </g>
          
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'agent' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'agent' ? null : 'agent')}
          >
            <circle cx="600" cy="100" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="600" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="600" y="130" textAnchor="middle" fontSize="10" fill="#6B7280">Sequence Builder</text>
          </g>
          
          {/* Nodes - Data Sources (Green) */}
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'data' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'data' ? null : 'data')}
          >
            <circle cx="250" cy="350" r="20" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
            <text x="250" y="350" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">DS</text>
            <text x="250" y="380" textAnchor="middle" fontSize="10" fill="#6B7280">Lead Database</text>
          </g>
          
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'data' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'data' ? null : 'data')}
          >
            <circle cx="400" cy="400" r="20" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
            <text x="400" y="400" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">DS</text>
            <text x="400" y="430" textAnchor="middle" fontSize="10" fill="#6B7280">Engagement Data</text>
          </g>
          
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'data' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'data' ? null : 'data')}
          >
            <circle cx="550" cy="350" r="20" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
            <text x="550" y="350" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">DS</text>
            <text x="550" y="380" textAnchor="middle" fontSize="10" fill="#6B7280">Email Templates</text>
          </g>
          
          {/* Nodes - Sales Systems (Amber) */}
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'system' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'system' ? null : 'system')}
          >
            <circle cx="150" cy="250" r="20" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
            <text x="150" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#B45309">SS</text>
            <text x="150" y="280" textAnchor="middle" fontSize="10" fill="#6B7280">CRM System</text>
          </g>
          
          <g 
            className={`transition-opacity duration-300 cursor-pointer ${selectedGroup === 'system' || selectedGroup === null ? 'opacity-100' : 'opacity-30'}`}
            onClick={() => setSelectedGroup(selectedGroup === 'system' ? null : 'system')}
          >
            <circle cx="650" cy="250" r="20" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
            <text x="650" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#B45309">SS</text>
            <text x="650" y="280" textAnchor="middle" fontSize="10" fill="#6B7280">Email Platform</text>
          </g>
          
          {/* Connections with animated data flow */}
          {/* OGI to Agents */}
          <line 
            x1="400" y1="250" x2="200" y2="150" 
            stroke={selectedGroup === null || selectedGroup === 'agent' ? "#3B82F6" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'agent' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          <line 
            x1="400" y1="250" x2="300" y2="100" 
            stroke={selectedGroup === null || selectedGroup === 'agent' ? "#3B82F6" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'agent' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          <line 
            x1="400" y1="250" x2="500" y2="150" 
            stroke={selectedGroup === null || selectedGroup === 'agent' ? "#3B82F6" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'agent' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          <line 
            x1="400" y1="250" x2="600" y2="100" 
            stroke={selectedGroup === null || selectedGroup === 'agent' ? "#3B82F6" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'agent' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          
          {/* OGI to Data Sources */}
          <line 
            x1="400" y1="250" x2="250" y2="350" 
            stroke={selectedGroup === null || selectedGroup === 'data' ? "#10B981" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'data' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          <line 
            x1="400" y1="250" x2="400" y2="400" 
            stroke={selectedGroup === null || selectedGroup === 'data' ? "#10B981" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'data' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          <line 
            x1="400" y1="250" x2="550" y2="350" 
            stroke={selectedGroup === null || selectedGroup === 'data' ? "#10B981" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'data' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          
          {/* OGI to Sales Systems */}
          <line 
            x1="400" y1="250" x2="150" y2="250" 
            stroke={selectedGroup === null || selectedGroup === 'system' ? "#F59E0B" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'system' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          <line 
            x1="400" y1="250" x2="650" y2="250" 
            stroke={selectedGroup === null || selectedGroup === 'system' ? "#F59E0B" : "#E5E7EB"} 
            strokeWidth="1" 
            strokeOpacity={selectedGroup === null || selectedGroup === 'system' ? "0.6" : "0.2"}
            className="transition-colors duration-300"
          />
          
          {/* Animated data flows */}
          {(selectedGroup === null || selectedGroup === 'agent') && (
            <>
              <circle r="3" fill="#3B82F6">
                <animateMotion 
                  path="M400,250 L200,150" 
                  dur="3s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="3" fill="#3B82F6">
                <animateMotion 
                  path="M400,250 L300,100" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="3" fill="#3B82F6">
                <animateMotion 
                  path="M400,250 L500,150" 
                  dur="2.8s" 
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}
          
          {(selectedGroup === null || selectedGroup === 'data') && (
            <>
              <circle r="3" fill="#10B981">
                <animateMotion 
                  path="M250,350 L400,250" 
                  dur="2.5s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="3" fill="#10B981">
                <animateMotion 
                  path="M400,400 L400,250" 
                  dur="3.2s" 
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}
          
          {(selectedGroup === null || selectedGroup === 'system') && (
            <>
              <circle r="3" fill="#F59E0B">
                <animateMotion 
                  path="M150,250 L400,250" 
                  dur="3.5s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="3" fill="#F59E0B">
                <animateMotion 
                  path="M650,250 L400,250" 
                  dur="2.8s" 
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}
        </svg>
        
        {/* Network Legend */}
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md text-xs">
          <div className="font-medium mb-1">Network Legend</div>
          <div className="space-y-1">
            <div 
              className={`flex items-center mb-1 p-1 rounded cursor-pointer transition-colors ${selectedGroup === 'agent' ? 'bg-blue-50' : ''}`}
              onClick={() => setSelectedGroup(selectedGroup === 'agent' ? null : 'agent')}
            >
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
              <span>AI Agents</span>
            </div>
            <div 
              className={`flex items-center mb-1 p-1 rounded cursor-pointer transition-colors ${selectedGroup === 'data' ? 'bg-green-50' : ''}`}
              onClick={() => setSelectedGroup(selectedGroup === 'data' ? null : 'data')}
            >
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <span>Data Sources</span>
            </div>
            <div
              className={`flex items-center p-1 rounded cursor-pointer transition-colors ${selectedGroup === 'system' ? 'bg-amber-50' : ''}`}
              onClick={() => setSelectedGroup(selectedGroup === 'system' ? null : 'system')}
            >
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
              <span>Sales Systems</span>
            </div>
          </div>
        </div>
        
        {/* Data Flow Metrics */}
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md text-xs">
          <div className="font-medium mb-1">Data Flow Metrics</div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Total Volume:</span>
              <span className="font-medium">438 MB/min</span>
            </div>
            <div className="flex justify-between">
              <span>Connections:</span>
              <span className="font-medium">32 active</span>
            </div>
            <div className="flex justify-between">
              <span>Latency:</span>
              <span className="font-medium">42ms avg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulated Process Flow Visualization
const ProcessVisualization = ({ data }: { data: any }) => {
  // Interactive hover to highlight flow steps
  const [highlightedStep, setHighlightedStep] = useState<number | null>(null);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-lg p-4">
      <div className="w-full h-full relative">
        <svg width="100%" height="100%" viewBox="0 0 1000 300">
          {/* Process flow for outreach sequence */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8" />
            </marker>
          </defs>
          
          {/* Step 1 */}
          <g 
            className={`cursor-pointer transition-all duration-200 ${highlightedStep === 0 ? 'opacity-100' : highlightedStep === null ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={() => setHighlightedStep(0)}
            onMouseLeave={() => setHighlightedStep(null)}
          >
            <rect 
              x="30" y="120" width="140" height="60" 
              rx="10" fill={highlightedStep === 0 ? "#BFDBFE" : "#DBEAFE"} 
              stroke="#3B82F6" strokeWidth="2" 
            />
            <text x="100" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
              ICP Definition
            </text>
            <text x="100" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
              (2 min)
            </text>
          </g>
          
          {/* Arrow 1 */}
          <g className={highlightedStep === 0 || highlightedStep === 1 || highlightedStep === null ? 'opacity-100' : 'opacity-30'}>
            <line x1="170" y1="150" x2="200" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="185" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Targeting</text>
          </g>
          
          {/* Step 2 */}
          <g 
            className={`cursor-pointer transition-all duration-200 ${highlightedStep === 1 ? 'opacity-100' : highlightedStep === null ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={() => setHighlightedStep(1)}
            onMouseLeave={() => setHighlightedStep(null)}
          >
            <rect 
              x="210" y="120" width="140" height="60" 
              rx="10" fill={highlightedStep === 1 ? "#BFDBFE" : "#DBEAFE"} 
              stroke="#3B82F6" strokeWidth="2" 
            />
            <text x="280" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
              Lead Enrichment
            </text>
            <text x="280" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
              (12 min)
            </text>
          </g>
          
          {/* Arrow 2 */}
          <g className={highlightedStep === 1 || highlightedStep === 2 || highlightedStep === null ? 'opacity-100' : 'opacity-30'}>
            <line x1="350" y1="150" x2="380" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="365" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Personalization</text>
          </g>
          
          {/* Step 3 */}
          <g 
            className={`cursor-pointer transition-all duration-200 ${highlightedStep === 2 ? 'opacity-100' : highlightedStep === null ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={() => setHighlightedStep(2)}
            onMouseLeave={() => setHighlightedStep(null)}
          >
            <rect 
              x="390" y="120" width="140" height="60" 
              rx="10" fill={highlightedStep === 2 ? "#BFDBFE" : "#DBEAFE"} 
              stroke="#3B82F6" strokeWidth="2" 
            />
            <text x="460" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
              Email Creation
            </text>
            <text x="460" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
              (5 min)
            </text>
          </g>
          
          {/* Arrow 3 */}
          <g className={highlightedStep === 2 || highlightedStep === 3 || highlightedStep === null ? 'opacity-100' : 'opacity-30'}>
            <line x1="530" y1="150" x2="560" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="545" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Sequencing</text>
          </g>
          
          {/* Step 4 */}
          <g 
            className={`cursor-pointer transition-all duration-200 ${highlightedStep === 3 ? 'opacity-100' : highlightedStep === null ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={() => setHighlightedStep(3)}
            onMouseLeave={() => setHighlightedStep(null)}
          >
            <rect 
              x="570" y="120" width="140" height="60" 
              rx="10" fill={highlightedStep === 3 ? "#BFDBFE" : "#DBEAFE"} 
              stroke="#3B82F6" strokeWidth="2" 
            />
            <text x="640" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
              Meeting Qualification
            </text>
            <text x="640" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
              (8 min)
            </text>
          </g>
          
          {/* Arrow 4 */}
          <g className={highlightedStep === 3 || highlightedStep === 4 || highlightedStep === null ? 'opacity-100' : 'opacity-30'}>
            <line x1="710" y1="150" x2="740" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="725" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Scheduling</text>
          </g>
          
          {/* Step 5 */}
          <g 
            className={`cursor-pointer transition-all duration-200 ${highlightedStep === 4 ? 'opacity-100' : highlightedStep === null ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={() => setHighlightedStep(4)}
            onMouseLeave={() => setHighlightedStep(null)}
          >
            <rect 
              x="750" y="120" width="140" height="60" 
              rx="10" fill={highlightedStep === 4 ? "#BFDBFE" : "#DBEAFE"} 
              stroke="#3B82F6" strokeWidth="2" 
            />
            <text x="820" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
              Meeting Preparation
            </text>
            <text x="820" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
              (10 min)
            </text>
          </g>
          
          {/* Systems (below) */}
          <rect 
            x="140" y="230" width="120" height="40" 
            rx="5" fill={highlightedStep === 0 ? "#FEF3C7" : "#FEF9C3"} 
            stroke="#F59E0B" strokeWidth="1" 
            className={`transition-all duration-200 ${highlightedStep !== null && highlightedStep !== 0 ? 'opacity-50' : 'opacity-100'}`}
          />
          <text x="200" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#B45309">
            CRM System
          </text>
          
          <rect 
            x="300" y="230" width="120" height="40" 
            rx="5" fill={highlightedStep === 1 ? "#DCFCE7" : "#ECFDF5"} 
            stroke="#10B981" strokeWidth="1" 
            className={`transition-all duration-200 ${highlightedStep !== null && highlightedStep !== 1 ? 'opacity-50' : 'opacity-100'}`}
          />
          <text x="360" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">
            Lead Database
          </text>
          
          <rect 
            x="460" y="230" width="120" height="40" 
            rx="5" fill={highlightedStep === 2 ? "#DCFCE7" : "#ECFDF5"} 
            stroke="#10B981" strokeWidth="1" 
            className={`transition-all duration-200 ${highlightedStep !== null && highlightedStep !== 2 ? 'opacity-50' : 'opacity-100'}`}
          />
          <text x="520" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">
            Email Templates
          </text>
          
          <rect 
            x="620" y="230" width="120" height="40" 
            rx="5" fill={highlightedStep === 3 ? "#DCFCE7" : "#ECFDF5"} 
            stroke="#10B981" strokeWidth="1" 
            className={`transition-all duration-200 ${highlightedStep !== null && highlightedStep !== 3 ? 'opacity-50' : 'opacity-100'}`}
          />
          <text x="680" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">
            Engagement Data
          </text>
          
          {/* System integration lines */}
          <line 
            x1="100" y1="180" x2="200" y2="230" 
            stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" 
            className={`transition-opacity duration-200 ${highlightedStep !== null && highlightedStep !== 0 ? 'opacity-30' : 'opacity-100'}`}
          />
          <line 
            x1="280" y1="180" x2="360" y2="230" 
            stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" 
            className={`transition-opacity duration-200 ${highlightedStep !== null && highlightedStep !== 1 ? 'opacity-30' : 'opacity-100'}`}
          />
          <line 
            x1="460" y1="180" x2="520" y2="230" 
            stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" 
            className={`transition-opacity duration-200 ${highlightedStep !== null && highlightedStep !== 2 ? 'opacity-30' : 'opacity-100'}`}
          />
          <line 
            x1="640" y1="180" x2="680" y2="230" 
            stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" 
            className={`transition-opacity duration-200 ${highlightedStep !== null && highlightedStep !== 3 ? 'opacity-30' : 'opacity-100'}`}
          />
          
          {/* Animated data flow */}
          {(highlightedStep === null || highlightedStep === 0 || highlightedStep === 1) && (
            <circle r="3" fill="#3B82F6">
              <animateMotion path="M100,150 L280,150" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          
          {(highlightedStep === null || highlightedStep === 1 || highlightedStep === 2) && (
            <circle r="3" fill="#3B82F6">
              <animateMotion path="M280,150 L460,150" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          
          {(highlightedStep === null || highlightedStep === 2 || highlightedStep === 3) && (
            <circle r="3" fill="#3B82F6">
              <animateMotion path="M460,150 L640,150" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          
          {(highlightedStep === null || highlightedStep === 3 || highlightedStep === 4) && (
            <circle r="3" fill="#3B82F6">
              <animateMotion path="M640,150 L820,150" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          
          {/* Process Statistics */}
          <g className={`transition-opacity duration-300 ${highlightedStep !== null ? 'opacity-100' : 'opacity-0'}`}>
            <rect x="400" y="10" width="200" height="60" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="1" />
            <text x="500" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">
              {highlightedStep === 0 ? "ICP Definition" : 
               highlightedStep === 1 ? "Lead Enrichment" :
               highlightedStep === 2 ? "Email Creation" :
               highlightedStep === 3 ? "Meeting Qualification" :
               "Meeting Preparation"}
            </text>
            <text x="500" y="50" textAnchor="middle" fontSize="10" fill="#64748B">
              {highlightedStep === 0 ? "Success Rate: 97% • Avg Time: 2.1 min" : 
               highlightedStep === 1 ? "Success Rate: 92% • Avg Time: 11.4 min" :
               highlightedStep === 2 ? "Success Rate: 94% • Avg Time: 4.8 min" :
               highlightedStep === 3 ? "Success Rate: 89% • Avg Time: 7.6 min" :
               "Success Rate: 96% • Avg Time: 9.2 min"}
            </text>
          </g>
        </svg>
      </div>
      
      {/* Process metrics */}
      <div className="mt-2 grid grid-cols-3 gap-4 text-xs w-full">
        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
          <div className="font-medium text-blue-800 mb-1">Total Process Time</div>
          <div className="flex justify-between">
            <span className="text-gray-600">Average:</span>
            <span className="font-medium">37 minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Optimization:</span>
            <span className="font-medium text-green-600">-24% vs manual</span>
          </div>
        </div>
        
        <div className="bg-green-50 p-2 rounded-lg border border-green-100">
          <div className="font-medium text-green-800 mb-1">Conversion Rate</div>
          <div className="flex justify-between">
            <span className="text-gray-600">Process:</span>
            <span className="font-medium">24.6%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Improvement:</span>
            <span className="font-medium text-green-600">+8.3%</span>
          </div>
        </div>
        
        <div className="bg-amber-50 p-2 rounded-lg border border-amber-100">
          <div className="font-medium text-amber-800 mb-1">Automation Level</div>
          <div className="flex justify-between">
            <span className="text-gray-600">Automated:</span>
            <span className="font-medium">86%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Human review:</span>
            <span className="font-medium">14%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulated Metrics Dashboard
const MetricsDashboard = ({ data, page = 0 }: { data: any, page?: number }) => {
  // Render different pages based on the active page
  const renderActivePage = () => {
    switch(page) {
      case 0:
        return <PerformanceOverviewPage />;
      case 1:
        return <AgentUtilizationPage />;
      case 2:
        return <DataFlowPage />;
      default:
        return <PerformanceOverviewPage />;
    }
  };
  
  return (
    <div className="w-full h-full">
      {renderActivePage()}
    </div>
  );
};

// Page 1 - Performance Overview
const PerformanceOverviewPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <div className="text-xs text-blue-500 font-medium mb-1">Open Rate</div>
          <div className="flex items-end">
            <div className="text-xl font-semibold">43.8%</div>
            <div className="text-xs text-green-600 ml-2">+5.3%</div>
          </div>
          <div className="w-full bg-blue-200 h-1.5 mt-2 rounded-full">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '43.8%' }}></div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
          <div className="text-xs text-green-500 font-medium mb-1">Reply Rate</div>
          <div className="flex items-end">
            <div className="text-xl font-semibold">28.4%</div>
            <div className="text-xs text-green-600 ml-2">+10.7%</div>
          </div>
          <div className="w-full bg-green-200 h-1.5 mt-2 rounded-full">
            <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '28.4%' }}></div>
          </div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
          <div className="text-xs text-amber-500 font-medium mb-1">Meeting Rate</div>
          <div className="flex items-end">
            <div className="text-xl font-semibold">5.3%</div>
            <div className="text-xs text-green-600 ml-2">+26%</div>
          </div>
          <div className="w-full bg-amber-200 h-1.5 mt-2 rounded-full">
            <div className="bg-amber-600 h-1.5 rounded-full" style={{ width: '53%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-pink-50 rounded-lg p-3 border border-pink-100 flex flex-col">
          <div className="text-xs text-pink-500 font-medium mb-1">Response Time</div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#FDE68A" strokeWidth="8" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#F59E0B" 
                  strokeWidth="8" 
                  strokeDasharray="282.6" 
                  strokeDashoffset="254.34" 
                  transform="rotate(-90 50 50)" 
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="282.6"
                    to="254.34"
                    dur="1.5s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                  />
                </circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">1.8s</div>
                <div className="text-xs text-amber-600">Avg Time</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
          <div className="text-xs text-indigo-500 font-medium mb-1">Processing Volume</div>
          <div className="flex flex-col h-full justify-center space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs">Daily</span>
              <span className="text-sm font-medium">1,240 emails</span>
            </div>
            <div className="w-full bg-indigo-200 h-1.5 rounded-full">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '75%' }}>
                <animate
                  attributeName="width"
                  from="0%"
                  to="75%"
                  dur="1s"
                  fill="freeze"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs">Peak Hour</span>
              <span className="text-sm font-medium">124 emails</span>
            </div>
            <div className="w-full bg-indigo-200 h-1.5 rounded-full">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '92%' }}>
                <animate
                  attributeName="width"
                  from="0%"
                  to="92%"
                  dur="1.2s"
                  fill="freeze"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs">Capacity</span>
              <span className="text-sm font-medium">82%</span>
            </div>
            <div className="w-full bg-indigo-200 h-1.5 rounded-full">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '82%' }}>
                <animate
                  attributeName="width"
                  from="0%"
                  to="82%"
                  dur="1.4s"
                  fill="freeze"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
          <div className="text-xs text-purple-500 font-medium mb-2">Pipeline Generated</div>
          <div className="flex items-center justify-center h-[80px]">
            <div className="text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-100 px-2 py-1 rounded text-xs text-purple-800">
                +16.8% QoQ
              </div>
              <div className="text-2xl font-bold">$4.2M</div>
              <div className="text-xs text-purple-600">Quarter to Date</div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <div className="text-xs text-blue-500 font-medium mb-1">Engagement By Channel</div>
          <div className="flex flex-col h-[80px] justify-between">
            <div className="flex justify-between items-center text-xs">
              <span>Email</span>
              <span className="font-medium">43.8%</span>
            </div>
            <div className="w-full bg-blue-200 h-1.5 rounded-full">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '43.8%' }}>
                <animate
                  attributeName="width"
                  from="0%"
                  to="43.8%"
                  dur="1s"
                  fill="freeze"
                  begin="0.1s"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span>LinkedIn</span>
              <span className="font-medium">27.4%</span>
            </div>
            <div className="w-full bg-blue-200 h-1.5 rounded-full">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '27.4%' }}>
                <animate
                  attributeName="width"
                  from="0%"
                  to="27.4%"
                  dur="1s"
                  fill="freeze"
                  begin="0.3s"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span>Phone</span>
              <span className="font-medium">16.5%</span>
            </div>
            <div className="w-full bg-blue-200 h-1.5 rounded-full">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '16.5%' }}>
                <animate
                  attributeName="width"
                  from="0%"
                  to="16.5%"
                  dur="1s"
                  fill="freeze"
                  begin="0.5s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-3 bg-blue-50 p-2 rounded-lg text-xs border border-blue-100">
        <div className="font-medium text-blue-800 mb-1.5">Insights Summary</div>
        <div className="text-blue-700">
          <div className="flex items-start mb-1">
            <Zap className="h-3.5 w-3.5 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0" />
            <span>Meeting rate growth (26%) significantly outpaces open rate growth (5.3%), indicating improved targeting and messaging quality.</span>
          </div>
          <div className="flex items-start">
            <Zap className="h-3.5 w-3.5 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0" />
            <span>Email remains the most effective channel, but LinkedIn engagement is showing fastest growth at +31% QoQ.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page 2 - Agent Utilization
const AgentUtilizationPage = () => {
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null);
  
  const agentData = [
    { name: "ICP Assistant", usage: 84, efficiency: 92, roi: "$82.3K" },
    { name: "Lead Enrichment", usage: 95, efficiency: 87, roi: "$156.5K" },
    { name: "Email Assistant", usage: 78, efficiency: 94, roi: "$92.3K" },
    { name: "Sequence Builder", usage: 72, efficiency: 89, roi: "$78.3K" },
    { name: "Meeting Qualifier", usage: 68, efficiency: 85, roi: "$54.8K" },
    { name: "Analytics Agent", usage: 63, efficiency: 91, roi: "$54.2K" }
  ];
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <div className="text-xs text-blue-500 font-medium mb-1">Total Agents</div>
          <div className="text-xl font-semibold">27</div>
          <div className="text-xs text-green-600">+3 this quarter</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
          <div className="text-xs text-green-500 font-medium mb-1">Avg. Efficiency</div>
          <div className="text-xl font-semibold">87.3%</div>
          <div className="text-xs text-green-600">+4.2% improvement</div>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
          <div className="text-xs text-amber-500 font-medium mb-1">Uptime</div>
          <div className="text-xl font-semibold">99.94%</div>
          <div className="text-xs text-green-600">17 min downtime</div>
        </div>
      </div>
      
      <div className="flex-1 mb-3">
        <div className="bg-white rounded-lg border border-gray-200 p-3 h-full">
          <div className="text-xs font-medium text-gray-700 mb-2">Agent Utilization Matrix</div>
          <div className="space-y-3 overflow-y-auto max-h-[180px]">
            {agentData.map((agent, i) => (
              <div 
                key={i} 
                className={`flex items-center p-2 rounded transition-all duration-150 ${hoveredAgent === i ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                onMouseEnter={() => setHoveredAgent(i)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                <div className="w-28 text-xs text-gray-600 mr-3">{agent.name}</div>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-gray-500">Utilization</span>
                    <span className="font-medium">{agent.usage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: `${agent.usage}%` }}
                    >
                      <animate
                        attributeName="width"
                        from="0%"
                        to={`${agent.usage}%`}
                        dur="1s"
                        fill="freeze"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 mx-3">
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-gray-500">Efficiency</span>
                    <span className="font-medium">{agent.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`${agent.efficiency > 90 ? 'bg-green-600' : 'bg-amber-500'} h-1.5 rounded-full`}
                      style={{ width: `${agent.efficiency}%` }}
                    >
                      <animate
                        attributeName="width"
                        from="0%"
                        to={`${agent.efficiency}%`}
                        dur="1s"
                        fill="freeze"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="w-20 text-right">
                  <div className="text-xs text-gray-500">ROI</div>
                  <div className="font-medium text-sm">{agent.roi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
          <div className="text-xs text-purple-500 font-medium mb-1">Peak Usage Times</div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-center">
              <div className="h-12 w-6 bg-purple-200 rounded-t-lg inline-block mx-1 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 w-full bg-purple-500 rounded-t-lg"
                  style={{ height: '30%' }}
                >
                  <animate
                    attributeName="height"
                    from="0%"
                    to="30%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
              <div className="text-xs text-gray-600">Mon</div>
            </div>
            <div className="text-center">
              <div className="h-12 w-6 bg-purple-200 rounded-t-lg inline-block mx-1 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 w-full bg-purple-500 rounded-t-lg"
                  style={{ height: '60%' }}
                >
                  <animate
                    attributeName="height"
                    from="0%"
                    to="60%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
              <div className="text-xs text-gray-600">Tue</div>
            </div>
            <div className="text-center">
              <div className="h-12 w-6 bg-purple-200 rounded-t-lg inline-block mx-1 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 w-full bg-purple-500 rounded-t-lg"
                  style={{ height: '80%' }}
                >
                  <animate
                    attributeName="height"
                    from="0%"
                    to="80%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
              <div className="text-xs text-gray-600">Wed</div>
            </div>
            <div className="text-center">
              <div className="h-12 w-6 bg-purple-200 rounded-t-lg inline-block mx-1 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 w-full bg-purple-500 rounded-t-lg"
                  style={{ height: '75%' }}
                >
                  <animate
                    attributeName="height"
                    from="0%"
                    to="75%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
              <div className="text-xs text-gray-600">Thu</div>
            </div>
            <div className="text-center">
              <div className="h-12 w-6 bg-purple-200 rounded-t-lg inline-block mx-1 relative overflow-hidden">
                <div 
                  className="absolute bottom-0 w-full bg-purple-500 rounded-t-lg"
                  style={{ height: '45%' }}
                >
                  <animate
                    attributeName="height"
                    from="0%"
                    to="45%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
              <div className="text-xs text-gray-600">Fri</div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <div className="text-xs text-blue-500 font-medium mb-2">Resource Allocation</div>
          <div className="relative h-16">
            <div className="absolute inset-0 flex">
              <div 
                className="bg-blue-500 h-full rounded-l-lg text-white flex items-center justify-center text-xs font-medium"
                style={{ width: '45%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="45%"
                  dur="1s"
                  fill="freeze"
                />
                <span className="z-10">Email (45%)</span>
              </div>
              <div 
                className="bg-green-500 h-full text-white flex items-center justify-center text-xs font-medium"
                style={{ width: '30%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="30%"
                  dur="1s"
                  fill="freeze"
                  begin="0.2s"
                />
                <span className="z-10">Research (30%)</span>
              </div>
              <div 
                className="bg-amber-500 h-full rounded-r-lg text-white flex items-center justify-center text-xs font-medium"
                style={{ width: '25%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="25%"
                  dur="1s"
                  fill="freeze"
                  begin="0.4s"
                />
                <span className="z-10">Meetings (25%)</span>
              </div>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-600">
            Peak computational resources used on Wednesday 10-11 AM
          </div>
        </div>
      </div>
    </div>
  );
};

// Page 3 - Data Flow
const DataFlowPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <div className="text-xs text-blue-500 font-medium mb-1">Total Data Volume</div>
          <div className="text-xl font-semibold">438 MB/min</div>
          <div className="text-xs text-gray-600">Across all agent connections</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
          <div className="text-xs text-green-500 font-medium mb-1">Real-time Connections</div>
          <div className="text-xl font-semibold">32</div>
          <div className="text-xs text-gray-600">Active bidirectional data flows</div>
        </div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-3 mb-3">
        <div className="flex justify-between items-center">
          <div className="text-xs font-medium text-gray-700">Top Data Consumers</div>
          <div className="text-xs text-gray-500">Requests per minute</div>
        </div>
        
        <div className="space-y-2 mt-2">
          <div className="flex items-center">
            <div className="w-32 text-xs text-gray-600">Lead Enrichment</div>
            <div className="flex-1 h-5 bg-gray-100 rounded-lg relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg flex items-center"
                style={{ width: '95%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="95%"
                  dur="1s"
                  fill="freeze"
                />
                <span className="text-white text-xs ml-2 font-medium">3,624 req/min</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-32 text-xs text-gray-600">Email Assistant</div>
            <div className="flex-1 h-5 bg-gray-100 rounded-lg relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg flex items-center"
                style={{ width: '75%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="75%"
                  dur="1s"
                  fill="freeze"
                />
                <span className="text-white text-xs ml-2 font-medium">2,347 req/min</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-32 text-xs text-gray-600">Meeting Scheduler</div>
            <div className="flex-1 h-5 bg-gray-100 rounded-lg relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg flex items-center"
                style={{ width: '60%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="60%"
                  dur="1s"
                  fill="freeze"
                />
                <span className="text-white text-xs ml-2 font-medium">1,842 req/min</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-32 text-xs text-gray-600">Analytics Agent</div>
            <div className="flex-1 h-5 bg-gray-100 rounded-lg relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-blue-500 rounded-lg flex items-center"
                style={{ width: '45%' }}
              >
                <animate
                  attributeName="width"
                  from="0%"
                  to="45%"
                  dur="1s"
                  fill="freeze"
                />
                <span className="text-white text-xs ml-2 font-medium">1,580 req/min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
          <div className="text-xs text-indigo-500 font-medium mb-1">Data Source Utilization</div>
          <div className="space-y-2 mt-2">
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-600">Lead Database</span>
                <span className="font-medium text-gray-800">86%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5">
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full" 
                  style={{ width: '86%' }}
                >
                  <animate
                    attributeName="width"
                    from="0%"
                    to="86%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-600">Engagement Data</span>
                <span className="font-medium text-gray-800">92%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5">
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full" 
                  style={{ width: '92%' }}
                >
                  <animate
                    attributeName="width"
                    from="0%"
                    to="92%"
                    dur="1s"
                    fill="freeze"
                    begin="0.2s"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-600">Content Library</span>
                <span className="font-medium text-gray-800">62%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5">
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full" 
                  style={{ width: '62%' }}
                >
                  <animate
                    attributeName="width"
                    from="0%"
                    to="62%"
                    dur="1s"
                    fill="freeze"
                    begin="0.4s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-pink-50 rounded-lg p-3 border border-pink-100">
          <div className="text-xs text-pink-500 font-medium mb-1">Data Quality Metrics</div>
          <div className="space-y-2 mt-2">
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-600">Lead Record Accuracy</span>
                <span className="font-medium text-gray-800">94%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5">
                <div 
                  className="bg-pink-500 h-1.5 rounded-full" 
                  style={{ width: '94%' }}
                >
                  <animate
                    attributeName="width"
                    from="0%"
                    to="94%"
                    dur="1s"
                    fill="freeze"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-600">Data Freshness</span>
                <span className="font-medium text-gray-800">87%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5">
                <div 
                  className="bg-pink-500 h-1.5 rounded-full" 
                  style={{ width: '87%' }}
                >
                  <animate
                    attributeName="width"
                    from="0%"
                    to="87%"
                    dur="1s"
                    fill="freeze"
                    begin="0.2s"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-600">Duplication Rate</span>
                <span className="font-medium text-gray-800">2.3%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5">
                <div 
                  className="bg-pink-500 h-1.5 rounded-full" 
                  style={{ width: '2.3%' }}
                >
                  <animate
                    attributeName="width"
                    from="0%"
                    to="2.3%"
                    dur="1s"
                    fill="freeze"
                    begin="0.4s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulated Map Visualization
const MapVisualization = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg">
      <div className="w-full h-full p-4 text-center flex items-center justify-center">
        <div className="text-gray-400">
          <Map className="h-10 w-10 mx-auto mb-2" />
          <p>Geographical visualization would appear here</p>
        </div>
      </div>
    </div>
  );
};

export default OGIVisualization;