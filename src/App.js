import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
