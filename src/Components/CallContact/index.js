import { PhoneIncoming, PhoneOutgoing, XCircle, PhoneCall } from 'lucide-react';

const CallLogItem = ({ name, type, date }) => {
  let StatusIcon;
  let statusText;
  let statusColor;

  switch (type) {
    case 'Incoming':
      StatusIcon = PhoneIncoming;
      statusText = 'Incoming';
      statusColor = 'text-green-600'; // Green for incoming
      break;
    case 'Outgoing':
      StatusIcon = PhoneOutgoing;
      statusText = 'Outgoing';
      statusColor = 'text-blue-600'; // Blue for outgoing
      break;
    case 'Missed':
      StatusIcon = XCircle;
      statusText = 'Missed';
      statusColor = 'text-red-600'; // Red for missed
      break;
    default:
      StatusIcon = PhoneCall;
      statusText = type;
      statusColor = 'text-gray-600';
  }

  return (
    <div className="flex items-center justify-between p-3 bg-white hover:bg-gray-50 transition duration-150 cursor-pointer border-b border-gray-100 last:border-b-0">
      
      {/* Left Section: Avatar and Details */}
      <div className="flex items-center space-x-4 flex-grow">
        
        {/* Avatar Placeholder (Black Circle) */}
        <div className="h-12 w-12 rounded-full bg-black flex-shrink-0">
          {/* In a real app, this would be an image or initials */}
        </div>

        {/* Name and Status/Date */}
        <div className="min-w-0">
          <p className="text-base font-semibold text-gray-900 truncate">{name}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            
            {/* Status Icon and Text */}
            <div className={`flex items-center space-x-1 ${statusColor}`}>
              <StatusIcon className="h-4 w-4" />
              <span className="font-medium">{statusText}</span>
            </div>
            
            <span className="text-gray-400">|</span> {/* Separator */}
            
            {/* Date */}
            <span className="text-gray-600">{date}</span>
          </div>
        </div>
      </div>

      {/* Right Section: Call Icon */}
      <div className="flex-shrink-0 ml-4">
        <PhoneCall className="h-6 w-6 text-gray-500 hover:text-indigo-600 transition duration-150" />
      </div>
    </div>
  );
};

export default CallLogItem;