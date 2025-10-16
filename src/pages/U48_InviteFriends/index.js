import InvitationList from "../../Components/InvitationList"
import AppHeader from "../../Components/AppHeader"

const InviteFriends = () => {
    return (
        <div>
            <AppHeader heading="INVITE FRIEND" />
            <div>
                <InvitationList />
            </div>
        </div>
    )
}

export default InviteFriends