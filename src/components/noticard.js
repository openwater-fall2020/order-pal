import React, { Component } from "react";

class Gratuity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card" style={styles.container}>
        <div class="text" style={styles.text}>
          <span style={{ display: "flex", marginTop: 10 }}>
            <span style={{ flex: 1 }}>
              <input type="radio" value="15%" name="tip" /> 15% Gratuity
            </span>
            <span style={{ alignSelf: "flex-end" }}> $3.69</span>
          </span>
          <span style={{ display: "flex", marginTop: 10 }}>
            <span style={{ flex: 1 }}>
              <input type="radio" value="20%" name="tip" /> 20% Gratuity
            </span>
            <span style={{ alignSelf: "flex-end" }}> $4.93</span>
          </span>
          <span style={{ display: "flex", marginTop: 10 }}>
            <span style={{ flex: 1 }}>
              <input type="radio" value="custom%" name="tip" /> Custom
            </span>
            <span style={{ alignSelf: "flex-end" }}>
              {" "}
              <input type="text-area" style={styles.textArea} />
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Gratuity;

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
	fontFamily: "Open Sans",
  },
  text: {
    padding: 30,
    fontSize: 20,
    alignItems: "center",
    flexDirection: "column",
    flex: 3,
    fontFamily: "Comic Sans",
  },
  textArea: {
    fontSize: 20,
    textAlign: "right",
    fontFamily: "Open Sans",
	width: "75px"
  },
};
