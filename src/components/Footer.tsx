import styled from 'styled-components';
import { FaGitSquare, FaInstagramSquare, FaGithub, FaTwitterSquare, FaMapMarkerAlt, FaPhoneAlt, FaLinkedinIn } from 'react-icons/fa';
import { listItem } from '../data';
import { AiOutlineMail } from 'react-icons/ai'

export const Footer = () => {
  return (
    <Container>
         <Left>
            <Logo>ITSOLUWATOBBY.</Logo>
            <Desc>
               Good days, Odd days, All days. Things may get better and they may not but all in all, never try to give up 'cause you never can tell when your efforts will produce some tangible results. Better days ahead and yes we won't stop hoping. Meet you at the top!!🙇‍♂️
            </Desc>
            <SocialContainer>
               <ALINK href="https://github.com/itsoluwatobby">
                  <SocialIcon color="3B5999">
                     <FaGitSquare />
                  </SocialIcon>
               </ALINK>
               <ALINK href="https://instagram.com/itsoluwatobby">
                  <SocialIcon color="E4405F">
                     <FaLinkedinIn />
                  </SocialIcon>
               </ALINK>
               <ALINK href="https://twitter.com/itsoluwatobby">
                  <SocialIcon color="55ACEE" >
                     <FaTwitterSquare />
                  </SocialIcon>
               </ALINK>
               <ALINK href="https://instagram.com/itsoluwatobby">
                  <SocialIcon color="E4405F">
                     <FaInstagramSquare />
                  </SocialIcon>
               </ALINK>
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
            <ALINK href="tel:+2348100281607">
            <ContactItem>
               <FaPhoneAlt />  
               +234 810 028 160 7
            </ContactItem>
            </ALINK>
            <ContactItem>
               <ALINK href="mailto:itsoluwatobby@gmail.com">
                  <FaGithub /> 
                  github.com/itsoluwatobby
               </ALINK>
            </ContactItem>
            <ContactItem>
               <ALINK href="mailto:itsoluwatobby@gmail.com">
                  <AiOutlineMail /> 
                  itsoluwatobby@gmail.com
               </ALINK>
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
         </Right>
    </Container>
  );
}

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
   cursor: pointer;
`

const ALINK = styled.a`
   color: inherit;
   display: flex;
   align-items: center;
   gap: 10px;
   font-weight: 400;
   transition: all 0.25s ease-in;

   &:hover{
      color: gray;
      opacity: 0.8;
      scale: 0.97
   }

   &:active{
      scale: 1;
   }
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