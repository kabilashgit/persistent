import React, { useRef, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SalesGraph() {
  const data01 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
  ];
  const data02 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
  ];

  return (
    <div className="">
      <div className="card bg-gradient-info connectedSortable">
        <div className="card-header border-0">
          <h3 className="card-title">
            <i className="fas fa-th mr-1"></i>
            Sales Graph
          </h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn bg-info btn-sm"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            {/* <button
                  type="button"
                  className="btn bg-info btn-sm"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times"></i>
                </button> */}
          </div>
        </div>
        <div className="card-body">
          <div style={{ height: "250px", width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                width={500}
                height={400}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: -20,
                }}
              >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <ZAxis type="number" range={[100]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend />
                <Scatter
                  name="A school"
                  data={data01}
                  fill="white"
                  line
                  shape="cross"
                />
                <Scatter
                  name="B school"
                  data={data02}
                  fill="#276a75"
                  line
                  shape="diamond"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-footer bg-transparent">
          <div className="row">
            <div className="d-flex flex-row justify-content-end">
              <span className="mr-2">
                <i className="fas fa-square text-primary"></i> This year
              </span>
              <span>
                <i className="fas fa-square text-gray"></i> Last year
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesGraph;
