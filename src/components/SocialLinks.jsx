import React from "react";
const styles = {
  list: {
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
    flexGrow: 1
  },
  item: {
    margin: "0 1.2em"
  }
};

export default ({ data }) => (
  <ul css={styles.list}>
    {data.map(link => (
      <li css={styles.item} key={link.name}>
        <a href={link.href} target="blank">
          <img height={30} src={link.name + ".svg"} alt={link.name} />
        </a>
      </li>
    ))}
  </ul>
);
