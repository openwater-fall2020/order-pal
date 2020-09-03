import React, { Component } from "react";
import line from "../assets/receipt-line.png";

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card" style={styles.container}>
        <div class="details" style={{ padding: 15, flex: 1 }}>
          <span style={{ display: "flex", marginTop: 10 }}>
            <span style={styles.boldText}>Calamari</span>
            <span style={styles.alignLeft}> $22.98</span>
          </span>
          <p style={styles.text}> Quantity: 2</p>
          <div class="line">
            <img src={line} width="40px" alt="Line" />
          </div>

          <span style={{ display: "flex", marginTop: 10 }}>
            <span style={styles.boldText}>Subtotal</span>
            <span style={styles.alignLeft}> $22.98</span>
          </span>

          <span style={{ display: "flex", marginTop: 10 }}>
            <span style={styles.boldText}>Tax</span>
            <span style={styles.alignLeft}> $1.66</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Details;

const styles = {
  container: {
    margin: "0 auto",
    maxHeight: 300,
    width: "80vw",
    justifyContent: "space-between",
    background: "white",
    borderRadius: 15,
    display: "flex",
    padding: 10,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Open Sans",
    flex: 25,
  },

  alignLeft: {
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Open Sans",
    flex: 1,
  },
  text: {
    flex: 25,
    fontSize: 13,
    fontFamily: "Open Sans",
  },
};
