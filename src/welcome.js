import React, { Component } from "react";
import COVIDInfo from "./covid-info.js";
import { Link } from "react-router-dom";
import image from "./payment/welcome.png";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //set state asyncrhonously for food delivery?
  }

  render() {
    return (
      <div class="return div">
        <div clas="gradient" style={styles.container}>
          <div class="header" style={styles.headerContainer}>
            {/*header div for title and chat button*/}
            <div class="welcome image">
              <img src={image} style = {styles.image} />
            </div>
            <h1 style={styles.header}>Welcome to OrderPal!</h1>
          </div>
		  <COVIDInfo/>
		  </div>
          <div class="white part" style={styles.bottomTab}>
            {/* TODO link to server bio page*/}
            <Link to="/pending">
              <button style={styles.button}> Begin Ordering</button>
            </Link>
			<p>     </p>
          </div>

      </div>
    );
  }
}

export default Welcome;

const styles = {
  container: {
    margin: "0 auto",
    height: "70vh",
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
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: "Comic Sans",
    fontSize: 40,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  bottomTab: {
    background: "white",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "30vh",
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
  image: {
        width: "100vw",
        height: "40vh",
    }
};
