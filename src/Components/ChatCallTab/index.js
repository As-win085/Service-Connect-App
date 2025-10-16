import React from "react";

const TabSwitch = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-gray-300 m-3 p-1 rounded-xl">
      <button
        onClick={() => setActiveTab("chat")}
        className={`w-1/2 py-2 rounded-xl font-semibold transition-all duration-200 ${
          activeTab === "chat"
            ? "bg-white text-gray-900 shadow"
            : "text-gray-600"
        }`}
      >
        Chat
      </button>
      <button
        onClick={() => setActiveTab("call")}
        className={`w-1/2 py-2 rounded-xl font-semibold transition-all duration-200 ${
          activeTab === "call"
            ? "bg-white text-gray-900 shadow"
            : "text-gray-600"
        }`}
      >
        Call
      </button>
    </div>
  );
};

export default TabSwitch;
