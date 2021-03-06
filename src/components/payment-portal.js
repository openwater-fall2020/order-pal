import React, { Component } from "react";
import { Link } from "react-router-dom";
import floatingChatButton from "../assets/floating-chat-button.png";

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
        <div class="gradient" style={styles.topTab}>
          <div class="header" style={styles.headerContainer}>
            {/*header div for title and chat button*/}
            <h1 style={styles.header}>Payment</h1>
            <span class="chatButtonContainer">
              <a href="#">
                {/* TODO add link to chat page */}
                <img src={floatingChatButton} width="100px" height="100px" />
              </a>
            </span>
          </div>
        </div>
        <div class="container" style={styles.container}>
          <br />
          <p style={styles.text}>{this.state.paymentText}</p>

          <form
            class="payment info"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 30,
              background: "white",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              name="name"
              style={styles.bigInput}
              value={this.state.name}
              onChange={this.handleOnChange}
              placeholder="Name"
            />

            <input
              type="text"
              name="cardNumber"
              style={styles.bigInput}
              value={this.state.cardNumber}
              onChange={this.handleOnChange}
              placeholder="Card Number"
            />

            <div class="other info" style={{ display: "flex" }}>
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
        </div>
        <div
          class="button payment"
          style={{ display: "flex", justifyContent: "center", padding: 35 }}
        >
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
    fontFamily: "Open Sans",
    fontSize: 40,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  bottomTab: {
    background: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    display: "flex",
  },
  container: {
    background: "white",
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Open Sans",
  },
  bigInput: {
    borderRadius: 30,
    background: "white",
    color: "black",
    textAlign: "left",
    fontSize: "11",
    boxShadow: "0px 4px rgba(0,0,0,0.1)",
    padding: 10,
    margin: 10,
    width: 645,
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
  },
  text: {
    flex: 3,
    fontSize: 20,
    textAlign: "center",
    paddingTop: 30,
    fontFamily: "Open Sans",
  },
};
