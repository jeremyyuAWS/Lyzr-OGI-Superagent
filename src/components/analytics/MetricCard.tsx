import { ReactNode } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
  color?: string; // Added color prop
}

const MetricCard = ({ title, value, icon, trend, description, color = '#3B82F6' }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 relative overflow-hidden hover:shadow-md transition-shadow">
      {/* Colored accent in the corner */}
      <div 
        className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10"
        style={{ backgroundColor: color }}
      ></div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 rounded-lg text-white" style={{ backgroundColor: color }}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-end space-x-2">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        
        {trend && (
          <div className={`flex items-center text-xs ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? (
              <ArrowUp className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDown className="w-3 h-3 mr-1" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-xs text-gray-500 mt-2">{description}</p>
      )}
    </div>
  );
};

export default MetricCard;