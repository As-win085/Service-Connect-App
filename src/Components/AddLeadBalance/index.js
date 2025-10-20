import React from 'react';

const AddLeadBalance = () => {
  return (
    // Outer container for the card, centered on the screen
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* The main card container */}
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg text-center">
        
        {/* Header Title */}
        <h2 className="text-xl font-semibold uppercase tracking-wider mb-8 text-gray-800">
          ADD LEAD BALANCE
        </h2>
        
        {/* Leads Quantity Section */}
        <div className="mb-10">
          <p className="text-6xl font-bold mb-2">
            50
          </p>
          <p className="text-sm text-gray-500">
            Leads will be added to your account
          </p>
        </div>
        
        {/* Price Section */}
        <div className="mb-12">
          <p className="text-5xl font-semibold">
            ₹ 300
          </p>
        </div>
        
        {/* Confirm & Pay Button */}
        <button 
          className="w-full py-4 text-white bg-gray-900 rounded-lg font-medium tracking-wider uppercase hover:bg-gray-700 transition duration-200 shadow-md"
          onClick={() => console.log('Confirm & Pay clicked')}
        >
          CONFIRM & PAY
        </button>
      </div>
    </div>
  );
};

export default AddLeadBalance;