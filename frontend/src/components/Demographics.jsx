import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// Sample data for the charts (replace with your actual data)
const sexData = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 300 },
  { name: 'All', value: 100 },
];

const ageData = [
  { name: '18-25', value: 200 },
  { name: '46+', value: 250 },
  { name: '18-25', value: 200 },
  { name: '46+', value: 250 },
  { name: '18-25', value: 200 },
  { name: '46+', value: 250 },
  { name: '18-25', value: 200 },
  { name: '46+', value: 250 },
  { name: '18-25', value: 200 },
  { name: '46+', value: 250 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Demographics = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-400 max-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Demographics Data</h1>
      
      <div className="flex flex-row space-x-5 w-full max-w-full justify-center items-center">
        
        {/* Sex Distribution Chart */}
        <div className="flex-1 bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sex Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sexData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100} // Adjusted to fit within the box
                fill="#8884d8"
                dataKey="value"
              >
                {sexData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Avg Age Distribution Chart - Replaced with Bar Chart */}
        <div className="flex-1 bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Average Age Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Demographics;
