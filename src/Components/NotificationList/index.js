import NotificationItem from "../NotificationItem"
import {UserRound, Wallet} from "lucide-react"
import { IoTicketOutline } from "react-icons/io5";
import { FiGrid } from 'react-icons/fi'

const NotificationList = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto my-4 bg-gray-300">
            <h2 className="text-sm lg:text-md text-blue-800 font-semibold my-3 md:my-8">Today</h2>
            <NotificationItem title="New Category Course.!" subtitle="New 3D Course is Available..." Icon={FiGrid} />
            <NotificationItem title="New Category Course.!" subtitle="New 3D Course is Available..." Icon={Wallet} />
            <NotificationItem title="Today's Special Offers" subtitle="You Have made a Course Payment" Icon={IoTicketOutline} />
            <h2 className="text-sm lg:text-md text-blue-800 font-semibold my-3 md:my-8">Yesterday</h2>
            <NotificationItem title="Credit Card Connected.!" subtitle="Credit Card has been Linked.!" Icon={Wallet} />
            <h2 className="text-sm lg:text-md text-blue-800 font-semibold my-3 md:my-8">Nov 20, 2025</h2>
            <NotificationItem title="Account Setup Successfull.!" subtitle="Your Account has been Created." Icon={UserRound} />
        </div>
    )
}

export default NotificationList