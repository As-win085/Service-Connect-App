import { ArrowLeft, Phone, Search } from 'lucide-react';

const ChatHeader = ({ contactName, onBack, onCall, onSearch }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <button onClick={onBack} className="text-gray-600 hover:text-gray-900 transition duration-150">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <span className="text-lg font-semibold text-gray-800">{contactName}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onCall} className="text-gray-600 hover:text-gray-900 transition duration-150">
          <Phone className="h-6 w-6" />
        </button>
        <button onClick={onSearch} className="text-gray-600 hover:text-gray-900 transition duration-150">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;