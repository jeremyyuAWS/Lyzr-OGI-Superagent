import { roiData } from '../../data/mockAnalyticsData';

const ROIDashboard = () => {
  // This would typically be implemented with a charting library like Chart.js or Recharts
  // For the demo, we're implementing a simplified visualization
  
  const totalRoi = roiData.reduce((sum, item) => sum + item.value, 0);
  
  // Color array for the bar chart
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#6366F1'];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          ROI breakdown by source
        </div>
        <div className="text-xl font-semibold text-gray-700">
          ${totalRoi.toLocaleString()}
        </div>
      </div>
      
      <div className="h-64">
        <svg width="100%" height="100%" viewBox="0 0 800 300">
          {/* X-axis */}
          <line x1="40" y1="260" x2="760" y2="260" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* Y-axis */}
          <line x1="40" y1="40" x2="40" y2="260" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* Bars */}
          {roiData.map((item, index) => {
            const barWidth = 720 / roiData.length * 0.6;
            const barSpacing = 720 / roiData.length;
            const x = 40 + barSpacing * index + (barSpacing - barWidth) / 2;
            const maxValue = Math.max(...roiData.map(d => d.value));
            const barHeight = (item.value / maxValue) * 200;
            const y = 260 - barHeight;
            
            return (
              <g key={index}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={colors[index % colors.length]}
                  rx="4"
                  ry="4"
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="500"
                  fill="#111827"
                >
                  ${item.value.toLocaleString()}
                </text>
                <text
                  x={x + barWidth / 2}
                  y="280"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#6B7280"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">ROI Sources</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Time Savings</span>
            </div>
            <span className="text-sm font-medium text-gray-800">42%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Lead Quality</span>
            </div>
            <span className="text-sm font-medium text-gray-800">28%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Response Rate</span>
            </div>
            <span className="text-sm font-medium text-gray-800">15%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Meeting Conversion</span>
            </div>
            <span className="text-sm font-medium text-gray-800">10%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Pipeline Generated</span>
            </div>
            <span className="text-sm font-medium text-gray-800">5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIDashboard;