import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import { productData } from "./components/Products/data";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </BrowserRouter>
  );
}

export default App;
