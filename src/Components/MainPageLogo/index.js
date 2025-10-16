import "./index.css"
import mainpageLogo from "../../assets/Images/MainPageLogo.png"

const MainpageLogo = () => {
    return (
        <div className="flex justify-center items-center bg-[#1e1f25]">
            <img src={mainpageLogo} className="w-full md:w-1/2 lg:w-1/3 m-8" alt="Main Page Logo" />
        </div>
    )
}

export default MainpageLogo