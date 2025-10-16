import CreateNewPass  from "../../Components/ServiceNewPasswordForm"
import ProfileHeader from "../../Components/ProfileHeader"

const CreatePin = () => {
    return (
        <div className="bg-gray-300">
            <ProfileHeader heading="CREATE NEW PASSWORD" />
            <CreateNewPass />
        </div>
    )
}

export default CreatePin