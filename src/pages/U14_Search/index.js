import "./index.css";
import BackButton from "../../Components/BackButton";
import SearchBar from "../../Components/SearchBar";
import Heading from "../../Components/HeadingAndSeeAll"
import RecentSearchItem from "../../Components/RecentSearch"

const Search = () => {
    return (
        <div>
            <BackButton name="SEARCH" />
            <SearchBar />
            <div className=" mx-8 mt-12">
                <Heading heading="Recent Search" />
                <RecentSearchItem />
            </div>
        </div>
    )
}

export default Search