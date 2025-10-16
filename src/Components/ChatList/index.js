import React from 'react';
import MessageListItem from '../ChatContact'; 

const mockMessages = [
    { id: 1, name: 'Virginia M. Patterson', message: 'Hi, Good Evening Bro.!', time: '14:59', unreadCount: 3 },
    { id: 2, name: 'Dominick S. Jenkins', message: 'I Just Finished It.!', time: '06:35', unreadCount: 2 },
    { id: 3, name: 'Duncan E. Hoffman', message: 'How are you?', time: '08:10', unreadCount: 0 },
    { id: 4, name: 'Roy R. McCraney', message: 'OMG, This is Amazing..', time: '21:07', unreadCount: 5 },
    { id: 5, name: 'Janice R. Norris', message: 'Wow, This is Really Epic', time: '09:15', unreadCount: 0 },
    { id: 6, name: 'Marilyn C. Amerson', message: 'Hi, Good Evening Bro.!', time: '14:59', unreadCount: 3 },
    { id: 7, name: 'Dominick S. Jenkins', message: 'I Just Finished It.!', time: '06:35', unreadCount: 2 },
  ];

const MessageList = () => {
  

  return (
    <div className="min-h-screen w-full p-4 bg-gray-50 flex justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white shadow-xl rounded-xl overflow-y-auto">
        {mockMessages.map((msg) => (
          <MessageListItem
            key={msg.id} 
            name={msg.name}
            message={msg.message}
            time={msg.time}
            unreadCount={msg.unreadCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;