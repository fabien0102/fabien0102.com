import React from "react";
import Index from "./index";
import { graphql } from "gatsby";

const IndexEnPage = ({ data }) => <Index lang="en" data={data} />;

export default IndexEnPage;

export const pageQuery = graphql`
  query IndexEnQuery {
    curriculum: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//en//" } }
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
  }
`;
