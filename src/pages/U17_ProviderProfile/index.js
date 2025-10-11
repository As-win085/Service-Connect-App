import ProfileHeader from "../../Components/ProfileHeader"
import ProfileBlankContainer from "../../Components/ProfileBlankContainer"
import ProvidersDetails from "../../Components/ProvidersDetails"
import AboutContainer from "../../Components/AboutContainer"
import ServiceLists from "../../Components/ServiceListContainer"
import ReviewCard from "../../Components/ReviewCard"
import MediaAndBookingCard from "../../Components/MediaAndBookingCard"
import ConfirmButton from "../../Components/ConfirmButton"

const ProviderProfile = () => {
    return (
        <div className="bg-gray-300 mb-5">
            <ProfileHeader heading="PROFILE" />
            <ProfileBlankContainer />
            <div className="px-8">
                <ProvidersDetails />
                <AboutContainer />
                <ServiceLists />
                <ReviewCard />
                <MediaAndBookingCard />
                <ConfirmButton ButtonName="Book Service" />
            </div>
        </div>
    )
}

export default ProviderProfile