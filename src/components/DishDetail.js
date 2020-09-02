import React from 'react';
import Header from "./Header";
import { Col, Row, Card, Image, Container, Form, Button, } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import '../assets/stylesheets/general.css'

import menuData from "../data/menuData";

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
        <Card style={{ textAlign: 'center', position: 'absolute', margin: '0 auto', zIndex: '1', width: '100%', left: '0px', borderRadius: '10px' }}>
            <p>This dish goes great with the House Lemonade!</p>
        </Card>
    );
};


export default class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        let order = props.order;
        const setOrder = props.setOrder;
        if (!props.order) {
            order = [];
        }
        this.state = {
            order: order,
            buttonText: "Add to Order",
            n: 1,
            showRecs: false,
            itemIndex: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    onPress = () => {
        this.setState({
            buttonText: "Added to Order!"
        })
        /**
         * @todo fix settings the order
         */
        for (let i = 0; i < this.state.n; ++i) {
            this.props.setOrder([...this.props.order, menuData[this.state.itemIndex]]);
        }
        this.addItemToOrder(menuData[this.state.itemIndex])
    }

    handleChange(event) {
        this.setState({ n: event.target.value })
    }
    /**
   * @param {Object} item an item object from menuData
   * @param {index} index the index of the item in menuData
   */
    menuItemCard = (item, index) => {
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
                    <Card.Body className="text-left" style={{ marginLeft: '25px', padding: '0px' }}>
                        <p>{item.description}</p>
                    </Card.Body>
                </Row>
                <Form inline style={{ alignItems: 'center' }}>
                    <Form.Row className="row-cols-2" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', margin: '10px', align: 'center' }}>
                        <Form.Control type="number" className="bg-white" placeholder="1" style={{ borderColor: mainColor, color: mainColor, fontWeight: 'bold', borderRadius: '15px' }} onChange={this.handleChange} />
                        <Button style={gradientButton} type="button" onClick={this.onPress}>{this.state.buttonText}</Button>
                    </Form.Row>

                    <Form.Row className="row-cols-1 w-75" style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: '-10px' }}>
                        <Link to="/menu">
                            <Button style={gradientButton}>Back to Starters</Button>
                        </Link>
                    </Form.Row>
                </Form>

            </Card>
        );
    };

    /**
     * @param {Object} item 
     */
    addItemToOrder = (item) => {
        for (var i = 0; i < this.state.n; i++) {
            this.setState({ order: [...this.state.order, item] });
        }
    };

    render() {
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
                <Card
                    className="w-100"
                    style={{
                        borderRadius: '15px',
                        marginTop: '-5px',
                        height: 'auto',
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
                            className="row-cols-2"
                            style={{
                                display: "flex",
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }}
                            noGutters
                        >
                            <Col className="pr-0" xs="auto" >
                                <p style={{ margin: '0px' }}>This dish goes great with the <span style={{ color: orangeColor }}>House Lemonade!</span></p>
                            </Col>
                        </Row>
                    </Container>
                    {this.state.showRecs &&
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
                    {this.menuItemCard(menuData[this.state.itemIndex], this.state.itemIndex)}
                </Container>
            </div>
        );
    }
}