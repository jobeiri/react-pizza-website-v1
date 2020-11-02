import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
