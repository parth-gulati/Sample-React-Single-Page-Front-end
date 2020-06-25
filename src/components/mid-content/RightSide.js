import React, { Component } from "react";
import image from "../../img/picture.png";

export default class RightSide extends Component {
  render() {
    return (
      <div>
        <img style={{ maxWidth: "120%", height: "auto" }} src={image} />
      </div>
    );
  }
}
