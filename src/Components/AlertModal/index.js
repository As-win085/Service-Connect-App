import "./index.css"
import { Loader } from "lucide-react"

const AlertModal = (props) => {
    const {imgUrl, paragraph} = props
    return (
        <div className=' md:w-1/2 lg:w-1/3 container bg-white shadow flex flex-col justify-around items-center pt-6 pb-5 border-3 border-black rounded-xl mx-8'>
            <img src={imgUrl} alt="logo" className="h-20 w-20" />
            <h2 className='font-extrabold my-4 text-sm md:text-md lg:text-lg'>Congratulations!</h2>
            <p className='text-center w-1/2'>{paragraph}</p>
            <div className="my-4">
                <Loader className="text-blue-900" />
            </div>
        </div>
    )
}

export default AlertModal