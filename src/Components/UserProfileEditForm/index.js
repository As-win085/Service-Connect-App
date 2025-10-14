import { Calendar, Mail, ChevronDown, ImagePlus } from "lucide-react"
import ConfirmButton from "../ConfirmButton"
import ProfilePicture from "../../assets/Images/ProfilePicture.jpg"

const EditProfileForm = () => {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <div className="   p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={ProfilePicture} 
              alt="Profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
              <ImagePlus className="w-4 h-4 md:w-6 md:h-6 text-green-800"
              />
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <input
            type="text"
            placeholder="Nick Name"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Date of Birth"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="relative flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="India"
              className="w-6 h-4 rounded-sm"
            />
            <span className="text-gray-700 text-sm font-medium">(+91)</span>
            <input
              type="tel"
              placeholder="724-848-1225"
              className="flex-1 text-sm px-2 py-1 focus:outline-none "
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-600">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          <input
            type="text"
            placeholder="Student"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <div className="w-full md:w-2/3 lg:w-2/3 mx-auto">
            <ConfirmButton ButtonName="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
