module.exports = {
  siteMetadata: {
    title: `mrbjjackson - gatsby / framer motion / gatsby / wordpress image issue`,
    description: `Demo for Framer Motion / Gatsby / Wordpress image issue`,
    image: `/images/color.jpg`,
    siteUrl: `https://tombereznicki.co.uk`,
    author: `Ben Jackson`,
    authorSite: `https://www.mrbjjackson.com`,
    twitterUsername: `@mrbjjackson`,
    twitterURL: `https://twitter.com/mrbjjackson`,
    githubURL: `https://github.com/mrbjjackson`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://gatsbybug.wpengine.com/graphql",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
}
