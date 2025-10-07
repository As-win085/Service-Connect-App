import "./index.css"
import Categories from "../Categories";
import HeadingAndSeeAll from "../HeadingAndSeeAll";
import cleaning from "../../assets/Images/cleaning.png"
import Electronic from "../../assets/Images/Electronic.png"
import Pickup from "../../assets/Images/Pickup&Delivery.png"
import Beauty from "../../assets/Images/Beauty.png"

const categoryList = [
    {
        id: 1,
        name: "Cleaning",
        ImgUrl: {cleaning}
    },
    {
        id: 2,
        name: "Electrical",
        ImgUrl: {Electronic}
    },
    {
        id: 3,
        name: "Delivery",
        ImgUrl: {Pickup}
    },
    {
        id: 4,
        name: "Beauty",
        ImgUrl: {Beauty}
    },
] 

const CategoriesContainer = () => {
    return (
        <div className="p-2 md:p-4">
            <HeadingAndSeeAll heading="SERVICE CATEGORY" />
            <div className="flex overflow-auto justify-between">
                {
                    categoryList.map(each => <Categories name={each.name} imgUrl={cleaning} />)
                }
            </div>
        </div>
    )
}

export default CategoriesContainer
