import React, { useState } from 'react';

// Custom component for the Credit Card Display
const CreditCardDisplay = ({ number, expiry, name }) => {
  // Format the full card number for display
  const formattedNumber = `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12, 16)}`;

  return (
    <div className="bg-gray-900 text-white p-6 mx-auto rounded-xl shadow-2xl w-full mb-8 transform -translate-y-4">
      {/* Card Chip/Logo Placeholder */}
      <div className="flex justify-start mb-6">
        {/* Placeholder for a logo/chip icon */}
        <div className="w-8 h-8 bg-gray-600 rounded-lg grid grid-cols-2 gap-1 p-1">
          <div className="bg-white/90 rounded-sm"></div>
          <div className="bg-white/90 rounded-sm"></div>
          <div className="bg-white/90 rounded-sm"></div>
          <div className="bg-white/90 rounded-sm"></div>
        </div>
      </div>

      {/* Card Number */}
      <p className="text-xl sm:text-2xl tracking-widest font-mono mb-4">
        {formattedNumber}
      </p>

      <div className="flex justify-between items-center text-xs">
        {/* Valid Thru */}
        <div className="flex flex-col">
          <span className="uppercase text-gray-400 text-xxs tracking-widest">Valid Thru</span>
          <span className="font-mono text-sm">{expiry}</span>
        </div>
        
        {/* Card Holder Name */}
        <p className="uppercase text-sm tracking-wider font-semibold">
          {name}
        </p>
      </div>
    </div>
  );
};

// Custom component for a styled Input Field
const FormInput = ({ label, id, type = 'text', value, onChange, placeholder, isSecure = false }) => (
  <div className="mb-4">
    <label htmlFor={id} className="text-sm font-semibold text-gray-800">
      {label}<span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 p-3 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/70 transition duration-150 ease-in-out ${isSecure ? 'font-mono tracking-wider' : ''}`}
      style={isSecure ? { letterSpacing: '2px' } : {}} // More secure look for inputs like CVV
    />
  </div>
);

// Main Card Form Component
const CreditCardForm = () => {
  // Mock data to pre-fill the card display for the visual
  const cardMockData = {
    number: "1234567887650876",
    expiry: "12/28",
    name: "TIMMY C. HERNANDEZ",
  };
  
  // State for form inputs (for a real application)
  const [cardName, setCardName] = useState('Belinda C. Cullen');
  const [cardNumber, setCardNumber] = useState('6587653456'); // Last 10 digits as in the image
  const [expiryDate, setExpiryDate] = useState('12/28');
  const [cvv, setCvv] = useState('***');

  // Logic to display the card number as shown in the image (**** **65 8765 3456)
  const displayedCardNumber = `**** **${cardNumber.slice(0, 2)} ${cardNumber.slice(2, 6)} ${cardNumber.slice(6, 10)}`;

  // The main card form component structure
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-6 pt-16 mx-auto border-t-2 border-gray-100">
        
        {/* Credit Card Visualization */}
        <CreditCardDisplay 
          number={cardMockData.number}
          expiry={cardMockData.expiry}
          name={cardMockData.name}
        />
        
        {/* --- Form Fields --- */}
        
        {/* Card Name Input (Styling to match the image's "input box" style) */}
        <div className="mb-6">
          <label htmlFor="card-name" className="text-sm font-semibold text-gray-800">
            Card Name<span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="card-name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="p-3 w-full bg-white border-none rounded-xl text-lg shadow-inner-strong focus:outline-none focus:ring-2 focus:ring-black/70 transition duration-150 ease-in-out"
              // Tailwind class `shadow-inner-strong` is custom, typically you'd use a utility like `shadow-md` or define a custom one in tailwind.config.js
              // Here, we'll simulate the raised, inset look with a slightly heavier shadow than default.
              style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)' }}
            />
          </div>
        </div>

        {/* Card Number Input (Simulating the secure/masked field) */}
        <div className="mb-6">
          <label htmlFor="card-number" className="text-sm font-semibold text-gray-800">
            Card Number<span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="card-number"
              // We're just showing the formatted string here for the visual; in a real app, you'd handle the input masking
              value={displayedCardNumber}
              readOnly // Set to readOnly as the visual implies a fixed/verified number
              className="p-3 w-full bg-white border-none rounded-xl text-lg shadow-inner-strong font-mono tracking-wider text-gray-700"
              style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)' }}
            />
          </div>
        </div>
        
        {/* Expiry Date and CVV side-by-side */}
        <div className="flex space-x-4 mb-8">
          {/* Expiry Date */}
          <div className="flex-1">
            <label htmlFor="expiry-date" className="text-sm font-semibold text-gray-800">
              Expiry Date<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="expiry-date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              maxLength="5"
              className="mt-1 p-3 w-full bg-white border-none rounded-xl text-lg shadow-inner-strong text-center font-mono"
              style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)' }}
            />
          </div>
          
          {/* CVV */}
          <div className="flex-1">
            <label htmlFor="cvv" className="text-sm font-semibold text-gray-800">
              CVV<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="4"
              className="mt-1 p-3 w-full bg-white border-none rounded-xl text-lg shadow-inner-strong text-center font-mono tracking-widest"
              style={{ boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)' }}
            />
          </div>
        </div>
        
        {/* Add New Card Button */}
        <button
          className="w-full flex items-center justify-center p-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition duration-200 ease-in-out"
        >
          <span>Add New Card</span>
          <svg className="ml-3 w-6 h-6 transform translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
        
      </div>
    </div>
  );
};

export default CreditCardForm;