import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAnchor, FiHeart, FiStar, FiHome, FiGlobe, FiVideo } = FiIcons;

const DualTimeline = () => {
  const timelineData = [
    {
      year: '2010',
      navy: {
        title: 'Boot Camp Graduation',
        description: 'Completed Navy boot camp at Great Lakes',
        icon: FiStar,
      },
      motherhood: {
        title: 'First Pregnancy',
        description: 'Discovered expecting first child during training',
        icon: FiHeart,
      },
    },
    {
      year: '2011',
      navy: {
        title: 'First Deployment',
        description: 'Deployed to Mediterranean Sea',
        icon: FiGlobe,
      },
      motherhood: {
        title: 'Video Call Lullabies',
        description: 'Sang goodnight songs over video calls',
        icon: FiVideo,
      },
    },
    {
      year: '2013',
      navy: {
        title: 'Promotion to E-5',
        description: 'Advanced to Petty Officer Second Class',
        icon: FiStar,
      },
      motherhood: {
        title: 'Second Child Born',
        description: 'Welcomed daughter while on shore duty',
        icon: FiHeart,
      },
    },
    {
      year: '2016',
      navy: {
        title: 'Leadership Role',
        description: 'Assigned as Division Leading Petty Officer',
        icon: FiAnchor,
      },
      motherhood: {
        title: 'Family Reunions',
        description: 'Cherished homecoming hugs after deployments',
        icon: FiHome,
      },
    },
    {
      year: '2020',
      navy: {
        title: 'Retirement Ceremony',
        description: 'Honorably retired after 20 years of service',
        icon: FiStar,
      },
      motherhood: {
        title: 'Full-Time Mom',
        description: 'Finally home for every bedtime story',
        icon: FiHeart,
      },
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-bone-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair text-naval-indigo mb-4">
            The Ranks & The Roles
          </h2>
          <p className="text-xl font-lora text-uniform-gray max-w-3xl mx-auto">
            A dual journey of service to country and devotion to family
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="timeline-connector hidden lg:block"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Year marker */}
                <div className="flex justify-center mb-8">
                  <div className="bg-heart-gold text-naval-indigo px-6 py-2 rounded-full font-bold text-lg z-10 relative">
                    {item.year}
                  </div>
                </div>

                {/* Timeline content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  {/* Navy side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-naval-indigo text-bone-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center mb-4">
                        <SafeIcon icon={item.navy.icon} className="text-2xl text-heart-gold mr-3" />
                        <h3 className="text-xl font-playfair">{item.navy.title}</h3>
                      </div>
                      <p className="font-lora text-bone-white/90">{item.navy.description}</p>
                      <div className="mt-4 flex items-center">
                        <SafeIcon icon={FiAnchor} className="text-heart-gold mr-2" />
                        <span className="text-sm font-medium text-heart-gold">Navy Service</span>
                      </div>
                    </div>
                  </div>

                  {/* Motherhood side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-soft-blush text-naval-indigo p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center mb-4">
                        <SafeIcon icon={item.motherhood.icon} className="text-2xl text-heart-gold mr-3" />
                        <h3 className="text-xl font-playfair">{item.motherhood.title}</h3>
                      </div>
                      <p className="font-lora text-naval-indigo/90">{item.motherhood.description}</p>
                      <div className="mt-4 flex items-center">
                        <SafeIcon icon={FiHeart} className="text-heart-gold mr-2" />
                        <span className="text-sm font-medium text-heart-gold">Motherhood</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualTimeline;