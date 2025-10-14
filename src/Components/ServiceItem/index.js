import React from 'react';


const CourseCard = ({ category, title, rating, isCompleted = true }) => {
  return (
    <div className="flex w-full md:w-1/3 overflow-hidden rounded-xl bg-white shadow-xl pr-6">
      <div className="w-1/3 bg-black">
      </div>
      <div className="relative w-2/3 p-4">
        {isCompleted && (
          <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-green-500 p-1">
            
            <div className="h-full w-full border-b-2 border-r-2 border-white transform rotate-45 translate-x-0.5 translate-y-[-0.05rem]"></div>
            
          </div>
        )}
        <p className="text-sm font-semibold text-orange-600 uppercase mb-1">
          {category}
        </p>
        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
          {title}
        </h2>
        <div className="flex items-center space-x-1">
          <span className="text-xl text-yellow-400">★</span>
          <span className="text-lg font-bold text-gray-700">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;