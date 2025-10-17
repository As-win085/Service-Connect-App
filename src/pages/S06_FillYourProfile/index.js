import ProfileForm  from "../../Components/profileForm"
import ProfileHeader from "../../Components/ProfileHeader"

const ProfileCreationPage = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="FILL YOUR PROFILE" />
            <ProfileForm />
        </div>
    )
}

export default ProfileCreationPage