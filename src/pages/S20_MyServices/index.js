import RegisteredServiceList from "../../Components/RegisteredServiceList"
import BottomNavbar from "../../Components/BottomNavbar"
import AppHeader from "../../Components/AppHeader"

const MyServices = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <AppHeader heading="REGISTERED SERVICES" />
            <div>
                <RegisteredServiceList />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default MyServices