module.exports = {
  plugins: [
    "gatsby-plugin-glamor",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "curriculum",
        path: `${__dirname}/data/curriculum`
      }
    },
    "gatsby-transformer-yaml",
    "gatsby-transformer-remark"
  ]
}