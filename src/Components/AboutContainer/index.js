import "./index.css"

const AboutCard = () => {
  return (
      <div className=" w-full md:w-2/3 md:w-1/2 md:mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">

      <h2 className="text-xl font-semibold text-indigo-900 mb-4">
          About
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-md lg:text-lg">
          Graphic Design now a popular profession graphic design by off your carrer about tantas regiones barbarorum pedibus obiit
      </p>

      <p className="text-gray-600 leading-relaxed  text-sm md:text-md lg:text-lg">
        Graphic Design n a popular profession I Cur tantas regiones barbarorum pedibus obiit, maria transmi Et ne nimium beatus est; Addidisti ad extremum
        <a 
        href="#" 
        className="text-gray-800 font-bold ml-1 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
        >
        Read More
        </a>
      </p>

    </div>
  );
};

export default AboutCard;