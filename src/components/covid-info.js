import React, { Component } from "react";

class COVIDInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card" style={styles.container}>
        <div class="text" style={styles.text}>
          <p style={{paddingTop: 20, fontSize: 20, textAlign:"center"}}>
            Here's how we're keeping you & our employees safe during COVID-19.
          </p>
          <div>
            <p style = {{paddingTop: 25, marginLeft: 50, textAlign: "left", fontSize: 20,}}> Masks required</p>
            <p style = {{marginLeft: 50, textAlign: "left", fontSize: 20,}}> Social distancing enforced </p>
            <p style = {{marginLeft: 50, textAlign: "left", fontSize: 20,}}> Limited capacity </p>
            <p style = {{marginLeft: 50, textAlign: "left", fontSize: 20,}} >Sanitizing between customers </p>
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
    width: "80vw",
    background: "white",
    borderRadius: 15,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    padding: 10,
    fontFamily: "Open Sans",
  },
  text: {
    flex: 3,
    fontSize: 30,
    alignItems: "center",
    fontFamily: "Open Sans",
	paddingLeft: 10,
	paddingRight: 10
  },
};
