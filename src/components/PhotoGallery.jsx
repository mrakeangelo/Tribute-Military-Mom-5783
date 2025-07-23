import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCamera, FiHeart, FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      title: 'First Day in Uniform',
      description: 'Proudly wearing the Navy uniform for the first time, with her newborn in her arms.',
      category: 'uniform',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      title: 'Video Call Bedtime',
      description: 'Reading bedtime stories over video call during deployment.',
      category: 'deployment',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Promotion Ceremony',
      description: 'Her children pinning on her new rank during promotion ceremony.',
      category: 'ceremony',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Homecoming Hug',
      description: 'The moment she returned home after a 9-month deployment.',
      category: 'reunion',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80',
      title: 'Family Portrait',
      description: 'A rare moment when the whole family was together.',
      category: 'family',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'Retirement Day',
      description: 'Finally home for good after 20 years of faithful service.',
      category: 'retirement',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: FiCamera },
    { id: 'uniform', name: 'In Uniform', icon: FiHeart },
    { id: 'deployment', name: 'Deployment', icon: FiCamera },
    { id: 'ceremony', name: 'Ceremonies', icon: FiHeart },
    { id: 'reunion', name: 'Reunions', icon: FiCamera },
    { id: 'family', name: 'Family', icon: FiHeart },
    { id: 'retirement', name: 'Retirement', icon: FiCamera },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openPhoto = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-bone-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair text-naval-indigo mb-4">
            Moments That Made Her
          </h2>
          <p className="text-xl font-lora text-uniform-gray max-w-3xl mx-auto">
            A visual journey through the milestones of service and motherhood
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-naval-indigo text-bone-white shadow-lg'
                  : 'bg-uniform-gray/20 text-naval-indigo hover:bg-uniform-gray/30'
              }`}
            >
              <SafeIcon icon={category.icon} className="mr-2" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gallery-item cursor-pointer group"
              onClick={() => openPhoto(photo, index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-naval-indigo/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-bone-white">
                    <SafeIcon icon={FiCamera} className="text-3xl mb-2 mx-auto" />
                    <h3 className="text-lg font-playfair mb-1">{photo.title}</h3>
                    <p className="text-sm font-lora opacity-90">{photo.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closePhoto}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={closePhoto}
                className="absolute top-4 right-4 text-bone-white hover:text-heart-gold transition-colors z-10"
              >
                <SafeIcon icon={FiX} className="text-2xl" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-bone-white hover:text-heart-gold transition-colors"
              >
                <SafeIcon icon={FiChevronLeft} className="text-3xl" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-bone-white hover:text-heart-gold transition-colors"
              >
                <SafeIcon icon={FiChevronRight} className="text-3xl" />
              </button>

              {/* Photo */}
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Caption */}
              <div className="bg-bone-white rounded-b-lg p-6">
                <h3 className="text-2xl font-playfair text-naval-indigo mb-2">{selectedPhoto.title}</h3>
                <p className="text-uniform-gray font-lora">{selectedPhoto.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;