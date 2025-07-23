import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiUser, FiUpload, FiEdit3, FiSave, FiTrash2 } = FiIcons;

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('content');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication - in real app, use Supabase auth
    if (loginData.email === 'admin@motherhoodinuniform.com' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-naval-indigo flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bone-white rounded-lg shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="text-4xl text-naval-indigo mx-auto mb-4" />
            <h1 className="text-2xl font-playfair text-naval-indigo mb-2">Admin Access</h1>
            <p className="text-uniform-gray font-lora">Enter your credentials to manage the tribute</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-naval-indigo mb-2">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-3 border border-uniform-gray rounded-lg focus:ring-2 focus:ring-heart-gold focus:border-transparent"
                placeholder="admin@motherhoodinuniform.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-naval-indigo mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-3 border border-uniform-gray rounded-lg focus:ring-2 focus:ring-heart-gold focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-naval-indigo text-bone-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-uniform-gray">
              Demo credentials: admin@motherhoodinuniform.com / admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bone-white">
      <div className="bg-naval-indigo text-bone-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-playfair">Motherhood in Uniform - Admin</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-bone-white hover:text-heart-gold transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              {[
                { id: 'content', label: 'Content Management', icon: FiEdit3 },
                { id: 'media', label: 'Media Upload', icon: FiUpload },
                { id: 'messages', label: 'Message Wall', icon: FiUser },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-naval-indigo text-bone-white'
                        : 'text-naval-indigo hover:bg-soft-blush'
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'content' && <ContentManagement />}
          {activeTab === 'media' && <MediaUpload />}
          {activeTab === 'messages' && <MessageManagement />}
        </div>
      </div>
    </div>
  );
};

const ContentManagement = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-playfair text-naval-indigo">Content Management</h2>
    
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-lora text-naval-indigo mb-4">Timeline Events</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-uniform-gray rounded-lg">
          <div>
            <h4 className="font-medium">Boot Camp Graduation</h4>
            <p className="text-sm text-uniform-gray">March 2010</p>
          </div>
          <div className="flex space-x-2">
            <SafeIcon icon={FiEdit3} className="text-heart-gold cursor-pointer" />
            <SafeIcon icon={FiTrash2} className="text-red-500 cursor-pointer" />
          </div>
        </div>
        <button className="w-full border-2 border-dashed border-uniform-gray rounded-lg p-4 text-uniform-gray hover:border-heart-gold transition-colors">
          + Add New Timeline Event
        </button>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-lora text-naval-indigo mb-4">Letters & Reflections</h3>
      <textarea
        className="w-full h-40 p-4 border border-uniform-gray rounded-lg resize-none focus:ring-2 focus:ring-heart-gold"
        placeholder="Add a new letter or reflection..."
      />
      <button className="mt-4 bg-naval-indigo text-bone-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
        <SafeIcon icon={FiSave} className="inline mr-2" />
        Save Letter
      </button>
    </div>
  </div>
);

const MediaUpload = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-playfair text-naval-indigo">Media Upload</h2>
    
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-lora text-naval-indigo mb-4">Photo Gallery</h3>
      <div className="border-2 border-dashed border-uniform-gray rounded-lg p-12 text-center">
        <SafeIcon icon={FiUpload} className="text-4xl text-uniform-gray mx-auto mb-4" />
        <p className="text-uniform-gray mb-4">Drag and drop photos here, or click to select</p>
        <button className="bg-naval-indigo text-bone-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
          Select Photos
        </button>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-lora text-naval-indigo mb-4">Audio Messages</h3>
      <div className="border-2 border-dashed border-uniform-gray rounded-lg p-12 text-center">
        <SafeIcon icon={FiUpload} className="text-4xl text-uniform-gray mx-auto mb-4" />
        <p className="text-uniform-gray mb-4">Upload audio messages or voice notes</p>
        <button className="bg-naval-indigo text-bone-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
          Select Audio Files
        </button>
      </div>
    </div>
  </div>
);

const MessageManagement = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-playfair text-naval-indigo">Message Wall Management</h2>
    
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-lora text-naval-indigo mb-4">Pending Messages</h3>
      <div className="space-y-4">
        {[
          { name: 'Sarah Johnson', message: 'Thank you for your service and sacrifice. You are an inspiration to all mothers.', time: '2 hours ago' },
          { name: 'Mike Thompson', message: 'Your strength and dedication are remarkable. Thank you for everything you do.', time: '5 hours ago' },
        ].map((msg, index) => (
          <div key={index} className="p-4 border border-uniform-gray rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-naval-indigo">{msg.name}</h4>
                <p className="text-uniform-gray mt-1">{msg.message}</p>
                <p className="text-sm text-uniform-gray mt-2">{msg.time}</p>
              </div>
              <div className="flex space-x-2 ml-4">
                <button className="text-green-600 hover:text-green-800">Approve</button>
                <button className="text-red-600 hover:text-red-800">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AdminPage;