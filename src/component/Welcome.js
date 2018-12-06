import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "15rem",
            color: "#1890ff",
            fontSize: "2rem"
          }}>
          Welcome to our new Web APP
        </p>
      </div>
    );
  }
}

export default Welcome;
