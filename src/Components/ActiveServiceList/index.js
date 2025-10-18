import ServiceItem from "../ServiceListItem"

const ActiveServicesFeed = () => {
  // Dummy data for active services items
  const services = [
    { 
      id: 1, 
      avatarSrc: 'https://via.placeholder.com/150/505050/FFFFFF?text=A', // Abstract/dark placeholder
      service: 'Bulb change', 
      name: 'John Abraham', 
      timeAgo: '12 mins ago',
      location: 'Challanam'
    },
    { 
      id: 2, 
      avatarSrc: 'https://via.placeholder.com/150/505050/FFFFFF?text=A',
      service: 'Bulb change', 
      name: 'John Abraham', 
      timeAgo: '12 mins ago',
      location: 'Challanam'
    },
    { 
      id: 3, 
      avatarSrc: 'https://via.placeholder.com/150/505050/FFFFFF?text=A',
      service: 'Bulb change', 
      name: 'John Abraham', 
      timeAgo: '12 mins ago',
      location: 'Challanam'
    },
    { 
      id: 4, 
      avatarSrc: 'https://via.placeholder.com/150/505050/FFFFFF?text=A',
      service: 'Bulb change', 
      name: 'John Abraham', 
      timeAgo: '12 mins ago',
      location: 'Challanam'
    },
    { 
      id: 5, 
      avatarSrc: 'https://via.placeholder.com/150/505050/FFFFFF?text=A',
      service: 'Bulb change', 
      name: 'John Abraham', 
      timeAgo: '12 mins ago',
      location: 'Challanam'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Active Services</h2>
      </div>
      
      {/* Service List */}
      <div>
        {services.map(item => (
          <ServiceItem
            key={item.id}
            avatarSrc={item.avatarSrc}
            service={item.service}
            name={item.name}
            timeAgo={item.timeAgo}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default ActiveServicesFeed;