import React from "react";
import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.desc}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;
