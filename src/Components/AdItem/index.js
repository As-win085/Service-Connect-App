import React from 'react';

const AdPerformanceCard = ({ title, adId, views, hits, status }) => {
  // Determine status color and icon
  const statusIcon = status === 'active' ? '✅' : '✏️'; // Using simple emojis for icons
  const statusColor = status === 'active' ? 'text-green-600' : 'text-gray-500';

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-xl rounded-xl my-6">
      <div className="flex">
        {/* Left Section: Placeholder for Creative */}
        <div className="w-1/6 bg-black rounded-l-lg aspect-square">
          {/* Typically an image or video would go here */}
        </div>

        {/* Right Section: Details and Metrics */}
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-orange-600 font-semibold text-sm">Card Ad</span>
            <div className="flex items-center space-x-2">
              {/* Edit Icon */}
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
              </button>

              {/* Status/Checkmark Icon (Green Circle) */}
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Title and ID */}
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500 mb-4">{adId}</p>

          {/* Metrics */}
          <div className="flex items-center justify-start text-gray-700 pt-2 border-t border-gray-100">
            <span className="text-base font-semibold">{views} Views</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-base font-semibold">{hits} Hits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPerformanceCard;