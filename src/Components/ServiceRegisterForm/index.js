import React, { useState } from "react";
import { Paperclip, Plus, ArrowRight } from "lucide-react";
import ConfirmButton from "../ConfirmButton";

const FormComponent = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-gray-200 w-full md:w-2/3 lg:w-1/2 p-4 rounded-xl flex flex-col gap-3">

        {/* Description */}
        <input
          type="text"
          placeholder="Description"
          className="w-full bg-[#7a6d67] text-white placeholder-gray-200 px-3 py-2 rounded-md focus:outline-none"
        />

        {/* GST Code */}
        <input
          type="text"
          placeholder="GST code"
          className="w-full bg-[#7a6d67] text-white placeholder-gray-200 px-3 py-2 rounded-md focus:outline-none"
        />

        {/* Select Service Category */}
        <select className="w-full bg-[#7a6d67] text-white px-3 py-2 rounded-md focus:outline-none">
          <option>Select Service Category</option>
        </select>

        {/* Select Service Sub-category */}
        <select className="w-full bg-[#7a6d67] text-white px-3 py-2 rounded-md focus:outline-none">
          <option>Select Service Sub-category</option>
        </select>

        {/* Certificate / Licensee */}
        <div className="flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Certificate/Licensee"
              className="w-full bg-[#7a6d67] text-white placeholder-gray-200 px-3 py-2 rounded-md focus:outline-none"
            />
            <Paperclip className="absolute right-3 top-2.5 text-white w-4 h-4" />
          </div>
          <button className="bg-[#7a6d67] p-2 rounded-md text-white hover:bg-[#6b5f5a]">
            <Plus size={16} />
          </button>
        </div>

        {/* File Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="File Name (certificate/Licensee)"
            className="w-full bg-[#7a6d67] text-white placeholder-gray-200 px-3 py-2 rounded-md focus:outline-none"
          />
          <Paperclip className="absolute right-3 top-2.5 text-white w-4 h-4" />
        </div>

        {/* Add image and video */}
        <div className="mt-2">
          <p className="text-sm font-medium text-gray-700 mb-1">Add image and video</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-md border flex justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                alt="Preview"
                className="w-6 h-6 opacity-60"
              />
            </div>
            <div className="w-12 h-12 bg-white rounded-md border flex justify-center items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                alt="Preview"
                className="w-6 h-6 opacity-60"
              />
            </div>
            <button className="w-12 h-12 bg-white rounded-md border flex justify-center items-center text-gray-700 hover:bg-gray-100">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs font-semibold text-gray-700">Terms & Conduction</p>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="w-4 h-4 accent-black"
            />
            <span className="text-sm text-gray-800">Accept</span>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto">
            <ConfirmButton ButtonName="Continue" />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
