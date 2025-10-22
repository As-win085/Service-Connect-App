import React from "react";
import { MessageCircle } from "lucide-react"; // for chat icon

const BlankContainer = () => {
  return (
    <div className="relative pb-5">
      <div className="w-full h-[400px] bg-[#756d6a] rounded-lg shadow-lg relative">
        
      </div>
      <button className="absolute bottom-0 right-4 bg-[#1a1b22] hover:bg-[#2a2b33] transition-colors p-4 rounded-full shadow-lg flex items-center justify-center">
          <MessageCircle className="text-white w-6 h-6" />
        </button>
    </div>
  );
};

export default BlankContainer;
