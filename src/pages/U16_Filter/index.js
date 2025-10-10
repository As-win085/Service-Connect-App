import "./index.css"
import BackButton from "../../Components/BackButton"
import FilterCategoryContainer from "../../Components/FilterCategoryContainer"

const Filter = () => {
    return (
        <div>
            <BackButton name="FILTER" clear="Clear" />
            <FilterCategoryContainer />

        </div>
    )
}

export default Filter