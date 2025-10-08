import "./index.css"

const ServiceProvider = (props) => {
    const {name} = props
    return (
        <div className="mx-2 p-1 flex flex-col justify-center items-center shadow-md">
            <div className="h-10 min-w-12 rounded-lg bg-black md:rounded-2xl font-semibold md:h-20 md:min-w-24"></div>
            <p className="text-sm md:text-md lg:text-lg">{name}</p>
        </div>
    )
}

export default ServiceProvider