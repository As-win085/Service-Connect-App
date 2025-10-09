import "./index.css"

const CategoryItem = (props) => {
    const {imgUrl,name} = props

    return (
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-lg">
            <img src={imgUrl} alt={name} className="" />
            <p className="text-sm lg:text-md ">{name}</p>
        </div>
    )
}