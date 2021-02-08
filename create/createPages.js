const path = require(`path`)
const internalTemplate = path.resolve(`./src/templates/page/internal.js`)
const homeTemplate = path.resolve(`./src/templates/page/home.js`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      wpgraphql {
        pages(where: { id: 121 }) {
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
            link
            id
            pageTemplate
          }
        }
      }
    }
  `).then(result => {
    // console.log(result.data.wpgraphql.pages);
    result.data.wpgraphql.pages.nodes.forEach(node => {
      const { title, pageTemplate, link } = node

      let selectedTemplate = internalTemplate

      if (pageTemplate === `home`) {
        selectedTemplate = homeTemplate
      } else {
        return false
      }

      console.log(`Build: ${title}`)


        createPage({
          path: link,
          component: selectedTemplate,
          context: node,
        })
      
    })
  })
}
