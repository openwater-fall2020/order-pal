import React, { Component } from "react";
import NotiCard from "./server-noticard.js";
import { Link } from "react-router-dom";
import floatingChatButton from "./floating-chat-button.png";
import Gratuity from "./noticard.js";
import Details from "./receipt-details.js";

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendation: true,
      recommendationText:
        "I hope ordering 2 calamaris was the right call and that you liked the recommendation!",
		total: 28.33,
    };
  }

  componentDidMount() {
    //set state asyncrhonously for food delivery?
  }

  render() {
    return (
      <div class="return div">
        <div class="gradient" style={styles.topTab}>
          <div class="header" style={styles.headerContainer}>
            {/*header div for title and chat button*/}
            <h1 style={styles.header}>Receipt</h1>
            <span class="chatButtonContainer">
              <a href="#">
                {/* TODO add link to chat page */}
                <img src={floatingChatButton} width="100px" height="100px" />
              </a>
            </span>
          </div>
        </div>
        <div class="container" style={styles.container}>
          {this.state.recommendation ? (
            <div class="content" style = {{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
			<h1> Order Items </h1>
			<Details/>
			<h1> Tips </h1>
              <div class="notifications">
			  <p style={styles.text}> Your server today was Mira </p>
                <NotiCard text={this.state.recommendationText} style= {{paddingTop: 10}}/>
              </div>
			  <div class="tip" style= {{paddingTop: 10}}>
                <Gratuity />
              </div>
            </div>
          ) : (
            <div class="no rec"></div>
          )}
        </div>
        <div class="button payment" style={{ display: "flex", justifyContent: "center", padding: 35 }}>
          <Link to="/payment">
            <button style={styles.button}> Proceed to Card Info </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Receipt;

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
    display: "flex",
  },
  container: {
    background: "white",
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    flex: 3,
    fontSize: 20,
    textAlign: "center",
	fontFamily: "Comic Sans",
  },
};
