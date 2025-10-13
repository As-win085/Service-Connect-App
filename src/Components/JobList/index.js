import ScheduledCard from '../../Components/ScheduledCard'
import BottomNavbar from "../../Components/BottomNavbar"

const JobList = () => {
    return (
        <div className="relative  flex flex-col">
      {/* Scrollable Section */}
      <div className="flex-1 overflow-y-auto pb-28 p-4">
        <ScheduledCard />
        <ScheduledCard />
      </div>

    </div>
    )
}

export default JobList