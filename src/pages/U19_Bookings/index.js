import AppHeader from "../../Components/AppHeader";
import ScheduledCard from "../../Components/ScheduledCard";
import BookedItem from "../../Components/BookedItem";
import BottomNavbar from "../../Components/BottomNavbar"

const Bookings = () => {
    return (
        <div className="bg-gray-300 min-h-screen pb-14">
            <AppHeader heading="BOOKINGS" />
            <div className="px-8">
                <BookedItem />
                <ScheduledCard />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default Bookings