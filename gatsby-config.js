module.exports = {
  siteMetadata: {
    siteUrl: `https://fabien0102.com`
  },
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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Fabien0102 website",
        short_name: "Fabien0102",
        start_url: "/",
        background_color: "#012f56",
        theme_color: "#3ea191",
        display: "minimal-ui"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107444198-1"
      }
    }
  ]
};
