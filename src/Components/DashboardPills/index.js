import ServiceStatisticsCard from "../../Components/ServiceStatisticsCard"

const DashboardGrid = () => {
  const metrics = [
    { title: 'Registered Services', value: 12, percentageChange: '168.001' },
    { title: 'Revived quotes', value: 12, percentageChange: '168.001' },
    { title: 'Active Bookings', value: 12, percentageChange: '168.001' },
    { title: 'Requests', value: 12, percentageChange: '168.001' },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <ServiceStatisticsCard
            key={index}
            title={metric.title}
            value={metric.value}
            percentageChange={metric.percentageChange}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardGrid;