import "./index.css"

const Services = (props) => {
    const {name} = props
    return (
        <div className="bg-gray-500 rounded-full px-4 py-2  mx-2">
            <p className="text-sm text-white font-semibold">{name}</p>
        </div>
    )
}

export default Services