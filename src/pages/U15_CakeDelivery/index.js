import "./index.css"
import DeliveryLocationDetails from "../../Components/DeliveryLocationDetails"
import BottomNavbar from "../../Components/BottomNavbar"
import AppHeader from "../../Components/AppHeader"
import Banner from "../../Components/Banner"
import RequestItem from "../../Components/RequestItemsContainer"

const CakeDelivery = () => {
    return (
        <div>
            <AppHeader heading="CAKE DELIVERY" />
            <DeliveryLocationDetails />
            <Banner /> 
            <RequestItem />
            <BottomNavbar />     
        </div>

    )
}

export default CakeDelivery