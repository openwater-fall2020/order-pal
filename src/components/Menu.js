import React, { useState } from 'react';
import { Col, Row, Card, Image, Container, Form, Button, } from "react-bootstrap";

import menuData from "../data/menuData";
import waiterAvatar from "../assets/waiter-avatar.png";
import plusImage from "../assets/plus.png";
import minusImage from "../assets/minus.png";

import { Header } from './Header';

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
    fontWeight: 'bold'
  };

  const server = {
    name: 'Server\'s Name',
    recommendations: [
      menuData[0],
      menuData[1],
      menuData[2],
    ],
  };

  const recommendationsCard = () => {
    return (
      <Card style={{ textAlign: 'center' }}>
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
      </Card >
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
        className="shadow-sm mt-1 mb-1 w-100"
        onClick={() => addItemToOrder(item)}
      >
        <Card.Body
          className="w-100 p-0"
        >
          <Image
            fluid
            src={item.url}
            style={{ objectFit: "cover", float: "left" }}
            className="w-100 mx-100 h-90"
          />
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

  /**
   * @param {Object} item 
   */
  const addItemToOrder = (item) => {
    setOrder([...order, item]);
  };

  /**
   * @param {Object} item 
   */
  const removeItemFromOrder = (item) => {
    const itemIndex = order.indexOf(item);
    if (itemIndex !== -1) {
      setOrder(order.splice(itemIndex, 1));
    }
  };

  return (
    <div>
      <Header />
      <Card className="w-75" style={{ position: "absolute", top: '10%', left: '12%', zIndex: 1, borderRadius: '15px' }}>
        <Container >
          <Row className="row-cols-3" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
            <Col className="pr-0" >
              <Image src={waiterAvatar} />
            </Col>
            <Col className="pr-0 pl-0">
              <p>Need recommendations?</p>
            </Col>
            <Col>
              <Image src={showRecs ? minusImage : plusImage} onClick={() => setShowRecs(!showRecs)} />
            </Col>
          </Row>
        </Container>
        {showRecs &&
          recommendationsCard()
        }
      </Card>
      <Container fluid>
        <Form.Row className="">
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
    </div>
  );
};

export default Menu;