import ServiceRequestDetails from "../../Components/ServiceRequestDetails"
import ComplaintForm from "../../Components/ComplaintForm"
import ProfileHeader from "../../Components/ProfileHeader"

const Complaint = () => {
    return (
        <div className="min-h-screen">
            <ProfileHeader heading="Complaint" />
            <div className="px-8 py-4 md:py-8 mx-auto bg-gray-300  space-y-8">
                <ServiceRequestDetails />
                <ComplaintForm />
            </div>
        </div>
    )
}

export default Complaint;