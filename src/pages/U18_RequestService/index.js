import "./index.css"
import ServiceHeader from "../../Components/ServiceHeader"
import ServiceRequest from "../../Components/ServiceRequest"
import ConfirmButton from "../../Components/ConfirmButton"

const RequestService = () => {
    return (
        <div className="bg-gray-300 mb-10">
            <ServiceHeader heading="REQUEST SERVICE" />
            <ServiceRequest />
            <div className="my-2 md:my-4">
                <ConfirmButton ButtonName="Confirm" />
            </div>
        </div>
    )
}

export default RequestService