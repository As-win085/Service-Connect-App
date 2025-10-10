import "./index.css"
import RecentSearchItem from "../RecentSearchItem"

const searchItems = ["3D Design", "Graphic Design", "Programming", "SEO & Marketing", "Web Development", "Office Productivity","Personal Development", "Finance & Accounting", "HR Management"]

const RecentSearch = () => {
    return (
        <div className="">
            {
                searchItems.map(each => <RecentSearchItem search={each} />)
            }
        </div>
    )
}

export default RecentSearch