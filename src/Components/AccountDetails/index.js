import React from 'react';

const FinanceDashboard = () => {
  return (
    // Outer container for the entire dashboard, setting a light grey background
    <div className="flex flex-col items-center bg-gray-200 min-h-screen p-6">
      
      {/* --- User Welcome Section --- */}
      <div className="flex items-center w-full max-w-md mb-8">
        {/* User Profile Picture */}
        {/* Placeholder image, replace with actual user avatar in a real app */}
        <img 
          src="https://via.placeholder.com/60/7b4397/ffffff?text=LK" // Using a placeholder for the avatar
          alt="Lasso Kayne" 
          className="w-16 h-16 rounded-full mr-4 border-2 border-white shadow-md"
        />
        <div>
          <p className="text-xl font-semibold text-gray-800">Lasso Kayne</p>
          <p className="text-gray-600">Welcome Back!</p>
        </div>
      </div>

      {/* --- Income & Expenditure Cards --- */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-md mb-8">
        {/* Income Card */}
        <div className="flex items-center bg-gradient-to-br from-indigo-300 to-purple-400 p-4 rounded-xl shadow-lg flex-1 min-w-[150px]">
          <div className="bg-white bg-opacity-30 rounded-full p-2 mr-3">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-white text-sm opacity-90">Income</p>
            <p className="text-white text-xl font-bold">$21,000</p>
          </div>
        </div>

        {/* Expenditure Card */}
        <div className="flex items-center bg-gradient-to-br from-pink-300 to-red-400 p-4 rounded-xl shadow-lg flex-1 min-w-[150px]">
          <div className="bg-white bg-opacity-30 rounded-full p-2 mr-3">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-white text-sm opacity-90">Expenditure</p>
            <p className="text-white text-xl font-bold">$11,000</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-700 p-6 rounded-xl shadow-2xl relative overflow-hidden">
        {/* Abstract background circles */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border border-gray-500 opacity-30"></div>
        <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full border border-gray-500 opacity-20"></div>

        <p className="text-white font-semibold text-lg mb-6">Lasso Kayne</p>
        <p className="text-white text-2xl font-mono tracking-widest mb-6">
          4551 <span className="ml-4">5667</span> <span className="ml-4">8886</span> <span className="ml-4">7775</span>
        </p>
        <p className="text-gray-300 text-sm">Account Balance</p>
        <p className="text-white text-3xl font-bold">$121,000</p>
      </div>

    </div>
  );
};

export default FinanceDashboard;