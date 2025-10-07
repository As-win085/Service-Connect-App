import "./index.css"

const ServiceCard = (props) => {
    const { service, serviceDescription, rate, rating,reviews } = props
    return (
        <div className="rounded-3xl min-w-64">
            <div className="bg-black h-20 rounded-t-3xl mb-2">
            </div>
            <div className="flex justify-between">
                <p className="text-gray-500 text-small m-2">{service}</p>
                <img src="" alt="Save-Icon" className="w-4 h-4 m-2" />
            </div>
            <p className="m-2">{serviceDescription}</p>
            <p className="text-sm m-2"><span className="m-2">{rate}</span>|<span className="m-2">{rating}</span>|<span className="m-2">{reviews} Reviwers</span></p>
        </div>
    )
}

export default ServiceCard