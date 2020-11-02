import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
