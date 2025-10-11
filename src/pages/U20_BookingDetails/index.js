import AppHeader from "../../Components/AppHeader"
import ServiceRequest from "../../Components/ServiceRequest"
import BookingReceipt from "../../Components/BookingReceipt"
import ConfirmButton from "../../Components/ConfirmButton"

const BookingDetails = () => {
    return (
        <div className="bg-gray-300 mb-8">
            <AppHeader />
            <div className="px-8">
                <ServiceRequest BookingId = "Booking Id : 12aa21w"/>
                <div className="py-2 md:py-4  mx-auto flex justify-center">
                    <button className="py-2 md:py-4 text-sm md:text-md lg:text-lg bg-gray-900 rounded-full w-full max-w-sm text-white my-2 md-my-4">Reschedule Appointment</button>
                </div>
                <BookingReceipt />
                <div className="py-2 md:py-4 max-w-sm mx-auto flex justify-center">
                    <ConfirmButton ButtonName="Accept & Pay Full" />
                </div>
                
            </div>
        </div>
    )
}

export default BookingDetails