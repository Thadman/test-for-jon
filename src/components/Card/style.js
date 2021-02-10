import styled from "styled-components"
// import { device } from "../../utils/breakpoints"

export const Card = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    width: 100%;
    border-bottom: 1px solid gray;
    margin: 10px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 50%;
  }

  @media screen and (min-device-width: 769px) and (max-device-width: 1023px) {
    width: 50%;
    padding: 10px;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    margin: 5px;
  }
`
