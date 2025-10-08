import "./index.css"
import AuthLogo from "../../Components/AuthLogo"
import SigninInForm from "../../Components/SigninForm"

const LoginPage = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AuthLogo />
            <SigninInForm />
        </div>
    )
}

export default LoginPage
