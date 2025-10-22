import "./index.css"
import DeliveryLocationDetails from "../../Components/DeliveryLocationDetails"
import BottomNavbar from "../../Components/BottomNavbar"
import AppHeader from "../../Components/AppHeader"
import Banner from "../../Components/Banner"
import RequestItem from "../../Components/RequestItemsContainer"

const CakeDelivery = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AppHeader heading="CAKE DELIVERY" />
            <div className="px-4">
                <DeliveryLocationDetails />
                <div className="w-full md:w-2/3 lg:w-2/3 mx-auto">
                    <Banner /> 
                </div>
                <RequestItem />
                <BottomNavbar />     
            </div>    
        </div>

    )
}

export default CakeDelivery