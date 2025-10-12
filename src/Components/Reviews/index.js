import Review from "../Review""

const Reviews = () => {
    return (
        <div>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
                <button className="bg-gray-900 py-2 md:py-4 text-sm md:text-md">Write a Review</button>
            </div>
        </div>
    )
}