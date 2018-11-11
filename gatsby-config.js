const proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
  },
  developMiddleware: app => {
    if (process.env.C9_PID) {
      app.use(
        "/.netlify/functions/",
        proxy({
          target: `https://${process.env.C9_PID}.vfs.cloud9.eu-west-1.amazonaws.com:8081`,
          pathRewrite: {
            "/.netlify/functions/": "",
          },
        })
      )
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/mixins"],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
