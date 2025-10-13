import AppHeader from '../../Components/AppHeader'
import BottomNavbar from "../../Components/BottomNavbar"
import ToggleSwitch from '../../Components/ToggleSwitch'
import JobList from '../../Components/JobList'

const ActiveServices = () => {
    return (
        <div className='bg-gray-300 min-h-screen px-6'>
            <AppHeader heading="Jobs" />
            <div className=' py-4 md:py-6'>
                <ToggleSwitch />

                <JobList />


                <BottomNavbar />

            </div>
        </div>
    )
}

export default ActiveServices
