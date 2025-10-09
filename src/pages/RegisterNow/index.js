import "./index.css"
import AuthLogo from "../../Components/AuthLogo"
import LoginForm from "../../Components/LoginForm"
import ContinueWithOptions from "../../Components/ContinueWithOptions"

const RegisterNow = () => {
    return (
        <div className="pb-7 bg-gray-300 min-h-screen">
            <AuthLogo />
            <LoginForm />
            <ContinueWithOptions />
        </div>
    )
}

export default RegisterNow