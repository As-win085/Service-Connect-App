import { useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import ConfirmButton from '../ConfirmButton';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onclickPass = () => setShowPassword(!showPassword);
  const ShowConfirm = () => setShowConfirm(!showConfirm);

  return (
    <div className="w-full max-w-screen-lg mt-6 px-4 mx-auto">
      <h2 className="text-xl font-bold text-[#1D1F2A] mb-6">
        Getting Started.!
    </h2>

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

        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
            <FaLock />
          </span>
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
          />
          <span
            className="absolute inset-y-0 right-4 flex items-center text-white opacity-70 cursor-pointer"
            onClick={ShowConfirm}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="accent-[#1D1F2A]" />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            Agree to Terms & Conditions
          </label>
        </div>
        <div className='w-full sm:w-2/3 md:w-1/3 mx-auto'>
            <ConfirmButton ButtonName="Sign In" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;