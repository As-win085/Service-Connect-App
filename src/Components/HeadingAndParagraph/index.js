const HeadingAndParagraph = (props) => {
    const {heading, paragraph} = props
    return (
        <div className="my-4 md:my-8">
            <h1 className="font-semibold text-sm md:text-md lg:text-lg">{heading}</h1>
            <p className="text-xs md:text-sm lg:text-md">{paragraph}</p>
        </div>
    )
}

export default HeadingAndParagraph