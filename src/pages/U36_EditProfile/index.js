import ProfileHeader from "../../Components/ProfileHeader"
import UserProfileEditForm from "../../Components/UserProfileEditForm"

const EditProfile = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <ProfileHeader heading="EDIT PROFILE" />
            <div className="py-4 md:py-8">
                <UserProfileEditForm />
            </div>
        </div>
    )
}

export default EditProfile