import "./index.css"
import Avatar from "../../assets/Images/Avatar.png";
import { MoveLeft  } from "lucide-react";

const ServiceHeader = () => {
    return (
        <div className="flex justify-between p-4 bg-black md:px-12">
            <div className="flex justify-between items-center">
                <MoveLeft className="text-white rounded-full w-6 h-6 m-1 md:w-10 md:h-10 mx-2 md:mx-4" />
                <p className="m-1 text-white font-bold md:text-2xl md:m-2">SERVICE CONNECT</p>
            </div>
        </div>
    )
}

export default ServiceHeader