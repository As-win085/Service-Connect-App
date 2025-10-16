import React from 'react';
import { Paperclip, Mic } from 'lucide-react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-100 shadow-lg">
      <form onSubmit={handleSend} className="flex items-center space-x-3  mx-auto">
        
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-3 pl-4 pr-12 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => console.log('Attachment button clicked')}
          >
            <Paperclip className="h-5 w-5" />
          </button>
        </div>
        
        <button
          type="submit"
          className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-900 transition duration-150"
        >
          <Mic className="h-6 w-6" />
        </button>
      </form>
      <div className="h-2"></div>
    </div>
  );
};

export default ChatInput;