import { useState } from 'react';
import { BarChart3, PieChart, Map, Table as TableIcon, Network, Activity, Maximize2 } from 'lucide-react';

// This component renders different types of visualizations
interface OGIVisualizationProps {
  type: 'chart' | 'table' | 'map' | 'network' | 'process' | 'metrics';
  data: any;
}

const OGIVisualization = ({ type, data }: OGIVisualizationProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
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
        <button 
          onClick={toggleExpand}
          className="p-1 text-gray-400 hover:text-gray-600"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
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
          <MetricsDashboard data={data} />
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
          
          {/* Bars */}
          {chartData.map((item, i) => {
            const barWidth = 80;
            const gap = 40;
            const x = 80 + i * (barWidth + gap);
            const barHeight = (item.value / maxValue) * 200;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={260 - barHeight}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color}
                  rx="4"
                  ry="4"
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
                  fill="#374151"
                >
                  {item.value.toLocaleString()}
                </text>
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
          <div key={i} className="flex items-center text-xs">
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
      percentage: item.percentage
    });
  });
  
  return (
    <div className="w-full h-full flex items-center justify-around">
      <div className="w-64 h-64 relative">
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          {slices.map((slice, i) => (
            <path
              key={i}
              d={slice.path}
              fill={slice.color}
              stroke="#fff"
              strokeWidth="1"
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
          ))}
          <circle cx="150" cy="150" r="40" fill="white" />
          <text x="150" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold" fill="#374151">
            $283,450
          </text>
          <text x="150" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#6b7280">
            Total ROI
          </text>
        </svg>
      </div>
      <div className="space-y-2">
        {chartData.map((item, i) => (
          <div key={i} className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
            <div>
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>${item.value.toLocaleString()}</span>
                <span>({item.percentage}%)</span>
              </div>
            </div>
          </div>
        ))}
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
          
          {/* Data lines */}
          {series.map((s, i) => (
            <g key={i}>
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
                return (
                  <circle 
                    key={j} 
                    cx={x} 
                    cy={y} 
                    r="4" 
                    fill="white" 
                    stroke={s.color} 
                    strokeWidth="2"
                  >
                    <animate 
                      attributeName="r" 
                      from="0" 
                      to="4" 
                      dur="0.5s" 
                      fill="freeze" 
                      begin={`${0.3 + j * 0.1}s`}
                    />
                  </circle>
                );
              })}
            </g>
          ))}
        </svg>
      </div>
      <div className="flex justify-center space-x-6 mt-2">
        {series.map((s, i) => (
          <div key={i} className="flex items-center text-sm">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: s.color }}></div>
            <span>{s.name}</span>
          </div>
        ))}
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
  
  return (
    <div className="w-full overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {tableData.headers.map((header, i) => (
              <th 
                key={i}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.connection}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.data}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.frequency}
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
    </div>
  );
};

// Simulated Network Visualization
const NetworkVisualization = ({ data }: { data: any }) => {
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
          <g>
            <circle cx="200" cy="150" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="200" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#6B7280">ICP Assistant</text>
          </g>
          
          <g>
            <circle cx="300" cy="100" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="300" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="300" y="130" textAnchor="middle" fontSize="10" fill="#6B7280">Lead Enrichment</text>
          </g>
          
          <g>
            <circle cx="500" cy="150" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="500" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="500" y="180" textAnchor="middle" fontSize="10" fill="#6B7280">Email Assistant</text>
          </g>
          
          <g>
            <circle cx="600" cy="100" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="600" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#2563EB">AG</text>
            <text x="600" y="130" textAnchor="middle" fontSize="10" fill="#6B7280">Sequence Builder</text>
          </g>
          
          {/* Nodes - Data Sources (Green) */}
          <g>
            <circle cx="250" cy="350" r="20" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
            <text x="250" y="350" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">DS</text>
            <text x="250" y="380" textAnchor="middle" fontSize="10" fill="#6B7280">Lead Database</text>
          </g>
          
          <g>
            <circle cx="400" cy="400" r="20" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
            <text x="400" y="400" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">DS</text>
            <text x="400" y="430" textAnchor="middle" fontSize="10" fill="#6B7280">Engagement Data</text>
          </g>
          
          <g>
            <circle cx="550" cy="350" r="20" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
            <text x="550" y="350" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">DS</text>
            <text x="550" y="380" textAnchor="middle" fontSize="10" fill="#6B7280">Email Templates</text>
          </g>
          
          {/* Nodes - Sales Systems (Amber) */}
          <g>
            <circle cx="150" cy="250" r="20" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
            <text x="150" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#B45309">SS</text>
            <text x="150" y="280" textAnchor="middle" fontSize="10" fill="#6B7280">CRM System</text>
          </g>
          
          <g>
            <circle cx="650" cy="250" r="20" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
            <text x="650" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#B45309">SS</text>
            <text x="650" y="280" textAnchor="middle" fontSize="10" fill="#6B7280">Email Platform</text>
          </g>
          
          {/* Connections with animated data flow */}
          {/* OGI to Agents */}
          <line x1="400" y1="250" x2="200" y2="150" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="400" y1="250" x2="300" y2="100" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="400" y1="250" x2="500" y2="150" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="400" y1="250" x2="600" y2="100" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* OGI to Data Sources */}
          <line x1="400" y1="250" x2="250" y2="350" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="400" y1="250" x2="400" y2="400" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="400" y1="250" x2="550" y2="350" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* OGI to Sales Systems */}
          <line x1="400" y1="250" x2="150" y2="250" stroke="#E5E7EB" strokeWidth="1" />
          <line x1="400" y1="250" x2="650" y2="250" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* Animated data flows on selected connections */}
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
          
          <circle r="3" fill="#10B981">
            <animateMotion 
              path="M250,350 L400,250" 
              dur="2.5s" 
              repeatCount="indefinite"
            />
          </circle>
          
          <circle r="3" fill="#F59E0B">
            <animateMotion 
              path="M150,250 L400,250" 
              dur="3.5s" 
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
          
          <circle r="3" fill="#10B981">
            <animateMotion 
              path="M400,400 L400,250" 
              dur="3.2s" 
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        
        {/* Network Legend */}
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md text-xs">
          <div className="font-medium mb-1">Network Legend</div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
            <span>AI Agents</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span>Data Sources</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
            <span>Sales Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simulated Process Flow Visualization
