import AppHeader from "../../Components/AppHeader"
import ServiceLists from "../../Components/ServiceLists"

const Services = () => {
    return (
        <div>
            <AppHeader />
            <div className="bg-gray-300 py-2 md:py-4">
                <ServiceLists />
            </div>
        </div>
    )
}

export default Services