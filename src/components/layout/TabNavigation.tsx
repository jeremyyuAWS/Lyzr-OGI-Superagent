import { Users, Network, BarChart3, Shield } from 'lucide-react';

interface TabNavigationProps {
  activeTab: 'agents' | 'ogi' | 'analytics' | 'responsible-ai';
  setActiveTab: (tab: 'agents' | 'ogi' | 'analytics' | 'responsible-ai') => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  const tabs = [
    { id: 'agents', label: 'Agent Gallery', icon: <Users className="w-5 h-5" /> },
    { id: 'ogi', label: 'OGI View', icon: <Network className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics & Insights', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'responsible-ai', label: 'Responsible AI', icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex flex-wrap -mb-px space-x-4 md:space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'agents' | 'ogi' | 'analytics' | 'responsible-ai')}
            className={`flex items-center py-3 md:py-4 px-2 md:px-1 whitespace-nowrap border-b-2 font-medium text-xs md:text-sm transition-colors ${
              activeTab === tab.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <span className="mr-1 md:mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;