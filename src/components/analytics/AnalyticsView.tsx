import { Mail, Users, BarChart, Calendar, Download, FileText, Filter } from 'lucide-react';
import { useState } from 'react';
import MetricCard from '../shared/MetricCard';
import UsageTrends from './UsageTrends';
import ROIDashboard from './ROIDashboard';
import AgentPerformance from './AgentPerformance';
import DiscoveryInsights from './DiscoveryInsights';
import ExportReportModal from './ExportReportModal';

const AnalyticsView = () => {
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Performance Insights</h2>
          <p className="text-sm md:text-base text-gray-600">
            Track agent usage, ROI, and performance metrics across your sales development operations
          </p>
        </div>
        
        <button 
          onClick={() => setShowExportModal(true)}
          className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <MetricCard
          title="Total Emails Sent"
          value="14,328"
          icon={<Mail className="h-5 w-5" />}
          trend={{ value: 24, isPositive: true }}
          description="Last 30 days"
          color="#3B82F6" // Blue
        />
        <MetricCard
          title="Pipeline Generated"
          value="$283,450"
          icon={<Users className="h-5 w-5" />}
          trend={{ value: 16, isPositive: true }}
          description="Based on meetings booked"
          color="#10B981" // Green
        />
        <MetricCard
          title="Reply Rate"
          value="28.4%"
          icon={<BarChart className="h-5 w-5" />}
          trend={{ value: 3.2, isPositive: true }}
          description="Across all outreach"
          color="#F59E0B" // Amber
        />
        <MetricCard
          title="Meetings Booked"
          value="467"
          icon={<Calendar className="h-5 w-5" />}
          trend={{ value: 5, isPositive: true }}
          description="From AI-assisted outreach"
          color="#EC4899" // Pink
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Outreach Trends</h3>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <FileText className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 overflow-x-auto">
            <UsageTrends />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-transparent flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Pipeline Impact</h3>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <FileText className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 overflow-x-auto">
            <ROIDashboard />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-transparent flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Agent Performance</h3>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <Filter className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 overflow-x-auto">
            <AgentPerformance />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-pink-50 to-transparent flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Optimization Insights</h3>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <FileText className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <DiscoveryInsights />
          </div>
        </div>
      </div>
      
      {showExportModal && 
        <ExportReportModal
          onClose={() => setShowExportModal(false)}
        />
      }
    </div>
  );
};

export default AnalyticsView;