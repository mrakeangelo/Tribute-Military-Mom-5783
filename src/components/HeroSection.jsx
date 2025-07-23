import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiAnchor, FiChevronDown } = FiIcons;

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-naval-indigo via-naval-indigo/90 to-naval-indigo/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <SafeIcon icon={FiAnchor} className="text-4xl text-heart-gold mr-4 float-animation" />
            <SafeIcon icon={FiHeart} className="text-4xl text-soft-blush float-animation" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-playfair text-bone-white mb-6 leading-tight">
            Motherhood
            <span className="block text-heart-gold">in Uniform</span>
          </h1>
          
          <p className="hero-subtitle text-xl sm:text-2xl font-lora text-bone-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            "She raised her children with one hand — and saluted with the other."
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#timeline"
              className="inline-flex items-center px-8 py-4 bg-heart-gold text-naval-indigo font-medium rounded-full hover:bg-heart-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Honor Her Journey
              <SafeIcon icon={FiChevronDown} className="ml-2 text-lg" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <SafeIcon icon={FiHeart} className="text-6xl text-soft-blush" />
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <SafeIcon icon={FiAnchor} className="text-5xl text-heart-gold" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <SafeIcon icon={FiChevronDown} className="text-2xl text-bone-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;