import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSend, FiUser, FiMail, FiMessageCircle, FiStar } = FiIcons;

const MessageWall = () => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    email: '',
    message: '',
    relationship: 'friend',
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      relationship: 'Navy Sister',
      message: 'Thank you for your service and sacrifice. You are an inspiration to all mothers and service members. Your strength and dedication shine through in everything you do.',
      date: '2 hours ago',
      reactions: { heart: 12, star: 8 },
    },
    {
      id: 2,
      name: 'Mike Thompson',
      relationship: 'Fellow Parent',
      message: 'Your story touches my heart. The way you balanced military service with motherhood is remarkable. Thank you for showing us what true strength looks like.',
      date: '5 hours ago',
      reactions: { heart: 15, star: 6 },
    },
    {
      id: 3,
      name: 'Chief Rodriguez',
      relationship: 'Former Colleague',
      message: 'It was an honor serving alongside you. Your leadership and dedication to both your sailors and your family was extraordinary. Fair winds and following seas.',
      date: '1 day ago',
      reactions: { heart: 20, star: 12 },
    },
    {
      id: 4,
      name: 'Jennifer Martinez',
      relationship: 'Military Spouse',
      message: 'You are a role model for all of us military spouses. Your journey shows that we can pursue our dreams while supporting our families. Thank you for paving the way.',
      date: '2 days ago',
      reactions: { heart: 18, star: 9 },
    },
    {
      id: 5,
      name: 'Robert Chen',
      relationship: 'Family Friend',
      message: 'Watching you serve our country while raising your beautiful children has been inspiring. Your dedication to both duties is a testament to your character.',
      date: '3 days ago',
      reactions: { heart: 14, star: 7 },
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        date: 'Just now',
        reactions: { heart: 0, star: 0 },
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', email: '', message: '', relationship: 'friend' });
    }
  };

  const handleReaction = (messageId, type) => {
    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { ...msg, reactions: { ...msg.reactions, [type]: msg.reactions[type] + 1 } }
        : msg
    ));
  };

  const relationshipOptions = [
    { value: 'friend', label: 'Friend' },
    { value: 'family', label: 'Family' },
    { value: 'colleague', label: 'Navy Colleague' },
    { value: 'spouse', label: 'Military Spouse' },
    { value: 'parent', label: 'Fellow Parent' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section id="messages" className="py-20 bg-soft-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair text-naval-indigo mb-4">
            Write Her a Blessing
          </h2>
          <p className="text-xl font-lora text-uniform-gray max-w-3xl mx-auto">
            Share your thoughts, memories, and words of appreciation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-bone-white rounded-lg shadow-lg p-8 sticky top-8">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiMessageCircle} className="text-2xl text-heart-gold mr-3" />
                <h3 className="text-2xl font-playfair text-naval-indigo">Leave a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-naval-indigo mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={newMessage.name}
                    onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                    className="w-full px-4 py-3 border border-uniform-gray rounded-lg focus:ring-2 focus:ring-heart-gold focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-naval-indigo mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={newMessage.email}
                    onChange={(e) => setNewMessage({ ...newMessage, email: e.target.value })}
                    className="w-full px-4 py-3 border border-uniform-gray rounded-lg focus:ring-2 focus:ring-heart-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-naval-indigo mb-2">
                    Relationship
                  </label>
                  <select
                    value={newMessage.relationship}
                    onChange={(e) => setNewMessage({ ...newMessage, relationship: e.target.value })}
                    className="w-full px-4 py-3 border border-uniform-gray rounded-lg focus:ring-2 focus:ring-heart-gold focus:border-transparent"
                  >
                    {relationshipOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-naval-indigo mb-2">
                    Your Message *
                  </label>
                  <textarea
                    value={newMessage.message}
                    onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-uniform-gray rounded-lg focus:ring-2 focus:ring-heart-gold focus:border-transparent resize-none"
                    placeholder="Share your thoughts, memories, or words of appreciation..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-naval-indigo text-bone-white py-3 rounded-lg font-medium hover:bg-naval-indigo/90 transition-colors duration-200 flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Messages Display */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-bone-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-heart-gold rounded-full flex items-center justify-center mr-4">
                        <SafeIcon icon={FiUser} className="text-naval-indigo text-xl" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-lg text-naval-indigo">{message.name}</h4>
                        <p className="text-uniform-gray text-sm capitalize">{message.relationship}</p>
                      </div>
                    </div>
                    <span className="text-uniform-gray text-sm">{message.date}</span>
                  </div>

                  <p className="text-naval-indigo/80 font-lora leading-relaxed mb-4">
                    {message.message}
                  </p>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleReaction(message.id, 'heart')}
                      className="flex items-center text-heart-gold hover:text-heart-gold/80 transition-colors"
                    >
                      <SafeIcon icon={FiHeart} className="mr-1" />
                      <span className="text-sm">{message.reactions.heart}</span>
                    </button>
                    <button
                      onClick={() => handleReaction(message.id, 'star')}
                      className="flex items-center text-heart-gold hover:text-heart-gold/80 transition-colors"
                    >
                      <SafeIcon icon={FiStar} className="mr-1" />
                      <span className="text-sm">{message.reactions.star}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="px-8 py-3 border-2 border-naval-indigo text-naval-indigo rounded-lg font-medium hover:bg-naval-indigo hover:text-bone-white transition-colors duration-200">
                Load More Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageWall;