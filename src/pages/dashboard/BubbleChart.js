import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./dashboard.module.scss";

function BubbleChart() {
  const data = [
    { x: 1, y: 23 },
    { x: 2, y: 3 },
    { x: 3, y: 15 },
    { x: 4, y: 35 },
    { x: 5, y: 45 },
    { x: 6, y: 25 },
    { x: 7, y: 17 },
    { x: 8, y: 32 },
    { x: 9, y: 43 },
  ];

  return (
    <div className={`card ${styles.bubbleChart}`}>
      <div className="card-header">
        <h3 className="card-title">Bubble Chart</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn bg-danger btn-sm"
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
      <div className="card-body px-0">
        <ResponsiveContainer width={"100%"} height={350}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" name="Carrier" dataKey="x" />
            <YAxis type="number" name="Count" dataKey="y" />
            <Scatter data={data} fill="green" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="card-header"></div>
    </div>
  );
}

export default BubbleChart;
