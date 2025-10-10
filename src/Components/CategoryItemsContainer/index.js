import "./index.css";
import All from "../../assets/Images/All.png";
import Pickup from "../../assets/Images/Pickup&Delivery.png";
import Health from "../../assets/Images/Health.png";
import HomeAppliances from "../../assets/Images/HomeAppliancesRepair.png";
import Laundry from "../../assets/Images/Laundary.png";
import BuissnessService from "../../assets/Images/buissnessServices.png";
import Party from "../../assets/Images/Party&Event.png";
import Cleaning from "../../assets/Images/cleaning.png";
import Electronic from "../../assets/Images/Electronic.png";
import Technology from "../../assets/Images/TechnologyServices.png";
import Beauty from "../../assets/Images/Beauty.png";

import CategoryItem from "../CategoryItem"

const categoryList = [
    {
        id: 0,
        name: "All",
        ImgUrl: All
    },
    {   
        id: 1,
        name: "Cleaning",
        ImgUrl: Cleaning
    },
    {
        id: 2,
        name: "Electrical",
        ImgUrl: Electronic
    },
    {
        id: 3,
        name: "Delivery",
        ImgUrl: Pickup
    },
    {
        id: 4,
        name: "Beauty",
        ImgUrl: Beauty
    },
    {
        id: 5,
        name: "Buissness Services",
        ImgUrl: BuissnessService
    },
    {
        id: 6,
        name: "Events and Parties",
        ImgUrl: Party
    },
    {
        id: 7,
        name: "Technology Services",
        ImgUrl: Technology
    },
    {
        id: 8,
        name: "Health and Fitness",
        ImgUrl: Health
    },
    {
        id: 9,
        name: "Home Appliance Repair",
        ImgUrl: HomeAppliances
    },
    {
        id: 10,
        name: "Laundry Service",
        ImgUrl: Laundry
    },
] 



const CategoryItemsContainer = () => {
  return (
    <div className="py-5 md:py-12 bg-gray-300 flex flex-wrap justify-center p-2 md:p-4 lg:p-6 min-h-screen">
        {
            categoryList.map(each => <CategoryItem name={each.name} imgUrl={each.ImgUrl} />)
                
        }
    </div>
  )
}

export default CategoryItemsContainer