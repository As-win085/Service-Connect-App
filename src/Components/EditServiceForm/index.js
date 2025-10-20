import React from "react";
import { Upload, Plus, File } from "lucide-react";

const LeadBalanceForm = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2  p-4 mx-auto font-sans">
      {/* Status Dropdown */}
      <div className="flex justify-between items-center bg-[#2f2f2f] text-white rounded-md px-4 py-2 mb-3">
        <span>Active</span>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Lead Balance */}
      <p className="text-center text-gray-800 font-medium">
        Available lead balance : <span className="font-bold">42</span>
      </p>

      {/* Add Leads Button */}
      <button className="w-full bg-[#2f2f2f] text-white py-2 rounded-md mt-3 flex justify-center items-center gap-2">
        Add Leads Balance <Plus size={16} />
      </button>

      {/* Input Fields */}
      <div className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Service Title"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        ></textarea>
        <input
          type="text"
          placeholder="GST code"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600">
          <option>Select Service Category</option>
        </select>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600">
          <option>Select Service Sub-category</option>
        </select>

        <div className="relative">
          <input
            type="text"
            placeholder="Certificate/Licensee"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-8"
          />
          <File size={16} className="absolute right-2 top-3 text-gray-500" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="File Name (certificate/licensee)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-8"
          />
          <File size={16} className="absolute right-2 top-3 text-gray-500" />
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-700 mb-2">Add image and video</p>
        <div className="flex items-center gap-3">
          <div className="border border-gray-400 rounded-md w-10 h-10 flex justify-center items-center">
            <Upload className="w-4 h-4 text-gray-600" />
          </div>
          <div className="border border-gray-400 rounded-md w-10 h-10 flex justify-center items-center">
            <Upload className="w-4 h-4 text-gray-600" />
          </div>
          <button className="border border-gray-400 rounded-md w-10 h-10 flex justify-center items-center">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs text-gray-700">Terms & Condition</p>
        <label className="flex items-center gap-1 text-sm text-gray-700">
          <input type="checkbox" className="accent-gray-700" /> Accept
        </label>
      </div>

      {/* Update Button */}
      <button className="w-full bg-[#2f2f2f] text-white py-2 rounded-full mt-4">
        Update
      </button>
    </div>
  );
};

export default LeadBalanceForm;
