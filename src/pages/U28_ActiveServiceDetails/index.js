import ProfileHeader from "../../Components/ProfileHeader"
import ServiceRequest from "../../Components/ServiceRequest"
import ServiceReceipt from "../../Components/ServiceReciept" 
import ComplaintForm from "../../Components/ComplaintForm"

const ActiveServiceDetails = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="SERVICE DETAILS" />
            <div className='bg-gray-300 py-4 md:py-6 pb-14'>
                <ServiceRequest ButtonName="Completed" />
                <ServiceReceipt />
                <ComplaintForm />
            </div>
        </div>
    )
}

export default ActiveServiceDetails