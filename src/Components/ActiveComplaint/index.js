import React from 'react';

const ServiceStatusCard = () => {
  return (
    // Outer container for centering and background color
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
      {/* --- Main Card Container --- */}
      <div className="flex w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Status Bar */}
        {/* The deep blue/teal bar on the left */}
        <div className="w-4 bg-teal-700"></div> 
        
        {/* Content Area */}
        <div className="flex-1 p-4">
          
          {/* Header Row: Title, View Link, Close Button */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-800">
              Tap Repair 
              <span className="text-sm font-normal text-gray-500 ml-2 hover:underline cursor-pointer">
                View
              </span>
            </h3>
            {/* Close Button (X icon) */}
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* User/Status Details */}
          <div className="mb-4">
            {/* User Name/Status Indicator */}
            <div className="flex items-center text-gray-600 mb-1">
              {/* Purple Circle */}
              <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
              Rose
            </div>
            
            <p className="text-gray-600 text-sm">Booking Id</p>
            <p className="text-gray-600 text-sm">Dispute Status</p>
          </div>

          {/* Chat/Call Button */}
          <button 
            className="w-full py-2 mt-4 text-white bg-gray-900 rounded-lg font-medium hover:bg-gray-700 transition duration-200"
            onClick={() => console.log('Chat/Call action triggered')}
          >
            Chat/Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatusCard;