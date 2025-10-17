import OTPVerify from "../../Components/OTPVerify"
import ProfileHeader from "../../Components/ProfileHeader"

const VerifyForgotPassword = () => {
    return (
        <div>
            <ProfileHeader heading="FORGOT PASSWORD" />
            <OTPVerify />
        </div>
    )
}

export default VerifyForgotPassword