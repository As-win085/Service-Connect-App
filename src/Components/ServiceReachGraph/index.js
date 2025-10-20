import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 100 },
  { name: "Mar", value: 90 },
  { name: "Apr", value: 150 },
  { name: "May", value: 130 },
  { name: "Jun", value: 200 },
  { name: "Jul", value: 140 },
];

const ServiceReachChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full md:w-2/3 lg:w-1/2 mx-auto my-4 md:my-8">
      <h2 className="text-lg font-semibold mb-4">Service Reach</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0} />
            <XAxis dataKey="name" hide />
            <YAxis tick={{ fill: "#7e22ce", fontSize: 12 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7c3aed"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={{ r: 5, fill: "#7c3aed" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServiceReachChart;
