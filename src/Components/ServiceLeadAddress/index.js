import React from "react";

const AddressCard = () => {
  return (
    <div className="w-full pb-10 my-2 bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button className="w-1/2 text-gray-500 font-medium py-3 focus:outline-none">
          Request
        </button>
        <button className="w-1/2 text-gray-800 font-semibold py-3 border-b-2 border-purple-500 focus:outline-none">
          Address
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2 text-gray-800 text-sm">
        <p>
          <span className="font-semibold">Name:</span> Sharavanan
        </p>
        <p>
          <span className="font-semibold">Address:</span> Karthika Vilasam Kokknu
        </p>
        <p>
          <span className="font-semibold">Pin:</span> 306589
        </p>
        <p>
          <span className="font-semibold">Land Mark:</span> Sanjaram Road
        </p>
        <p>
          <span className="font-semibold">Ph:</span> 8252225222
        </p>
        <p>
          <span className="font-semibold">Email:</span> krk@email.com
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
