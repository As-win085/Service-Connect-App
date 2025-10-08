import "./index.css"
import GoogleIcon from "../../assets/Images/google.png";
import AppleIcon from "../../assets/Images/apple.jpg";


const AuthFooter = () => {

  return (
    <div className="text-center mt-8 px-4 flex flex-col justify-center items-center">
      <p className="text-gray-600 mb-4 text-sm text-center md:text-md lg:text-lg">Or Continue With</p>

      <div className="flex justify-around space-x-6 mb-6 md:w-1/3 md:my-8">
        <button
            className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Sign in with Google"
        >
            <img src={GoogleIcon} alt="Google" className="w-6 h-6" />
        </button>

        <button
            className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Sign in with Apple"
        >
            <img src={AppleIcon} alt="Apple" className="w-6 h-6 md:w-12 md:h-12" />
        </button>
      </div>
        <p className="text-gray-700 text-sm  md:text-md lg:text-lg">
          Don’t have an Account?{" "}
          <span
            className="font-semibold underline cursor-pointer"
          >
            Form
          </span>
        </p>
    </div>
  );
};

export default AuthFooter;