import AlertModal from "../../Components/AlertModal"
import Congratulations from "../../assets/Images/U10_Congratulations.jpeg"

 

const CongratulationsPage = () => {
    return (
        <div className="bg-black flex justify-center items-center h-screen">
            <AlertModal paragraph="Your Account is Ready to Use. You will be Rediredted to the Home Page in Few Seconds." imgUrl={Congratulations} />
        </div>
    )
}

export default CongratulationsPage