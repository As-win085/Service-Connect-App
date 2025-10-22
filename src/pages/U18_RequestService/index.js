import "./index.css"
import ServiceHeader from "../../Components/ProfileHeader"
import ServiceRequest from "../../Components/ServiceRequest"
import ConfirmButton from "../../Components/ConfirmButton"

const RequestService = () => {
    return (
        <div className="bg-gray-300 mb-10">
            <ServiceHeader heading="REQUEST SERVICE" />
            <ServiceRequest showButton = {true} />
            
        </div>
    )
}

export default RequestService