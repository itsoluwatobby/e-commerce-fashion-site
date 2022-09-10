import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { listItem } from '../data';
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <Container>
         <Left>
            <Logo>ITSOLUWATOBBY.</Logo>
            <Desc>
               Good days, Odd days, All days. Things may get better and they may not but all in all, never try to give up 'cause you never can tell when your efforts will produce some tangible results. Better days ahead and yes we won't stop hoping. Meet you at the top!!🙇‍♂️
            </Desc>
            <SocialContainer>
               <SocialIcon color="3B5999">
                  <FaFacebookSquare />
               </SocialIcon>
               <SocialIcon color="E4405F">
                  <FaInstagramSquare />
               </SocialIcon>
               <SocialIcon color="55ACEE" >
                  <FaTwitterSquare />
               </SocialIcon>
               <SocialIcon color="E60023" >
                  <FaPinterestSquare />
               </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>Useful Links</Title>
            <List>
               {listItem.map((item) => (
                  <ListItem>{item}</ListItem>
               ))}
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <FaMapMarkerAlt /> 
               852 Cripsy Klos, South southern mern 98336
            </ContactItem>
            <ContactItem>
               <FaPhoneAlt />  
               +1 234 233 52
            </ContactItem>
            <ContactItem>
               <AiOutlineMail /> 
               akintobby@gmail.com
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
         </Right>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
   display: flex;

   @media (max-width: 1100px) {
      {
         display: flex;
         flex-direction: column;
      }
   }

`
const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   gap: 10px;
`

const Left = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`
const Logo = styled.h1`
   font-family: cursive;
`
const Desc = styled.p`
   margin: 20px 0;
`
const SocialContainer = styled.div`
   display: flex;

`
const Title = styled.h3`
   margin-bottom: 30px;

`
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style-type: none;
   display: flex;
   flex-wrap: wrap;
`
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`

const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   cursor: pointer;
`
const Center = styled.div`
   flex: 1;
   padding: 20px;
`
const Right = styled.div`
   flex: 1;
   padding: 20px;
`
const Payment = styled.img`
   width: 50%;

   @media (max-width: 1100px) {
      {
         max-width: 30%;
      }
   }

`