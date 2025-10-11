const CourseItem = () => {
    return (
        <div className="mx-auto py-2 md-py-4 bg-white rounded-xl w-full md:w-2/3 lg:w-1/2 shadow-lg flex gap-2 items-center px-4">
            <div className="bg-gray-900 rounded-md h-20 w-20 md mr-2 md:mr-6 md:h-24 md:w-24"></div>
            <div className="overflow-hidden">
                <h3 className="font-semibold text-red-800 text-md md:text-lg">Graphic Design</h3>
                <p className="text-blue-900 text-sm md:text-md font-md">Setup your Graphic Design</p>
            </div>
        </div>
    )
}

export default CourseItem