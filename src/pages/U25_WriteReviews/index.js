import CourseItem from '../../Components/CourseItem'
import ProfileHeader from '../../Components/ProfileHeader'
import ReviewForm from '../../Components/ReviewForm'


const WriteReviews = () => {
    return (
        <div>
            <ProfileHeader heading="Review" />
            <div className='bg-gray-300 py-4 md:py-6'>
                <CourseItem />
                <ReviewForm />
            </div>
        </div>
    )
}

export default WriteReviews