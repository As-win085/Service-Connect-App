import FranchisePicture from "../../assets/Images/FranchiseePicture.jpg"

const FranchiseeProfile = () => {
  return (
    // Outer container for the entire page, setting a light grey background
    <div className="">
      
      {/* --- Image Carousel/Header Section --- */}
      <div className="relative h-64 md:h-84 lg:h-96 overflow-hidden rounded-b-2xl shadow-lg">
        {/* Main image - leave src blank as requested */}
        <img 
          src={FranchisePicture}
          alt="Franchisee Banner" 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>

        {/* Top Navigation: Back Button and Indicators */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          {/* Back Button */}
          <button className="bg-white bg-opacity-30 p-2 rounded-full text-white backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
          {/* Image Indicators */}
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-white bg-opacity-70 rounded-full"></span>
            <span className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></span>
            <span className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="p-4">
        {/* Franchisee Title */}
        <h2 className="text-gray-600 text-sm mb-4">
          Franchisee <span className="font-semibold text-gray-800">NAME</span>
        </h2>

        {/* Profile Header: Avatar, Name, Chat/Contact Button */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md mb-6 -mt-12 relative z-20"> {/* -mt-12 pulls it up over the image */}
          <div className="flex items-center">
            {/* Avatar Placeholder */}
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-lg font-bold mr-3">
              T
            </div>
            <span className="text-lg font-semibold text-gray-800">Tom Jose</span>
          </div>
          <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-700 transition duration-200">
            Chat/Contact
          </button>
        </div>

        {/* Description Section */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <p className="text-gray-700 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum
            ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis.
            Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas
            tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat
            in dolor sagittis. Non commodo, a justo massa porttitor sed placerat in. Orci tristique
            etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In
          </p>
        </div>
      </div>

      {/* --- Contact Info Section --- */}
      <div className="mx-4 bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact info</h3>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
          <p className="font-medium text-gray-600">Address</p>
          <div>
            <p>KK Building, Ernakulam</p>
            <p>Pin : 2255</p>
          </div>

          <p className="font-medium text-gray-600 mt-2">Email</p>
          <p className="mt-2">acr@email.com</p>

          <p className="font-medium text-gray-600 mt-2">Phone</p>
          <p className="mt-2">8528525558</p>
        </div>
      </div>

    </div>
  );
};

export default FranchiseeProfile;