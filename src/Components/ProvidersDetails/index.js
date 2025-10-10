import React from 'react';

const PlumberCard = () => {
  return (
    <div className="mx-8  my-2 md:my-4 w-9/10 md:w-3/4 lg:w-2/3 md:mx-auto p-4 bg-white rounded-xl shadow-lg sm:p-6 border border-gray-100">
      
      {/* Top Section: Distance and Rating */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-md md:text-lg font-semibold text-orange-500">
          3 km away
        </p>
        <div className="flex items-center text-md md:text-lg text-gray-800">
          <span className="text-yellow-500 mr-1 text-xl lg:text-2xl">★</span>
          <span className="font-bold">4.2</span>
          <span className="text-gray-500 ml-2">| 32 Reviews</span>
        </div>
      </div>

      {/* Name and Profession */}
      <div className="mb-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
          William S. Cunningham
        </h1>
        <p className="text-md md:text-xl text-gray-600">
          Plumber
        </p>
      </div>

      {/* Bottom Section: Media and Services */}
      <div className="flex items-center space-x-6 text-gray-600 text-base mt-3">
        
        {/* Videos & Images */}
        <div className="flex items-center">
          {/* Camera/Video Icon (Using a simple Unicode character or a placeholder for an actual icon like Heroicons) */}
          <span className="mr-2 text-md md:text-lg align-middle">
            <span role="img" aria-label="video-camera">🎥</span>
          </span>
          <span className="font-medium whitespace-nowrap text-sm  md:text-md lg:text-lg">
            21 videos & images
          </span>
        </div>

        {/* Separator */}
        <div className="h-5 w-px bg-gray-300 hidden sm:block"></div>
        
        {/* Services Listed */}
        <div className="flex items-center">
          {/* Clock/Service Icon (Using a simple Unicode character or a placeholder for an actual icon like Heroicons) */}
          <span className="mr-2  text-sm  md:text-md lg:text-lg align-middle">
            <span role="img" aria-label="clock">🕑</span> 
          </span>
          <span className="font-medium whitespace-nowrap  text-sm  md:text-md lg:text-lg">
            2 Services listed
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlumberCard;