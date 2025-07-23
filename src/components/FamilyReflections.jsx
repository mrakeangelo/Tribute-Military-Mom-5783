import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiQuote, FiChevronLeft, FiChevronRight } = FiIcons;

const FamilyReflections = () => {
  const [currentReflection, setCurrentReflection] = useState(0);

  const reflections = [
    {
      id: 1,
      quote: "She never missed a hug, even from across the world.",
      author: "Emma, her daughter",
      role: "Age 12",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      id: 2,
      quote: "My mom wore boots and braids. She taught me both courage and care.",
      author: "Michael, her son",
      role: "Age 15",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    },
    {
      id: 3,
      quote: "She didn't complain. She conquered.",
      author: "David, her husband",
      role: "Military Spouse",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      quote: "She showed me that being strong doesn't mean you can't cry. It means you cry and keep going.",
      author: "Sarah, her sister",
      role: "Family",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      quote: "Every bedtime story over video call was a masterpiece of love.",
      author: "Grandma Rose",
      role: "Mother-in-law",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80",
    },
    {
      id: 6,
      quote: "She carried our country and her children at the same time.",
      author: "Chief Martinez",
      role: "Navy Colleague",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ];

  const nextReflection = () => {
    setCurrentReflection((prev) => (prev + 1) % reflections.length);
  };

  const prevReflection = () => {
    setCurrentReflection((prev) => (prev - 1 + reflections.length) % reflections.length);
  };

  // Auto-advance reflections
  useEffect(() => {
    const interval = setInterval(nextReflection, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reflections" className="py-20 bg-gradient-to-br from-naval-indigo to-naval-indigo/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair text-bone-white mb-4">
            Family Reflections
          </h2>
          <p className="text-xl font-lora text-bone-white/80 max-w-3xl mx-auto">
            Words from those who knew her best, who witnessed her strength and grace
          </p>
        </motion.div>

        <div className="relative">
          {/* Main reflection display */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-naval-indigo/80 to-transparent z-10"></div>
            
            <div
              className="w-full h-96 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${reflections[currentReflection].image})` }}
            ></div>

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="w-full px-8 sm:px-12 lg:px-16">
                <motion.div
                  key={currentReflection}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <SafeIcon icon={FiQuote} className="text-4xl text-heart-gold mb-6" />
                  
                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-playfair text-bone-white mb-8 leading-relaxed">
                    "{reflections[currentReflection].quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-heart-gold rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={FiHeart} className="text-naval-indigo text-xl" />
                    </div>
                    <div>
                      <p className="text-bone-white font-lora text-lg font-medium">
                        {reflections[currentReflection].author}
                      </p>
                      <p className="text-bone-white/70 font-lora">
                        {reflections[currentReflection].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
            <button
              onClick={prevReflection}
              className="bg-bone-white/20 hover:bg-bone-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110"
            >
              <SafeIcon icon={FiChevronLeft} className="text-bone-white text-xl" />
            </button>
            
            <button
              onClick={nextReflection}
              className="bg-bone-white/20 hover:bg-bone-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110"
            >
              <SafeIcon icon={FiChevronRight} className="text-bone-white text-xl" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reflections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReflection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReflection
                    ? 'bg-heart-gold scale-125'
                    : 'bg-bone-white/50 hover:bg-bone-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional reflections grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reflections.slice(0, 3).map((reflection, index) => (
            <motion.div
              key={reflection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-bone-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-bone-white/20 transition-all duration-300"
            >
              <SafeIcon icon={FiQuote} className="text-2xl text-heart-gold mb-4" />
              <blockquote className="text-bone-white font-lora text-lg mb-4 leading-relaxed">
                "{reflection.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-heart-gold rounded-full flex items-center justify-center mr-3">
                  <SafeIcon icon={FiHeart} className="text-naval-indigo text-sm" />
                </div>
                <div>
                  <p className="text-bone-white font-medium">{reflection.author}</p>
                  <p className="text-bone-white/70 text-sm">{reflection.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyReflections;