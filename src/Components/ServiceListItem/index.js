
const ServiceItem = ({ avatarSrc, service, name, timeAgo, location }) => {
  return (
    // Outer container for the dark, rounded item card
    <div className="flex items-center bg-gray-700 rounded-xl p-3 mb-3">
      {/* Avatar */}
      <img 
        src={avatarSrc} 
        alt={`${name}'s avatar`} 
        // Style based on the "Active Services" image (darker, abstract image)
        className="w-10 h-10 rounded-full object-cover border-2 border-transparent flex-shrink-0" 
      />
      
      {/* Service Details (Left/Main Text Block) */}
      <div className="ml-4 flex-grow grid grid-cols-2 gap-x-4">
        {/* Left Column: Service and Name */}
        <div className="flex flex-col overflow-hidden">
            <p className="text-white font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">{service}</p>
            <p className="text-gray-300 text-xs whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
        </div>
        
        {/* Right Column: Time and Location */}
        <div className="flex flex-col items-end text-right overflow-hidden">
            <p className="text-white font-medium text-sm flex-shrink-0">{timeAgo}</p>
            <p className="text-gray-300 text-xs whitespace-nowrap overflow-hidden text-ellipsis">{location}</p>
        </div>
      </div>
    </div>
  );
};