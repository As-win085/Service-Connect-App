import "./index.css"

const LocationModal = () => {
    return (
        <div className='w-1/3 h-1/4 border-2 border-gray-300 rounded-lg p-5 mx-auto mt-20'>
                <h1 className="text-center text-2xl font-semibold">Allow Location</h1>
                <div className='w-full flex flex-col justify-center items-center space-y-5 mt-5'>
                    <button class="w-1/3 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                        Allow
                    </button>
                </div>
                <p className='text-start text-gray-700 my-2 md:my-2'>Manually Enter Location</p>
                <input type="text" className='bg-gray-600 border border-amber-950 p-2 md:p-3 md:w-full my-2 md:my-6' placeholder='Value' />
            </div>
    )
}

export default LocationModal