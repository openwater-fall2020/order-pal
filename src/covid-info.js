import React, { Component } from "react";

class COVIDInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card" style={styles.container}>
        <div class="text" style={styles.text}>
          <p>
            Here's how we're keeping you & our employees safe during COVID-19.
          </p>
          <div>
            <p style = {{paddingTop: 25, marginLeft: 50, textAlign: "left"}}> Masks required</p>
            <p style = {{marginLeft: 50, textAlign: "left"}}> Social distancing enforced </p>
            <p style = {{marginLeft: 50, textAlign: "left"}}> Limited capacity </p>
            <p style = {{marginLeft: 50, textAlign: "left"}} >Sanitizing between customers </p>
          </div>
        </div>
      </div>
    );
  }
}

export default COVIDInfo;

const styles = {
  container: {
    margin: "0 auto",
    maxHeight: 300,
    width: "80vw",
    justifyContent: "space-between",
    background: "white",
    borderRadius: 15,
    boxShadow: "0px 4px rgba(0,0,0,0.1)",
    display: "flex",
    padding: 10,
    fontFamily: "Comic Sans",
  },
  text: {
    flex: 3,
    fontSize: 20,
    alignItems: "center",
    fontFamily: "Comic Sans",
	paddingLeft: 10,
	paddingRight: 10
  },
};
