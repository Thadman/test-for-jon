import React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import { Teaser } from "../../components/Teaser"
import { SearchInput } from "../../components/SearchInput"
import { Card } from "../../components/Card/style"
import { Container } from "../../components/Container/style"

const IndexPage = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const {
    wpgraphql: {
      page: {
        homeSettings: { stories },
      },
    },
  } = data

  // console.log(stories)
  return (
    <main>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container style={{ marginTop: "10px" }}>
        {stories
          .filter(
            s =>
              s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.categories.nodes
                .map(c => c.name.toLowerCase())
                .join()
                .includes(searchQuery.toLowerCase())
          )
          .map((story, index) => {
            return (
              <Card key={index}>
                <Teaser data={story} key={`story${index}`} />
              </Card>
            )
          })}
      </Container>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    wpgraphql {
      page(id: 121, idType: DATABASE_ID) {
        title
        id
        homeSettings {
          stories {
            ... on WPGraphQL_Page {
              title
              uri
              excerpt
              featuredImage {
                sourceUrl
                srcSet
              }
              categories: tags {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
