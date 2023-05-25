import styled from 'styled-components';
import { GrCart } from 'react-icons/gr';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { MediumMobile } from '../assets/responsive';

type ProductsTypes = {
   product: PopularProductsType
}

export const Product = ({ product }: ProductsTypes) => {

  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
         <Icon>
            <GrCart />
         </Icon>
         <Icon>
            <FaSearch />
         </Icon>
         <Icon>
            <FaRegHeart />
         </Icon>
      </Info>
    </Container>
  );
}

const Container = styled.div`
   flex: 1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f5fbfd;
   flex-direction: column;
   position: relative;

   ${MediumMobile({
      flexDirection: 'column'
   })}

   
`
const Info = styled.div`
   opacity: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.4);
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: opacity 0.4s ease-in;

   &:hover{
      opacity: 1;
   }
`
const Icon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px;
   cursor: pointer;
   transition: all 0.5s ease-in-out;

   &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);
   }
`
const Circle = styled.div`
   width: 250px;
   height: 250px;
   border-radius: 50%;
   background-color: white;
   position: absolute;
   z-index: 2;
  
`
const Image = styled.img`
   height: 75%;
   object-fit: cover;
   z-index: 2;
`