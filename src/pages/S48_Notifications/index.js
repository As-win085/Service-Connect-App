import NotificationList from "../../Components/NotificationList"
import ProfileHeader from "../../Components/ProfileHeader"

const Notifications = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="NOTIFICATIONS" />
            <div className="mx-8 py-8">
                <NotificationList />
            </div>
        </div>
    )
}

export default Notifications