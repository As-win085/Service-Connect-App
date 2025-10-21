import React, { useState } from "react";
import { Calendar, Clock, Plus } from "lucide-react";

const AppointmentInvoiceForm = () => {
  const [invoiceItems, setInvoiceItems] = useState([
    { description: "", qty: "", price: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newItems = [...invoiceItems];
    newItems[index][field] = value;
    setInvoiceItems(newItems);
  };

  const addItem = () => {
    setInvoiceItems([...invoiceItems, { description: "", qty: "", price: "" }]);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="rounded-2xl w-full">
        {/* Appointment Section */}
        <h2 className="font-semibold mb-2 text-gray-700">Appointment</h2>
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <label className="text-sm text-gray-600">Date</label>
            <div className="relative">
              <input
                type="text"
                value="12/12/2020"
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                readOnly
              />
              <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-600">Time</label>
            <div className="relative">
              <input
                type="text"
                value="12:00 PM"
                className="w-full mt-1 p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                readOnly
              />
              <Clock className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Invoice Section */}
        <h2 className="font-semibold mb-2 text-gray-700">Invoice</h2>

        {invoiceItems.map((item, index) => (
          <div key={index} className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 shadow-sm"
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.qty}
              onChange={(e) => handleChange(index, "qty", e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 shadow-sm"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleChange(index, "price", e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 shadow-sm"
            />
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mb-4">
          <button
            onClick={addItem}
            className="flex items-center gap-1 bg-gray-700 text-white px-4 py-2 rounded-full text-sm shadow-md"
          >
            <Plus size={16} /> Add Another
          </button>
          <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm shadow-md">
            Done
          </button>
        </div>

        {/* Terms and Additional Requirements */}
        <div className="mb-3">
          <label className="text-sm text-gray-600">
            Terms & conduction's
          </label>
          <textarea
            placeholder="Filled dffdfd sdfsdfsddfsd"
            className="w-full p-2 rounded-lg border border-gray-300 shadow-sm resize-none mt-1"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="text-sm text-gray-600">
            Additional requirements
          </label>
          <textarea
            placeholder="Filled dffdfd sdfsdfsddfsd"
            className="w-full p-2 rounded-lg border border-gray-300 shadow-sm resize-none mt-1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInvoiceForm;
