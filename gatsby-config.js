module.exports = {
  siteMetadata: {
    title: "GatsbyOne",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
