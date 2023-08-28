import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./routes/Portfolio";
import Home from "./routes/Home";
import MatchAllRoute from "./routes/MatchAllRoute";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <Header></Header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<MatchAllRoute />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
