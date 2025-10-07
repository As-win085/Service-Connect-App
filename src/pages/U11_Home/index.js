import "./index.css"
import HomeHeader from "../../Components/HomeHeader"
import SearchBar from "../../Components/SearchBar"
import Banner from "../../Components/Banner"
import OfferCarousel from "../../Components/OfferCarousel"
import CategoriesContainer from "../../Components/Categoriescontainer"
import PopularServiceContainer from "../../Components/PopularServiceContainer"
import ServiceProviderContainer from "../../Components/serviceProviderContainer"
import BottomNavbar from "../../Components/BottomNavbar"


const U11_Home = () => {
    return (
        <div>
            <HomeHeader />
            <SearchBar />
            <Banner />
            <OfferCarousel />
            <CategoriesContainer />
            <PopularServiceContainer />
            <ServiceProviderContainer />
            <BottomNavbar />
        </div>
    )
}

export default U11_Home