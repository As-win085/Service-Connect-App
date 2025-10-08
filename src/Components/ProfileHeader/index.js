import "./index.js"
import  {FaArrowLeft} from "react-icons/fa"

const ProfileHeader = (props) => {
    const {heading} = props
    return (
        <div className="flex items-center p-4 bg-black md:px-12">
                <FaArrowLeft className="text-white mx-3 md:mx-6" />
                <p className="m-1 text-white font-bold md:text-2xl md:m-2">{heading}</p>
        </div>
    )
}

export default ProfileHeader