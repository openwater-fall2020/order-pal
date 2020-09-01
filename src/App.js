import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pending from "./payment/pending-order.js";
import Receipt from "./payment/receipt.js";
import Payment from "./payment/payment-portal.js";

function App() {
  return (
    <Router>
      <div className="App">
        Hello, OrderPal
        <div>
          <Link to="/pending">
            <button>Go to Pending Order</button>
          </Link>
        </div>
        <Route path="/pending" component={Pending} />
		<Route path="/receipt" component={Receipt} />
		<Route path="/payment" component={Payment} />
      </div>
    </Router>
  );
}

export default App;
