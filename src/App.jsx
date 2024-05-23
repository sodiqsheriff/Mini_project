import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Reset from "./Component/Reset";
import Overview from "./Component/Overview";
import User from "./Component/User";
import Customer from "./Component/Customer";
import Wallet from "./Component/Wallet";
import Transaction from "./Component/Transaction";
import Report from "./Component/Report";
import Settings from "./Component/Settings";
import "flowbite";

import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />,
          <Route path="/overview" element={<Overview />} />,
          <Route path="/user" element={<User />} />,
          <Route path="/customer" element={<Customer />} />,
          <Route path="/wallet" element={<Wallet />} />,
          <Route path="/transaction" element={<Transaction />} />,
          <Route path="/report" element={<Report />} />,
          <Route path="/Settings" element={<Settings />} />,
        </Routes>
      </Router>
    </>
  );
}

export default App;
