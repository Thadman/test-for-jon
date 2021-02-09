import styled from "styled-components"
import { device } from "../../utils/breakpoints"

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 100%;

  @media ${device.tablet} {
    background: #fff;
  }

  @media screen and (max-width: 600px) {
    // background: red;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const Header = styled.header`
  padding: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  background: #3e5797;
`
