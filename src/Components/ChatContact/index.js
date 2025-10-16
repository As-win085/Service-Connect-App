import React from 'react';

const MessageListItem = ({ name, message, time, unreadCount }) => {
  const hasUnread = unreadCount > 0;

  return (
    <div className="flex items-center p-3 bg-white hover:bg-gray-50 transition duration-150 cursor-pointer border-b border-gray-100 last:border-b-0">

      <div className="h-12 w-12 rounded-full bg-black flex-shrink-0 mr-4">
      </div>
      <div className="flex-grow min-w-0">
        <p className="text-base font-semibold text-gray-900 truncate">{name}</p>
        <p className={`text-sm ${hasUnread ? 'text-gray-900 font-medium' : 'text-gray-500'} truncate`}>
          {message}
        </p>
      </div>
      <div className="flex flex-col items-end ml-4">
        <span className={`text-xs font-medium mb-1 ${hasUnread ? 'text-indigo-600' : 'text-gray-500'}`}>
          {time}
        </span>
        {hasUnread && (
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs font-bold">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageListItem;