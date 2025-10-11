import ReviewItem from "../ReviewItem";



const reviewsData = [
    {
        name: 'William S. Cunningham',
        rating: 4.5,
        comment: 'The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitias dixit parab les esse, quod parvo',
        likes: 578,
        timeAgo: '2 Weeks Agos',
        avatarUrl: 'https://i.pravatar.cc/150?img=68', 
    },
    {
        name: 'Martha E. Thompson',
        rating: 4.5,
        comment: 'The Course is Very Good dolor sit amet, consect tur adipiscing elit. Naturales divitias dixit parab les esse, quod parvo',
        likes: 578,
        timeAgo: '2 Weeks Agos',
        avatarUrl: 'https://i.pravatar.cc/150?img=47', 
    },
    
];


const ReviewsCard = () => {
    // Dummy Data for the reviews (Use actual image paths in a real application)


    return (
        <div className="w-8/10 md:w-3/4 lg:w-2/3 mx-auto p-6 bg-white rounded-xl shadow-2xl">
            {/* Card Header (Title and See All Link) */}
            <div className="flex justify-between items-center mb-4 pb-2">
                <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
                <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out">
                    SEE ALL
                    {/* Arrow Icon (Placeholder) */}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-0">
                {reviewsData.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsCard;

