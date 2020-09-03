import React from 'react';

import { Card, Button, Container, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import serverAvatar from '../assets/waiter-avatar-large.png';
import chatButton from '../assets/floating-chat-button.png';

// Server will come in as an object
export const ServerWelcome = () => {
  const styles = {
    gradient: 'linear-gradient(225.82deg, #F94A4A -0.87%, #FF720D 98.77%)',
    welcomeText: {
      fontFamily: 'Aktiv Grotesk',
      fontStyle: 'normal',
      fontSize: '36px',
      lineHeight: '48px',
      color: '#FFF',
    },
    openMenuButton: {
      background: 'linear-gradient(180deg, #F94A4A 18.23%, #FF720D 100%)',
      borderRadius: '30px',
      borderWidth: '0px',
    },
    chatText: {
      fontFamily: 'Aktiv Grotesk',
      fontStyle: 'normal',
      fontSize: '36px',
      lineHeight: '48px',
      textAlign: 'center',
      color: 'linear-gradient(225.82deg, #F94A4A -0.87%, #FF720D 98.77%)',
    }
  };

  const server = {
    name: 'Mira'
  };

  return (
    <Container
      style={{
        height: '40%',
        background: styles.gradient,
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p style={styles.welcomeText}>Welcome!</p>
        <Image src={chatButton} />
      </div>
      <Card
        className="shadow-sm"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90%',
          borderRadius: '15px'
        }}
      >
        <Image
          src={serverAvatar}
          style={{
            borderRadius: '50px'
          }}
        />
        <p style={{ textAlign: 'center' }}>Hello, I'm {server.name}, and I'll be your server today!</p>
        <p style={{ textAlign: 'center' }}>This is a unique time to be working in the restaurant service industry, but I hope you know that I am here to support you as much as I can, and as safely for the both of us!</p>
      </Card>
      <p style={styles.chatText}>Chat with me</p>
      <p style={{ textAlign: 'center' }}>If you have questions during your order process or need to directly speak with me, you can use chat button at anytime.</p>
      <Link to="/menu">
        <Button
          style={styles.openMenuButton}
        >
          Open Menu
      </Button>
      </Link>
    </Container>
  );
};

export default ServerWelcome;
