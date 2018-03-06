import React from "react";
import ClipboardButton from "react-clipboard.js";

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

export default ({ data, onClipboardSuccess }) => (
  <ul css={styles.list}>
    {data.map(link => (
      <li css={styles.item} key={link.name}>
        {link.href
          ? <a href={link.href} target="blank">
              <img height={30} src={`/${link.name}.svg`} alt={link.name} />
            </a>
          : <ClipboardButton
              data-clipboard-text={link.clipboard}
              component="a"
              onSuccess={onClipboardSuccess}
            >
              <img height={30} src={`/${link.name}.svg`} alt={link.name} />
            </ClipboardButton>}
      </li>
    ))}
  </ul>
);
