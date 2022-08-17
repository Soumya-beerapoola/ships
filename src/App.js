import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home';
import ShipDetails from "./ShipDetails";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/ships/:id" element={<ShipDetails />}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
