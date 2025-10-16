import AppHeader from "../../Components/AppHeader"
import ToggleSwitch from "../../Components/ToggleSwitch"
import ChatList from "../../Components/ChatList"
import BottomNavbar from "../../Components/BottomNavbar"
import ChatCallToggle from "../../Components/ChatCallToggle"

const IndoxChat = () => {
    return (
        <div>
            <AppHeader heading="CHAT" />
            <div>
                <ChatCallToggle />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default IndoxChat