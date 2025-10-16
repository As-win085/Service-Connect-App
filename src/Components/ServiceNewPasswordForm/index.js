import { useState } from 'react';
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope
} from 'react-icons/fa';

import ConfirmButton from "../ConfirmButton";

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    
    const onclickPass = () => setShowPassword(!showPassword);
    const ShowConfirm = () => setShowConfirm(!showConfirm);
    return (
        <div className="w-full max-w-screen-lg mt-6 px-4 mx-auto min-h-screen flex flex-col justify-center item-center pb-8 md:justify-center">
            <p className="text-center md:text-lg mx-5 font-sm text-xs md:text-sm lg:text-md font-sm text-[#1D1F2A] mb-6 text-center">
                Add a Pin Number to Make Your Account more Secure
            </p>
            <form className="space-y-5 flex flex-col items-stretch">
            <div className="relative">
                      <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
                      />
                    </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
                <FaLock />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-white opacity-70 cursor-pointer"
                onClick={onclickPass}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>        
            
                <div className='w-full sm:w-2/3 md:w-1/3 mx-auto md:my-10'>
                    <ConfirmButton ButtonName="Sign In" />
                </div>
              </form>
            </div>
    )
}

export default NewPassword