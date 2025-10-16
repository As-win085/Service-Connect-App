import MainpageLogo from "../../Components/MainPageLogo"
import LoginOptions from "../../Components/LoginOptions"

const SplashScreen = () => {
    return (
        <div className="min-h-screen flex flex-col justify-end bg-[#1e1f25]">
            <MainpageLogo />
            <LoginOptions />
        </div>
    )
}

export default SplashScreen