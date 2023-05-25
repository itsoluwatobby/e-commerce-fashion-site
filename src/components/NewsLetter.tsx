import {IoMdSend} from 'react-icons/io';
import styled from 'styled-components'
import { MediumMobile } from '../assets/responsive';

export const NewsLetter = () => {
   
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get regular updates from your favorite products</Desc>
      <InputContainer>
         <Input placeholder='Your Email' />
         <Button>
            <IoMdSend />
         </Button>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
   background-color: #fcf5f5;
   height: 60vh;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;

   ${MediumMobile({
      width: '100%'
   })}
   
`
const Title = styled.h2`
   font-size: 70px;
   margin-bottom: 0;

   ${MediumMobile({
      fontSize: '60px'
   })}
`
const Desc = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;

   ${MediumMobile({
      textAlign: 'center',
      fontSize: '20px'
   })}
`
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgrey;
`
const Input = styled.input`
   flex-grow: 6;
   outline: none;
   border: none;
   margin-right: 5px;
   padding-left: 20px;
`
const Button = styled.button`
   flex-grow: 1;
   box-sizing: border-box;
   border: none;
   background-color: teal;
   color: white;
`