import AdsLists from "../../Components/AdsLists"
import BottomNavbar from "../../Components/BottomNavbar"
import AppHeader from "../../Components/AppHeader"

const AdsManagement = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AppHeader heading="ADS MANAGEMENT" />
            <div className="px-8 pt-4 pb-10">
                <AdsLists />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default AdsManagement