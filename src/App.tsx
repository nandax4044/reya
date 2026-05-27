import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowToPlay from './components/HowToPlay';
import About from './components/About';
import CommunitySection from './components/CommunitySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SnowParticles from './components/SnowParticles';
import PlayModal from './components/PlayModal';
import ReyaAiBot from './components/ReyaAiBot';

import { ContentProvider } from './context/ContentContext';
import bgImage from './assets/images/mystical_castle_background_1779293455486.png';

function AppContent() {
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [playersOnline, setPlayersOnline] = useState(11);

  // Dynamic players counter
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayersOnline((current) => {
        const fluctuation = Math.random() > 0.5 ? 1 : -1;
        const next = current + fluctuation;
        if (next < 9) return 10;
        if (next > 16) return 14;
        return next;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const openPlayModal = () => setIsPlayModalOpen(true);
  const closePlayModal = () => setIsPlayModalOpen(false);

  return (
    <div 
      className="min-h-screen bg-[#030712] bg-cover bg-fixed bg-center text-slate-150 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/75 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/30 via-transparent to-[#030712]/80 pointer-events-none z-0" />

      {/* Snowflakes Particle Background */}
      <SnowParticles />

      {/* Application wrap */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar Header */}
        <Header 
          onPlayClick={openPlayModal} 
          playersOnlineCount={playersOnline} 
        />

        {/* Dynamic Main Routing Switches */}
        <main className="flex-grow">
          <Hero 
            onStartPlayingClick={openPlayModal} 
            playersOnlineCount={playersOnline} 
          />
          <HowToPlay />
          <About />
          <CommunitySection />
          <FAQSection />
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>

      {/* Play Access guides modal */}
      <AnimatePresence>
        {isPlayModalOpen && (
          <PlayModal 
            isOpen={isPlayModalOpen} 
            onClose={closePlayModal} 
          />
        )}
      </AnimatePresence>

      {/* Smart chatbot asistent */}
      <ReyaAiBot />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
