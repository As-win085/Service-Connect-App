import "./index.css"

const CheckBox = (props) => {
    const {name} = props
    return (
        <div>
            <input type="checkbox" className="mr-1 text-black" id="check" />
            <label htmlFor="check" className="text-xs text-black">{name}</label>
        </div>
    )
}

export default CheckBox