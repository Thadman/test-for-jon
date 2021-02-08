import styled from "styled-components"
import AvenueLink from "../AvenueLink"
import AvenueImg from "../AvenueImg"
import { device } from "../../utils/breakpoints"


export const Article = styled.article`
  margin-bottom: 50px;
`

export const Title = styled.h3`

  font-size: 20px;

  @media ${device.tablet} {
    font-size: 24px;
  }

`

export const Image = styled(AvenueImg)`
  width: 78px;

  @media ${device.tablet} {
    width: 200px;
  }
`

export const Link = styled(AvenueLink)`
  font-size: 14px;
`
