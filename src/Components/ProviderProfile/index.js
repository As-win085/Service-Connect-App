import ProviderPic from "../../assets/Images/ProviderProfile.png"

const ProviderProfile = () => {
    return (
        <div className="flex items-center mb-5">
          <img
            src={ProviderPic}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover mr-3"
          />
          <div className="">
            <h2 className="font-semibold text-gray-900">Nazrul Islam</h2>
            <p className="text-gray-600 text-sm">
              Electrification <span className="ml-1">💪</span>
            </p>
          </div>
        </div>
    )
}

export default ProviderProfile