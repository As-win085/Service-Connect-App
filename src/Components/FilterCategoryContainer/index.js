import "./index.css"
import FilterCategory from "../FilterCategory"

const categoryItem = ["xxxxxxx", "xxxxxxx","xxxxxxx","xxxxxxx","xxxxxxx","xxxxxxx",]

const FilterCategoryContainer = () => {
    return (
        <div className="mx-8 md:w-1/2 lg:w-1/3 my-4 md:my-6 flex flex-col items-center justify-center">
            <div className="flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-3 justify-center">
                <FilterCategory heading="SubCategories:" FilterItems={categoryItem} />
                <FilterCategory heading="xxxxxx:" FilterItems={categoryItem} />
                <FilterCategory heading="Price:" FilterItems={categoryItem} />
                <FilterCategory heading="xxxxxxx:" FilterItems={categoryItem} />
                <FilterCategory heading="Rating:" FilterItems={categoryItem} />
                <FilterCategory heading="Duration:" FilterItems={categoryItem} />
            </div>
            <button type="button" className="bg-black text-white my-4 rounded-full px-4 py-2 w-full md:w-1/4 mx-auto">Apply</button>
        </div>
    )
}

export default FilterCategoryContainer