import "./index.css"
import { MapPin,Pencil } from "lucide-react"

const DeliveryLocationDetails = (props) => {
    return (
        <div className="p-2 md:px-6 lg:px-8">
            <div className="flex items-center">
                <MapPin className="text-black w-4 h-4 mx-1 my-2 md:my-4" />
                <p className="text-sm text-gray-600">[Location Name]</p>
                <Pencil className="text-black w-4 h-4 m-1" />
            </div>
            <div className="mt-2 bg-black w-full md:w-1/2 lg:w-1/3 mx-auto my-2 md:my-4 rounded-full text-white px-4 py-2">
                <p className="text-sm md:text-md text-center">Open Request (Request to Random Accounts)</p>
            </div>
        </div>
    )
}

export default DeliveryLocationDetails