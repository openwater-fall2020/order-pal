import React from 'react';
import { Container, Col, Row, Card, Image } from "react-bootstrap";

import menuData from "../data/menuData";
import { Header } from './Header';

export const Menu = () => {
  const menuItemCard = (item, index) => {
    return (
      <Card
        key={index}
        style={{ width: '33%' }}
      >
        <Card.Body
        >
          <Image
            src={item.url}
            style={{ width: '200px', height: '200px' }}
          />
        </Card.Body>
        <Card.Title>{item.name}</Card.Title>
      </Card>
    );
  }

  return (
    <div>
      <Header />
      <Container fluid>
        <Col>
          <Row>
            {menuItemCard(menuData[0], 0)}
          </Row>
          <Row>
            {menuItemCard(menuData[1], 1)}
          </Row>
        </Col>
        <Col>
          <Row>
            {menuItemCard(menuData[2], 2)}
          </Row>
          <Row>
            {menuItemCard(menuData[3], 3)}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Menu;