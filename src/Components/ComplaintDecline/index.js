import React from 'react';

const ComplaintForm = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-2/3 mx-auto flex items-center justify-center">
      <div className="w-full  rounded-xl l  space-y-4">

        {/* Title Input Card */}
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
          <label htmlFor="title" className="block text-xs font-medium text-gray-500 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full text-lg font-semibold text-gray-800 focus:outline-none focus:ring-0 border-none p-0 bg-transparent"
            placeholder="Miss Behave"
            defaultValue="Miss Behave"
          />
        </div>

        {/* Description Textarea Card */}
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
          <label htmlFor="description" className="block text-xs font-medium text-gray-500 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows="5"
            className="w-full text-base text-gray-700 focus:outline-none focus:ring-0 border-none p-0 resize-none bg-transparent"
            placeholder="Filled dffdfd sdfsdfsddfsd"
            defaultValue="Filled dffdfd sdfsdfsddfsd"
          ></textarea>
        </div>

        {/* Images & Videos Placeholder Card */}
        <div className=" p-4 bg-white border border-gray-300 rounded-full shadow-sm flex justify-between items-center">
          <span className="text-gray-500 font-medium">Images & Videos</span>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Upload Images and Videos"
          >
            {/* Simple Camera/Image Icon - Replace with an actual SVG icon if needed */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            
            </svg>
          </button>
        </div>

        <div className='mx-auto flex justify-center'>
            <button
            type="submit"
            className="w-full mx-auto md:w-3/4 lg:w-2/3 py-3 mt-8 text-white font-bold text-lg rounded-full shadow-lg transition duration-150 ease-in-out"
            style={{ backgroundColor: '#8B0000', hoverBackgroundColor: '#6e0000' }}
            >
            Decline
            </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;