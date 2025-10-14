import { X, ArrowLeft } from "lucide-react";
import ProfilePicture from "../../assets/Images/ProfilePicture.jpg";

const SidebarMenu = () => {
  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-gray-900/70 backdrop-blur-lg overflow-auto text-white p-5 rounded-md shadow-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="w-14 h-14 rounded-full border-2 border-white object-cover"
            />
            <span className="absolute bottom-1 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-semibold text-sm text-pink-400">Stone Stellar</h2>
            <p className="text-xs text-yellow-400">UID: CU102</p>
            <p className="text-xs text-green-400">Online</p>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-700 rounded-full">
          <X size={18} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {[
          "My Profile",
          "Home",
          "Bookings",
          "Active Services",
          "Services",
          "Complaints",
          "Message",
          "Settings",
          "Transaction",
          "History",
          "Help Center",
          "Terms & Conditions",
          "About Us",
          "Invite a Friend",
        ].map((item, index) => (
          <button
            key={index}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition ${
              item === "My Profile" ? "bg-gray-500/50" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className=" bottom-6  px-5 mx-auto py-6">
        <button className="flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 mx-auto">
          <ArrowLeft size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
