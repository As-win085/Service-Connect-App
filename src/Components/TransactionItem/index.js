import React from "react";

const CourseCard = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-md p-4 w-full md:w-1/3  md:mx-auto my-2 mx-2">
      {/* Left Icon / Image */}
      <div className="w-16 h-16 rounded-xl bg-black mr-4"></div>

      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#1a1b3a]">
          Build Personal Branding
        </h3>
        <p className="text-gray-500 text-sm mb-2">Web Designer</p>

        {/* Status Badge */}
        <span className="bg-teal-700 text-white text-xs font-medium px-3 py-1 rounded-md shadow">
          Paid
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
