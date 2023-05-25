import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import Badge from '@mui/material/Badge';
import { MediumMobile } from '../assets/responsive';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <Container>
      <Wrapper>
         <Left>
            <Language>EN</Language>
            <SearchContainer>
               <Input type='text' placeholder='item' />
               <FaSearch style={{color: 'grey', fontSize: '1rem', cursor: 'pointer'}}/>
            </SearchContainer>
         </Left>
         <Center>
         <Logo>
            <Link to='/' className='link'>
               itsoluwatobby
            </Link>
            </Logo>
         </Center>
         <Right>
            <MenuItem>
               <Link to={'/signUp'} className='link'>
                  REGISTER
               </Link>
            </MenuItem>
            <MenuItem>
               <Link to={'/signIn'} className='link'>
                  SIGN IN
               </Link>
            </MenuItem>
            <MenuItem>
               <Badge badgeContent={4} color="primary">
                  <GrCart />
               </Badge>
            </MenuItem>
         </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
   height: 60px;
   background-color: rgba(0,0,0,0.1);

   ${MediumMobile({
      backgroundColor: 'aliceblue',
      height: '80px'
   })}
 
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ${MediumMobile({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
      flexWrap: 'wrap',
      marginBottom: '5px'
   })}

   @media (max-width: 900px) {
      {
         justify-content: space-between;
      }
   }
`
const Left = styled.div`
   flex: 4;
   display: flex;
   align-items: center;

   @media (max-width: 700px) {
      {
         flex: 6;
      }
   }
`
const Center = styled.div`
   flex: 4;
   

   @media (max-width: 700px) {
      {
         flex: 1;
      }
   }

`
const Right = styled.div`
   flex: 2;
   width: 100px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   @media (max-width: 700px) {
      {
         flex: 2;
         gap: 10px;
         width: 300px;
      }
   }
`
const Language = styled.span`
   font-size: 14px;
   cursor: pointer;

   ${MediumMobile({
      display: 'none'
   })}
`
const SearchContainer = styled.div`
   display: flex;
   border: 1px solid lightgrey;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
   border-radius: 10px;
   height: 20px;

   ${MediumMobile({
      width: '105px',
      marginLeft: '0'
   })}

`
const Input = styled.input`
   border: none;
   outline: none;
   background-color: white;
   color: black;

   ${MediumMobile({
      width: '85px'
   })}
`
const Logo = styled.h1`
   font-weight: bold;
   font-size: 1.2rem;
   font-family: cursive;
   text-transform: uppercase;
   text-shadow: 2px 4px 8px rgba(50, 20, 150, 0.3);

   ${MediumMobile({
      fontSize: '16px'
   })}

`
const MenuItem = styled.div`
   font-size: 14px;
   margin-left: 10px;
   cursor: pointer;
   color: black;

   Link{
      color: inherit;
   }

   &:hover{
      opacity: 0.8;
   }

   @media (max-width: 900px) {
      {
         margin-left: 10px;
         white-space: nowrap;
         cursor: pointer;
      }
   }  
`