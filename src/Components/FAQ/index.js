import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 rounded-xl bg-white p-4 shadow-md transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-900" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>
      {isOpen && (
        <p className="mt-3 pr-8 text-sm text-gray-600 border-t pt-3">{answer}</p>
      )}
    </div>
  );
};
const FAQScreen = () => {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Account', 'Payment', 'Service'];
  const faqData = {
    General: [
      {
        question: 'How do I manage my notifications?',
        answer: 'To manage notifications, go to "Settings," select "Notification Settings," and customize your preferences.',
      },
      {
        question: 'How do I start a guided meditation session?',
        answer: 'Navigate to the "Sessions" tab and select your preferred guided session to begin.',
      },
      {
        question: 'How do I join a support group?',
        answer: 'In the "Community" section, browse available groups and tap "Join" on the one you prefer.',
      },
      {
        question: 'Is my data safe and private?',
        answer: 'Yes, we use industry-standard encryption and strict privacy policies to ensure your data is secure.',
      },
    ],
    Account: [
      { question: 'How do I change my password?', answer: 'Go to Account Settings > Security and follow the steps to reset your password.' },
    ],
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-gray-50">
      <div className="flex space-x-2 p-4 bg-white shadow-sm overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
              transition-colors duration-200
              ${
                activeTab === tab
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 flex-grow">
        {faqData[activeTab] && faqData[activeTab].map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
        {(!faqData[activeTab] || faqData[activeTab].length === 0) && (
             <div className="text-center mt-12 text-gray-500">
                No FAQs found for this category.
             </div>
        )}
      </div>
    </div>
  );
};

export default FAQScreen;