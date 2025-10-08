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
        <div class="ml-6 md:mx-10 md:my-4">
            <div className="mr-8">
                <HeadingAndSeeAll heading="Popular Services" />
            </div>
            
            <div className="flex my-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <ServicesContainer />
            </div>
            <div class="flex overflow-auto gap-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {
                    serviceList.map(each => <ServiceCard service = {each.service} serviceDescription = {each.serviceDescription} rate = {each.rate} rating = {each.rating} reviews = {each.reviews} />)
                }
            </div>
        </div>
    )
}

export default PopularServiceContainer