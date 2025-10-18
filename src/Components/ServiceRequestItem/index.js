import { FiCalendar, FiClock } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

const DateTimeRow = ({ date, time }) => {
  return (
    <div className="flex items-center space-x-6 mt-1">
      <div className="flex items-center text-sm">
        <FiCalendar className="w-5 h-5 text-red-400 mr-2" />
        <span className="text-gray-700 font-medium">{date}</span>
      </div>

      <div className="flex items-center text-sm">
        <FiClock className="w-5 h-5 text-yellow-500 mr-2" />
        <span className="text-gray-700 font-medium">{time}</span>
      </div>
    </div>
  );
};

const ServiceReminderCard = () => {
  const serviceTitle = "Tap Repair";
  const userName = "Rose";
  const status = "Pending";
  const appointmentTime = "Today, 09:30 AM";

  const bookingSlots = [
    { date: "March 20, 2021", time: "09.00 - 10.00 AM" },
    { date: "March 21, 2021", time: "09.00 - 10.00 AM" },
  ];

  return (
    <div className="flex max-w-sm mx-auto shadow-xl rounded-xl overflow-hidden bg-white">
      <div className="w-3 bg-blue-900 flex-shrink-0"></div>

      <div className="p-4 flex-grow">
        
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-end space-x-2">
            <h1 className="text-lg font-bold text-gray-800">{serviceTitle}</h1>
            <a href="#" className="text-sm text-purple-600 underline hover:text-purple-700">View</a>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-500 font-medium">
            <span>{appointmentTime}</span>
            <button className="text-gray-400 hover:text-gray-700">
              <IoCloseSharp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-purple-300"></div>
          <span className="text-gray-700 font-medium text-sm">{userName}</span>
        </div>
        
        <p className="text-red-500 text-sm font-semibold mb-3">{status}</p>

        <div className="space-y-2">
          {bookingSlots.map((slot, index) => (
            <DateTimeRow
              key={index}
              date={slot.date}
              time={slot.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceReminderCard;