
import React from "react";
import './../styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

const App = () => {
  return (
    <BrowserRouter>
          
          <Navigation/>
    </BrowserRouter>
  )
}

export default App
