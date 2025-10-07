import React from "react";
import "./index.css"
import { Grid, Book, RotateCcw, Square, Plus, HelpCircle } from "lucide-react";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between bg-neutral-700 text-white rounded-2xl px-6 py-3 w-80 shadow-lg">
      <Grid className="w-5 h-5" />
      <Book className="w-5 h-5" />
      <RotateCcw className="w-5 h-5" />
      <Square className="w-5 h-5" />
      <Plus className="w-5 h-5" />
      <HelpCircle className="w-5 h-5" />
    </div>
  );
};

export default BottomNavbar;
