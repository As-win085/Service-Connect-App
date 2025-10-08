import "./index.css"
import { Phone } from "lucide-react"; 
import googleLogo from "../../assets/Images/google.png"; 
import { Mail } from "lucide-react";


const Login = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center bg-[#1e1f25] text-white px-4">
      <div className="w-full max-w-sm lg:max-w-3xl flex flex-col lg:flex-row items-center justify-center gap-6">
        
        {/* Login with Email/Phone */}
        <button className="w-full lg:w-4/6 flex items-center justify-center gap-2 bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-200 transition">
          <Mail className="w-5 h-5" />
          <span className="text-sm md:text-md  lg:text-lg">Login with Email/Phone</span>
        </button>

        {/* Login with Google */}
        <button className="w-full lg:w-4/6 flex items-center justify-center gap-2 bg-gray-700 text-white font-medium py-3 px-6 rounded-full hover:bg-gray-600 transition">
          <img src={googleLogo} className="w-5 h-5" />
          <span className="text-sm md:text-md lg:text-lg">Login with Google</span>
        </button>
      </div>

      {/* Sign Up text */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <a href="#" className="text-white hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
