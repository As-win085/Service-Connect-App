import AppHeader from "../../Components/AppHeader"
import ServiceBookinglists from "../../Components/ServiceBookingLists"
import BottomNavbar from "../../Components/BottomNavbar"

const Bookings = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AppHeader heading="BOOKINGS" />
            <div className="pt-8 px-8">
                <ServiceBookinglists />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default Bookings