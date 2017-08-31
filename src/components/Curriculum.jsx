import React from "react";

const isLang = lang => xp => xp.lang === lang;
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
      {data.filter(isLang(lang)).map(({
        date,
        title,
        description,
        keywords
      }, i) => (
        <li
          key={i}
          className={
            i % 2
              ? "curriculum-item"
              : "curriculum-item curriculum-item--reverse"
          }
        >
          <h3>{date}</h3>
          <h2>{title}</h2>
          {description.split("\n").map((desc, i) => <p key={i}>{desc}</p>)}
          <p>{keywords.map(a => <i key={a}>#{a}</i>)}</p>
        </li>
      ))}
    </ul>
  </div>
);
