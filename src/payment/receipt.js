import React, { Component } from "react";
import NotiCard from "./server-noticard.js";
import { Link } from "react-router-dom";

class Receipt extends Component {
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
            <h1 style={styles.header}>Receipt</h1>
          </div>
        </div>
        <div class="container" style={styles.container}>
          {this.state.recommendation ? (
            <div class="card container">
              <div class="notifications">
                <NotiCard text={this.state.recommendationText} />
              </div>
            </div>
          ) : (
            <div class="no rec"></div>
          )}
        </div>
        <div class="button payment" style={styles.container}>
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
};
