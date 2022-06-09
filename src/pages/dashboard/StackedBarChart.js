import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

function StackedBarChart() {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  return (
    <div className="card">
      <div className="card-header border-0">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">Sales</h3>
          <a href="#">View Report</a>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex">
          <p className="d-flex flex-column">
            <span className="text-bold text-lg">$18,230.00</span>
            <span>Sales Over Time</span>
          </p>
          <p className="ml-auto d-flex flex-column text-right">
            <span className="text-success">
              <i className="fas fa-arrow-up"></i> 33.1%
            </span>
            <span className="text-muted">Since last month</span>
          </p>
        </div>

        <div className="position-relative mb-4">
          <div style={{ height: "250px", width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: -20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackedBarChart;
