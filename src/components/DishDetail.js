import React, { useState } from 'react';
import Header from "./Header";
import { Col, Row, Card, Image, Container, Form, Button, } from "react-bootstrap";

import '../assets/stylesheets/general.css'

import menuData from "../data/menuData";
import waiterAvatar from "../assets/waiter-avatar.png";
import plusImage from "../assets/plus.png";
import minusImage from "../assets/minus.png";

export const DishDetail = ({setOrder, order}) => {
    
    const [showRecs, setShowRecs] = useState(false);
    const server = {
        name: 'Server\'s Name',
        recommendations: [
            menuData[0],
            menuData[1],
            menuData[2],
        ],
    };

    const mainColor = '#F94A4A';
    const orangeColor = "#FF720D";
    const gradientColor = {
        background: "linear-gradient(180deg, #F94A4A 18.23%, #FF720D 100%)",
        borderRadius: '30px',
        borderColor: orangeColor,
        padding: '16px 32px',
        fontWeight: 'bold'
    };
    const gradientButton = {
        background: "linear-gradient(180deg, #F94A4A 18.23%, #FF720D 100%)",
        borderRadius: '30px',
        borderColor: orangeColor,
        fontWeight: 'bold'
    };
    const gradientFont = {
        background: 'linear-gradient(225.82deg, #F94A4A -0.87%, #FF720D 98.77%)',
        fontWeight: 'bold',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    }

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
            <Row className="row-cols-2" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', margin: '10px' }}>
                <Card.Title
                    className="text-left mt-2"
                    style={{ fontWeight: 'bold' }}
                >
                    {item.name}
                </Card.Title>
                <Card.Title 
                    className="text-right mt-2"
                    style={gradientFont}
                >
                    
                    ${item.price}
                </Card.Title>
            </Row>
            <Row className="row-cols-1" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: '-10px' }}>
                <Card.Body className="text-left" style={{marginLeft: '25px', padding: '0px'}}>
                    <p>{item.description}</p>
                </Card.Body>
            </Row>
            <Form inline style={{alignItems: 'center'}}>
                    <Form.Row className="row-cols-2" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', margin: '10px', align: 'center' }}>
                        <Form.Control type="number" className="bg-white" placeholder="1" style={{ borderColor: mainColor, color: mainColor, fontWeight: 'bold', borderRadius: '15px' }} />
                        <Button style={gradientButton} type="submit">Add to Order</Button>
                    </Form.Row>

                    <Form.Row className="row-cols-1 w-75" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: '-10px' }}>
                        <Button style={gradientButton}>Back to Starters</Button>
                    </Form.Row>
            </Form>
        
        </Card>
        );
    };

    /**
     * @param {Object} item 
     */
    const addItemToOrder = (item, n) => {
        for(var i = 0; i < n; i++){
            setOrder([...order, item]);
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
                <Form.Row className="" align="center">
                    <Col>Starters</Col>
                    <Col>Entrees</Col>
                    <Col>Sides</Col>
                    <Col>Drinks</Col>
                </Form.Row>
            </Container>
            <Container fluid className="mt-2">
                {menuItemCard(menuData[0], 0)}
            </Container>
        </div>
    )
};