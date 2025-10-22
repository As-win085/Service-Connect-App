import CardDisplay from "../../Components/CardDisplay"
import ProfileHeader from "../../Components/ProfileHeader"

const AddNewCard = () => {
    return (
        <div>
            <ProfileHeader heading="ADD CARD" />
            <div>
                <CardDisplay />
            </div>
        </div>
    )
}

export default AddNewCard