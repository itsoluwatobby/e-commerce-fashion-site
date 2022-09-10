import React from 'react';
import styled from 'styled-components';
import { popularProducts } from "../data"
import Product from './Product';

const Products = () => {
  return (
    <Container>
      {popularProducts.map(product => (
         <Product product= {product} key={product.id} />
      ))}
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`