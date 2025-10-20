import Profileheader from "../../Components/ProfileHeader"
import EditServiceFrom from "../../Components/EditServiceForm"

const Editservice = () => {
    return (
        <div className="bg-gray-300 ">
            <Profileheader heading="EDIT SERVICE" />
            <div className="px-8">
                <EditServiceFrom />
            </div>
        </div>
    )
}

export default Editservice