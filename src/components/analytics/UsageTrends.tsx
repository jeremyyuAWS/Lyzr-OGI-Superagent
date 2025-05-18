import { useState } from 'react';
import { usageTrendsData } from '../../data/mockAnalyticsData';

const UsageTrends = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  
  // This would typically be implemented with a charting library like Chart.js or Recharts
  // For the demo, we're implementing a simplified visualization
  
  const data = usageTrendsData[timeRange];
  const maxValue = Math.max(...data.values);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          Agent usage trends
        </div>
        <div className="flex space-x-1 text-xs">
          <button 
            onClick={() => setTimeRange('7d')}
            className={`px-3 py-1 rounded ${
              timeRange === '7d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            7D
          </button>
          <button 
            onClick={() => setTimeRange('30d')}
            className={`px-3 py-1 rounded ${
              timeRange === '30d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            30D
          </button>
          <button 
            onClick={() => setTimeRange('90d')}
            className={`px-3 py-1 rounded ${
              timeRange === '90d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            90D
          </button>
        </div>
      </div>
      
      <div className="h-64">
        <svg width="100%" height="100%" viewBox="0 0 800 300">
          {/* X-axis */}
          <line x1="40" y1="260" x2="760" y2="260" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* Y-axis */}
          <line x1="40" y1="40" x2="40" y2="260" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* Y-axis labels */}
          <text x="30" y="40" textAnchor="end" fontSize="10" fill="#6B7280">
            {maxValue}
          </text>
          <text x="30" y="150" textAnchor="end" fontSize="10" fill="#6B7280">
            {Math.floor(maxValue / 2)}
          </text>
          <text x="30" y="260" textAnchor="end" fontSize="10" fill="#6B7280">
            0
          </text>
          
          {/* X-axis labels */}
          {data.labels.map((label, index) => {
            const x = 40 + (720 / (data.labels.length - 1)) * index;
            return (
              <text
                key={index}
                x={x}
                y="275"
                textAnchor="middle"
                fontSize="10"
                fill="#6B7280"
              >
                {label}
              </text>
            );
          })}
          
          {/* Line chart */}
          <g>
            <path
              d={`M ${data.values.map((val, i) => {
                const x = 40 + (720 / (data.values.length - 1)) * i;
                const y = 260 - (val / maxValue) * 220;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ')}`}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            
            {/* Area chart fill */}
            <path
              d={`
                M 40 260
                ${data.values.map((val, i) => {
                  const x = 40 + (720 / (data.values.length - 1)) * i;
                  const y = 260 - (val / maxValue) * 220;
                  return `L ${x} ${y}`;
                }).join(' ')}
                L 760 260
                Z
              `}
              fill="url(#usageGradient)"
              opacity="0.2"
            />
            
            <defs>
              <linearGradient id="usageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Data points */}
            {data.values.map((val, i) => {
              const x = 40 + (720 / (data.values.length - 1)) * i;
              const y = 260 - (val / maxValue) * 220;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#fff"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
              );
            })}
          </g>
        </svg>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mt-4">
        <div className="bg-blue-50 p-3 rounded">
          <div className="text-xs text-gray-500">Email Outreach</div>
          <div className="text-lg font-medium">4,218</div>
          <div className="text-xs text-blue-600">+12%</div>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <div className="text-xs text-gray-500">LinkedIn</div>
          <div className="text-lg font-medium">3,952</div>
          <div className="text-xs text-green-600">+8%</div>
        </div>
        <div className="bg-amber-50 p-3 rounded">
          <div className="text-xs text-gray-500">Research</div>
          <div className="text-lg font-medium">3,105</div>
          <div className="text-xs text-amber-600">+16%</div>
        </div>
        <div className="bg-pink-50 p-3 rounded">
          <div className="text-xs text-gray-500">Qualification</div>
          <div className="text-lg font-medium">3,053</div>
          <div className="text-xs text-pink-600">+24%</div>
        </div>
      </div>
    </div>
  );
};

export default UsageTrends;