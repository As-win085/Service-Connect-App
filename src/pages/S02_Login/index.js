import AuthLogo from "../../Components/AuthLogo"
import SigninInForm from "../../Components/SigninForm"
import ContinueWithOptions from "../../Components/ContinueWithOptions"

const LoginPage = () => {
    return (
        <div className="bg-gray-300 min-h-screen pb-7 min-h-screen">
            <AuthLogo />
            <SigninInForm />
            <ContinueWithOptions />
        </div>
    )
}

export default LoginPage
