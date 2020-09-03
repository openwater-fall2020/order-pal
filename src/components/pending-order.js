import React, { Component } from "react";
import NotiCard from "./server-noticard.js";
import { Link } from "react-router-dom";
import floatingChatButton from "../assets/floating-chat-button.png";
import line from "../assets/pending-line.png";

class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivered: true,
      info:
        "Your order has been confirmed! If you need anthing while you're waiting, hit the chat button.",
      deliveredInfo:
        "I've just dropped off your meal; please enjoy! Let me know once you are ready to pay.",
    };
  }

  componentDidMount() {
    //set state asyncrhonously for food delivery?
  }

  render() {
    return (
      <div class="return div">
        <div class="gradient" style={styles.container}>
          <div class="header" style={styles.headerContainer}>
            {/*header div for title and chat button*/}
            <h1 style={styles.header}>Pending Order</h1>
            <span class="chatButtonContainer">
              <a href="#">
                {/* TODO add link to chat page */}
                <img src={floatingChatButton} width="100px" height="100px" />
              </a>
            </span>
          </div>
          {this.state.delivered ? (
            <div class="card container" style={{background: "rgb(2,0,36)",
		    background:
		      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,37,140,1) 0%, rgba(9,9,121,1) 0%, rgba(255,114,13,1) 0%, rgba(255,86,101,1) 78%, rgba(249,74,74,1) 100%)",}}>
              <div class="notifications">
                <NotiCard text={this.state.info} />
              </div>
              <div class="loading" style={{ padding: 20 }}>
                <img src={line} height="100px" alt="Line" />
              </div>
              <div class="notifications">
                <NotiCard text={this.state.deliveredInfo} />
              </div>
              <div class="enjoy">
                <h1
                  style={{
                    color: "white",
                    paddingTop: "6vh",
                    paddingBottom: "3vh",
                    fontFamily: "Comic Sans",
                  }}
                >
                  Enjoy Your Meal
                </h1>
              </div>
            </div>
          ) : (
            <div class="notifications">
              <NotiCard text={this.state.info} />
            </div>
          )}
        </div>
        <div class="white part" style={styles.bottomTab}>
          <Link to="/receipt">
            <button style={styles.button}> I'm Ready to Pay</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Pending;

const styles = {
  container: {
    margin: "0 auto",
    height: "85vh",
    width: "100vw",
    textAlign: "center",
    fontFamily: "Comic Sans",
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
    fontFamily: "Comic Sans",
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
    fontFamily: "Comic Sans",
  },
};
