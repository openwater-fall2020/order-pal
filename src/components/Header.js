import React from 'react';
import floatingChatButton from "../assets/floating-chat-button.png"
import { Form, Image, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header">
      <Container>
        <Container className="headerTitleContainer">
          <h2>Menu</h2>
        </Container>
        <Container className="chatButtonContainer" align="right">
          <a href="#"> {/* TODO add link to chat page */}
            <Image thumbnail src={floatingChatButton} width="64px" height="64px" />
          </a>
        </Container>
      </Container>
      <Container className="searchBarContainer">
        <Form inline>
          <Form.Control type="text" className="searchBar" placeholder="Search...." />
        </Form>
      </Container>
    </div>
  )
};

export default Header;