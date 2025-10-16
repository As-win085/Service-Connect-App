import  { useState } from 'react';
import InviteContactItem from '../InvitationItem';
import ShareViaSocial from '../ShareVia';

const ContactInviteScreen = () => {
  const initialContacts = [
    { id: 1, name: 'Patricia D. Regalado', phoneNumber: '(+1) 702-897-7965', status: 'not-invited' },
    { id: 2, name: 'Dominick S. Jenkins', phoneNumber: '(+1) 702-897-7965', status: 'not-invited' },
    { id: 3, name: 'Duncan E. Hoffman', phoneNumber: '(+1) 727-688-4052', status: 'invited' }, // This one is 'invited' in the screenshot
    { id: 4, name: 'Roy R. McCraney', phoneNumber: '(+1) 601-897-1714', status: 'not-invited' },
    { id: 5, name: 'Janice R. Norris', phoneNumber: '(+1) 802-312-3206', status: 'invited' }, // This one is 'invited' in the screenshot
  ];

  const [contacts, setContacts] = useState(initialContacts);

  const handleInvite = (name, phoneNumber) => {
    console.log(`Sending invite to: ${name} (${phoneNumber})`);
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.name === name && contact.phoneNumber === phoneNumber
          ? { ...contact, status: 'invited' }
          : contact
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col items-center">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-xl rounded-2xl overflow-hidden mb-8">
        {contacts.map((contact) => (
          <InviteContactItem
            key={contact.id}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            onInvite={handleInvite}
            inviteStatus={contact.status}
          />
        ))}
      </div>
      <div className='flex justify-start w-full md:w-2/3 lg:w-1/2'><ShareViaSocial /></div>
      
    </div>
  );
};

export default ContactInviteScreen;