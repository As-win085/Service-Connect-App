import React from "react";
import { X } from "lucide-react";

const TapRepairCard = () => {
  return (
    <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex">
      {/* Left color bar */}
      <div className="w-2 bg-[#164A63]"></div>

      {/* Content section */}
      <div className="flex-1 p-5 relative">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-[#1B2559]">Tap Repair</h2>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-[#1B2559] underline font-medium">
              View
            </a>
            <X size={20} className="text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Profile + Details */}
        <div className="flex items-center mt-4 space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#C7BDFB]"></div>
          <div className="text-[#7C7C7C]">
            <p className="text-[#7C7C7C] font-medium">Rose</p>
            <p className="text-[#7C7C7C] text-sm">Booking Id</p>
            <p className="text-[#7C7C7C] text-sm">Dispute Status</p>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-5">
          <button className="bg-[#1B1C25] text-white font-semibold px-10 py-2 rounded-full shadow-md w-full">
            Chat/Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TapRepairCard;
