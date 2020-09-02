import React from 'react';
import floatingChatButton from "../assets/floating-chat-button.png"
import { Form, Image, Container, Row, Col } from "react-bootstrap";
import '../assets/stylesheets/general.css'

const headerBackground = {background: 'linear-gradient(225.82deg, #F94A4A -0.87%, #FF720D 98.77%)'};

export const Header = () => {
  return (
    <div className="header w-100" style={headerBackground} width="414px">
      <Container>
        <Row className="row-cols-2" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
          <Col>
            <h2>Menu</h2>
          </Col>
          <Col align="right">
            <a href="#"> {/* TODO add link to chat page */}
              <Image thumbnail src={floatingChatButton} width="32px" height="32px" />
            </a>
          </Col>
        </Row>
        {/* <Container className="headerTitleContainer"> */}
          
        {/* </Container> */}
        {/* <Container className="chatButtonContainer" align="right"> */}
        <div align="right">
         
        </div>
        {/* </Container> */}
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