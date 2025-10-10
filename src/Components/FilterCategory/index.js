import "./index.css"
import CheckBox from "../CheckBox"

const FilterCategory = (props) => {
    const {FilterItems,heading} = props
    return (
        <div className="my-2 md:my-4 w-full mx-4 md:mx-8">
            <h2>{heading}</h2>
            <div className="">
                {
                    FilterItems.map(each => <CheckBox name={each} />)
                }
            </div>
        </div>
    )
}

export default FilterCategory