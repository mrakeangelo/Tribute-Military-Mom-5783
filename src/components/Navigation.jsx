import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiHeart, FiAnchor } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Her Story', href: '#hero' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Letters', href: '#letters' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reflections', href: '#reflections' },
    { name: 'Legacy', href: '#legacy' },
    { name: 'Messages', href: '#messages' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-bone-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <SafeIcon icon={FiAnchor} className="text-2xl text-naval-indigo mr-2" />
            <span className="font-playfair text-xl text-naval-indigo">Motherhood in Uniform</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-naval-indigo hover:text-heart-gold px-3 py-2 text-sm font-medium font-lora transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-naval-indigo hover:text-heart-gold p-2"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-bone-white border-t border-uniform-gray"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-naval-indigo hover:text-heart-gold block px-3 py-2 text-base font-medium font-lora transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;