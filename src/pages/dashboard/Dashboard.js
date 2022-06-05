import React from "react";
import Email from "./Email";
import SalesGraph from "./SalesGraph";
import TodoList from "./TodoList";
import TopCards from "./TopCards";
import WorldMap from "./WorldMap";

function Dashboard() {
  return (
    <div>
      <TopCards />
      <div className="row">
        <div className="col-md-7">
          <Email />
          <TodoList />
        </div>

        <div className="col-md-5">
          <WorldMap />
          <SalesGraph />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
