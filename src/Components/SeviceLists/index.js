const ServiceLists = (props) => {
    const { Icon, name, index } = props
    return (
        <div
            key={index}
            className="flex items-center space-x-4 p-2 rounded-lg transition duration-150 ease-in-out hover:bg-indigo-50"
        >
            <Icon /> 
            <span className="text-base md:text-md lg:text-lg text-gray-700 font-medium">
                {name}
            </span>
        </div>
    )
}

export default ServiceLists