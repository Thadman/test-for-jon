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
      />

      <div style={{ display: "flex", marginBottom: "10px" }}>
        {data.categories.nodes.map((item, index) => (
          <Category key={index}>{item.name}</Category>
        ))}
      </div>
      <div>
        <Title style={{ marginBottom: "10px" }}>{parse(data.title)}</Title>
      </div>
      <div>
        <Excerpt>{data.excerpt}</Excerpt>
      </div>
      <div>
        <Link to={data.uri}>Read More</Link>
      </div>
    </Article>
  )
}

export default Teaser
