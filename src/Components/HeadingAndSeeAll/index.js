import "./index.css"

const HeadingAndSeeAll = (props) => {
    const {heading} = props
    return (
        <div className="flex justify-between md:mx-6 mb-3">
            <p className="text-gray-800 text-sm md:text-xl font-semibold">{heading}</p>
            <p className="text-gray-800 text-sm md:text-xl  font-semibold">SEE ALL</p>
        </div>
    )
}

export default HeadingAndSeeAll