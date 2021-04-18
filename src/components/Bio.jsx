import React from "react";

const Bio = ({ data }) => (
  <div>
    <h1>{data.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.html }} />
  </div>
);

export default Bio;
