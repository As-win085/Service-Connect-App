const ActivityItem = ({ avatarSrc, name, activity, timeAgo }) => {
  return (
    <div className="flex items-center bg-gray-700 rounded-xl p-3 mb-3">
      {/* Avatar */}
      <img 
        src={avatarSrc} 
        alt={`${name}'s avatar`} 
        className="w-10 h-10 rounded-full object-cover border-2 border-yellow-300 flex-shrink-0" 
      />
      
      {/* Activity Details */}
      <div className="ml-4 flex-grow">
        <p className="text-white font-medium text-sm">{name}</p>
        <p className="text-gray-300 text-xs">{activity}</p>
      </div>
      
      {/* Time Ago */}
      <p className="text-gray-400 text-xs flex-shrink-0">
        {timeAgo}
      </p>
    </div>
  );
}

export default ActivityItem