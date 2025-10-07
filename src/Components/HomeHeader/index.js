import "./index.css"
import Avatar from "../../assets/Images/Avatar.png";

const HomeHeader = () => {
    return (
        <div className="flex justify-between p-4 bg-black md:px-12">
            <div className="flex justify-between items-center">
                <span className="m-1 text-white font-bold md:text-2xl md:m-2">☰</span>
                <p className="m-1 text-white font-bold md:text-2xl md:m-2">SERVICE CONNECT</p>
            </div>
            <div className="flex justify-between items-center">
                <img src="" className="rounded-full w-6 h-6 m-1 md:w-10 md:h-10" alt="Notification-Icon" />
                <img src={Avatar} className="rounded-full w-6 h-6 m-1 md:w-10 md:h-10" alt="avatar" />
            </div>
        </div>
    )
}

export default HomeHeader