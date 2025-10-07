// TodaysSpecialSlide.jsx
import "./index.css"

const CarouselSlide = (props) => {
  return (
    <div className="flex-shrink-0 w-full bg-gray-900 text-white rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2">
          25% OFF*
        </p>
        <h1 className="text-2xl md:text-6xl font-extrabold leading-tight mb-6">
          Today's Special
        </h1>
        
        <p className="text-md md:text-xl font-medium leading-relaxed">
          Get a Discount for Every Course Order only Valid for Today.!
        </p>
      </div>
    </div>
  );
};

export default CarouselSlide;