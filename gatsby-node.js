const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }


if (process.env.C9_PID) exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  const PrettierPlugin = require("prettier-webpack-plugin");
  //console.log("stage: ", stage)
  let config = getConfig()
  //console.log(config)
  if (stage == "develop") {
    config.entry.commons = config.entry.commons.map(point => {
      if (/webpack-hot-middleware/.test(point)) {
        point = point.replace("http://localhost:8080", "")
      }
      return point;
    })
    config.plugins.push(new PrettierPlugin())
  }

  config.output.publicPath = "/"
  actions.replaceWebpackConfig(config)
}
