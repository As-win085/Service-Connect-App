import Review from "../Review"
import ReviewContainer from "../ReviewContainer"

const Reviews = () => {
    return (
        <div>
            <Review />
            <div className="flex flex-wrap items-center justify-center">
                <ReviewContainer />
                <ReviewContainer />
                <ReviewContainer />
                <ReviewContainer />
                <ReviewContainer />
                <ReviewContainer />
                <ReviewContainer />
            </div>
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
                <button className="bg-gray-900 py-2 md:py-4 text-md md:text-lg text-white px-4 md:px-8 rounded-full md:w-1/2">Write a Review</button>
            </div>
        </div>
    )
}

export default Reviews