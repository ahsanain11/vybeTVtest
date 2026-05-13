/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Channels from './pages/Channels';
import SupportBot from './pages/SupportBot';
import Devices from './pages/Devices';
import TrialModal from './components/TrialModal';
import SupportLeadModal from './components/SupportLeadModal';
import React, { useEffect, useState } from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const openTrialModal = (packageName?: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const openSupportModal = () => {
    setIsSupportModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<PageWrapper><Home onOrderClick={openTrialModal} /></PageWrapper>} />
            <Route path="/pricing" element={<PageWrapper><Pricing onOrderClick={openTrialModal} /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/support-bot" element={<PageWrapper><SupportBot onContactClick={openSupportModal} /></PageWrapper>} />
            <Route path="/devices" element={<PageWrapper><Devices /></PageWrapper>} />
            <Route path="/channels" element={<PageWrapper><Channels onOrderClick={openTrialModal} /></PageWrapper>} />
            <Route path="/sports" element={<PageWrapper><Channels onOrderClick={openTrialModal} /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
      <TrialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPackage={selectedPackage}
      />

      <SupportLeadModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </div>
  );
}
