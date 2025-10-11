const ReviewItem = ({ name, rating, comment, likes, timeAgo, avatarUrl }) => {
    return (
        <div className="border-b border-gray-100 py-4 last:border-b-0">
            {/* Review Header (Name, Avatar, Rating) */}
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-3">
                    {/* Avatar */}
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={avatarUrl}
                        alt={`${name}'s avatar`}
                    />
                    {/* Name */}
                    <p className="text-base font-semibold text-gray-800">
                        {name}
                    </p>
                </div>
                
                {/* Rating Badge */}
                <div className="flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200">
                    {/* Star Icon (Placeholder) */}
                    <span className="mr-1 text-yellow-500">★</span> 
                    {rating}
                </div>
            </div>

            {/* Review Comment */}
            <p className="text-sm text-gray-600 pl-14 leading-relaxed mb-3">
                {comment}
            </p>

            {/* Footer (Likes and Time Ago) */}
            <div className="flex items-center space-x-6 pl-14">
                {/* Likes */}
                <div className="flex items-center space-x-1 text-sm font-medium text-gray-500">
                    {/* Heart Icon (Placeholder) */}
                    <span className="text-red-500">
                        &hearts; {/* HTML entity for heart */}
                    </span>
                    <span className="text-red-600">{likes}</span>
                </div>
                
                {/* Time Ago */}
                <span className="text-sm text-gray-500">
                    {timeAgo}
                </span>
            </div>
        </div>
    );
};

export default ReviewItem;