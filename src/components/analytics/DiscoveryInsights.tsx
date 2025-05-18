import { Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react';

const DiscoveryInsights = () => {
  const insights = [
    {
      id: 1,
      title: 'Top Underused Agents with High ROI Potential',
      description: 'These agents show high ROI per use but are currently underutilized in your organization.',
      icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
      color: 'blue',
      items: [
        { name: 'A/B Testing Analyst', potential: '$18,450 additional ROI possible' },
        { name: 'ICP Assistant', potential: '$12,300 additional ROI possible' },
        { name: 'Meeting Notes Agent', potential: '$8,900 additional ROI possible' }
      ]
    },
    {
      id: 2,
      title: 'Agents with Degraded Performance',
      description: 'These agents have shown performance degradation over the past 7 days and require attention.',
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      color: 'amber',
      items: [
        { name: 'LinkedIn Outreach Agent', issue: 'Success rate dropped from 94% to 85%' },
        { name: 'Email Assistant', issue: 'Response time increased by 2.1 seconds' }
      ]
    },
    {
      id: 3,
      title: 'Workflow Optimization Opportunities',
      description: 'Sales workflows that could benefit from additional agent integration.',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      color: 'green',
      items: [
        { name: 'Lead Qualification Process', potential: 'Estimated 68% reduction in processing time' },
        { name: 'Outreach Sequence Design', potential: 'Estimated 42% improvement in response rates' },
        { name: 'Account Research', potential: 'Estimated 56% time savings' }
      ]
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {insights.map((insight) => (
        <div key={insight.id} className={`bg-${insight.color}-50 rounded-lg p-4 md:p-5 border border-${insight.color}-100`}>
          <div className="flex items-start mb-4">
            <div className={`bg-white p-2 rounded-lg shadow-sm mr-3 border border-${insight.color}-100`}>
              {insight.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-800 text-sm md:text-base">{insight.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {insight.items.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="font-medium text-xs md:text-sm">{item.name}</div>
                <div className={`text-xs text-${insight.color}-600 mt-1 font-medium`}>
                  {item.potential || item.issue}
                </div>
              </div>
            ))}
          </div>
          
          <button className={`w-full mt-4 text-${insight.color}-700 hover:text-${insight.color}-800 text-sm font-medium transition-colors flex justify-center items-center`}>
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiscoveryInsights;