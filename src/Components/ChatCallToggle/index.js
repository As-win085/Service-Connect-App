import ChatList from "../ChatList"
import CallList from "../CallList"

import React, { useState } from 'react';

const ChatCallToggle = () => {
  // Use state to track which tab is currently active ('chat' or 'call')
  const [activeTab, setActiveTab] = useState('chat');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // --- Tailwind CSS Classes for the Active/Inactive Tabs ---
  const activeTabClasses = 'bg-white text-stone-700 shadow-md font-semibold';
  const inactiveTabClasses = 'bg-transparent text-stone-500 hover:text-stone-700';

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto p-4">
      <div className="bg-gray-400 p-2 rounded-full flex space-x-1 mb-4 shadow-inner">
        {/* Chat Tab Button */}
        <button
          onClick={() => handleTabClick('chat')}
          className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
            activeTab === 'chat' ? activeTabClasses : inactiveTabClasses
          }`}
        >
          Chat
        </button>

        {/* Call Tab Button */}
        <button
          onClick={() => handleTabClick('call')}
          className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 ease-in-out ${
            activeTab === 'call' ? activeTabClasses : inactiveTabClasses
          }`}
        >
          Call
        </button>
      </div>

      {/* --- Content Display Area --- */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 ">
        {/* Chat Content */}
        {activeTab === 'chat' && (
          <ChatList />
        )}

        {/* Call Content */}
        {activeTab === 'call' && (
          <CallList />
        )}
      </div>
    </div>
  );
};

export default ChatCallToggle;