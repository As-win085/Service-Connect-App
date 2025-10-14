import React from "react";
import { User, CreditCard, Bell, Shield, Globe, ImagePlus, Eye, FileText, HelpCircle, Users, LogOut } from "lucide-react";
import ProfilePicture from "../../assets/Images/ProfilePicture.jpg"

const ProfileSettingsCard = () => {
  return (
    <div className="min-h-screen flex justify-center items-center my-4 md:my-8 pt-10">
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 rounded-2xl shadow-md p-6 relative ">
        <div className="flex flex-col items-center absolute  transform -translate-y-1/2 -translate-x-1/2 left-1/2">
          <div className="relative">
            
                <img
                src={ProfilePicture}
                alt="Profile"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md  border border-2 border-green-700"
                />
            
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
              <ImagePlus className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-800">James S. Hernandez</h2>
          <p className="text-sm text-gray-500">hernandex.redial@gmail.ac.in</p>
        </div>

        {/* Options List */}
        <div className="mt-24 space-y-3">
          {[
            { icon: <User />, label: "Edit Profile" },
            { icon: <CreditCard />, label: "Payment Option" },
            { icon: <Bell />, label: "Notifications" },
            { icon: <Shield />, label: "Security" },
            { icon: <Globe />, label: "Language", rightText: "English (US)" },
            { icon: <Eye />, label: "Dark Mode" },
            { icon: <FileText />, label: "Terms & Conditions" },
            { icon: <HelpCircle />, label: "Help Center" },
            { icon: <Users />, label: "Invite Friends" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 md:w-8 md:h-8">{item.icon}</div>
                <span className="text-sm md:text-md">{item.label}</span>
              </div>
              {item.rightText ? (
                <span className="text-sm text-gray-500">{item.rightText}</span>
              ) : (
                <span className="text-gray-400 text-lg">›</span>
              )}
            </div>
          ))}

          {/* Logout */}
          <div className="flex items-center gap-3 px-3 py-2 text-red-500 hover:bg-gray-50 rounded-lg cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsCard;
