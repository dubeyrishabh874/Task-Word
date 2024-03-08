// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import LoginDetails from "./LoginFrom/LoginDetails";
import DashBoard from "./LoginFrom/DashBoard";
import VerifiedSuccesMessage from "./LoginFrom/VerifiedSuccesMessage";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginDetails />} />
        <Route path="/verifiedSuccesMessage" element={<VerifiedSuccesMessage />} />
        <Route path="/verifiedSuccesMessage/dashBoard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
