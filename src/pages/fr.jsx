import React from "react";
import Index from "./index";
import { graphql } from "gatsby";

const IndexFrPage = ({ data }) => <Index lang="fr" data={data} />;

export default IndexFrPage;

export const pageQuery = graphql`
  query IndexEnQuery {
    curriculum: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/curriculum/fr/" } }
      sort: { order: DESC, fields: [fileAbsolutePath] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            keywords
          }
        }
      }
    }
    bio: markdownRemark(fileAbsolutePath: { regex: "/bio/fr/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
