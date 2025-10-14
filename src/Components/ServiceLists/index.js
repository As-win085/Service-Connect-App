import ServiceItem from "../ServiceItem"
import ToggleSwitch from "../ToggleSwitch"
import BottomNavbar from "../BottomNavbar"

const ServiceLists = () => {
    return (
        <div className=" px-8 pb-20">
            <ToggleSwitch />
            <div className="flex justify-center gap-3 flex-wrap py-4 md:py-6">
                <ServiceItem category="Graphic Design" title="Graphic Design Advanced" rating={4.2} />
                <ServiceItem category="Web Development" title="Full Stack Web Development" rating={4.8} isCompleted={false} />
                <ServiceItem category="Digital Marketing" title="SEO and SEM Basics" rating={4.5} />
                <ServiceItem category="Graphic Design" title="Graphic Design Advanced" rating={4.2} />
                <ServiceItem category="Web Development" title="Full Stack Web Development" rating={4.8} isCompleted={false} />
                <ServiceItem category="Digital Marketing" title="SEO and SEM Basics" rating={4.5} />
                <ServiceItem category="Graphic Design" title="Graphic Design Advanced" rating={4.2} />
                <ServiceItem category="Web Development" title="Full Stack Web Development" rating={4.8} isCompleted={false} />
                <ServiceItem category="Digital Marketing" title="SEO and SEM Basics" rating={4.5} />
            </div>
            <BottomNavbar />
        </div>

    )
}

export default ServiceLists