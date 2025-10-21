import ProviderHeader from '../../Components/ProfileHeader'
import BookingDetails from "../../Components/BookingDetails"

const ServiceDetails = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProviderHeader heading="BOOKING DETAILS" />
            <div className="px-8 pt-4 pb-8">
                <BookingDetails />
            </div>
        </div>
    )
}

export default ServiceDetails