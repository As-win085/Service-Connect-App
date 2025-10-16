import ProfileHeader from "../../Components/ProfileHeader"
import OTPVerify from "../../Components/OTPVerify"

const OTPPage = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="OTP VERIFICATION" />
            <OTPVerify />
        </div>
    )
}

export default OTPPage