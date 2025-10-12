import CardDisplay from '../CardDisplay';
import ConfirmButton from '../ConfirmButton';


const CardForm = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md space-y-6">

        <CardDisplay />

        <div className="space-y-1">
          <label className="text-gray-700 font-semibold text-sm">Card Name*</label>
          <input
            type="text"
            placeholder="Belinda C. Cullen"
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            defaultValue="Belinda C. Cullen" 
          />
        </div>

        <div className="space-y-1">
          <label className="text-gray-700 font-semibold text-sm">Card Number*</label>
          <input
            type="text"
            readOnly 
            placeholder="**** **65 8765 3456"
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-mono text-gray-500"
            defaultValue="**** **65 8765 3456" 
          />
        </div>

        <div className="flex space-x-4">

          <div className="flex-1 space-y-1">
            <label className="text-gray-700 font-semibold text-sm">Expiry Date*</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              defaultValue="12/28" 
            />
          </div>

          <div className="flex-1 space-y-1">
            <label className="text-gray-700 font-semibold text-sm">CVV*</label>
            <input
              type="password"
              placeholder="***"
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-mono"
              defaultValue="***"
            />
          </div>
        </div>

        <div className="pt-6">
          <ConfirmButton ButtonName="Add New Card" />
        </div>

      </div>
    </div>
  );
};

export default CardForm;