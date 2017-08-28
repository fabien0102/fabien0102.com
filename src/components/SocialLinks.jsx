import React from "react";
const styles = {
  list: {
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none"
  },
  item: {
    margin: "0 1.2em"
  }
};

export default ({ data }) => (
  <ul style={styles.list}>
    {data.map(link => (
      <li style={styles.item} key={link.name}>
        <a href={link.href} target="blank">
          <img height={30} src={link.name + ".svg"} alt={link.name} />
        </a>
      </li>
    ))}
  </ul>
);
