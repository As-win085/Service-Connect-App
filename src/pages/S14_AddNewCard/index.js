import AppHeader from "../../Components/AppHeader"
import CardDisplay from "../../Components/CardDisplay"
import CardPaymentForm from "../../Components/AddCardForm"

const AddNewCard = () => {
    return (
        <div>
            <AppHeader />
            <div className="my-4 md:my-8">
                <CardPaymentForm />
            </div>
        </div>
    )
}

export default AddNewCard