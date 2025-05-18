import { useState } from 'react';
import { agentPerformanceData } from '../../data/mockAnalyticsData';

const AgentPerformance = () => {
  const [sortBy, setSortBy] = useState<'usage' | 'success' | 'response' | 'roi'>('usage');
  
  const sortedAgents = [...agentPerformanceData].sort((a, b) => {
    if (sortBy === 'usage') return b.usageCount - a.usageCount;
    if (sortBy === 'success') return b.successRate - a.successRate;
    if (sortBy === 'response') return a.avgResponseTime - b.avgResponseTime;
    if (sortBy === 'roi') return b.roi - a.roi;
    return 0;
  });
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3 border-b border-gray-200">Agent</th>
              <th 
                className={`px-6 py-3 border-b border-gray-200 cursor-pointer ${sortBy === 'usage' ? 'text-blue-600 font-semibold' : ''}`}
                onClick={() => setSortBy('usage')}
              >
                Usage
                {sortBy === 'usage' && <span className="ml-1 text-blue-600">↓</span>}
              </th>
              <th 
                className={`px-6 py-3 border-b border-gray-200 cursor-pointer ${sortBy === 'success' ? 'text-green-600 font-semibold' : ''}`}
                onClick={() => setSortBy('success')}
              >
                Success Rate
                {sortBy === 'success' && <span className="ml-1 text-green-600">↓</span>}
              </th>
              <th 
                className={`px-6 py-3 border-b border-gray-200 cursor-pointer ${sortBy === 'response' ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setSortBy('response')}
              >
                Avg Response
                {sortBy === 'response' && <span className="ml-1 text-amber-600">↓</span>}
              </th>
              <th 
                className={`px-6 py-3 border-b border-gray-200 cursor-pointer ${sortBy === 'roi' ? 'text-pink-600 font-semibold' : ''}`}
                onClick={() => setSortBy('roi')}
              >
                ROI
                {sortBy === 'roi' && <span className="ml-1 text-pink-600">↓</span>}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAgents.map((agent) => (
              <tr key={agent.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-2 rounded-lg mr-3">
                      {agent.icon && <agent.icon className="h-5 w-5 text-blue-600" />}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{agent.name}</div>
                      <div className="text-sm text-gray-500">{agent.department}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <div className="font-medium">{agent.usageCount.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">runs</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`rounded-full h-2 ${
                        agent.successRate >= 95 ? 'bg-green-500' :
                        agent.successRate >= 85 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${agent.successRate}%` }}
                    ></div>
                  </div>
                  <div className="text-xs mt-1 flex justify-between">
                    <span>{agent.successRate}%</span>
                    <span className={`
                      ${agent.successRate >= 95 ? 'text-green-600' :
                        agent.successRate >= 85 ? 'text-amber-600' : 'text-red-600'}
                    `}>
                      {agent.successRate >= 95 ? '😀' :
                        agent.successRate >= 85 ? '🙂' : '😐'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <div className="font-medium">{agent.avgResponseTime}s</div>
                  <div className="text-xs text-gray-500">
                    <span className={agent.responseTrend < 0 ? 'text-green-600' : 'text-red-600'}>
                      {agent.responseTrend < 0 ? '↓' : '↑'} {Math.abs(agent.responseTrend)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <div className="font-medium text-gray-700">${agent.roi.toLocaleString()}</div>
                  <div className="text-xs">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                      ${agent.roi > 50000 ? 'bg-green-100 text-green-800' : 
                        agent.roi > 30000 ? 'bg-amber-100 text-amber-800' : 
                        'bg-gray-100 text-gray-800'}
                    `}>
                      {agent.roi > 50000 ? 'High ROI' : agent.roi > 30000 ? 'Good ROI' : 'Moderate ROI'}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentPerformance;