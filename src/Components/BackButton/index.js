import "./index.css"
import { Search, SlidersHorizontal,MoveLeft  } from "lucide-react";

const BackButton = (props) => {
    const {name} = props
    return (
        <div className="flex  items-center  p-4 bg-white md:px-12 mx-4">
            <MoveLeft className="text-black rounded-full w-6 h-6 m-1 md:w-6 md:h-6 mx-2 md:mx-4" />
            <p className="m-1 text-black font-bold md:text-md md:m-2">{name}</p>
        </div>
    )
}

export default BackButton