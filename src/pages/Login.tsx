import styled from 'styled-components';
import { MediumMobile } from '../assets/responsive';

export const Login = () => {
  return (
    <Container>
      <Wrapper>
         <Title>SIGN IN</Title>
         <Form>
            <Label htmlFor = 'username'>Username</Label>
            <Input type='name' placeholder='Username' id='username' required/>
            <Label htmlFor = 'password'>Password</Label>
            <Input type='password' placeholder='Password' id='password' required  />
            <Button>LOGIN</Button>
            <Link href="/">DO NOT REMEMBER PASSWORD?</Link>
            <Link href ="/signUp">CREATE A NEW ACCOUNT</Link>
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
   width: 40%;
   background-color: aliceblue;
   box-shadow: 4px 6px 10px rgba(0,0,0,0.5);
   border-radius: 10px;

   @media (max-width: 800px) {
      {
         width: 45%;
      }
   }

   ${MediumMobile({
      width: '80%',
      padding: '10px'
   })}
`
const Title = styled.h1`
   font-size: 24px;
   font-weigth: 300;
   text-align: center;
`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   position: relative;
   justify-content: center;
   flex-direction: column;
`
const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 10px 0;
   padding: 12px;
   border-radius: 5px;
   border: none;
   box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
   outline: none;
   background-color: white;
   color: black;

   &:focus{
      outline: none;
      background-color: white;
   }
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
const Link = styled.a`
   text-decoration: none;
   margin-top: 10px;
   font-size: 12px;
   color: black;
   transition: all 0.4s;

   &:hover{
      color: rgba(0,0,0,0.6);
   }
`