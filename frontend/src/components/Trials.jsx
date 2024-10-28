import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const Trials = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 space-y-6 bg-gray-400 ">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">Top-10 with number of facilities per city</h1>
      
      {/* Chart Container */}
      <div className="w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg mb-20">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={30}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="orange" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  )
}

export default Trials