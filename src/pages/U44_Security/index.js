import ProfileHeader from "../../Components/ProfileHeader"
import SecuritySettings from "../../Components/SecuritySettings"

const Security = () => {
    return (
        <div>
            <ProfileHeader heading="SECURITY" />
            <div>
                <SecuritySettings />
            </div>
        </div>
    )
}

export default Security