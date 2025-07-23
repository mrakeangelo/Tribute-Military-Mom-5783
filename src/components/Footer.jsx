import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiAnchor, FiQuote, FiMail, FiExternalLink } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "She carried our country and her children at the same time.",
    "She deployed — and returned stronger, softer, and still our Mom.",
    "In uniform or in pajamas, she was always our hero.",
    "She taught us that service comes in many forms, and love is the greatest of all.",
    "Her legacy lives on in every life she touched, every sailor she mentored, and every child she raised.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <footer className="bg-naval-indigo text-bone-white">
      {/* Quote Carousel */}
      <div className="py-16 bg-gradient-to-r from-naval-indigo to-naval-indigo/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SafeIcon icon={FiQuote} className="text-4xl text-heart-gold mx-auto mb-8" />
          
          <motion.blockquote
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-playfair text-bone-white leading-relaxed"
          >
            "{quotes[currentQuote]}"
          </motion.blockquote>

          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? 'bg-heart-gold w-8'
                    : 'bg-bone-white/50 hover:bg-bone-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-t border-bone-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <SafeIcon icon={FiAnchor} className="text-2xl text-heart-gold mr-2" />
                <h3 className="text-xl font-playfair">Motherhood in Uniform</h3>
              </div>
              <p className="text-bone-white/80 font-lora leading-relaxed">
                Honoring the journey of a military mom who served her country with the same dedication she showed her family.
              </p>
              <div className="flex items-center justify-center md:justify-start mt-4 space-x-4">
                <SafeIcon icon={FiHeart} className="text-heart-gold" />
                <span className="text-bone-white/60 text-sm">Made with love and respect</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-playfair mb-4">Her Journey</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Her Story', href: '#hero' },
                  { name: 'Timeline', href: '#timeline' },
                  { name: 'Letters', href: '#letters' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'Reflections', href: '#reflections' },
                  { name: 'Legacy', href: '#legacy' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-bone-white/80 hover:text-heart-gold transition-colors font-lora"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Recognition */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-playfair mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href="mailto:family@motherhoodinuniform.com"
                  className="flex items-center justify-center md:justify-end text-bone-white/80 hover:text-heart-gold transition-colors"
                >
                  <SafeIcon icon={FiMail} className="mr-2" />
                  <span className="font-lora">Contact Family</span>
                </a>
                <a
                  href="/admin"
                  className="flex items-center justify-center md:justify-end text-bone-white/80 hover:text-heart-gold transition-colors"
                >
                  <SafeIcon icon={FiExternalLink} className="mr-2" />
                  <span className="font-lora">Admin Portal</span>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-bone-white/20">
                <p className="text-bone-white/60 text-sm font-lora">
                  "Thank you for your service"
                </p>
                <p className="text-bone-white/40 text-xs mt-2">
                  U.S. Navy • 2010-2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-bone-white/20 bg-naval-indigo/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <SafeIcon icon={FiHeart} className="text-heart-gold mr-2" />
              <span className="text-bone-white/60 text-sm font-lora">
                © 2024 Motherhood in Uniform. Created with love and honor.
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-bone-white/40 text-xs">
                Powered by Mrake Agency
              </span>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiAnchor} className="text-heart-gold text-sm" />
                <SafeIcon icon={FiHeart} className="text-soft-blush text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;