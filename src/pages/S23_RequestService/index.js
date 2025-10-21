import ProfileHeader from "../../Components/ProfileHeader"
import Requestdetails from "../../Components/RequestDetails"

const RequestService = () => {
    return (
        <div className="bg-gray-300 min-h-screen ">
            <ProfileHeader heading="REQUEST DETAILS" />
            <div className="px-8 pt-4 pb-8">
                <Requestdetails />
            </div>
        </div>
    )
}

export default RequestService