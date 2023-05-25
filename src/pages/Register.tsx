import styled from 'styled-components';
import { MediumMobile } from '../assets/responsive';

export const Register = () => {
   
  return (
    <Container>
      <Wrapper>
         <Title>CREATE AN ACCOUNT</Title>
         <Form>
            <Label htmlFor = 'firstname'>First Name</Label>
            <Input placeholder='First Name' id='firstname' required/>
            <Label htmlFor = 'lastname'>Last Name</Label>
            <Input placeholder='Last Name' id='lastname' required/>
            <Label htmlFor = 'username'>Username</Label>
            <Input placeholder='Username' id='username' required/>
            <Label htmlFor = 'email'>Email</Label>
            <Input placeholder='Email' id='email' required/>
            <Label htmlFor = 'password'>Password</Label>
            <Input type='password' placeholder='Password' id='password' required/>
            <Label htmlFor = 'password'>Confirm Password</Label>
            <Input type='password' placeholder='Confirm Password' id='password' required/>
            <Agreement>
               I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
         </Form>
      </Wrapper>
    </Container>
  );
}


const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)
      ), 
      url('https://upload.wikimedia.org/wikipedia/commons/1/1e/Diane_von_F%C3%BCrstenberg_Spring-Summer_2014_06.jpg');
   background-repeat: no-repeat;
   background-size: cover;

   display: flex;
   align-items: center;
   justify-content: center;
`
const Wrapper = styled.div`
   padding: 20px;
   width: 45%;
   background-color: aliceblue;
   box-shadow: 4px 6px 10px rgba(0,0,0,0.5);
   border-radius: 10px;

   ${MediumMobile({
      width: '80%',
      padding: '10px'
   })}
`
const Title = styled.h1`
      font-size: 24px;
      font-weigth: 300;
`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   position: relative;

   @media (max-width: 900px) {
      {
         flex-direction: column;
      }
   }
`
const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 5px 5px 10px 0;
   padding: 12px;
   border-radius: 5px;
   border: none;
   box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
   outline: none;
   background-color: white;
   color: black;
`
const Agreement = styled.span`
   font-size: 12px;
   margin: 20px 0;

`
const Button = styled.button`
   width: 100%;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   transition: all 0.4s ease-in-out;

   &:hover{
      opacity: 0.5;
   }
`
const Label = styled.label`
   position: absolute;   
   left: -10000px;
`