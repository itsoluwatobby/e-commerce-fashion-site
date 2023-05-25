import styled from 'styled-components';
import {Announcement} from '../components/Announcement';
import {NewsLetter} from '../components/NewsLetter';
import {Products} from '../components/Products';
import { options, sizes } from '../data';
import { MediumMobile } from '../assets/responsive';
// import { Link } from 'react-router-dom';

export const ProductList = () => {
  return (
    <Container>
      
         <Announcement />
         <Title>Dresses</Title>
         <FilterContainer>
               <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Wrap>
                        <Select>
                                 <Option disabled selected>Color</Option>
                              {options.map(option => (
                                 <Option>{option}</Option>
                              ))}
                        </Select>
                        <Select>
                                 <Option disabled selected>Size</Option>
                              {sizes.map(size => (
                                 <Option>{size}</Option>
                              ))}
                        </Select>
                     </Wrap>   
               </Filter>
               <Filter>
                  <FilterText>Sort Products:</FilterText>
                  <Select>
                           <Option selected>Newest</Option>
                           <Option>Price (asc)</Option>
                           <Option>Price (desc)</Option>
                    </Select>
               </Filter>
         </FilterContainer>
         <Products />
         <NewsLetter />
    </Container>
  );
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
`
const Title = styled.h1`
   margin: 20px;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;

   ${MediumMobile({
      flexDirection: 'column'
   })}
`
const Filter = styled.div`
   margin: 20px;
   display: flex;
   flex-wrap: nowrap;

   @media (max-width: 700px) {
      {
         flex-wrap: wrap;
      }
   }

   ${MediumMobile({
      flexWrap: 'nowrap'
   })}
`
const FilterText = styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right: 20px;

   @media (max-width: 1000px) {
      {
         margin-right: 10px;
      }
   }
   ${MediumMobile({
      fontSize: '16px'
   })}
   
`
const Select = styled.select`
   padding: 10px;
   margin-right: 20px;

   @media (max-width: 1000px) {
      {
         margin-right: 10px;
      }
   }
   ${MediumMobile({
      margin: '0 6px',
      padding: '3px'
   })}
`
const Option = styled.option``

const Wrap = styled.div`
   display: flex;
   flex-wrap: nowrap;

   @media (max-width: 700px) {
      {
         flex-wrap: wrap;
      }
   }

   ${MediumMobile({
      flexWrap: 'nowrap'
   })}

`
