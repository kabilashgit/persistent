import React from "react";

function SalesGraph() {
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
          <canvas
            className="chart"
            id="line-chart"
            style={{
              minHeight: "200px",
              height: "200px",
              maxHeight: "400px",
              maxWidth: "100%",
            }}
          />
        </div>

        <div className="card-footer bg-transparent">
          <div className="row">
            <div className="col-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                value="20"
                onChange={() => console.log("hello")}
                data-width="60"
                data-height="60"
                // data-fgColor="#39CCCC"
              />
              <div className="text-white">Mail-Orders</div>
            </div>

            <div className="col-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                value="50"
                onChange={() => console.log("hello")}
                data-width="60"
                data-height="60"
                // data-fgColor="#39CCCC"
              />
              <div className="text-white">Online</div>
            </div>

            <div className="col-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                value="30"
                onChange={() => console.log("hello")}
                data-width="60"
                data-height="60"
                // data-fgColor="#39CCCC"
              />
              <div className="text-white">In-Store</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesGraph;
