import "./index.css"

const CheckBox = (props) => {
    const {name} = props
    return (
        <div className="m-1 flex items-center">
            <input type="checkbox" className="mr-1 text-black w-4 h-4 " id="check" />
            <label htmlFor="check" className=" text-black text-sm md:text-md">{name}</label>
        </div>
    )
}

export default CheckBox