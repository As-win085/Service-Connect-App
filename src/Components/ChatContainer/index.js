import ChatHeader from '../ChatHeader';
import ChatMessage from '../ChatMsg';
import ChatInput from '../ChatForm';

const DateSeparator = ({ date }) => (
  <div className="flex justify-center my-4">
    <span className="px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded-full font-medium shadow-sm">
      {date}
    </span>
  </div>
);

const ChatScreen = () => {
  const messageHistory = [
    { type: 'date', content: 'Today' },
    { type: 'text', content: 'Hi, Nicholas Good Evening 😊', time: '10:45', fromUser: false },
    { type: 'text', content: 'How was your UI/UX Design Course Like? 😊', time: '12:45', fromUser: false },
    
    { type: 'text', content: 'Hi, Morning too Ronald', time: '15:29', fromUser: true },
    
    { type: 'image', content: null, time: '15:52', fromUser: true }, 

    { type: 'text', content: 'Hello, i also just finished the Sketch Basic', time: '15:29', fromUser: true, rating: 4 },
    
    { type: 'text', content: 'OMG, This is Amazing..', time: '13:59', fromUser: false },
  ];

  const handleNewMessage = (newMessage) => {
    console.log("New message sent:", newMessage);
  };
  
  const handleNavigation = (action) => {
      console.log(`${action} action triggered.`);
  }

  return (
    <div className="flex flex-col h-screen w-full md:w-2/3 lg:w-1/2 mx-auto bg-white">
      <ChatHeader
        contactName="Virginia M. Patterson"
        onBack={() => handleNavigation('Back')}
        onCall={() => handleNavigation('Call')}
        onSearch={() => handleNavigation('Search')}
      />

      <div className="flex-grow overflow-y-auto pt-4 pb-20 bg-gray-50">
        {messageHistory.map((msg, index) => {
          if (msg.type === 'date') {
            return <DateSeparator key={index} date={msg.content} />;
          }
          return (
            <ChatMessage
              key={index}
              message={msg.content}
              time={msg.time}
              fromUser={msg.fromUser}
              isImage={msg.type === 'image'}
              rating={msg.rating}
            />
          );
        })}
      </div>

      <ChatInput onSendMessage={handleNewMessage} />
    </div>
  );
};

export default ChatScreen;