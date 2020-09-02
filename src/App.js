import React, { useState } from 'react';

import { Container } from "react-bootstrap";

import { Menu } from "./components/Menu";
import { Header } from "./components/Header";

function App() {
  /**
   * Global order state that holds the user's order as an array of menu item objects
   */
  const [order, setOrder] = useState([]);
  return (
    <div className="App" style={{ height: '100%', maxHeight: '100vh' }}>
      <Header style={{ height: '15%' }} />
      <Container style={{ padding: '0px' }}>
        <Menu setOrder={setOrder} order={order} />
      </Container>
    </div>
  );
}

export default App;
