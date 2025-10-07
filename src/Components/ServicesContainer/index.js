import "./index.css"
import Services from "../Services"

const servicesList = [
    {
        id:1,
        name: "All"
    },
    {
        id:2,
        name: "Plumbing"
    },
    {
        id:3,
        name: "Electrical"
    },
    {
        id:4,
        name: "Mechanical"
    }
]

const ServicesContainer = () => servicesList.map(each => <Services name={each.name} />)

export default ServicesContainer