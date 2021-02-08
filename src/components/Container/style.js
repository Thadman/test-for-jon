import styled from "styled-components"
import { device } from "../../utils/breakpoints"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    // background: #fff;
  }

  @media ${device.mobile} {
  }
`
