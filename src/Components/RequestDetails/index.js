import RequestDetailsCard from "../RequestDetailsCard"
import ProviderProfile from "../ProviderProfile"
import ConfirmButton from "../ConfirmButton"

const RequestDetails = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <ProviderProfile />
            <p className="text-gray-400 my-2 text-xs font-semibold">Booking id : 12aa21w</p>
            <RequestDetailsCard />
            <div className="w-full ">
                <ConfirmButton ButtonName="Accept & Schedule" />
                <button className="bg-red-800 rounded-full text-white w-full my-2 py-3 px-6 md:text-lg" type="button">Decline</button>
            </div>
        </div>
    )
}

export default RequestDetails