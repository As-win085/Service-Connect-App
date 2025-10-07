import "./index.css"


const Categories = (props) => {
    const {name,imgUrl} = props
    return (
        <div className="mr-6 flex flex-col items-center">
            <div className="flex justify-center items-center m-2 mb-0 w-12 h-12 md:w-20 md:h-20 rounded-r-full border-2 md:border-4 border-black rounded-full p-1">
                <img src={imgUrl} alt="category" className="w-8 h-8 md:w-14 md:h-14 overflow-hidden" />
            </div>
            <p className="text-sm font-semibold text-center">{name}</p>
        </div>
    )
}

export default Categories