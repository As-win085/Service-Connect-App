import ProfileHeader from "../../Components/ProfileHeader"
import ViewContactCard from "../../Components/ViewContact"

const ViewContact = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="LEAD DETAILS" />
            <div className="px-8 pt-4 pb-10">
                <ViewContactCard />
            </div>
        </div>
    )
}

export default ViewContact