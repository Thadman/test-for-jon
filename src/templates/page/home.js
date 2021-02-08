import React from "react"
import { graphql } from "gatsby"
import { Teaser } from "../../components/Teaser"
import { SearchInput } from "../../components/SearchInput"

const IndexPage = ({ data }) => {
  const {
    wpgraphql: {
      page: {
        homeSettings: { stories },
      },
    },
  } = data

  console.log(stories)

  return (
    <main>
      <SearchInput />

      {stories.map((story, index) => {
        return <Teaser data={story} key={`story${index}`} />
      })}
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
