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
  margin-bottom: 10px;

  @media ${device.tablet} {
    width: 200px;
  }

  @media ${device.mobile} {
  }
`

export const Link = styled(AvenueLink)`
  font-size: 14px;
`

export const Category = styled.a`
  font-size: 12px;
  width: 50px;
  background: #6cb73e;
  margin-right: 5px;
  color: #fff;
  text-align: center;
`

export const Excerpt = styled.p`
  font-size: 12px;
`
