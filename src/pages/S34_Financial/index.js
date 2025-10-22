import AppHeader from "../../Components/AppHeader"
import AccountDetails from "../../Components/AccountDetails"
import TransactionsList from "../../Components/TransactionsList"
import BottomNavbar from "../../Components/BottomNavbar"

const Financial = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <AppHeader heading="FINANCIAL" />
            <div className="px-8 pt-4 pb-14">
                <AccountDetails />
                <TransactionsList />
                <BottomNavbar />
            </div>
        </div>
    )
}

export default Financial