import "./index.css"

const CategoryItem = (props) => {
    const {imgUrl,name} = props

    return (
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-lg w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 hover:scale-105 transition m-2 shadow-md m-2 md:m-4 lg:m-6 p-2 md:p-4 lg:p-6">
            <img src={imgUrl} alt={name} className="w-10 h-10 md:h-12 md:w-12 lg:w-16 lg:h-16" />
            <p className="text-xs lg:text-sm font-bold text-center mt-2">{name}</p>
        </div>
    )
}

export default CategoryItem