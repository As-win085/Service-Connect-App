import InvoiceForm from "../../Components/InvoiceForm"
import ProfileHeader from "../../Components/ProfileHeader"

const AcceptAndInvoice = () => {
    return (
        <div className="bg-gray-300 min-h-screen ">
            <ProfileHeader heading="INVOICE" />
            <div className="px-8">
                <InvoiceForm />
            </div>
        </div>
    )
}

export default AcceptAndInvoice