import ServiceItem from "../ServiceItem"

const services = [
  {
    id: 1,
    title: "Bulb change",
    name: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200", // example image
  },
  {
    id: 2,
    title: "Bulb change",
    name: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200",
  },
  {
    id: 3,
    title: "Bulb change",
    name: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200",
  },
  {
    id: 4,
    title: "Bulb change",
    name: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200",
  },
  {
    id: 5,
    title: "Bulb change",
    name: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200",
  },
  {
    id: 6,
    title: "Bulb change",
    name: "John Abraham",
    time: "12 mins ago",
    location: "Challanam",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=200",
  },
];

const ActiveServices = () => {
  return (
    <div className="my-4 md:my-8 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-4 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Active Services</h2>
        <div className="flex flex-col gap-3">
          {services.map((each) => (
            <ServiceItem id={each.id} title={each.title} name={each.name} location={each.location} time={each.time} img={each.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveServices;
