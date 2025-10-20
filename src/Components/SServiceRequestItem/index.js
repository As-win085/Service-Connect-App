import React from "react";
import { CalendarDays, Clock } from "lucide-react";

const TaskCard = () => {
  return (
    <div className="w-[351px] h-[154px] bg-white rounded-2xl shadow-md flex overflow-hidden">
      {/* Left Accent Bar */}
      <div className="w-[10px] bg-blue-900"></div>

      {/* Main Content */}
      <div className="p-4 flex flex-col justify-between w-full">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Tap Repair{" "}
              <span className="text-sm text-blue-700 underline cursor-pointer">
                View
              </span>
            </h2>
          </div>
          <p className="text-sm text-gray-500">Today, 09:30 AM</p>
        </div>

        {/* Task Info */}
        <div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
            <p className="text-gray-700 font-medium text-sm">Rose</p>
          </div>
          <p className="text-gray-500 text-sm">Pending</p>
        </div>

        {/* Schedule */}
        <div className="mt-2 space-y-2">
          {/* First Date */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="text-orange-400 w-4 h-4" />
              <span>March 20, 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-400 w-4 h-4" />
              <span>09.00 - 10.00 AM</span>
            </div>
          </div>

          {/* Second Date */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="text-orange-400 w-4 h-4" />
              <span>March 21, 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-400 w-4 h-4" />
              <span>09.00 - 10.00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
