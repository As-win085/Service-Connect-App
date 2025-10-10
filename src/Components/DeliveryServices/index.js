import "./index.css";
import CategoryItem from "../CategoryItem";
import Delivery from "../../assets/Images/Pickup&Delivery.png"; 
import Cake from "../../assets/Images/Cake.png";
import Bouqet from "../../assets/Images/Bouqet.png";
import Packegers from "../../assets/Images/Pakagers.png";

const category = [
    {
        id: 0,
        name: "BOUQET DELIVERY",
        ImgUrl: Bouqet
    },
    {
        id: 1,
        name: "CAKE DELIVERY",
        ImgUrl: Cake
    },
    {
        id: 2,
        name: "DRIVERS",
        ImgUrl: Bouqet
    },
    {
        id: 3,
        name: "PACKAGES & MOVERS",
        ImgUrl: Packegers
    },
    {
        id: 4,
        name: "PICKUP & DELIVERY",
        ImgUrl: Delivery
    }
]

const DeliveryServices = () => {
    return (
        <div className="py-5 md:py-12 bg-gray-300 flex flex-wrap justify p-2 md:p-4 lg:p-6 mx-auto">
        {
            category.map(each => <CategoryItem name={each.name} imgUrl={each.ImgUrl} />)
                
        }
    </div>
        )
} 

export default DeliveryServices