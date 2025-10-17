import React, { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import ConfirmButton from "../ConfirmButton";

const PaymentSelection = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto  flex flex-col justify-between p-6">
      <div>
        {/* Header */}
        <h2 className="text-sm text-gray-600 font-medium mb-4">
          Select the Payment Methods you Want to Use
        </h2>

        {/* Payment Option 1 */}
        <div
          onClick={() => setSelected("paypal")}
          className={`flex justify-between items-center bg-white rounded-xl shadow-sm px-5 py-4 mb-4 cursor-pointer transition-all ${
            selected === "paypal" ? "ring-2 ring-gray-800" : ""
          }`}
        >
          <span className="text-gray-800 font-semibold">Paypal</span>
          <div
            className={`w-5 h-5 rounded-full border-2 ${
              selected === "paypal" ? "border-gray-800 bg-gray-800" : "border-gray-400"
            }`}
          ></div>
        </div>

        {/* Payment Option 2 */}
        <div
          onClick={() => setSelected("gpay")}
          className={`flex justify-between items-center bg-white rounded-xl shadow-sm px-5 py-4 mb-4 cursor-pointer transition-all ${
            selected === "gpay" ? "ring-2 ring-gray-800" : ""
          }`}
        >
          <span className="text-gray-800 font-semibold">Google Pay</span>
          <div
            className={`w-5 h-5 rounded-full border-2 ${
              selected === "gpay" ? "border-gray-800 bg-gray-800" : "border-gray-400"
            }`}
          ></div>
        </div>
        <div
          onClick={() => setSelected("applepay")}
          className={`flex justify-between items-center bg-white rounded-xl shadow-sm px-5 py-4 mb-4 cursor-pointer transition-all ${
            selected === "applepay" ? "ring-2 ring-gray-800" : ""
          }`}
        >
          <span className="text-gray-800 font-semibold">Apple Pay</span>
          <div
            className={`w-5 h-5 rounded-full border-2 ${
              selected === "applepay" ? "border-gray-800 bg-gray-800" : "border-gray-400"
            }`}
          ></div>
        </div>

        <div
          onClick={() => setSelected("card")}
          className={`flex justify-between items-center bg-white rounded-xl shadow-sm px-5 py-4 mb-4 cursor-pointer transition-all ${
            selected === "card" ? "ring-2 ring-gray-800" : ""
          }`}
        >
          <span className="text-gray-800 font-semibold">**** **** **76 3054</span>
          <div
            className={`w-5 h-5 rounded-full border-2 ${
              selected === "card" ? "border-gray-800 bg-gray-800" : "border-gray-400"
            }`}
          ></div>
        </div>
      </div>

      {/* Floating Plus Button */}
      <div className="flex flex-col items-end mb-4">
        <button className="bg-gray-900 text-white rounded-full p-4 shadow-md">
          <Plus size={20} />
        </button>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center items-center left-1/2 -translate-x-1/2 fixed bottom-4 w-full mx-auto max-w-sm px-8">
        <ConfirmButton ButtonName="Enroll Course - $55" />
      </div>
    </div>
  );
};

export default PaymentSelection;