const ProcessVisualization = ({ data }: { data: any }) => {
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
          <rect x="30" y="120" width="140" height="60" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="100" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
            ICP Definition
          </text>
          <text x="100" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
            (2 min)
          </text>
          
          {/* Arrow 1 */}
          <line x1="170" y1="150" x2="200" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="185" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Targeting</text>
          
          {/* Step 2 */}
          <rect x="210" y="120" width="140" height="60" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="280" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
            Lead Enrichment
          </text>
          <text x="280" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
            (12 min)
          </text>
          
          {/* Arrow 2 */}
          <line x1="350" y1="150" x2="380" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="365" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Personalization</text>
          
          {/* Step 3 */}
          <rect x="390" y="120" width="140" height="60" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="460" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
            Email Creation
          </text>
          <text x="460" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
            (5 min)
          </text>
          
          {/* Arrow 3 */}
          <line x1="530" y1="150" x2="560" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="545" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Sequencing</text>
          
          {/* Step 4 */}
          <rect x="570" y="120" width="140" height="60" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="640" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
            Meeting Qualification
          </text>
          <text x="640" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
            (8 min)
          </text>
          
          {/* Arrow 4 */}
          <line x1="710" y1="150" x2="740" y2="150" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="725" y="140" textAnchor="middle" fontSize="9" fill="#64748B">Scheduling</text>
          
          {/* Step 5 */}
          <rect x="750" y="120" width="140" height="60" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="820" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">
            Meeting Preparation
          </text>
          <text x="820" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1E40AF">
            (10 min)
          </text>
          
          {/* Systems (below) */}
          <rect x="140" y="230" width="120" height="40" rx="5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <text x="200" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#B45309">
            CRM System
          </text>
          
          <rect x="300" y="230" width="120" height="40" rx="5" fill="#DCFCE7" stroke="#10B981" strokeWidth="1" />
          <text x="360" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">
            Lead Database
          </text>
          
          <rect x="460" y="230" width="120" height="40" rx="5" fill="#DCFCE7" stroke="#10B981" strokeWidth="1" />
          <text x="520" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">
            Email Templates
          </text>
          
          <rect x="620" y="230" width="120" height="40" rx="5" fill="#DCFCE7" stroke="#10B981" strokeWidth="1" />
          <text x="680" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#047857">
            Engagement Data
          </text>
          
          {/* System integration lines */}
          <line x1="100" y1="180" x2="200" y2="230" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" />
          <line x1="280" y1="180" x2="360" y2="230" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" />
          <line x1="460" y1="180" x2="520" y2="230" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" />
          <line x1="640" y1="180" x2="680" y2="230" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4,2" />
          
          {/* Animated data flow */}
          <circle r="3" fill="#3B82F6">
            <animateMotion path="M100,150 L280,150" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle r="3" fill="#3B82F6">
            <animateMotion path="M280,150 L460,150" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle r="3" fill="#3B82F6">
            <animateMotion path="M460,150 L640,150" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <circle r="3" fill="#3B82F6">
            <animateMotion path="M640,150 L820,150" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

// Simulated Metrics Dashboard
const MetricsDashboard = ({ data }: { data: any }) => {
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
                />
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
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs">Peak Hour</span>
              <span className="text-sm font-medium">124 emails</span>
            </div>
            <div className="w-full bg-indigo-200 h-1.5 rounded-full">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '92%' }}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs">Capacity</span>
              <span className="text-sm font-medium">82%</span>
            </div>
            <div className="w-full bg-indigo-200 h-1.5 rounded-full">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
          <div className="text-xs text-purple-500 font-medium mb-2">Pipeline Generated</div>
          <div className="flex items-center justify-center h-[80px]">
            <div className="text-center">
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
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '43.8%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span>LinkedIn</span>
              <span className="font-medium">27.4%</span>
            </div>
            <div className="w-full bg-blue-200 h-1.5 rounded-full">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '27.4%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span>Phone</span>
              <span className="font-medium">16.5%</span>
            </div>
            <div className="w-full bg-blue-200 h-1.5 rounded-full">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '16.5%' }}></div>
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