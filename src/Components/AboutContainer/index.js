import React from 'react';

const AboutCard = () => {
  return (
    <div className='px-8 my-2 md:my-4'>
        <div className=" w-full md:w-3/4 md:2/3 md:mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      
        {/* Card Header */}
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">
            About
        </h2>

        {/* About Text - First Paragraph */}
        <p className="text-gray-600 mb-4 leading-relaxed">
            Graphic Design now a popular profession graphic design by off your carrer about tantas regiones barbarorum pedibus obiit
        </p>

        {/* About Text - Second Paragraph */}
        <p className="text-gray-600 leading-relaxed">
            Graphic Design n a popular profession I Cur tantas regiones barbarorum pedibus obiit, maria transmi Et ne nimium beatus est; Addidisti ad extremum
            <a 
            href="#" 
            className="text-gray-800 font-bold ml-1 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
            Read More
            </a>
        </p>

        </div>
    </div>
  );
};

export default AboutCard;