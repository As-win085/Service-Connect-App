import DashboardPills from "../../Components/DashboardPills"
import SearchBar from "../../Components/SearchBar"
import HomeHeader from "../../Components/HomeHeader"
import RevenuePieChart from "../../Components/RevenuePieChart"
import ServiceReachGraph from "../../Components/ServiceReachGraph"
import RecentActivityList from "../../Components/RecentActivityList"
import ActiveServiceList from "../../Components/ActiveServiceList"
import BookingList from "../../Components/BookingLists"
import UserRequestsList from "../../Components/UserRequestsList"
import BottomNavbar from "../../Components/BottomNavbar"

const Dashboard = () => {
    return (
        <div className="bg-gray-300">
            <HomeHeader />
            <div className=" px-8 md:px-14 pb-20">
                <SearchBar />
                <DashboardPills />
                <RevenuePieChart />
                <ServiceReachGraph />
                <RecentActivityList />
                <ActiveServiceList />
                <BookingList />
                <UserRequestsList />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default Dashboard