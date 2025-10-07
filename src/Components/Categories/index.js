import "./index.css"


const Categories = (props) => {
    const {name,imgUrl} = props
    return (
        <div className="m-4 flex flex-col justify-between items-center">
            <div className="m-2 mb-0 w-12 h-12 rounded-r-full border-2 border-black rounded-full p-1">
                <img src={imgUrl} alt="category" className="w-8 h-8 overflow-hidden" />
            </div>
            <p className="text-sm font-semibold">{name}</p>
        </div>
    )
}

export default Categories