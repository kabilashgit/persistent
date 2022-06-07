import React from "react";
import ClientDirectory from "../clientDirectory/ClientDirectory";
import BubbleChart from "./BubbleChart";
import Email from "./Email";
import SalesGraph from "./SalesGraph";
import StackedBarChart from "./StackedBarChart";
import TodoList from "./TodoList";
import TopCards from "./TopCards";
import WorldMap from "./WorldMap";
import styles from "./dashboard.module.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <TopCards />
      <div className="row">
        <div className="col-md-6">
          <Email />
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <TodoList />
            </div>
            <div className="col-md-6">
              <ClientDirectory />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <WorldMap />
        </div>
        <div className="col-md-3">
          <SalesGraph />
        </div>
        <div className="col-md-3">
          <BubbleChart />
        </div>
        <div className="col-md-3">
          <StackedBarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
