import React, {useState}from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pending from "./components/pending-order.js";
import Receipt from "./components/receipt.js";
import Payment from "./components/payment-portal.js";
import Welcome from "./components/welcome.js"
import { Container } from "react-bootstrap";
import { Menu } from "./components/Menu";
import DishDetail from "./components/DishDetail"

function App() {
  /**
   * Global order state that holds the user's order as an array of menu item objects
   */
  const [order, setOrder] = useState([]);
  return (
    <Router>
      <div className="App">
		<Route path="/" exact component={Welcome} />
        <Route path="/pending" component={Pending} />
		<Route path="/receipt" component={Receipt} />
		<Route path="/payment" component={Payment} />
      </div>
</Router>

  );
}

export default App;
