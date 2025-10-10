import "./index.css"
import { X } from "lucide-react"

const RecentItems = (props) => {
    const {search} = props
    return (
        <div className="w-full flex justify-between bg-white my-2">
            <p className="text-xs md:text-sm text-gray-400 ">{search}</p>
            <X className="text-gray-400 h-6 w-6 md:h-8 md:w-8" />
        </div>
    )
}

export default RecentItems