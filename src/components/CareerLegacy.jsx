import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAnchor, FiStar, FiGlobe, FiAward, FiMapPin, FiUsers, FiFileText, FiExternalLink } = FiIcons;

const CareerLegacy = () => {
  const dutyStations = [
    { name: 'Naval Station Great Lakes', location: 'Illinois', years: '2010-2011' },
    { name: 'USS Enterprise', location: 'Mediterranean Sea', years: '2011-2013' },
    { name: 'Naval Air Station Pensacola', location: 'Florida', years: '2013-2016' },
    { name: 'USS Abraham Lincoln', location: 'Pacific Ocean', years: '2016-2018' },
    { name: 'Naval Base San Diego', location: 'California', years: '2018-2020' },
  ];

  const commands = [
    { name: 'Aviation Boatswain\'s Mate', level: 'E-3 to E-5', years: '2010-2015' },
    { name: 'Leading Petty Officer', level: 'E-5', years: '2015-2018' },
    { name: 'Division Chief', level: 'E-6', years: '2018-2020' },
  ];

  const awards = [
    { name: 'Navy Achievement Medal', count: 2, icon: FiStar },
    { name: 'Good Conduct Medal', count: 4, icon: FiAward },
    { name: 'National Defense Service Medal', count: 1, icon: FiAnchor },
    { name: 'Global War on Terrorism Medal', count: 1, icon: FiGlobe },
    { name: 'Sea Service Deployment Ribbon', count: 3, icon: FiAnchor },
  ];

  const stats = [
    { label: 'Years of Service', value: '20', icon: FiStar },
    { label: 'Deployments', value: '5', icon: FiGlobe },
    { label: 'Countries Visited', value: '23', icon: FiMapPin },
    { label: 'Sailors Mentored', value: '100+', icon: FiUsers },
  ];

  return (
    <section id="legacy" className="py-20 bg-bone-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair text-naval-indigo mb-4">
            Career Legacy
          </h2>
          <p className="text-xl font-lora text-uniform-gray max-w-3xl mx-auto">
            Two decades of distinguished service, leadership, and dedication to the United States Navy
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-soft-blush/20 rounded-lg p-6 hover:bg-soft-blush/30 transition-colors duration-300"
            >
              <SafeIcon icon={stat.icon} className="text-3xl text-heart-gold mx-auto mb-4" />
              <div className="text-3xl font-playfair text-naval-indigo font-bold mb-2">{stat.value}</div>
              <div className="text-uniform-gray font-lora">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Duty Stations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-naval-indigo rounded-lg p-8 text-bone-white"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiMapPin} className="text-2xl text-heart-gold mr-3" />
              <h3 className="text-2xl font-playfair">Duty Stations</h3>
            </div>
            <div className="space-y-4">
              {dutyStations.map((station, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-4 border-heart-gold pl-4 py-2"
                >
                  <h4 className="font-playfair text-lg text-heart-gold">{station.name}</h4>
                  <p className="text-bone-white/80 font-lora">{station.location}</p>
                  <p className="text-bone-white/60 text-sm">{station.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commands & Roles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-soft-blush rounded-lg p-8"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiUsers} className="text-2xl text-heart-gold mr-3" />
              <h3 className="text-2xl font-playfair text-naval-indigo">Commands & Roles</h3>
            </div>
            <div className="space-y-4">
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-4 border-heart-gold pl-4 py-2"
                >
                  <h4 className="font-playfair text-lg text-naval-indigo">{command.name}</h4>
                  <p className="text-naval-indigo/80 font-lora">{command.level}</p>
                  <p className="text-naval-indigo/60 text-sm">{command.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-uniform-gray/10 rounded-lg p-8"
        >
          <div className="flex items-center mb-8">
            <SafeIcon icon={FiAward} className="text-3xl text-heart-gold mr-4" />
            <h3 className="text-3xl font-playfair text-naval-indigo">Awards & Recognition</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bone-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <SafeIcon icon={award.icon} className="text-2xl text-heart-gold mr-3" />
                  <div className="bg-naval-indigo text-bone-white text-sm px-3 py-1 rounded-full">
                    {award.count}x
                  </div>
                </div>
                <h4 className="font-playfair text-lg text-naval-indigo">{award.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-naval-indigo rounded-lg p-8 text-bone-white">
            <SafeIcon icon={FiFileText} className="text-4xl text-heart-gold mx-auto mb-6" />
            <h3 className="text-2xl font-playfair mb-4">Professional Portfolio</h3>
            <p className="text-bone-white/80 font-lora mb-6 max-w-2xl mx-auto">
              A comprehensive record of her military service, leadership experience, and professional achievements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-heart-gold text-naval-indigo rounded-lg font-medium hover:bg-heart-gold/90 transition-colors">
                <SafeIcon icon={FiFileText} className="mr-2" />
                View Service Record
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-heart-gold text-heart-gold rounded-lg font-medium hover:bg-heart-gold hover:text-naval-indigo transition-colors">
                <SafeIcon icon={FiExternalLink} className="mr-2" />
                LinkedIn Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerLegacy;