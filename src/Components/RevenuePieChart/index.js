import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data for the chart slices
const data = [
  { name: 'S1', value: 32, color: '#F87171' }, // Tailwind's red-400 equivalent for slice
  { name: 'S2', value: 30, color: '#A78BFA' }, // Tailwind's violet-400 equivalent for slice
  { name: 'S3', value: 38, color: '#2DD4BF' }, // Tailwind's teal-400 equivalent for slice
];

// Data for the legend (using more vibrant colors for the legend boxes as per image)
const legendData = [
  { name: 'S1', color: 'bg-red-400' },
  { name: 'S2', color: 'bg-purple-600' },
  { name: 'S3', color: 'bg-teal-400' },
];

// Reusable component for the legend item
const LegendItem = ({ name, color }) => (
  <div className="flex items-center space-x-2">
    <span className={`w-3 h-3 rounded-sm ${color} flex-shrink-0`}></span>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

// Custom label for the 32% percentage
const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  // Only display for the S1 slice (index 0 based on data order)
  if (index === 0) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text
        x={x}
        y={y}
        fill="black" // Or a specific color for the label
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-semibold"
        style={{ fontSize: '0.875rem' }} // Tailwind text-sm
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  return null;
};


// Main component for the Revenue Chart Card with a real Recharts Donut Chart
const RevenueChartCard = () => {
  // Calculate total value for centered text (e.g., if "3" means 3 services, not sum of percentages)
  // Assuming '3' in the center refers to a count, not a sum of values
  const totalServices = 3; 

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">
        Revenue by service
      </h2>
      
      {/* Chart Area */}
      <div className="relative flex items-center justify-center h-64"> {/* Increased height for better chart rendering */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // Inner radius for donut hole
              outerRadius={90} // Outer radius of the donut
              fill="#8884d8"
              paddingAngle={2} // Small gap between slices
              dataKey="value"
              labelLine={false} // Hide lines connecting labels
              label={CustomPieLabel} // Use custom label for 32%
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Text within the donut hole */}
        <div className="absolute flex flex-col items-center justify-center pointer-events-none">
          <span className="text-4xl font-bold text-gray-900">{totalServices}</span>
          <span className="text-md text-gray-500">Service</span>
        </div>
      </div>

      {/* --- Legend --- */}
      <div className="flex justify-center space-x-4 mt-6">
        {legendData.map((item, index) => (
          <LegendItem key={index} name={item.name} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default RevenueChartCard;