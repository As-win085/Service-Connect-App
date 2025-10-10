import "./index.css"
import AppHeader from "../../Components/AppHeader"
import CategoryItemsContainer from "../../Components/CategoryItemsContainer"
import BottomNavbar from "../../Components/BottomNavbar"

const AllCategory = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <AppHeader heading="ALL CATEGORY" />
            <CategoryItemsContainer />
            <BottomNavbar />
        </div>

    )
}

export default AllCategory
