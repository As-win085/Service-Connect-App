// TodaysSpecialSlide.jsx
import "./index.css"

const CarouselSlide = (props) => {
  return (
    <div className="flex justify-between flex-shrink-0 w-full bg-gray-900 text-white rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10 w-3/4">
        <p className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2">
          25% OFF*
        </p>
        <h1 className="text-2xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
          Today's Special
        </h1>
        
        <p className="text-md md:text-xl xl:text-2xl font-medium leading-relaxed">
          Get a Discount for Every Course Order only Valid for Today.!
        </p>
      </div>
      <div className="flex flex-col item-end justify-center ml-6">
        <p className="text-sm md:text-md xl:text-xl">SEE ALL</p>
      </div>
    </div>
  );
};

export default CarouselSlide;