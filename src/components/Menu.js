import React, { useState } from 'react';
import { Col, Row, Card, Image, Container, Form, Button, } from "react-bootstrap";

import { Header } from "./Header";

import { Link } from "react-router-dom";

import menuData from "../data/menuData";
import waiterAvatar from "../assets/waiter-avatar.png";
import plusImage from "../assets/plus.png";
import minusImage from "../assets/minus.png";

// Pass server object in by props
export const Menu = ({ order, setOrder }) => {
  const [showRecs, setShowRecs] = useState(false);

  const mainColor = '#F94A4A';
  const orangeColor = "#FF720D";
  const gradientColor = {
    background: "linear-gradient(180deg, #F94A4A 18.23%, #FF720D 100%)",
    borderRadius: '30px',
    borderColor: orangeColor,
    padding: '16px 32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    width: 'f'
  };

  const imgsStyle = {
    float: 'left',
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  };

  const server = {
    name: 'Server\'s Name',
    recommendations: [
      menuData[0],
      menuData[1],
      menuData[2],
    ],
    message: "Here are some of my favorites, perfect for a small group!",
  };

  const recommendationsCard = () => {
    return (
      <Card style={{ textAlign: 'center', position: 'absolute', margin: '0 auto', zIndex: '1', width: '100%', left: '0px', borderRadius: '10px' }}>
        <p>
          Here are some of my favorites, perfect for a small group!
        </p>
        {server.recommendations.map((item, index) => (
          <p style={{ color: mainColor }} key={index}>
            {item.name}
          </p>
        ))}
        <Button style={gradientColor}>
          Chat
        </Button>
      </Card>
    );
  };
  /**
   * @param {Object} item an item object from menuData
   * @param {index} index the index of the item in menuData
   */
  const menuItemCard = (item, index) => {
    return (
      <Card
        key={index}
        className="shadow-sm mt-1 mb-1 mt-1"
        style={{ height: '95%' }}
      >
        <Card.Body
          className="p-0 mb-0"
        >
          <Link to="/dishdetail">
            <Image
              fluid
              src={item.url}
              style={imgsStyle}
              className="w-100 mx-100"
            />
          </Link>
        </Card.Body>
        <Card.Title
          className="text-center mt-2"
          style={{ fontWeight: 'bold' }}
        >
          {item.name}
        </Card.Title>
      </Card>
    );
  };
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Header />
      {/* Recommendations card */}
      <Card
        className="w-100"
        style={{
          borderRadius: '15px',
          marginTop: '-5px',
          // height: 'auto',
          // minHeight: '100%',
          maxWidth: '85%',
        }}
      >
        <Container
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          <Row
            className="row-cols-3"
            style={{
              display: "flex",
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
            noGutters
          >
            <Col className="pr-0" xs="auto" >
              <Image src={waiterAvatar} />
            </Col>
            <Col className="pr-0 pl-0 mt-3 ml-2 mr-1" xs="auto">
              <p>Need recommendations?</p>
            </Col>
            <Col xs="auto">
              <Image
                src={showRecs ? minusImage : plusImage}
                onClick={() => setShowRecs(!showRecs)}
              />
            </Col>
          </Row>
          {showRecs &&
            recommendationsCard()
          }
        </Container>
      </Card>
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 'auto'
      }}
      >
        <Container fluid>
          <Form.Row style={{ top: '10%' }}>
            <Col>Starters</Col>
            <Col>Entrees</Col>
            <Col>Sides</Col>
            <Col>Drinks</Col>
          </Form.Row>
        </Container>
        <Container fluid className="mt-2" >
          <Row className="row-cols-2">
            <Col className="menuItemCard">
              {menuItemCard(menuData[0], 0)}
            </Col>
            <Col className="menuItemCard">
              {menuItemCard(menuData[1], 1)}
            </Col>
          </Row>
          <Row className="row-cols-2">
            <Col className="menuItemCard">
              {menuItemCard(menuData[2], 2)}
            </Col>
            <Col className="menuItemCard">
              {menuItemCard(menuData[3], 3)}
            </Col>
          </Row>
        </Container>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className="bg-white" style={{ borderColor: mainColor, color: mainColor, fontWeight: 'bold' }}>
            Review Order ({order.length})
          </Button>
        </Container>
      </Container>
    </div >
  );
};

export default Menu;