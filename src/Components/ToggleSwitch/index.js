import React, { useState } from "react";

const ToggleSwitch = ({b1,b2}) => {
  const [active, setActive] = useState("Ongoing");

  return (
    <div className="flex rounded-full p-1 w-full md:w-2/3 lg:w-1/2 mx-auto mb-4 md:mb-6 shadow bg-gray-500">
      <button
        onClick={() => setActive("Ongoing")}
        className={`flex-1 text-center py-2 rounded-full font-semibold transition-all duration-300 ${
          active === "Ongoing"
            ? "bg-white text-purple-900 shadow"
            : "text-white"
        }`}
      >
        {b1 || "Ongoing"}
      </button>

      <button
        onClick={() => setActive("Completed")}
        className={`flex-1 text-center py-2 rounded-full font-semibold transition-all duration-300 ${
          active === "Completed"
            ? "bg-white text-purple-900 shadow"
            : "text-white"
        }`}
      >
        {b2 || "Completed"}
      </button>
    </div>
  );
};

export default ToggleSwitch;
