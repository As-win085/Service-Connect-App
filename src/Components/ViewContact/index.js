import ServiceLeadAddress from "../ServiceLeadAddress"
import ProviderLocation from "../ProviderLocation"

const ViewContact = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <ProviderLocation />
            <ServiceLeadAddress />
            <div className="w-full my-4 flex justify-center">
                <button className="bg-green-500 text-white py-2 w-full max-w-md rounded-full mx-auto">Call</button>
            </div>
        </div>
    )
}

export default ViewContact