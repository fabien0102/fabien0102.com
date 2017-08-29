import React from "react";

const style = {
  list: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  item: {
    margin: "0.5em 1em"
  }
};

export default ({ data: { title, logos }, lang, containerStyle }) => (
  <div style={containerStyle}>
    <h1>{title[lang]}</h1>
    <ul style={style.list}>
      {logos.map(logo => (
        <li style={style.item} key={logo.name}>{logo.name}</li>
      ))}
    </ul>
  </div>
);
