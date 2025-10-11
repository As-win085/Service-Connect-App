import React from 'react';
// Placeholders for icons (Replace with actual icons from 'react-icons' or similar)

const GalleryIcon = () => (
    <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm2 2h10v8l-2.25-2.25a.75.75 0 00-1.06 0L10 16l-3-3V7zM9 9a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
);

const VideoIcon = () => (
    <svg className="w-8 h-8 text-gray-700 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55 3.33a.75.75 0 010 1.34L15 18M3 8V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m10-7l-4 4-4-4" />
    </svg>
);

// --- Reusable Media Card Component ---
const MediaCard = ({ title, IconComponent, count }) => {
    // Create an array of length 'count' to map over and display icons
    const icons = Array(count).fill(0);

    return (
        <div className="p-4 bg-white rounded-xl shadow-xl mb-4">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">{title}</h2>
            <div className="grid grid-cols-4 gap-4">
                {icons.map((_, index) => (
                    <div key={index} className="flex justify-center items-center p-2">
                        <IconComponent />
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main Media and Booking Component ---
const MediaAndBookingCard = () => {
    return (
        <div className="max-w-md mx-auto p-4 space-y-4">
            
            {/* 1. Images Section */}
            <MediaCard 
                title="Images" 
                IconComponent={GalleryIcon} 
                count={8} // 4 columns x 2 rows
            />

            {/* 2. Videos Section */}
            <MediaCard 
                title="Images" // Keeping the title as per the image, though it contains video icons
                IconComponent={VideoIcon} 
                count={8} // 4 columns x 2 rows
            />

            {/* 3. Book Service Button */}
            <button 
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-800 text-white rounded-xl shadow-lg transition duration-200 hover:bg-gray-700"
            >
                <span className="text-lg font-semibold tracking-wide">
                    Book service
                </span>
                {/* Arrow Icon */}
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>
    );
};

export default MediaAndBookingCard;

