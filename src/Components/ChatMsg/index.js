const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`h-4 w-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <span className="flex">{stars}</span>;
};


const ChatMessage = ({ message, time, fromUser, isImage = false, rating }) => {
  const bubbleClasses = fromUser
    ? 'bg-blue-100 text-gray-800 rounded-bl-xl rounded-tr-xl rounded-tl-xl ml-auto'
    : 'bg-gray-700 text-white rounded-br-xl rounded-tr-xl rounded-bl-xl mr-auto shadow-xl';

  const timeClasses = fromUser
    ? 'text-xs text-gray-500' 
    : 'text-xs text-white';   
    
  const containerClasses = fromUser ? 'flex justify-end' : 'flex justify-start';

  return (
    <div className={`w-full ${containerClasses} mb-3 px-4`}>
      <div className={` p-3 shadow-md relative ${bubbleClasses}`}>
        {isImage ? (
          <div className="flex space-x-2">
            <div className="h-16 w-16 bg-black rounded-lg"></div>
            <div className="h-16 w-16 bg-black rounded-lg"></div>
          </div>
        ) : (
          <p className="text-sm m-2">
            {message}
            {rating && (
                <div className="mt-1 ">
                    <StarRating rating={rating} />
                </div>
            )}
          </p>
        )}
        
        <span className={`absolute bottom-1 right-2 ${timeClasses} opacity-80`}>{time}</span>
      </div>
    </div>
  );
};

export default ChatMessage;