import ProfileHeader from "../../Components/ProfileHeader"
import UserProfile from "../../Components/UserProfile"
import BottomNavbar from "../../Components/BottomNavbar"

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-300 pb-20">
            <ProfileHeader heading="PROFILE" />
            <div className="px-8 pt-8">
                <UserProfile />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default Profile