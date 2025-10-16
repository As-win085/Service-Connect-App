import React from 'react';
// Assuming you have icons from a library like 'lucide-react' or similar
// For this example, I'll use simple div circles for visual representation
// In a real app, you'd import:
// import { Facebook, Twitter, Google, Whatsapp } from 'lucide-react';
// And use <Facebook className="h-6 w-6" /> etc.

const SocialIcon = ({ IconComponent, bgColor, iconColor, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center justify-center h-10 w-10 rounded-full
      ${bgColor} ${iconColor} text-xl
      hover:opacity-80 transition duration-150
      shadow-md
    `}
    aria-label="Share via social media"
  >
    {/* Placeholder for actual icon, in a real app this would be <IconComponent /> */}
    {IconComponent}
  </button>
);

const ShareViaSocial = () => {
  const handleSocialShare = (platform) => {
    console.log(`Sharing invite via ${platform}`);
    // Implement actual sharing logic here (e.g., window.open, share API)
  };

  return (
    <div className="mt-8 px-4 w-full max-w-sm flex flex-col items-start">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Share Invite Via</h3>
      <div className="flex space-x-4">
        <SocialIcon 
          IconComponent={<i className="fab fa-facebook-f"></i>} // Placeholder
          bgColor="bg-blue-600" 
          iconColor="text-white" 
          onClick={() => handleSocialShare('Facebook')} 
        />
        <SocialIcon 
          IconComponent={<i className="fab fa-twitter"></i>} // Placeholder
          bgColor="bg-blue-400" 
          iconColor="text-white" 
          onClick={() => handleSocialShare('Twitter')} 
        />
        <SocialIcon 
          IconComponent={<i className="fab fa-google"></i>} // Placeholder
          bgColor="bg-red-600" 
          iconColor="text-white" 
          onClick={() => handleSocialShare('Google')} 
        />
        <SocialIcon 
          IconComponent={<i className="fab fa-whatsapp"></i>} // Placeholder
          bgColor="bg-green-500" 
          iconColor="text-white" 
          onClick={() => handleSocialShare('WhatsApp')} 
        />
      </div>
    </div>
  );
};

export default ShareViaSocial;