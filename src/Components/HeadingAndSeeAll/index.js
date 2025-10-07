import "./index.css"

const HeadingAndSeeAll = (props) => {
    const {heading} = props
    return (
        <div className="flex justify-between m-2">
            <p className="text-blue-600 text-sm md:text-xl font-semibold">{heading}</p>
            <p className="text-blue-600 text-sm md:text-xl  font-semibold">SEE ALL</p>
        </div>
    )
}

export default HeadingAndSeeAll