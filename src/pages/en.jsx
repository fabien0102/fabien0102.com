import React from "react";
import Index from "./index";

export default ({data}) => <Index lang="en" data={data} />;

export const pageQuery = graphql`
query IndexEnQuery {
  curriculum: allMarkdownRemark(
    filter: {
      fileAbsolutePath: {regex: "//en//"}
    }
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
