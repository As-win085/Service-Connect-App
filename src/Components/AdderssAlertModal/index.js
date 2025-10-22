import React from 'react';

const LeadBalanceAlertModal = ({ message, onConfirm }) => {
  // Use a sensible default message if none is provided
  const defaultMessage = "By Attending, your lead balance will be deducted by one.";
  const displayMessage = message || defaultMessage;
  
  // Note: The original image had "deduced" and "Okey." We'll use the correct spellings.
  const buttonText = "Okay";

  return (
    // 1. Modal Backdrop (Optional - for full-screen overlay)
    // You can uncomment the lines below if you want a full-screen semi-transparent overlay
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      // 2. Dialog Card Container
      <div className="
        w-full max-w-sm mx-auto 
        bg-gray-200 
        rounded-xl overflow-hidden 
        shadow-2xl 
        p-6 sm:p-8
      ">
        
        {/* 3. Content Area */}
        <div className="mb-6">
          <p className="
            text-lg sm:text-xl 
            font-medium 
            text-gray-800 
            text-center 
            leading-relaxed
          ">
            {displayMessage}
          </p>
        </div>

        {/* 4. Action Button */}
        <div className="w-full">
          <button 
            onClick={onConfirm}
            className="
              w-full 
              py-3 sm:py-4 
              bg-gray-800 hover:bg-gray-900 
              text-white 
              font-bold 
              text-lg 
              rounded-full 
              transition-colors 
              focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50
            "
          >
            {buttonText}
          </button>
        </div>

      </div>
      
    // </div>
  );
};

export default LeadBalanceAlertModal;