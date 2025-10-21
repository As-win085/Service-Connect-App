import ServiceBookingItem from "../ServiceBookingItem"

const Bookinglists = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <div className="w-full mx-auto shadow-lg rounded-xl overflow-hidden bg-white my-2">
      {/* Container with a blue-ish left border */}
      <div className="flex border-l-4 border-[#3b82f6]"> {/* Adjust border color as needed to match the image precisely */}
        
        {/* Main Content Area */}
        <div className="p-4 flex-grow">
          
          {/* Header Row */}
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-xl font-semibold text-gray-800">Tap Repair</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2 text-xs uppercase font-medium">View</span>
              <span className="font-medium text-gray-800">Today, 09:30 AM</span>
              <button className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>
          
          {/* Status and Name Row */}
          <div className="flex items-center space-x-2 mb-3">
            {/* Color Circle */}
            <div className="w-4 h-4 rounded-full bg-[#d8b4fe]"> {/* Adjust color to match the light purple */}</div>
            <p className="text-gray-600">Rose</p>
          </div>
          
          {/* Status Text */}
          <p className="text-gray-800 font-medium mb-4">Pending</p>
          
          {/* Date and Time Row */}
          <div className="flex items-center justify-between text-gray-600 text-sm">
            {/* Date */}
            <div className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="font-medium">March 20, 2021</span>
            </div>
            
            {/* Time */}
            <div className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium">09.00 - 10.00 AM</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <ServiceBookingItem />
        </div>
    )
}

export default Bookinglists