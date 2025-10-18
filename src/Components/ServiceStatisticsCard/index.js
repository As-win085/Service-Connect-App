
const MetricCard = ({ title, value, percentageChange }) => {
  const isPositive = parseFloat(percentageChange) > 0;
  const percentageColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between h-36">
      <h3 className="text-gray-700 font-medium mb-2">{title}</h3>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-blue-300 opacity-60 flex-shrink-0"></div>
        
        <div className="text-3xl font-semibold text-gray-900">
          {value}
        </div>
      </div>
      
      <div className={`text-sm font-semibold mt-2 ${percentageColor}`}>
        +{percentageChange}%
      </div>
    </div>
  );
}

export default MetricCard

