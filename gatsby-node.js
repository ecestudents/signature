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


exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
let config = getConfig()

  if (stage == "develop") {
    //console.log(config.module.rules)
    //fix easy paths
    
    
    //cloud9 development
    if (process.env.C9_PID) {
      const PrettierPlugin = require("prettier-webpack-plugin");
      //console.log("stage: ", stage)

      config.entry.commons = config.entry.commons.map(point => {
        if (/webpack-hot-middleware/.test(point)) {
          point = point.replace("http://localhost:8080", "")
        }
        return point;
      })
      config.plugins.push(new PrettierPlugin())
      config.output.publicPath = "/"
    }
  }
  
   if (stage === 'build-html') {
        config.module.rules.push({
                    test: /@typeform/,
                    loader: 'null-loader',
                  })
    }
  

  let aliases = {
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        //layouts: path.resolve(__dirname, 'src/layouts'),
        pages: path.resolve(__dirname, 'src/pages'),
        styles: path.resolve(__dirname, 'src/components/styles'),
        layout: path.resolve(__dirname, 'src/components/layout')
      }
      
    config.resolve.alias = {...config.resolve.alias, ...aliases}
  actions.replaceWebpackConfig(config)
}
