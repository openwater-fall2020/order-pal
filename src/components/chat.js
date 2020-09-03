import React, { Component } from "react";
import { Link } from "react-router-dom";
import chat from "../assets/chat.png";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div class="return div">
        <div class="gradient" style={styles.topTab}>
          <div class="header" style={styles.headerContainer}>
            {/*header div for title and chat button*/}
            <h1 style={styles.header}>Chat</h1>
			<Link to ="/menu">
			<h1 style={styles.header}> X </h1>
			</Link>
          </div>
        </div>
        <div class="container" style={styles.container}>
          <span class="chatContainer">
            <img src={chat} style = {styles.image} />
          </span>
        </div>
        <div
          class="send message"
          style={{ display: "flex", justifyContent: "center", padding: 35 }}
        >
          <input
            style={styles.button}
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleOnChange}
            placeholder="Your Message"
          />
		  <button style ={{color: "#FF720D", borderRadius: "0px 30px 30px 0px", fontWeight: "bold", borderColor:"#F1F1F1" , border: "1px #F1F1F1", paddingRight: 20}}> SEND </button>
        </div>
      </div>
    );
  }
}

export default Chat;

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
    background: "#F1F1F1",
    width: "70vw",
    maxWidth: "600px",
    height: "5vh",
    color: "black",
    textAlign: "left",
    fontSize: 17,
    fontFamily: "Open Sans",
	paddingLeft: 20,
	border: "1px #F1F1F1",
	borderColor:"#F1F1F1",
	borderRadius: "30px 0px 0px 30px",

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
  image: {
	width: "80vw",
	height: "70vh",
  },
};
