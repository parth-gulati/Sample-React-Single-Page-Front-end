import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MidContent from "./components/MidContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <MidContent />
      </div>
    </div>
  );
}

export default App;
