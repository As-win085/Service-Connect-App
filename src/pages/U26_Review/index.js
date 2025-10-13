import ProfileHeader from "../../Components/ProfileHeader"
import Reviews from "../../Components/Reviews"

const Review = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="REVIEWS" />
            <div className='bg-gray-300 py-4 md:py-6 pb-14'>
                <Reviews />
                
            </div>
        </div>
    )
}

export default Review