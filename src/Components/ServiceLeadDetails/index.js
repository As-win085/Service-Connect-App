import ProviderLocation from "../ProviderLocation"
import RequestDetailsCard from "../RequestDetailsCard"

const ServiceLeadDetails = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <ProviderLocation />
            <RequestDetailsCard />
            <div className="w-full max-w-md mx-auto">
                <button className="mx-auto mx-auto bg-red-800 font-semibold py-3 px-6 rounded-full shadow-md text-white w-full " type="button">Declain</button>
            </div>
        </div>
    )
}

export default ServiceLeadDetails