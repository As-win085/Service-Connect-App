import FpVerify  from "../../Components/FpVerify"
import ProfileHeader from "../../Components/ProfileHeader"

const ForgotPassword = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <ProfileHeader heading="FORGOT PASSWORD" />
            <FpVerify />
        </div>
    )
}

export default ForgotPassword