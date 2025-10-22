import ProfileHeader from "../../Components/ProfileHeader"
import ServiceLeadDetails from "../../Components/ServiceLeadDetails"

const ServiceDetails = () => {
    return (
        <div className="min-h-screen bg-gray-300 ">
            <ProfileHeader heading="LEAD DETAILS" />
            <div className="px-8 pt-4 pb-10">
                <ServiceLeadDetails />
            </div>
        </div>
    )
}

export default ServiceDetails