import React, { Component } from "react";
import LeftSide from "./mid-content/LeftSide";
import RightSide from "./mid-content/RightSide";

export default class MidContent extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-sm d-flex justify-content-center center-block text-center">
            <LeftSide />
          </div>
          <div className="col-sm d-flex justify-content-center">
            <RightSide />
          </div>
        </div>
      </div>
    );
  }
}
