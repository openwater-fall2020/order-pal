import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pending from "./components/pending-order.js";
import Receipt from "./components/receipt.js";
import Payment from "./components/payment-portal.js";
import Welcome from "./components/welcome.js"
import { Container } from "react-bootstrap";
import { Menu } from "./components/Menu";
import DishDetail from "./components/DishDetail"
import ServerWelcome from "./components/ServerWelcome"

function App() {
  /**
   * Global order state that holds the user's order as an array of menu item objects
   */
  const [order, setOrder] = useState([]);
  return (
    <Router>
      <div className="App"
        style={{ height: '100%', maxHeight: '100vh' }}>
        <Route path="/" exact component={Welcome} />
        <Route path="/pending" component={Pending} />
        <Route path="/receipt" component={Receipt} />
        <Route path="/payment" component={Payment} />
        <Route path="/dishdetail" exact component={() => <DishDetail order={order} setOrder={setOrder} />} />
        <Route path="/serverwelcome" exact component={ServerWelcome} />
        <Route path="/menu" component={() => <Menu order={order} setOrder={setOrder} />} />
      </div>
    </Router>

  );
}

export default App;
