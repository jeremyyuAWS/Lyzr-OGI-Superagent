import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import TabNavigation from './components/layout/TabNavigation';
import AgentGallery from './components/agentGallery/AgentGallery';
import OGIView from './components/ogi/OGIView';
import AnalyticsView from './components/analytics/AnalyticsView';
import ResponsibleAIView from './components/responsibleAI/ResponsibleAIView';
import WelcomeModal from './components/modals/WelcomeModal';

function App() {
  const [activeTab, setActiveTab] = useState<'agents' | 'ogi' | 'analytics' | 'responsible-ai'>('agents');
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  useEffect(() => {
    // Check if user has seen the welcome modal before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcomeModal(false);
    }
  }, []);

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-6">
          {activeTab === 'agents' && <AgentGallery />}
          {activeTab === 'ogi' && <OGIView />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'responsible-ai' && <ResponsibleAIView />}
        </div>
      </main>

      {showWelcomeModal && <WelcomeModal onClose={closeWelcomeModal} />}
    </div>
  );
}

export default App;