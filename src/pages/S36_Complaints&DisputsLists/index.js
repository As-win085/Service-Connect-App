import ActiveComplaints from "../../Components/ActiveComplaints"
import AppHeader from "../../Components/AppHeader"
import ToggleSwitch from "../../Components/ToggleSwitch"

const ComplaintsAndDisputs = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AppHeader heading="COMPLAINTS" />
            <div className="px-8 py-4 pb-10">
                <ToggleSwitch />
                <ActiveComplaints />
            </div>
        </div>
    )
}

export default ComplaintsAndDisputs