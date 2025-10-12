import React, { useState } from 'react';

const StarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${props.className}`} 
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.597 21.49c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clipRule="evenodd" />
  </svg>
);

const ReviewSummary = ({ averageRating = 4.2, totalReviews = 674 }) => {
  const [selectedFilter, setSelectedFilter] = useState('Excellent');
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={i < fullStars ? 'text-orange-400' : 'text-gray-300'} // Orange for filled, gray for empty
        />
      );
    }
    return stars;
  };

  const filters = ['Excellent', 'Good', 'Average', 'Below Average'];

  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-center p-4 sm:p-8">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg sm:p-8 text-center">
        
        {/* Average Rating */}
        <p className="text-6xl font-extrabold text-gray-900 mb-2">
          {averageRating}
        </p>
        <div className="flex justify-center items-center mb-3 space-x-0.5">
          {renderStars(averageRating)}
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Based on {totalReviews} Reviews
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`
                px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ease-in-out
                ${selectedFilter === filter
                  ? 'bg-gray-900 text-white shadow-md' // Active state
                  : 'bg-white text-gray-700 border border-gray-300 shadow-sm hover:border-gray-400 hover:bg-gray-50' // Inactive state
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
