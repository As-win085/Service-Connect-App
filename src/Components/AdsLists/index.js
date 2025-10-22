import AdsItem from "../AdItem"
import ToggleSwitch from "../ToggleSwitch"

const AdsLists = () => {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto py-4">
            <ToggleSwitch />
            <AdsItem />
            <AdsItem />
            <div className="flex justify-center">
                <button className="bg-gray-900 py-4 w-full max-w-sm rounded-full mx-auto text-white" >+ Create Ad</button>
            </div>
        </div>
    )
}

export default AdsLists