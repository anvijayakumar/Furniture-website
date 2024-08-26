import React from "react";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "../src/components/footer";

const App = () => {
  return (
    <div className="App overflow-x-hidden">
      <Home />
      <Footer/>
      
    </div>
  );
};

export default App;
