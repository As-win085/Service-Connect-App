import ActivityItem from "../../Components/ActivityItem"

const RecentActivityFeed = () => {
  const activities = [
    { 
      id: 1, 
      avatarSrc: 'https://via.placeholder.com/150/FFD700/000000?text=P', // Replace with actual image URL if you have one
      name: 'Papaya', 
      activity: 'Booking status changed', 
      timeAgo: '12 mins ago' 
    },
    { 
      id: 2, 
      avatarSrc: 'https://via.placeholder.com/150/FFD700/000000?text=P', 
      name: 'Papaya', 
      activity: 'Booking status changed', 
      timeAgo: '12 mins ago' 
    },
    { 
      id: 3, 
      avatarSrc: 'https://via.placeholder.com/150/FFD700/000000?text=P', 
      name: 'Papaya', 
      activity: 'Booking status changed', 
      timeAgo: '12 mins ago' 
    },
    { 
      id: 4, 
      avatarSrc: 'https://via.placeholder.com/150/FFD700/000000?text=P', 
      name: 'Papaya', 
      activity: 'Booking status changed', 
      timeAgo: '12 mins ago' 
    },
    { 
      id: 5, 
      avatarSrc: 'https://via.placeholder.com/150/FFD700/000000?text=P', 
      name: 'Papaya', 
      activity: 'Booking status changed', 
      timeAgo: '12 mins ago' 
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
          See more
        </a>
      </div>
      
      {/* Activity List */}
      <div>
        {activities.map(item => (
          <ActivityItem
            key={item.id}
            avatarSrc={item.avatarSrc}
            name={item.name}
            activity={item.activity}
            timeAgo={item.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivityFeed;