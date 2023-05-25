import styled from 'styled-components';

export const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $30
    </Container>
  );
}

const Container = styled.div`
   height: 35px;
   background-color: teal;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 16px;
   font-weight: 500;

`