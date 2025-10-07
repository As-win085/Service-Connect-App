import HeadingAndSeeAll from "../HeadingAndSeeAll"
import "./index.css"
import ServiceCard from "../ServiceCard"
import ServicesContainer from "../ServicesContainer"

const serviceList = [
    {
        id: 1,
        service: "Plumbing", 
        serviceDescription: "Complete Residential Plumbing", 
        rate: "₹100-200", 
        rating: "4.2",
        reviews: 7638
    },
    {
        id: 2,
        service: "Plumbing", 
        serviceDescription: "Complete Residential Plumbing", 
        rate: "₹100-200", 
        rating: "4.2",
        reviews: 7638
    },
    {
        id: 3,
        service: "Plumbing", 
        serviceDescription: "Complete Residential Plumbing", 
        rate: "₹100-200", 
        rating: "4.2",
        reviews: 7638
    },
    {
        id: 4,
        service: "Plumbing", 
        serviceDescription: "Complete Residential Plumbing", 
        rate: "₹100-200", 
        rating: "4.2",
        reviews: 7638
    },
    {
        id: 5,
        service: "Plumbing", 
        serviceDescription: "Complete Residential Plumbing", 
        rate: "₹100-200", 
        rating: "4.2",
        reviews: 7638
    }
]

const PopularServiceContainer = () => {
    return (
        <div class="m-2">
            <HeadingAndSeeAll heading="Popular Services" />
            <div className="flex m-2 overflow-auto">
                <ServicesContainer />
            </div>
            <div class="flex overflow-auto gap-5 mx-2">
                {
                    serviceList.map(each => <ServiceCard service = {each.service} serviceDescription = {each.serviceDescription} rate = {each.rate} rating = {each.rating} reviews = {each.reviews} />)
                }
            </div>
        </div>
    )
}

export default PopularServiceContainer