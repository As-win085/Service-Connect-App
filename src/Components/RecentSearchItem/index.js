import "./index.css"
import { X } from "lucide-react"

const RecentItems = (props) => {
    const {search} = props
    return (
        <div className="w-full  flex justify-between bg-white my-2">
            <p className="text-xs md:text-sm text-gray-400 ">{search}</p>
            <X className="text-gray-400 h-4 w-4 md:h-6 md:w-6" />
        </div>
    )
}

export default RecentItems