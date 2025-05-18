import { X, Shield, Network, TrendingUp, BrainCircuit } from 'lucide-react';
import { useState } from 'react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal = ({ onClose }: WelcomeModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Welcome to SDR SuperAgent",
      description: "This platform demonstrates how AI agents can revolutionize sales development through automation, intelligence, and real-time insights.",
      icon: <BrainCircuit className="w-12 h-12 text-black" />,
    },
    {
      title: "Discover Specialized SDR Agents",
      description: "Explore purpose-built AI agents for ICP definition, lead enrichment, email assistance, and more - each delivering immediate ROI.",
      icon: <Shield className="w-12 h-12 text-black" />,
    },
    {
      title: "Visualize Organization Intelligence",
      description: "See how all your sales agents connect and share data through our Organization General Intelligence (OGI) view.",
      icon: <Network className="w-12 h-12 text-black" />,
    },
    {
      title: "Measure Impact & Performance",
      description: "Track usage trends, ROI metrics, and performance analytics across your entire AI agent ecosystem.",
      icon: <TrendingUp className="w-12 h-12 text-black" />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Getting Started</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="py-4">
            <div className="flex justify-center mb-6">
              {steps[currentStep].icon}
            </div>
            <h3 className="text-lg font-medium text-center mb-2">{steps[currentStep].title}</h3>
            <p className="text-gray-600 text-center">{steps[currentStep].description}</p>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-1">
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 w-6 rounded-full ${currentStep === index ? 'bg-black' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;