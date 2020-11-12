import React, { Component } from "react";
// import "./index.css";
class Helpers extends Component {
  constructor() {
    super();
  }

  render() {
    const { direction } = this.props;
    console.log("direction", direction);
    return (
      <div>
        <div id="helper" title="helper">
          <h1> ToolTip side </h1>{" "}
        </div>{" "}
        <div id="direction">
          <span>Direction :</span>
          <input type="dropdown" id="dir" placeholder="L" required />
        </div>
      </div>
    );
  }
}

export default Helpers;
