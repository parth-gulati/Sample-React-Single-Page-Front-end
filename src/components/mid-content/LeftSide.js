import React, { Component } from "react";

export default class LeftSide extends Component {
  render() {
    return (
      <div className="mr-auto" style={{ textAlign: "left" }}>
        <h6 style={{ textAlign: "left", color: "orange" }}>
          CONNECTING THE DISCONNECTED
        </h6>
        <br />
        <h1 style={{ textAlign: "left" }}>
          <span style={{ color: "orange" }}>Vyorius</span> brings unmanned
          robots <span style={{ color: "orange" }}>together</span>, <br />{" "}
          wherever they are{" "}
        </h1>
        <br />
        <p style={{ fontSize: "16px", textAlign: "left" }}>
          With all of the operations, commanding and maintenance tools in one
          place, unmanned vehicles will stay connected and productive no matter
          where you’re Delivering
        </p>
        <br />
        <div style={{ textAlign: "left" }}>
          <button
            className="orange btn btn-*"
            type="submit"
            style={{ marginRight: "10px", padding: "10px 30px 10px 30px" }}
          >
            Try Vyorius {">"}
          </button>
          <button
            className="orange-border btn btn-*"
            type="submit"
            style={{ marginRight: "10px", padding: "10px 30px 10px 30px" }}
          >
            Learn More
          </button>
        </div>
        <br />
        <p>
          Need to order a delivery?{" "}
          <a href="#">
            <u>Get started</u>
          </a>
        </p>
      </div>
    );
  }
}
