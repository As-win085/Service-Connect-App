import React from "react";
import { AlertTriangle } from "lucide-react";
import ConfirmButton from "../ConfirmButton";

const AppointmentCard = () => {
  return (
    
      <div className="w-full mx-auto  bg-white rounded-2xl shadow-md my-2 md:my-4">
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-gray-700 font-semibold">Appointment</h2>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <span>Jun 10, 2024</span>
            <span>9:41 AM</span>
          </div>
        </div>

        {/* Invoice Table */}
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

          {/* Terms */}
          <div className="mt-3 text-xs text-gray-500">
            <p className="font-semibold">Terms and conditions</p>
            <p>Valid up to 1 month</p>
          </div>

          {/* Additional Requirements */}
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
    
  );
};

export default AppointmentCard;
