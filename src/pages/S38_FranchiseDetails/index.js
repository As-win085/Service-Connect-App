import ProfileHeader from "../../Components/ProfileHeader"
import FranchiseDetails from "../../Components/FranchiseDetails"

const FranchiseDetailsPage = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <ProfileHeader heading="FRANCHISEE DETAILS" />
            <div className="px-8 pt-4 pb-8">
                <FranchiseDetails />
            </div>
        </div>
    )
}

export default FranchiseDetailsPage