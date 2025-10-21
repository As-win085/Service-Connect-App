import RequestDetailsCard from "../../Components/RequestDetailsCard"
import Bookingreceipt from '../../Components/BookingReceipt'
import ProviderLocation from "../../Components/ProviderLocation"
import Profileheader from "../../Components/ProfileHeader"

const BookingDetails = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto py-4">
            <ProviderLocation />
            <RequestDetailsCard />
            <Bookingreceipt />
            <div className="flex flex-col justify-center items-center">
                <button className="bg-green-800 mx-2 text-white py-3 px-6 rounded-full shadow-md w-full max-w-md my-2">Complete</button>
                <button className="bg-red-800 mx-2 text-white py-3 px-6 rounded-full shadow-md w-full max-w-md my-2">Register Complaint</button>
                <button className="bg-red-800 mx-2 text-white py-3 px-6 rounded-full shadow-md w-full max-w-md my-2">Declain</button>
            </div>
        </div>
    )
}

export default BookingDetails