
import { Squares2X2Icon } from '@heroicons/react/24/solid'; // Assumed icon for the logo/chip

const CreditCardDisplay = ({ name, number, expiry }) => {
  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      {/* Card Header (Logo/Chip) */}
      <div className="flex justify-start">
        <Squares2X2Icon className="h-8 w-8 text-white opacity-80" />
      </div>

      {/* Card Number */}
      <div className="mt-8 text-2xl font-mono tracking-widest">
        {number || '1234 5678 8765 0876'}
      </div>

      {/* Card Details (Valid Thru and Name) */}
      <div className="flex justify-between items-center mt-4 text-xs font-light">
        <div className="flex flex-col">
          <span className="text-gray-400 uppercase">Valid Thru</span>
          <span className="font-medium text-sm">{expiry || '12/28'}</span>
        </div>
        <div className="uppercase tracking-wider font-semibold text-sm">
          {name || 'TIMMY C. HERNANDEZ'}
        </div>
      </div>
    </div>
  );
};

export default CreditCardDisplay;