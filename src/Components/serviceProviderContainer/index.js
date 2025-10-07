import HeadingAndSeeAll from "../HeadingAndSeeAll"
import ServiceProvider from "../ServiceProvider"
import "./index.css"

const providersList = [
    "name1", "name2","name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10"
]

const ServiceProviderContainer = () => {
    return (
        <div className="mx-5 md:mx-8 my-6">
            <div>
                <HeadingAndSeeAll heading="Top Service Providers" />
            </div>
            <div className="flex gap-6 overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-16 md:mb-36">
                {
                    providersList.map(each => <ServiceProvider name={each}/>)
                }
            </div>
            

        </div>
    )
}

export default ServiceProviderContainer