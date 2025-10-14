import AppHeader from "../../Components/AppHeader"
import TransactionList from "../../Components/TransactionList"
import BottomNavbar from "../../Components/BottomNavbar"

const Transactions = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <AppHeader />
            <div className="px-8">
                <TransactionList />
                <BottomNavbar />
            </div>

        </div>
    )
}

export default Transactions