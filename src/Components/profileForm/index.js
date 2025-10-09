import ConfirmButton from "../ConfirmButton"
import "./index.css"

const profileForm = () => {
    return (
        <div className='pt-4 px-4 w-full flex flex-col items-center pb-8'>
                <div className='w-full md:w-1/2 flex flex-col justify-around mt-10'>
                    <div className="flex flex-col items-center mb-6">
                        <div className="md:w-30 md:h-30 w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl">
                            👤
                        </div>
                    </div>

                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="text" placeholder="Address" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="date" placeholder="Date of Birth" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="tel" placeholder="(+1) 724-848-1225" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <select className="w-full px-4 mb-3 py-3 rounded-md bg-[#736A68] text-white">
                        <option className="border-2 border-black">Gender</option>
                        <option className="border-2 border-black">Male</option>
                        <option className="border-2 border-black">Female</option>
                        <option className="border-2 border-black">Other</option>
                    </select>
                    <input type="text" placeholder="House Name" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="text" placeholder="LandMark" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="number" placeholder="Pincode" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="text" placeholder="District" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <input type="text" placeholder="State" className="w-full px-4 py-3 mb-3 rounded-md bg-[#736A68] text-white placeholder-white" />
                    <div className="my-6">
                        <ConfirmButton ButtonName="Continue" />
                    </div>
                </div>
            </div>
    )
}

export default profileForm