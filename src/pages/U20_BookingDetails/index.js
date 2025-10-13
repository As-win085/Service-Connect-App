import AppHeader from "../../Components/AppHeader"
import ServiceRequest from "../../Components/ServiceRequest"
import BookingReceipt from "../../Components/BookingReceipt"
import ConfirmButton from "../../Components/ConfirmButton"

const BookingDetails = () => {
    return (
        <div className="bg-gray-300 mb-8">
            <AppHeader />
            <div className="px-8">
                <ServiceRequest BookingId = "Booking Id : 12aa21w" ButtonName="Rescheduled Appointment" />
                
                <BookingReceipt />
                <div className="py-2 md:py-4 max-w-sm mx-auto flex justify-center">
                    <ConfirmButton ButtonName="Accept & Pay Full" />
                </div>
                
            </div>
        </div>
    )
}

export default BookingDetails