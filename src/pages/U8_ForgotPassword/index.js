import "./index.css"
import FpVerify  from "../../Components/FpVerify"
import ProfileHeader from "../../Components/ProfileHeader"

const ForgotPassword = () => {
    return (
        <div>
            <ProfileHeader heading="FORGOT PASSWORD" />
            <FpVerify />
        </div>
    )
}

export default ForgotPassword