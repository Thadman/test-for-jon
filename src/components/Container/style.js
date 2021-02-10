import styled from "styled-components"
import { device } from "../../utils/breakpoints"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;

  &:after {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    content: "";
    width: 330px;
    margin-right: 10px;
  }

  @media ${device.tablet} {
    // background: #fff;
  }

  @media ${device.mobile} {
  }
`

// display: grid;
// grid-template-columns: 1fr 1fr 1fr;
// grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
