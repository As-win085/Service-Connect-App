import React from "react";
import { AlertTriangle } from "lucide-react";
import ConfirmButton from "../ConfirmButton";
import {FaArrowRight} from 'react-icons/fa'

const AppointmentCard = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 px-6">
      <div className="w-full mx-auto md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-md my-2 md:my-4">

        <div className="p-4 border-b">
          <h2 className="text-gray-700 font-semibold">Appointment</h2>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <span>Jun 10, 2024</span>
            <span>9:41 AM</span>
          </div>
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-600">
            <div className="flex justify-between font-semibold mb-2">
              <span>Invoice</span>
            </div>

            <table className="w-full text-sm">
              <thead className="border-b">
                <tr className="text-gray-500 text-left">
                  <th className="py-1">Sl.no</th>
                  <th className="py-1">Description</th>
                  <th className="py-1">Qty</th>
                  <th className="py-1">Price</th>
                  <th className="py-1">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700">
                  <td className="py-1">1</td>
                  <td className="py-1">Bulb Change</td>
                  <td className="py-1">1</td>
                  <td className="py-1">300</td>
                  <td className="py-1">300</td>
                </tr>
              </tbody>
            </table>

            <div className="border-t mt-2 pt-2 flex justify-between font-semibold text-gray-800">
              <span>Grand Total</span>
              <span>300</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            <p className="font-semibold">Terms and conditions</p>
            <p>Valid up to 1 month</p>
          </div>
          <div className="mt-3 text-xs text-red-600">
            <div className="flex items-center gap-1 font-semibold">
              <AlertTriangle size={14} />
              <span>Additional Requirements</span>
            </div>
            <ul className="ml-5 list-disc text-gray-700 mt-1">
              <li>Provide Ladder</li>
              <li>Bulb should be provided</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
        <ConfirmButton ButtonName="Complete Payment" />
      <button
        type="submit"
        className="w-full flex items-center justify-center bg-red-800 text-white font-semibold py-3 px-6 rounded-full shadow-md relative my-2 md:my-4"
      >
        <span className="lg:text-lg">Raise a Complaint</span>
        <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <FaArrowRight className="text-red-800" size={16} />
        </span>
      </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
