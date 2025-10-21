import ProviderProfile from "../ProviderProfile"
import InvoiceFormItem from "../InvoiceFormItem"
import RequestDetailsCard from "../RequestDetailsCard"
import ConfirmButton from "../ConfirmButton"
import BookingReceipt from "../BookingReceipt"

const InvoiceForm = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto pt-4 pb-8">
            <ProviderProfile />
            <p className="text-xs text-gray-400">Booking id : 12aa21w</p>
            <RequestDetailsCard />
            <InvoiceFormItem />
            <BookingReceipt />
            <div>
                <ConfirmButton ButtonName="Confirm" />
            </div>
        </div>
    )
}

export default InvoiceForm