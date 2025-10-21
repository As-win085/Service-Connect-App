import ServiceRequestList from "../../Components/ServiceRequestList"
import AppHeader from "../../Components/AppHeader"

const Requests = () => {
    return (
        <div className="min-h-screen bg-gray-300 pb-8">
            <AppHeader heading="REQUESTS" />
            <div>
                <ServiceRequestList />
            </div>
        </div>
    )
}

export default Requests