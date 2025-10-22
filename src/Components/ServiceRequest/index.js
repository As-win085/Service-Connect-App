import React from "react";
import { Calendar, Clock, ImagePlus, Plus, Edit, ArrowRight } from "lucide-react";
import ConfirmButton from "../ConfirmButton"
import ProviderProfile from "../ProviderProfile";

const ServiceRequest = (props) => {
  const {BookingId, showButton, ButtonName} = props;
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="w-full md:w-2/3 lg:w-2/3  rounded-2xl p-5">

        <ProviderProfile />
        <p className="text-gray-500 text-xs">{BookingId}</p>
        <div className="mb-3 bg-white px-2 text-xs md:text-sm mt-1 shadow-lg">
          <label className="block text-gray-700 text-sm mb-1">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-xl border-0  focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        <div className="mb-3 bg-white px-2 text-xs md:text-sm mt-1 shadow-lg">
          <label className="block text-gray-700 text-sm mb-1">Description</label>
          <textarea
            rows="3"
            className="w-full px-3 py-2 rounded-xl border-0 focus:ring focus:ring-indigo-300 focus:outline-none resize-none"
          />
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-gray-300 shadow-lg">
            <span className="text-gray-500 text-sm">Images & Videos</span>
            <ImagePlus size={20} className="text-gray-500" />
          </div>

          <div className="flex items-center mt-3 gap-3">

            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-md bg-gray-600 flex items-center justify-center text-white"
              >
                <ImagePlus size={20} />
              </div>
            ))}
            <button className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-800">Availability</h3>
            <Edit size={16} className="text-gray-600" />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-between w-1/2 bg-white border border-gray-300 rounded-xl px-3 py-2">
              <input
                type="text"
                defaultValue="12/12/2020"
                className="text-gray-700 text-sm bg-transparent outline-none"
              />
              <Calendar size={16} className="text-gray-500" />
            </div>
            <div className="flex items-center justify-between w-1/2 bg-white border border-gray-300 rounded-xl px-3 py-2">
              <input
                type="text"
                defaultValue="12:00 PM"
                className="text-gray-700 text-sm bg-transparent outline-none"
              />
              <Clock size={16} className="text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-between w-1/2 bg-white border border-gray-300 rounded-xl px-3 py-2">
              <input
                type="text"
                defaultValue="12/12/2020"
                className="text-gray-700 text-sm bg-transparent outline-none"
              />
              <Calendar size={16} className="text-gray-500" />
            </div>
            <div className="flex items-center justify-between w-1/2 bg-white border border-gray-300 rounded-xl px-3 py-2">
              <input
                type="text"
                defaultValue="12:00 PM"
                className="text-gray-700 text-sm bg-transparent outline-none"
              />
              <Clock size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="my-4">
          {showButton ? (
            <ConfirmButton ButtonName="Confirm" />
          ) : (
            <div className="py-2 md:py-4  mx-auto flex justify-center">
              <button className="py-2 md:py-4 text-sm md:text-md lg:text-lg bg-gray-900 rounded-full w-full max-w-sm text-white my-2 md-my-4">{ButtonName}</button>
            </div>
          )}

        </div>
        
      </div>
    </div>
  );
};

export default ServiceRequest
