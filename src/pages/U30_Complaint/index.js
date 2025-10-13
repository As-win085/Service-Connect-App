import AppHeader from '../../Components/AppHeader';
import ComplaintList from '../../Components/ComplaintList';

const Complaint = () => {
    return (
        <div>
            <AppHeader heading="COMPLAINTS" />
            <div className='bg-gray-300 py-4 md:py-6 pb-14 min-h-screen'>
                <ComplaintList />
            </div>
        </div>
    )
} 

export default Complaint;