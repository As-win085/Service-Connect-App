import AppHeader from "../../Components/AppHeader"
import ToggleSwitch from "../../Components/ToggleSwitch"
import OngoingJobLists from "../../Components/OngoingJobLists"
import BottomNavbar from "../../Components/BottomNavbar"

const ActiveServices = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AppHeader heading="JOBS" />
            <div className="">
                <ToggleSwitch b1="Ongoing" b2="Completed" />
                <OngoingJobLists />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default ActiveServices