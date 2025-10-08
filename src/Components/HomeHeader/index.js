import "./index.css"
import Avatar from "../../assets/Images/Avatar.png";
import { BellDot } from "lucide-react";

const HomeHeader = () => {
    return (
        <div className="flex justify-between p-4 bg-black md:px-12">
            <div className="flex justify-between items-center">
                <span className="m-1 text-white font-bold md:text-2xl md:m-2">☰</span>
                <p className="m-1 text-white font-bold md:text-2xl md:m-2">SERVICE CONNECT</p>
            </div>
            <div className="flex justify-between items-center">
                <BellDot className="text-white rounded-full w-6 h-6 m-1 md:w-10 md:h-10 mx-2 md:mx-4" />
                <img src={Avatar} className="rounded-full w-6 h-6 m-1 md:w-10 md:h-10" alt="avatar" />
            </div>
        </div>
    )
}

export default HomeHeader