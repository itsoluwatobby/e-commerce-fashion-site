import { useState } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, } from 'react-icons/fa';
import {sliderItems} from "../data";
import { MediumMobile } from '../responsive';

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction) => {
      if(direction === 'left'){
         setSlideIndex(prevSlideIndex => prevSlideIndex > 0 ? prevSlideIndex - 1 : 2 )
      }else{
         setSlideIndex(prevSlideIndex => prevSlideIndex < 2 ? prevSlideIndex + 1 : 0 )
      }
   }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
         <FaArrowAltCircleLeft />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
         {sliderItems.map(item => 
         <Slide bg = {item.bg} key={item.id}>
            <ImgContainer>
               <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
               <Title>{item.title}</Title>
               <Description>{item.desc}</Description>
               <Button>SHOP NOW</Button>
            </InfoContainer>
         </Slide>
         )}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>   
         <FaArrowAltCircleRight />
      </Arrow>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position:relative;
   background: #FFD898;
   overflow: hidden;

   ${MediumMobile({
      display: 'none'
   })}
`
const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transform: translateX(${props => props.slideIndex * -100}vw);
   transition: all 0.6s ease-in;
`
const Slide = styled.div`
   display: flex;
   align-items: center;
   height: 100vh;
   width: 100vw;
   background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
   flex-basis: 1;
   height: 90%;
   border: none;
   box-shadow: 2px 4px 8px rgba(0,0,0, 0.5);
   border-radius: 0 10px 10px 0;
`
const Image = styled.img`
   height: 70%;
   object-fit: cover;
   border-radius: 0 10px 10px 0;
`

const InfoContainer = styled.div`
   flex-basis: 3;
   padding: 50px;
`
const Title = styled.h1`
   font-size: 70px;
`
const Description = styled.p`
   margin: 50px 0;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`
const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
`
const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items:center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props => props.direction === "left" && "10px"};
   right: ${props => props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`