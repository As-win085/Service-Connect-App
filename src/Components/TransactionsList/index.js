import React from 'react';
// Imports for the icons (assuming you are using a library like Heroicons or Font Awesome)
// For this example, I'll use simple placeholder SVGs, but in a real app, use an icon library.

// Component for a single transaction item
const TransactionItem = ({ name, date, amount, icon, isExpense = true }) => {
  const amountColor = isExpense ? 'text-red-500' : 'text-green-500';
  
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-3">
      <div className="flex items-center">
        {/* Icon Container */}
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-4 text-blue-600">
          {icon}
        </div>
        
        {/* Details */}
        <div>
          <p className="text-gray-800 font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      
      {/* Amount */}
      <p className={`text-lg font-semibold ${amountColor}`}>
        {isExpense ? `-$${amount}` : `+$${amount}`}
      </p>
    </div>
  );
};

// Component for the main Transactions List
const TransactionsList = () => {
  // SVG for a Store/Shop (e.g., Heroicon 'storefront' or similar)
  const StoreIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
    </svg>
  );

  // SVG for Wi-Fi (e.g., Heroicon 'wifi' or similar)
  const WifiIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.111a8.91 8.91 0 014.778 0m-.222 3.778h.444M12 20.222l-.111-.111m0-16.889a13.333 13.333 0 018.889 4.444m-17.778 0a13.333 13.333 0 018.889-4.444m-8.889 4.444h17.778"></path>
    </svg>
  );

  return (
    <div className="w-full mx-auto md:w-2/3 lg:w-1/2 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Transactions
        </h2>
        {/* Three dots menu icon (assuming it's a menu button) */}
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </div>
      </div>

      {/* List of Transactions */}
      <div>
        <TransactionItem 
          name="Sri Rajan" 
          date="22 September 2021" 
          amount="22" 
          icon={StoreIcon}
        />
        <TransactionItem 
          name="Sofiya" 
          date="14 September 2021" 
          amount="120" 
          icon={WifiIcon}
        />
        <TransactionItem 
          name="Sri Rajan" 
          date="22 September 2021" 
          amount="22" 
          icon={StoreIcon}
        />
      </div>
    </div>
  );
};

export default TransactionsList