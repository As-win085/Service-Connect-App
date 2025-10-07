// Carousel.jsx
import React, { useState } from 'react';
import CarouselSlide from '../CarouselSlide'; // Import the slide content

const TOTAL_SLIDES = 3; // Define how many slides we have for this example

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of placeholder data to map and create multiple slides
  const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => ({ 
    id: i, 
    key: `slide-${i}` 
  }));

  // Function to move to the previous slide
  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? TOTAL_SLIDES - 1 : prevIndex - 1
    );
  };

  // Function to move to the next slide
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="m-3 mx-5 relative group md:mx-14 bg-gray-900 rounded-3xl"> 
    <div className="overflow-hidden rounded-xl">
        <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
            {slides.map((slide) => (
                <CarouselSlide key={slide.key} /> 
            ))}
        </div>
    </div>
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20"> 
        {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                    h-2 rounded-full transition-all duration-300
                    ${index === activeIndex 
                        ? 'w-4 bg-yellow-400' // Active dot (wider and yellow)
                        : 'w-2 bg-gray-600'  // Inactive dots
                    }
                `}
                aria-label={`Go to slide ${index + 1}`}
            ></button>
        ))}
    </div>
    <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>

    <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>
  );
};

export default Carousel;