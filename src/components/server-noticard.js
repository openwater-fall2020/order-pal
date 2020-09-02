import React, { Component } from "react";
import avatar from "../assets/waiter-avatar.png";

class NotiCard extends Component {

	constructor(props){
		super(props);
		this.state = {
			text: ""
		}
	}
  render() {
    return (
      <div class="card" style={styles.container}>
        <div class="avatar" >
          <img
		  	style={styles.avatar}
            src={avatar}
			height= "90vh"
			width = "90vw"
			alt = "Avatar"
          />
        </div>
        <div class="text" style={styles.text}>
		{this.props.text}
        </div>
      </div>
    );
  }
}

export default NotiCard;

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
	fontFamily: "Comic Sans",
	flexDirection: "row"
  },
  avatar: {
    flex: 1,
	borderRadius: "50%",
	objectFit: "cover",

  },
  text: {
    flex: 3,
	padding: 30,
	fontSize: 20,
	alignItems: "center",
	fontFamily: "Comic Sans",
  },
};
