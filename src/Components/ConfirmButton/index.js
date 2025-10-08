import "./index.css"
import {FaArrowRight} from 'react-icons/fa'

const ConfirmButton = (props) => {
    const {ButtonName} = props
    return (
        <button
            type="submit"
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative"
        >
            <span className="lg:text-lg">{ButtonName}</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaArrowRight className="text-[#1D1F2A]" size={16} />
            </span>
        </button>
    )
}

export default ConfirmButton