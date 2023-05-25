import styled, { StyledComponent } from 'styled-components';
import {Announcement} from '../components/Announcement';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { MediumMobile } from '../assets/responsive';

export const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper>
         <Title>YOUR CART</Title>
         <Top>
            <TopButton color='lightgreen'>CONTINUE SHOPPING</TopButton>
            <TopTexts>
               <TopText>Shopping Bag (2)</TopText>
               <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type='filled' color='orangered'>CHECKOUT NOW</TopButton>
         </Top>
         <Bottom>
            <Info>
               <Product>
                  <ProductDetail>
                     <Image src='http://cache.mrporter.com/variants/images/10375442618850077/in/w2000_q60.jpg'/>
                     <Details>
                        <ProductName><b>Product: </b>Figue Denim Top</ProductName>
                        <ProductID><b>ProductID: </b>123456789</ProductID>
                        <ProductColor color='lightblue' />
                        <ProductSize><b>Size: </b>X</ProductSize>
                     </Details>
                  </ProductDetail>
                  <PriceDetail>
                     <ProductAmountContainer>
                        <IoIosAddCircleOutline style={{fontSize: '20px', cursor: 'pointer'}}/>
                        <ProductAmount>2</ProductAmount>
                        <IoIosRemoveCircleOutline style={{fontSize: '20px', cursor: 'pointer'}}/>
                     </ProductAmountContainer>
                     <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
               </Product>
               <Hr />
               <Product>
                  <ProductDetail>
                     <Image src='https://assets.ajio.com/medias/sys_master/root/20220617/4ASV/62ac820eaeb26921af36258b/-473Wx593H-464497062-pink-MODEL.jpg'/>
                     <Details>
                        <ProductName><b>Product: </b>Women Pink Dress</ProductName>
                        <ProductID><b>ProductID: </b>987654321</ProductID>
                        <ProductColor color='lightpink' />
                        <ProductSize><b>Size: </b>M</ProductSize>
                     </Details>
                  </ProductDetail>
                  <PriceDetail>
                     <ProductAmountContainer>
                        <IoIosAddCircleOutline style={{fontSize: '20px', cursor: 'pointer'}}/>
                        <ProductAmount>4</ProductAmount>
                        <IoIosRemoveCircleOutline style={{fontSize: '20px', cursor: 'pointer'}}/>
                     </ProductAmountContainer>
                     <ProductPrice>$ 45</ProductPrice>
                  </PriceDetail>
               </Product>
            </Info>
            <Summary>
               <SummaryTitle>ORDER SUMMARY</SummaryTitle>
               <SummaryItem>
                  <SummaryItemText>SubTotal</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 4.20</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -0.80</SummaryItemPrice>
               </SummaryItem>
               <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
               </SummaryItem>
               <Button>CHECKOUT NOW</Button>
            </Summary>
         </Bottom>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`

`
const Wrapper = styled.div`
   padding: 20px
`
const Title = styled.h1`
   font-weight: 300;
   text-align: center;

   ${MediumMobile({
      backgroundColor: 'rgba(0,0,0,0.1)',
      broderRadius: '10px'
   })}
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px;

   ${MediumMobile({
      gap: '20px'
   })}

`
const TopButton: StyledComponent<"button", any, NonNullable<unknown>, string>= styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border-radius: 5px;
   outline: none;
   border: 1px solid teal;
   border: ${(props: CssProp) => props.type !== 'filled' && 'none'};
   background-color: ${(props: CssProp) => props.type === 'filled' ? 'transparent' : 'teal'};
   color: ${(props: CssProp) => props.type === 'filled' && 'black'};
   transition: all 0.3s;

   @media (max-width: 900px) {
      {
         padding: 8px;
      }
   }

   &:hover{
      background-color: ${(props: {color?: string}) => props.color};
   }

   &:active{
      background-color: ${(props: CssProp) => props.type === 'filled' ? 'transparent' : 'teal'};
   }
`
const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 10px;

   @media (max-width: 900px) {
      {
         flex-direction: column;
      }
   }
`
const Info = styled.div`
   flex: 3;
`
const TopTexts = styled.div`

   @media (max-width: 900px) {
      {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 3px;
      }
   }
   ${MediumMobile({
      display: 'none',
   })}
`
const TopText = styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin: 0 10px;
`
const Product = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 10px 0;

   ${MediumMobile({
      margin: '10px 0 4px 0' 
   })}

`
const ProductDetail = styled.div`
   flex: 2;
   display: flex;

   ${MediumMobile({
      flexDirection: 'column'
   })}
`
const Image = styled.img`
   width: 200px;
   border-radius: 10px;
   box-shadow: -2px -4px 6px rgba(0,0,0,0.4);
`
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;

   ${MediumMobile({
      gap: '7px'
   })}
`
const ProductName = styled.span`
   white-space: nowrap;
`
const ProductID = styled.span`

`
const ProductColor = styled.span`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props: {color?: string}) => props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.span`
   flex: 1;
   display: flex;
   align-item: center;
   justify-content: center;
   flex-direction: column;
`
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`
const ProductAmount = styled.span`
   font-size: 24px;
   margin: 5px;
`
const ProductPrice = styled.span`
   font-size: 30px;
   font-weight: 200;
`
const Hr = styled.hr`
   background-color: orangered;
   border: none;
   height: 1px;
`
const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgrey;
   border-radius: 10px;
   background-image:  linear-gradient(
      rgba(255, 255, 255, 0.9), 
      rgba(255, 255, 255, 0.9)
      ), url('https://thumbs.dreamstime.com/b/fashion-model-lilac-flowers-young-woman-beautiful-long-dress-waving-wind-outdoor-beauty-portrait-blooming-garden-purple-191608268.jpg');
   background-repeat: no-repeat;
   background-size: cover;

   padding: 20px;
   height: 50vh;
`
const SummaryTitle = styled.h1`
      font-weight: 200;

      ${MediumMobile({
         fontSize: '28px'
      })}

`
const SummaryItem: StyledComponent<"button", any, NonNullable<unknown>, string> = styled.div`
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid grey;
      font-weight: ${(props: CssProp) => props.type === 'total' && '500'};
      font-size: ${(props: CssProp) => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
   width: 100%;
   padding: 10px;
   backgroung-color: lightgreen;
   font-weight: 600;
`