import styled from 'styled-components';
import {Announcement} from '../components/Announcement';
// import {Footer} from '../components/Footer';
// import Navbar from '../components/Navbar';
import {NewsLetter} from '../components/NewsLetter';
import { sizes } from '../data';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { MediumMobile } from '../assets/responsive';

export const Product = () => {
  return (
    <Container>
         {/* <Navbar /> */}
         <Announcement />
        <Wrapper>
            <ImageContainer>
              <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
            </ImageContainer>
            <InfoContainer>
                <Title>Vintage Crusher</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus rerum nobis reprehenderit quam debitis dolores a voluptates doloremque alias!</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='darkblue' />
                        <FilterColor color='grey' />
                    </Filter>
                    <Filter>
                      <FilterTitle>Size:</FilterTitle>
                      <FilterSize>
                        {sizes.map(size => (
                        <FilterSizeOption>{size}</FilterSizeOption>
                        ))}
                      </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <IoIosRemoveCircleOutline style={{fontSize: '20px'}}/>
                    <Amount>1</Amount>
                    <IoIosAddCircleOutline style={{fontSize: '20px'}}/>
                  </AmountContainer>
                  <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
         <NewsLetter />
         {/* <Footer /> */}
    </Container>
  );
}

const Container = styled.div`
  
${MediumMobile({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  })}
`
const Wrapper = styled.div`
  display: flex;
  padding: 50px;

  ${MediumMobile({
    padding: '25px',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '85%'
 })}
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${MediumMobile({
    padding: '8px'
 })}
`
const Title = styled.h1`
  font-weight: 200;  
`
const Desc = styled.div`
  margin: 20px 0;
`
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 20px;
  flex: 1;
  margin: 30px 0;

  @media (max-width: 900px) {
    {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`
const Filter = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 900px) {
    {
      width: 200px;
    }
  }
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  margin: 0 5px;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  outline: none;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 120px;
  height: 40px;
  gap: 5px;
`
const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.4s;

  &:hover{
    background-color: lightgreen;
  }
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`