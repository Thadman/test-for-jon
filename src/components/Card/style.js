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
`
