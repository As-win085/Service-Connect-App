import "./index.css"

const ServiceProvider = (props) => {
    const {name} = props
    return (
        <div className="m-2 p-1 flex flex-col justify-center items-center">
            <div className="h-10 w-12 rounded-lg bg-black font-semibold"></div>
            <p className="">{name}</p>
        </div>
    )
}

export default ServiceProvider