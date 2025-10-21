import React from "react";
import { CalendarDays, Clock, AlertCircle, X } from "lucide-react";

const JobCard = () => {
  return (
    <div className=" flex justify-center items-center my-4">
      <div className="relative bg-white rounded-xl shadow-md p-4 w-full flex gap-3">
        {/* Left colored border */}
        <div className="absolute left-0 top-0 h-full w-2 bg-blue-900 rounded-l-xl"></div>

        {/* Content */}
        <div className="flex flex-col flex-1 ml-3">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-blue-900 text-lg leading-none">
                Tap Repair
              </h2>
              <a href="#" className="text-sm text-gray-500 underline">
                View
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Today, 09:30 AM</span>
              <X size={16} className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center gap-2 mt-1">
            <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
            <span className="text-gray-600 text-sm">Rose</span>
          </div>

          {/* Status */}
          <div className="flex items-center text-red-600 text-sm font-medium mt-1">
            Rescheduled <AlertCircle size={16} className="ml-1" />
          </div>

          {/* Date and Time */}
          <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
            <div className="flex items-center gap-1">
              <CalendarDays size={16} className="text-red-500" />
              <span>March 20, 2021</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-yellow-500" />
              <span>09.00 - 10.00 AM</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-3 bg-gray-900 text-white rounded-full py-2 font-medium shadow-sm hover:bg-gray-800">
            View & Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
