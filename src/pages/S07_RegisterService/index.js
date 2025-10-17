import ServiceRegisterForm from "../../Components/ServiceRegisterForm"
import ProfileHeader from "../../Components/ProfileHeader"

const RegisterService = () => {
    return (
        <div>
            <ProfileHeader heading="REGISTER SERVICE" />
            <div>
                <ServiceRegisterForm />
            </div>
        </div>
    )
}

export default RegisterService