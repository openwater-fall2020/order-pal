import React from 'react';
import floatingChatButton from "../assets/floating-chat-button.png"
import { Form, Image, Container, Row, Col } from "react-bootstrap";
import '../assets/stylesheets/general.css'

const orangeColor = "#FF720D";
const gradientColor = {
  background: "linear-gradient(180deg, #F94A4A 18.23%, #FF720D 100%)",
  borderColor: orangeColor,
  padding: '16px 32px',
  fontWeight: 'bold'
};
export const Header = () => {
  return (
    <div className="header w-100" style={gradientColor} width="414px">
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