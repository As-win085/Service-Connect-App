import React from 'react';

const InviteContactItem = ({ name, phoneNumber, onInvite, inviteStatus }) => {
  // Determine button text and styling based on inviteStatus
  const buttonText = inviteStatus === 'invited' ? 'Invited' : 'Invite';
  const buttonClasses = inviteStatus === 'invited'
    ? 'bg-blue-100 text-blue-800' // Lighter blue for invited
    : 'bg-gray-800 text-white hover:bg-gray-900'; // Darker for invitable

  return (
    <div className="flex items-center justify-between p-3 bg-white border-b border-gray-100 last:border-b-0">
      
      <div className="flex items-center space-x-4 flex-grow min-w-0">
        
        <div className="h-12 w-12 rounded-full bg-black flex-shrink-0">
        </div>

        <div className="min-w-0">
          <p className="text-base font-semibold text-gray-900 truncate">{name}</p>
          <p className="text-sm text-gray-500 truncate">{phoneNumber}</p>
        </div>
      </div>

      <div className="flex-shrink-0 ml-4">
        <button
          onClick={() => onInvite(name, phoneNumber)}
          className={`
            px-5 py-2 rounded-full text-sm font-semibold transition duration-150 ease-in-out shadow-md
            ${buttonClasses}
          `}
          disabled={inviteStatus === 'invited'} 
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InviteContactItem;