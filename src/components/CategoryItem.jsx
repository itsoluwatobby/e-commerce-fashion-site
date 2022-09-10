import React from 'react';
import styled from 'styled-components';

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src= {item.img}/>
      <Info>
         <Title>{item.title}</Title>
         <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;

const Container = styled.div`
   flex: 1;
   margin: 5px;
   height: 70vh;
   position: relative;
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const Info = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
`
const Title = styled.h2`
   color: #ffffff;
   margin-button: 20px;
`
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: white;
   border-radius: 10px;
   color: grey;
   cursor: pointer;
   font-weight: 600;
`