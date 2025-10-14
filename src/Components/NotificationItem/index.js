import React from 'react';

const NotificationCard = ({ title, subtitle, icon }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 max-w-sm mx-auto">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700">
        {icon ? (
          icon
        ) : (
          // Default icon if none is provided (looks like a grid/apps icon)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        )}
      </div>
      
      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {title || "Default Title!"}
        </h3>
        <p className="text-gray-600 text-sm leading-snug">
          {subtitle || "Default subtitle goes here..."}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;