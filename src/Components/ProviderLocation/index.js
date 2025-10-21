import ProviderProfile from "../../assets/Images/ProviderProfile.png"

const BookingCard = () => {
  return (
    // Outer container with the light gray background as seen in the image
    <div className="flex flex-col  rounded-lg  max-w-lg">
      
      {/* Top section: Profile picture, Name, and Location */}
      <div className="flex items-center space-x-4 mb-8">
        
        {/* Profile Picture Container */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-purple-300 flex items-center justify-center">
          {/* This placeholder div simulates the image. 
            In a real app, you would use an <img> tag.
            I've used a background image style to match the provided image's look 
            where the image is within a circular, light-purple background.
          */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${ProviderProfile})`, // A close-up of the user's face
              transform: 'scale(1.2)' // Scale to match the cropping/zoom in the original image
            }}
            aria-label="Profile picture of Nazrul Islam"
          ></div>
        </div>
        
        {/* Name and Location Text Container */}
        <div className="flex flex-col">
          {/* Name */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">
            Nazrul Islam
          </h1>
          
          {/* Location with Icon */}
          <div className="flex items-center text-gray-600 text-lg">
            {/* Location Icon (using a simple text character or a popular icon library like Lucide/Heroicons would be better in a real app) */}
            <span className="text-xl mr-2 text-black" role="img" aria-label="Location pin">
              &#x1F4CD; {/* Unicode for a map pin */}
            </span>
            <span>
              North Paravoor, Eravam
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Booking ID */}
      {/* The text color and size are set to match the lower-contrast look */}
      <div className="text-xs md:text-sm font-normal text-gray-500">
        Booking Id : <span className="text-gray-600">12aa21w</span>
      </div>
      
    </div>
  );
};

export default BookingCard;