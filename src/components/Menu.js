import React from 'react';
import { Col, Row, Card, Image, Container } from "react-bootstrap";

import menuData from "../data/menuData";
import { Header } from './Header';

export const Menu = () => {
  const menuItemCard = (item, index) => {
    return (
      <Card
        key={index}
        style={{ width: '90%' }}
        className="shadow-sm mt-1 mb-1"
      >
        <Card.Body
          className="w-100 p-0"
        >
          <Image
            fluid
            src={item.url}
            className="w-100"
          />
        </Card.Body>
        <Card.Title
          className="text-center mt-2">{item.name}
        </Card.Title>
      </Card>
    );
  }

  return (
    <div>
      <Header />
      <Container fluid className="mt-2" >
        <Row>
          <Col>
            {menuItemCard(menuData[0], 0)}
          </Col>
          <Col>
            {menuItemCard(menuData[1], 1)}
          </Col>
        </Row>
        <Row>
          <Col>
            {menuItemCard(menuData[2], 2)}
          </Col>
          <Col>
            {menuItemCard(menuData[3], 3)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;