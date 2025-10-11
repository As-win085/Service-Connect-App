import React from 'react';

const TapRepairBookingCard = () => {
  return (
    // Main container with shadow, rounded corners, and the prominent left green border
    // Added 'md:max-w-md' for responsiveness - wider on medium screens
    <div className="relative w-full  md:w-3/4 lg:w-1/2 mx-auto bg-white rounded-2xl shadow-lg 
                    p-4 pl-6 md:p-6 font-sans overflow-hidden"> 
      
      {/* Green Left Border */}
      <div className="absolute top-0 left-0 bottom-0 w-3 bg-green-700 rounded-l-xl"></div>

      {/* Content Wrapper to push content away from the absolute border */}
      <div className="relative z-10"> 
        {/* Header Section: Title and Close Button */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Tap Repair</h2>
          <div className="flex items-center space-x-2"> {/* Group 'View' and 'X' */}
            <span className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer mr-2">View</span>
            {/* Close/Dismiss Button */}
            <button className="text-gray-400 hover:text-gray-600 focus:outline-none text-xl leading-none">
              &times;
            </button>
          </div>
        </div>

        {/* Booking Details Section */}
        <div className="space-y-1">
          
          {/* Service Provider/Assignee */}
          <div className="flex items-center space-x-2">
            {/* Circular color indicator (lavender/purple) */}
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <p className="text-lg text-gray-700">Keshavan</p>
          </div>

          {/* Status - "Scheduled" */}
          <p className="text-base font-medium text-gray-600 mb-2">Scheduled</p>

          {/* Date and Time */}
          <div className="flex items-center md:flex-row md:items-center justify-start md:space-y-0space-x-4 pt-1">
            {/* Date Icon */}
            <div className="flex items-center space-x-1">
              <svg 
                className="w-5 h-5 text-red-500" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-base font-medium text-gray-700">March 20, 2021</span>
            </div>

            {/* Time Icon and Slot */}
            <div className="flex items-center space-x-1">
              <svg 
                className="w-5 h-5 text-yellow-500 ml-1" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-xs font-medium text-gray-700">09.00 - 10.00 AM</span>
            </div>
          </div>

          {/* Amount and Additional Requirements */}
          <div className="flex  md:flex-row md:items-center justify-between mt-3 pt-2">
            <p className="text-xs font-medium text-gray-700 mb-2 md:mb-0">Amount : <span className="font-semibold">300 /-</span></p>
            <div className="flex items-center text-red-500 space-x-1">
              {/* Exclamation Icon */}
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.487 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM10 11a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm">Additional Requirements</span>
            </div>
          </div>
        </div>

        {/* Footer/Action Button: "Accept and Pay Advance" */}
        <div className="mt-4">
          <button 
            className="w-full py-1 bg-green-700 text-white font-medium rounded-lg max-w-md mx-auto 
                       hover:bg-green-600 transition duration-150 focus:outline-none
                       flex items-center justify-center space-x-2 text-base md:text-lg"
          >
            <span>Accept and Pay Advance</span>
            {/* Dropdown Arrow */}
            <svg 
              className="w-5 h-5 ml-1" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            {/* Right Arrow */}
            <svg 
              className="w-5 h-5 ml-auto bg-white rounded-full p-1 text-green-700" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <polyline points="12 5 19 12 12 19"></polyline>
              <line x1="19" y1="12" x2="5" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TapRepairBookingCard;