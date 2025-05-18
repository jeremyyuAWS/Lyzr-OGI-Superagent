import { MessageSquareMore, BrainCircuit, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquareMore className="h-7 w-7 text-white" />
            <div>
              <h1 className="text-xl font-bold flex items-center">
                SDR <span className="text-white mx-1 font-light">Super</span>Agent
                <BrainCircuit className="h-5 w-5 ml-1 text-white" />
              </h1>
              <p className="text-xs text-gray-400">Powered by Lyzr AI Agents</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Documentation</span>
            <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Support</span>
            <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Connect to Lyzr
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-4 border-t border-gray-700 pt-4 animate-fade-in">
            <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white py-2 transition-colors">
              Documentation
            </a>
            <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white py-2 transition-colors">
              Support
            </a>
            <button className="w-full bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Connect to Lyzr
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;