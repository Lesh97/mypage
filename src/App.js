import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./routes/Profile";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="*" element={<MatchAllRoute />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
