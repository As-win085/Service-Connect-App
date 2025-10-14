import React from "react";
import { Star } from "lucide-react";
import modal_img from  "../../assets/Images/U31Modal.png"
import ConfirmButton from "../ConfirmButton";

const ServiceCompletedCard = () => {
  return (
    
      <div className="bg-gray-100 rounded-3xl shadow-xl p-8 w-full text-center relative md:w-1/2 lg:w-1/3 mx-auto">
        
        

        {/* Icon (Headphones + Graduation Cap) */}
        <div className="relative z-10 flex justify-center mb-4">
          <img
            src={modal_img}
            alt="Service Icon"
            className="w-full h-24 md:w-full md:h-28"
          />
        </div>

        {/* Title */}
        <h2 className="relative z-10 text-xl font-bold text-gray-900 mb-2">
          Services Completed
        </h2>

        {/* Subtitle */}
        <p className="relative z-10 text-gray-600 text-sm mb-5">
          Complete your Course. Please Write a Review
        </p>

        {/* Stars */}
        <div className="relative z-10 flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <div className="w-2/3 mx-auto">
          <ConfirmButton ButtonName="Write a Review" />
        </div>
      </div>
    
  );
};

export default ServiceCompletedCard;
