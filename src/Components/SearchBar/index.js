import './index.css';

import { Search, SlidersHorizontal } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[#5c534b] rounded-lg px-4 py-2 shadow-md mt-2 mb-2 mx-8 justify-center md:mx-14 md:px-8 md:py-4 md:max-w-1/3">
      <Search className="text-white w-6 h-6 mr-3 md:h-8 md:w-8" />
      <input
        type="text"
        placeholder="Search for.."
        className="text-center bg-transparent flex-1 text-white placeholder-gray-300 focus:outline-none"
      />
      <button className="bg-white p-2 rounded-lg hover:bg-[#8a7f74] transition">
        <SlidersHorizontal className="text-black w-5 h-5 md:h-6 md:w-6" />
      </button>
    </div>
  );
}


export default SearchBar
