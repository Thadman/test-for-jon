import React from "react"
import { Article, Title, Link, Image } from "./style"
import parse from 'html-react-parser';

const Teaser = ({ data }) => {
  return (
    <Article>
      <Title>{parse(data.title)}</Title>

      <Image fluid={{...data.featuredImage, sizes: "(max-width: 1024px) 100vw, 360px"}} />

      <Link to={data.uri}>Read More</Link>
    </Article>
  )
}

export default Teaser
