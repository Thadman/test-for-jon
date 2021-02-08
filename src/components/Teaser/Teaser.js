import React from "react"
import { Article, Title, Link, Image, Category, Excerpt } from "./style"
import parse from "html-react-parser"

const Teaser = ({ data }) => {
  return (
    <Article>
      <Image
        fluid={{
          ...data.featuredImage,
          sizes: "(max-width: 1024px) 100vw, 360px",
        }}
        style={{ width: "100%" }}
      />
      <div style={{ display: "flex", marginBottom: "10px" }}>
        {data.categories.nodes.map((item, index) => (
          <Category key={index}>{item.name}</Category>
        ))}
      </div>
      <Title style={{ marginBottom: "10px" }}>{parse(data.title)}</Title>
      <Excerpt>{data.excerpt}</Excerpt>
      <Link to={data.uri}>Read More</Link>
    </Article>
  )
}

export default Teaser
