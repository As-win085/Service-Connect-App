import BookingReceipt from "../BookingReceipt"
import ProviderProfile  from "../ProviderProfile"

const ServiceRequestDetails = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-2/3 mx-auto">
            <ProviderProfile />
            <BookingReceipt />
            <div className="py-2 md:py-4  mx-auto flex justify-center">
              <button className="py-2 md:py-4 text-sm md:text-md lg:text-lg bg-gray-900 rounded-full w-full max-w-sm text-white my-2 md-my-4">Service Status</button>
            </div>
            <div className="py-2 md:py-4  mx-auto flex justify-center">
              <button className="py-2 md:py-4 text-sm md:text-md lg:text-lg bg-gray-900 rounded-full w-full max-w-sm text-white my-2 md-my-4">Payment Status</button>
            </div>
        </div>
    )
}

export default ServiceRequestDetails