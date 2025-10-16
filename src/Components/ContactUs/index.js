import React from 'react';
import { Headset, Facebook, Twitter, Instagram, Smartphone } from 'lucide-react';

const ContactTile = ({ icon: Icon, label }) => (
  <button
    className="w-full mb-4 rounded-xl bg-white p-4 shadow-md hover:bg-gray-50 transition duration-150 ease-in-out"
    onClick={() => console.log(`Attempting to contact via ${label}`)}
  >
    <div className="flex items-center space-x-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2">
        <Icon className="h-6 w-6 text-gray-900" />
      </div>
      <h3 className="text-base font-semibold text-gray-800">{label}</h3>
    </div>
  </button>
);
const ContactUsScreen = () => {
  const contactOptions = [
    { icon: Headset, label: 'Customer Services' },
    { icon: Smartphone, label: 'WhatsApp' },
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <div className="p-4 h-full overflow-y-auto bg-gray-50 text-black">
      {contactOptions.map((option, index) => (
        <ContactTile
          key={index}
          icon={option.icon}
          label={option.label}
        />
      ))}
    </div>
  );
};

export default ContactUsScreen;