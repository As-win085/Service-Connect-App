import { X, ArrowRight } from "lucide-react";
import ConfirmButton from "../ConfirmButton";
import PaymentSuccess from "../../assets/Images/PaymentSuccess.png";

const SuccessCard = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 pb-6 w-full">
      <div className="relative bg-white rounded-[2rem] shadow-xl  p-6 text-center">

        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>


          <div className=" p-4 mt-8  mx-auto">
            <img src={PaymentSuccess} className="w-full mx-auto max-w-xs" alt="Success" />
          </div>


        <h2 className="text-xl font-bold text-gray-900 mt-3">
          Congratulations
        </h2>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          Your Payment is Successfully. Purchase a New Course
        </p>

        <p className="text-teal-600 font-semibold underline mt-4 cursor-pointer">
          Watch the Course
        </p>

        <div className="flex justify-center mt-2 w-4/5 mx-auto">
          <ConfirmButton ButtonName="E - Receipt" />
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
