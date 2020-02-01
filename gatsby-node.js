/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const nodePath = require(`path`)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              postType
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const {
        frontmatter: { path, postType },
      } = node
      return createPage({
        path,
        component: nodePath.resolve(`src/templates/${postType}Template.js`),
        context: {}, // additional data can be passed via context
      })
    })
  })
}
