import "./index.css"
import Categories from "../Categories";
import HeadingAndSeeAll from "../HeadingAndSeeAll";
import cleaning from "../../assets/Images/cleaning.png"
import Electronic from "../../assets/Images/Electronic.png"
import Pickup from "../../assets/Images/Pickup&Delivery.png"
import Beauty from "../../assets/Images/Beauty.png"
import buissnessServices from "../../assets/Images/buissnessServices.png"
import Party from "../../assets/Images/Party&Event.png"
import Technology from "../../assets/Images/TechnologyServices.png"
import Laundary from "../../assets/Images/Laundary.png"
import HomeAppliancesRepair from "../../assets/Images/HomeAppliancesRepair.png"
import Health from "../../assets/Images/Health.png"

const categoryList = [
    {
        id: 1,
        name: "Cleaning",
        ImgUrl: cleaning
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
        ImgUrl: buissnessServices
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
        ImgUrl: HomeAppliancesRepair
    },
    {
        id: 10,
        name: "Laundry Service",
        ImgUrl: Laundary
    },
] 

const CategoriesContainer = () => {
    return (
        <div className="mx-8 md:mx-12 md:my-4">
            <HeadingAndSeeAll heading="Service Category" />
            <div className="flex overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {
                    categoryList.map(each => <Categories name={each.name} imgUrl={each.ImgUrl} />)
                }
            </div>
        </div>
    )
}

export default CategoriesContainer
