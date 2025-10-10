import "./index.css"
import AppHeader from "../../Components/AppHeader"
import DeliveryServices from "../../Components/DeliveryServices"
import BottomNavbar from "../../Components/BottomNavbar"

const AllCategory = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <AppHeader heading="ALL CATEGORY" />
            <DeliveryServices />
            <BottomNavbar />
        </div>

    )
}

export default AllCategory

