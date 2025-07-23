import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import DualTimeline from '../components/DualTimeline';
import LettersSection from '../components/LettersSection';
import PhotoGallery from '../components/PhotoGallery';
import FamilyReflections from '../components/FamilyReflections';
import CareerLegacy from '../components/CareerLegacy';
import MessageWall from '../components/MessageWall';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-naval-indigo flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-heart-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-bone-white font-lora text-lg">Loading her story...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bone-white">
      <Navigation />
      <HeroSection />
      <DualTimeline />
      <LettersSection />
      <PhotoGallery />
      <FamilyReflections />
      <CareerLegacy />
      <MessageWall />
      <Footer />
    </div>
  );
};

export default HomePage;