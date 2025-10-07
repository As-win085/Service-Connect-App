import HeadingAndSeeAll from "../HeadingAndSeeAll"
import ServiceProvider from "../ServiceProvider"
import "./index.css"

const providersList = [
    "name1", "name2","name3", "name4"
]

const ServiceProviderContainer = () => {
    return (
        <div className="m-2">
            <div>
                <HeadingAndSeeAll heading="Top Service Providers" />
            </div>
            <div className="flex gap-4">
                {
                    providersList.map(each => <ServiceProvider name={each}/>)
                }
            </div>
            

        </div>
    )
}

export default ServiceProviderContainer