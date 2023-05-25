import styled from 'styled-components';
import { categories } from "../data"
import {CategoryItem} from './CategoryItem';
import { MediumMobile } from '../assets/responsive.js';

export const Categories = () => {
  return (
    <Container>
      {categories.map((item: Categories) => (
         <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  );
}


const Container = styled.div`
   display: flex;
   padding: 20px;
   justify-content: space-between;

   ${MediumMobile({
    flexDirection: 'column'
 })}
`