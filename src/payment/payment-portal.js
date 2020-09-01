import React, { Component } from "react";
import { Link } from "react-router-dom";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendation: true,
      recommendationText:
        "I hope ordering 2 calamaris was the right call and that you liked the recommendation!",
    };
  }

  componentDidMount() {
    //set state asyncrhonously for food delivery?
  }

  render() {
    return (
      <div class="return div">
        <div class="gradient" style={styles.topTab}>
          <div
            class="header"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/*header div for title and chat button*/}
            <h1 style={styles.header}>Payment</h1>
          </div>
        </div>
        <div class="payment info" style={styles.container}>
          <div class="name" style={styles.input}>
            Name
          </div>
          <div class="card number" style={styles.input}>
            Card Number
          </div>
          <div class="other info" style={(styles.input, { display: "flex" })}>
            <div class="expiration date" style={styles.input, {flex: 1}}>
              Expiration Date
            </div>
            <div class="cvv" style={styles.input, {flex: 1}}>
              CVV
            </div>
            <div class="zip code" style={styles.input, {flex: 1}}>
              Zip Code
            </div>
          </div>
        </div>
        <div class="button payment" style={styles.container}>

          <button style={styles.button}> Make Payment</button>
		
        </div>
      </div>
    );
  }
}

export default Payment;

const styles = {
  topTab: {
    margin: "0 auto",
    height: "15vh",
    width: "100vw",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,37,140,1) 0%, rgba(9,9,121,1) 0%, rgba(255,114,13,1) 0%, rgba(255,86,101,1) 78%, rgba(249,74,74,1) 100%)",
  },
  header: {
    color: "white",
    paddingTop: 30,
    paddingBottom: 30,
    fontFamily: "Aktiv Grotesk",
  },
  container: {
    background: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    display: "flex",
  },
  button: {
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,37,140,1) 0%, rgba(9,9,121,1) 0%, rgba(255,114,13,1) 0%, rgba(255,86,101,1) 78%, rgba(249,74,74,1) 100%)",
    borderRadius: 30,
    width: "35vw",
    maxWidth: "200px",
    height: "5vh",
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 30,
    background: "white",
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,37,140,1) 0%, rgba(9,9,121,1) 0%, rgba(255,114,13,1) 0%, rgba(255,86,101,1) 78%, rgba(249,74,74,1) 100%)",
    color: "black",
    textAlign: "right",
    fontSize: "11",
  },
};
