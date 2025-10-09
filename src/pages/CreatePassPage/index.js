import "./index.css"
import CreatePass from "../../Components/CreatePass"
import ProfileHeader from "../../Components/ProfileHeader"

const CreatePassPage = () => {
    return (
        <div className="bg-gray-300">
            <ProfileHeader heading="FORGOT PASSWORD" />
            <CreatePass />
        </div>
    )
}

export default CreatePassPage