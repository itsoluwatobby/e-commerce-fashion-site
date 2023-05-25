import { FlattenSimpleInterpolation, css } from 'styled-components'

type PropProps = {
   [index: string]: string | number
}

export const mobile = (props: PropProps): FlattenSimpleInterpolation => {
   return css`
      @media (max-width: 380px) {
         ${props}
      }
   `
}
export const MediumMobile = (props: PropProps): FlattenSimpleInterpolation => {
   return css`
      @media (max-width: 580px) {
         ${props}
      }
   `
}