import React from "react";

const isNotEmpty = a => !!a;

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default ({ lang, data }) => (
  <div style={style.container}>
    <ul className="curriculum-list">
      {data.map(({ node }, i) => (
        <li
          key={i}
          className={
            i % 2
              ? "curriculum-item"
              : "curriculum-item curriculum-item--reverse"
          }
        >
          <h3>{node.frontmatter.date}</h3>
          <h2>{node.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <div>{node.frontmatter.keywords.map(a => <i key={a}>#{a}</i>)}</div>
        </li>
      ))}
    </ul>
  </div>
);
