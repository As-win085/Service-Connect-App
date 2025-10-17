import React from "react";
import { Plus, Pencil, ChevronDown, Square, RotateCcw, PlusCircle, HelpCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "House Electrical",
    subtitle: "Boost service",
    status: "Active",
    statusColor: "text-green-600",
    bgStatus: "text-green-600",
    description: "",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    title: "Plumbing",
    subtitle: "Boost service",
    status: "Active",
    statusColor: "text-green-600",
    bgStatus: "text-green-600",
    description: "",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    title: "Landscaping",
    subtitle: "Boost service",
    status: "Active",
    statusColor: "text-green-600",
    bgStatus: "text-green-600",
    description: "Available Lead Balance : 42",
    image: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    title: "Construction",
    subtitle: "Disabled due to insufficient Lead Balance",
    status: "Disabled",
    statusColor: "text-red-600",
    bgStatus: "text-red-600",
    description: "",
    image: "https://i.pravatar.cc/40?img=4",
  },
];

const ServiceList = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center py-4 w-full mx-8 md:w-2/3 lg:w-1/2 md:mx-auto">

      {/* Add New Service Button */}
      <button className="bg-[#1c1c1c] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 w-full mb-4 hover:bg-black">
        <Plus size={18} /> ADD NEW SERVICE
      </button>

      {/* Service Cards */}
      <div className="flex flex-col gap-3 w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white flex items-center justify-between rounded-2xl p-3 shadow-sm"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              <img
                src={service.image}
                alt={service.title}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-gray-900 text-sm">{service.title}</p>
                  <Pencil size={14} className="text-gray-700" />
                </div>
                <p className="text-xs text-gray-500">{service.subtitle}</p>
                {service.description && (
                  <p className="text-xs text-green-600">{service.description}</p>
                )}
              </div>
            </div>

            {/* Right side (status) */}
            <div className="flex flex-col items-end">
              <p className={`text-sm font-semibold ${service.statusColor}`}>
                {service.status} <ChevronDown size={14} className="inline" />
              </p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ServiceList;
