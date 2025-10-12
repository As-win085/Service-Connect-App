import { EllipsisVertical, Download, Printer, Send, MoveLeft } from "lucide-react"
import { useState } from 'react';

const ReceiptHeader = () => {
      const [menuOpen, setMenuOpen] = useState(false);
    
      const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div className="bg-black text-white px-6 py-4 flex justify-between items-center rounded-t-xl">
          <div className="flex justify-between items-center px-2 md:px-6">
            <MoveLeft className="text-white text-xl mr-2" />
            <h2 className="text-lg font-semibold">E-RECEIPT</h2>
          </div>
          <div className="relative">
            <button onClick={toggleMenu}>
              <EllipsisVertical size={20} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-10">
                <button className="flex items-center px-4 py-2 w-full hover:bg-gray-100 text-gray-900">
                  <Send className="h-4 w-4 mr-2" /> Share
                </button>
                <button className="flex items-center px-4 py-2 w-full hover:bg-gray-100 text-gray-900">
                  <Download className="h-4 w-4 mr-2" /> Download
                </button>
                <button className="flex items-center px-4 py-2 w-full hover:bg-gray-100 text-gray-900">
                  <Printer className="h-4 w-4 mr-2" /> Print
                </button>
              </div>
            )}
          </div>
        </div>
    )
}

export default ReceiptHeader;