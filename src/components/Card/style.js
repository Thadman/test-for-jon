import styled from "styled-components"
// import { device } from "../../utils/breakpoints"

export const Card = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
  border-bottom: #dfdfdf;


  @media screen and (max-width: 414px ) {
  }

  @media screen and (max-width: 568x) {
    width: 100%;
    margin: 10px;
  }

  @media screen and (max-width: 768px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    // background: red;
    width: 48%;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 50%
    padding: 10px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1366px) {
    margin: 5px;
    width: 330px;
  }
`
