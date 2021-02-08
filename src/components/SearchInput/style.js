import styled from "styled-components"
import { device } from "../../utils/breakpoints"

export const Input = styled.input`

  background: red;
  padding: 10px; 
  border-radius: 5px;
  border: none;

  @media ${device.tablet} {
    background: #fff;
  }
  
`;

export const Header = styled.header`
  padding: 30px;
  background: #3E5797;
`;

