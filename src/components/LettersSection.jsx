import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiHeart, FiPlay, FiPause, FiRotateCcw } = FiIcons;

const LettersSection = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const letters = [
    {
      id: 1,
      title: 'To My Little Sailor',
      date: 'December 2015',
      preview: 'My dearest Emma, Mommy is far away but close in heart...',
      content: `My dearest Emma,

Mommy is far away but close in heart. Every night when I look at the stars over the ocean, I think of you sleeping safely in your bed. I know Daddy is reading you stories, but I want you to know that even from thousands of miles away, I'm sending you all my love.

You are growing so fast, and I'm missing so much. But I want you to know that everything I do here is for you, for your future, for your freedom. One day you'll understand that Mommy's job is important, but you'll always be the most important thing in my life.

I can't wait to hold you again and hear about all your adventures. Keep being brave, my little one.

All my love,
Mommy`,
      type: 'letter',
      audioUrl: null,
    },
    {
      id: 2,
      title: 'Voice Message from Bahrain',
      date: 'March 2016',
      preview: 'Hi baby, Mommy loves you from Bahrain...',
      content: 'A tender voice message recorded during deployment, filled with love and longing.',
      type: 'audio',
      audioUrl: '#', // In real app, this would be an actual audio file
    },
    {
      id: 3,
      title: 'Birthday Wishes',
      date: 'July 2017',
      preview: 'Happy 6th birthday, my sweet angel...',
      content: `Happy 6th birthday, my sweet angel!

I wish I could be there to see you blow out your candles, but I'm celebrating with you in spirit. I've asked Daddy to give you the biggest hug from me, and I hope you love the present I sent.

Six years ago, you made me a mommy. You changed my world in the most beautiful way. Even though my job takes me far from home sometimes, you are always with me in my heart.

I'm so proud of the kind, smart, and brave little girl you're becoming. Keep being amazing, and know that Mommy will be home soon to celebrate with you properly.

Happy birthday, my love!
Mommy`,
      type: 'letter',
      audioUrl: null,
    },
  ];

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control actual audio playback
  };

  return (
    <section id="letters" className="py-20 bg-soft-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair text-naval-indigo mb-4">
            Letters From Her Heart
          </h2>
          <p className="text-xl font-lora text-uniform-gray max-w-3xl mx-auto">
            Messages of love sent across oceans, bridging the distance between duty and devotion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Letters List */}
          <div className="space-y-6">
            {letters.map((letter, index) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flip-card cursor-pointer ${selectedLetter?.id === letter.id ? 'ring-2 ring-heart-gold' : ''}`}
                onClick={() => handleLetterClick(letter)}
              >
                <div className="flip-card-inner h-48">
                  {/* Front of card */}
                  <div className="flip-card-front bg-bone-white rounded-lg shadow-lg p-6 border-l-4 border-heart-gold">
                    <div className="flex items-start justify-between mb-4">
                      <SafeIcon 
                        icon={letter.type === 'audio' ? FiPlay : FiMail} 
                        className="text-2xl text-heart-gold" 
                      />
                      <span className="text-sm text-uniform-gray font-lora">{letter.date}</span>
                    </div>
                    <h3 className="text-xl font-playfair text-naval-indigo mb-3">{letter.title}</h3>
                    <p className="text-uniform-gray font-lora text-sm leading-relaxed">{letter.preview}</p>
                    <div className="mt-4 flex items-center text-heart-gold">
                      <SafeIcon icon={FiHeart} className="mr-2" />
                      <span className="text-sm font-medium">Click to read</span>
                    </div>
                  </div>

                  {/* Back of card - preview */}
                  <div className="flip-card-back bg-naval-indigo rounded-lg shadow-lg p-6 text-bone-white">
                    <div className="flex items-center justify-between mb-4">
                      <SafeIcon icon={FiHeart} className="text-2xl text-heart-gold" />
                      <span className="text-sm text-bone-white/70">{letter.date}</span>
                    </div>
                    <h3 className="text-lg font-playfair text-heart-gold mb-3">{letter.title}</h3>
                    <p className="text-bone-white/90 font-lora text-sm leading-relaxed">
                      {letter.content.substring(0, 120)}...
                    </p>
                    <div className="mt-4 text-heart-gold">
                      <span className="text-sm font-medium">Click to read full message</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Letter Display */}
          <div className="lg:sticky lg:top-8">
            {selectedLetter ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-bone-white rounded-lg shadow-xl p-8 border-2 border-heart-gold/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <SafeIcon 
                      icon={selectedLetter.type === 'audio' ? FiPlay : FiMail} 
                      className="text-2xl text-heart-gold mr-3" 
                    />
                    <div>
                      <h3 className="text-2xl font-playfair text-naval-indigo">{selectedLetter.title}</h3>
                      <p className="text-uniform-gray font-lora">{selectedLetter.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedLetter(null)}
                    className="text-uniform-gray hover:text-naval-indigo transition-colors"
                  >
                    <SafeIcon icon={FiRotateCcw} className="text-xl" />
                  </button>
                </div>

                {selectedLetter.type === 'audio' ? (
                  <div className="text-center py-8">
                    <div className="bg-soft-blush rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                      <button
                        onClick={handlePlayAudio}
                        className="bg-heart-gold text-naval-indigo rounded-full w-16 h-16 flex items-center justify-center hover:bg-heart-gold/90 transition-colors"
                      >
                        <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="text-2xl" />
                      </button>
                    </div>
                    <p className="text-uniform-gray font-lora italic">
                      {selectedLetter.content}
                    </p>
                    <div className="mt-6 bg-uniform-gray/20 rounded-full h-2">
                      <div className="bg-heart-gold h-2 rounded-full w-1/3 transition-all duration-300"></div>
                    </div>
                  </div>
                ) : (
                  <div className="letter-reveal">
                    <div className="bg-soft-blush/30 rounded-lg p-6 mb-6">
                      <pre className="font-lora text-naval-indigo leading-relaxed whitespace-pre-wrap">
                        {selectedLetter.content}
                      </pre>
                    </div>
                    <div className="flex items-center justify-center text-heart-gold">
                      <SafeIcon icon={FiHeart} className="mr-2" />
                      <span className="font-medium">With all her love</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="bg-uniform-gray/10 rounded-lg p-8 text-center">
                <SafeIcon icon={FiMail} className="text-4xl text-uniform-gray mx-auto mb-4" />
                <p className="text-uniform-gray font-lora">
                  Select a letter to read her heartfelt messages
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LettersSection;