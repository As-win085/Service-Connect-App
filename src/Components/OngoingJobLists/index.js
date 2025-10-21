import React from 'react';

// A simple icon component for the calendar and clock.
// In a real app, you might use an icon library (e.g., Heroicons, Lucide).
const CalendarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-5 h-5 text-orange-400"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5m18 7.5v-7.5" 
    />
  </svg>
);

const ClockIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-5 h-5 text-yellow-500"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const ExclamationCircleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-5 h-5 text-red-500"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12z" 
    />
  </svg>
);

const XMarkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-5 h-5 text-gray-400"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

const ServiceAppointmentCard = ({ 
  serviceType, 
  customerName, 
  status, // 'active' or 'paymentPending'
  date, 
  timeRange, 
  displayDate, // e.g., "Today, 09:30 AM"
  onView,
  onMarkComplete,
  onCancel,
}) => {
  const isPaymentPending = status === 'paymentPending';

  return (
    // Outer card container
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full">
      {/* Left colored border */}
      <div 
        className={`w-3 ${isPaymentPending ? 'bg-indigo-700' : 'bg-indigo-700'}`}
      ></div>

      {/* Main content area */}
      <div className="flex-grow p-4 space-y-3">
        {/* Top row: Service Type, View, Date/Time, Cancel */}
        <div className="flex items-center justify-between text-gray-700 text-sm">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-lg text-gray-800">{serviceType}</h3>
            {onView && (
              <button 
                onClick={onView} 
                className="text-indigo-600 hover:text-indigo-800 text-sm focus:outline-none"
              >
                View
              </button>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm">{displayDate}</span>
            {onCancel && (
              <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <XMarkIcon />
              </button>
            )}
          </div>
        </div>

        {/* Customer Name and Status */}
        <div className="flex items-center space-x-2">
          {/* Status indicator circle */}
          <div className={`w-3 h-3 rounded-full ${isPaymentPending ? 'bg-indigo-300' : 'bg-purple-300'}`}></div>
          <span className="text-gray-600">{customerName}</span>
        </div>
        
        {/* Status Text (Active or Payment Pending) */}
        {isPaymentPending ? (
          <div className="flex items-center text-red-500 font-medium">
            <ExclamationCircleIcon />
            <span className="ml-1">Payment Pending</span>
          </div>
        ) : (
          <p className="text-green-600 text-sm">Active</p>
        )}

        {/* Date and Time Range (only for 'active' status as per example) */}
        {!isPaymentPending && (
          <div className="flex items-center space-x-4 text-gray-700 text-sm">
            <div className="flex items-center space-x-1">
              <CalendarIcon />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ClockIcon />
              <span>{timeRange}</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2"> {/* Padding top to separate button */}
          {isPaymentPending ? (
            <button 
              onClick={onView} 
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200 focus:outline-none"
            >
              View
            </button>
          ) : (
            <button 
              onClick={onMarkComplete} 
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200 focus:outline-none"
            >
              Mark Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceAppointmentCard;