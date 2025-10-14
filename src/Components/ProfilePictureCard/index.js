import React from 'react';

const UserProfileImage = ({ imageUrl, altText }) => {
  return (
    <div className="relative inline-block">
      <div className="bg-gray-100 pt-10 pb-4 px-10 rounded-t-3xl sm:rounded-3xl">
        <div className="relative w-40 h-40 mx-auto">
          <div className="rounded-full overflow-hidden w-full h-full border-4 border-teal-700">
            <img
              src={imageUrl || 'placeholder-image-url'} 
              alt={altText || 'User Profile'}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            className="absolute bottom-0 right-0 p-2 bg-white rounded-xl border-2 border-teal-700 shadow-lg text-teal-700 hover:bg-teal-50 transition duration-300 ease-in-out"
            aria-label="Change profile picture"
            onClick={() => console.log('Image edit clicked')} 
          >
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
      </div>
    </div>
  );
};


export default UserProfileImage;