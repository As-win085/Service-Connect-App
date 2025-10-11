import ProfileHeader from "../../Components/ProfileHeader";
import CourseItem from "../../Components/CourseItem";
import PaymentSelection from "../../Components/PaymentSelection";

const PaymentMethods = () => {
    return ( 
        <div className="min-h-screen bg-gray-300">
            <ProfileHeader heading="PAYMENT METHODS" />
            <div className="px-8 py-4">
                <CourseItem />
                <PaymentSelection />
            </div>
        </div>
    )
}

export default PaymentMethods