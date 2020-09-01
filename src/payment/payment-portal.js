import React, { Component } from "react";
import { Link } from "react-router-dom";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentText: "You will be charged $28.33 on this card",
      name: null,
      cardNumber: null,
      date: null,
      cvv: null,
      zip: null,
    };
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    //set state asyncrhonously for food delivery?
  }

  render() {
    return (
      <div class="return div">
          <div
            class="header"
            style={styles.topTab}
          >
            {/*header div for title and chat button*/}
            <h1 style={styles.header}>Payment</h1>
          </div>
		  <p style = {styles.text}>{this.state.paymentText}</p>
        <form
          class="payment info"
          style={
            (styles.container, { display: "flex", flexDirection: "column", paddingTop: 30 })
          }
        >
          <input
            type="text"
            name="name"
            style={styles.input}
            value={this.state.name}
            onChange={this.handleOnChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="cardNumber"
            style={styles.input}
            value={this.state.cardNumber}
            onChange={this.handleOnChange}
            placeholder="Card Number"
          />
          <div
            class="other info"
            style={{display: "flex"}}
          >
            <input
              type="date"
              name="date"
              style={styles.input}
              value={this.state.date}
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              name="cvv"
              style={styles.input}
              value={this.state.cvv}
              onChange={this.handleOnChange}
              placeholder="CVV"
            />
            <input
              type="text"
              name="zip"
              style={styles.input}
              value={this.state.zip}
              onChange={this.handleOnChange}
              placeholder="Zip Code"
            />
          </div>
        </form>
        <div class="button payment" style = {{display: "flex", justifyContent: "center", padding: 35}}>
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
    height: "10vh",
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
    fontFamily: "Aktiv Grotesk",
	paddingTop: 30,
    paddingBottom: 30,
  },
  container: {
    background: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
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
    color: "black",
    textAlign: "left",
    fontSize: "11",
    boxShadow: "0px 4px rgba(0,0,0,0.1)",
    padding: 10,
    margin: 10,
    flex: 1,
  },
  text: {
    flex: 3,
	fontSize: 20,
	textAlign: "center",
	paddingTop: 30
  },
};
