import React from "react";
import { Star } from "lucide-react";

const RequestItem = () => {
  return (
    <div className="flex items-center w-full md:w-1/2 md:mx-auto my-2 md:my-4 rounded-2xl shadow-md overflow-hidden bg-white">

      <div className="w-1/3 h-full  rounded-l-2xl">
        <div></div>
      </div>

      <div className="flex flex-col justify-between p-4 w-2/3 relative">

        <div className="absolute top-3 right-3 text-xs text-gray-500 flex items-center gap-1">
          <div className="w-4 h-5 bg-emerald-600 rounded-sm"></div>
          <span className="text-gray-500 text-xs font-medium ml-1">Booked Ones</span>
        </div>

        <p className="text-orange-500 text-sm font-medium">3 km away</p>

        <h2 className="text-lg font-semibold text-gray-800">Thomas</h2>

        <p className="text-lg font-bold text-gray-900">₹280 - 300</p>

        <div className="flex items-center text-sm text-gray-600">
          <Star size={16} fill="#FACC15" stroke="#FACC15" className="mr-1" />
          <span className="font-semibold text-gray-800 mr-2">4.2</span>
          <span className="text-gray-400 mx-1">|</span>
          <span className="font-medium text-gray-700">78 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
