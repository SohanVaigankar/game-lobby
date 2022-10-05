import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import "./styles/app.scss";

// components
import Nav from "./components/Nav";

// pages
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
