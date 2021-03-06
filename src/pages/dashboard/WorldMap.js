import React, { useRef } from "react";
// import { VectorMap } from "react-jvectormap";
import { VectorMap } from "@react-jvectormap/core";
import { asiaMill } from "@react-jvectormap/asia";

function WorldMap() {
  const mapRef = useRef(0);
  return (
    <div className="">
      <div className="card bg-gradient-primary connectedSortable">
        <div className="card-header border-0">
          <h3 className="card-title">
            <i className="fas fa-map-marker-alt mr-1"></i>
            Visitors
          </h3>

          <div className="card-tools">
            <button
              type="button"
              className="btn btn-primary btn-sm daterange"
              title="Date range"
            >
              <i className="far fa-calendar-alt"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-card-widget="collapse"
              title="Collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <div style={{ height: "250px", width: "100%" }}>
            <VectorMap
              map={asiaMill}
              backgroundColor="transparent"
              // ref={mapRef}
              containerStyle={{
                width: "100%",
                height: "250px",
              }}
              regionStyle={{
                initial: {
                  fill: "#404759",
                },
                hover: {
                  fill: "#E65555",
                },
              }}
              containerClassName="map"
            />
          </div>
        </div>

        <div className="card-footer bg-transparent">
          <div className="row">
            <div className="col-4 text-center">
              <div id="sparkLine1"></div>
              <div className="text-white">Visitors</div>
            </div>

            <div className="col-4 text-center">
              <div id="sparkLine2"></div>
              <div className="text-white">Online</div>
            </div>

            <div className="col-4 text-center">
              <div id="sparkLine3"></div>
              <div className="text-white">Sales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
