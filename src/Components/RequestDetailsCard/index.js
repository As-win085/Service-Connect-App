import CustomerAvatar from "../../assets/Images/CustomerAvatar.png"
// A simple component for the circular image display
const ProfileImage = ({ src }) => (
  <img 
    src={src} 
    alt="User Profile" 
    className="w-12 h-12 rounded-full object-cover" 
  />
);

const ServiceRequestView = () => {
   

  return (
    <div className="flex justify-center items-start pt-10 my-4">
      <div className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div className="flex border-b border-gray-300">
          <div className="w-1/2 text-center py-4 text-purple-700 border-b-2 border-purple-700 font-medium">
            Request
          </div>
          <div className="w-1/2 text-center py-4 text-gray-500 hover:text-gray-700 cursor-pointer">
            Address
          </div>
        </div>
        
        <div className="p-6">
          
          {/* Title Section */}
          <div className="mb-6">
            <h3 className="text-gray-600 text-sm font-semibold mb-1">
              Title
            </h3>
            <p className="text-lg text-gray-900 font-medium">
              Bulb Change
            </p>
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <h3 className="text-gray-600 text-sm font-semibold mb-1">
              Description
            </h3>
            <p className="text-gray-800 whitespace-pre-line">
              Bulb Change sadsdasd asfafas
              asdasd
              asdasdasdasdasdasd
              asdasdasd
            </p>
          </div>

          {/* Images & Videos Section */}
          <div className="mb-8">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">
              Images & Videos
            </h3>
            <div className="flex space-x-3">
              <ProfileImage src={CustomerAvatar} />
              <ProfileImage src={CustomerAvatar} />
              <ProfileImage src={CustomerAvatar} />
            </div>
          </div>

          <div>
            <h3 className="text-gray-600 text-sm font-semibold mb-4">
              Availability
            </h3>
            
            {/* From Row */}
            <div className="flex items-center mb-4">
              <p className="w-12 text-gray-600 text-sm font-semibold mr-4">From</p>
              <div className="flex space-x-4">
                <div className="py-2 px-4 bg-gray-100 rounded-lg text-gray-800 font-medium border border-gray-300">
                  Jun 10, 2024
                </div>
                <div className="py-2 px-4 bg-gray-100 rounded-lg text-gray-800 font-medium border border-gray-300">
                  9:41 AM
                </div>
              </div>
            </div>

            {/* To Row */}
            <div className="flex items-center">
              <p className="w-12 text-gray-600 text-sm font-semibold mr-4">To</p>
              <div className="flex space-x-4">
                <div className="py-2 px-4 bg-gray-100 rounded-lg text-gray-800 font-medium border border-gray-300">
                  Jun 10, 2024
                </div>
                <div className="py-2 px-4 bg-gray-100 rounded-lg text-gray-800 font-medium border border-gray-300">
                  9:41 AM
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceRequestView;