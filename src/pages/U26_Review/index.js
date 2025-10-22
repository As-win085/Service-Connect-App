import ProfileHeader from "../../Components/ProfileHeader"
import Reviews from "../../Components/Reviews"

const Review = () => {
    return (
        <div className="bg-gray-300 min-h-screen pb-6">
            <ProfileHeader heading="REVIEWS" />
            <div className='bg-gray-300 py-4 md:py-6 pb-16'>
                <Reviews />
                
            </div>
        </div>
    )
}

export default Review