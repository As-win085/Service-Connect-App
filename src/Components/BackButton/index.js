import "./index.css"
import { Search, SlidersHorizontal,MoveLeft  } from "lucide-react";

const BackButton = (props) => {
    const {name} = props
    const {clear} = props
    return (
        <div className="flex justify-between items-center  p-4 bg-white md:px-12 mx-4">
            <div className="flex  ">
                <MoveLeft className="text-black rounded-full w-6 h-6 m-1 md:w-6 md:h-6 mx-2 md:mx-4" />
                <p className="m-1 text-black font-bold md:text-md md:m-2">{name}</p>
            </div>
            <p>{clear}</p>
        </div>
    )
}

export default BackButton