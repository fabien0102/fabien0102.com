import styled from "@emotion/styled";
import React from "react";
import ClipboardButton from "react-clipboard.js";

const SocialLinks = ({ data, onClipboardSuccess }) => (
  <List>
    {data.map((link) => (
      <ListItem key={link.name}>
        {link.href ? (
          <a href={link.href} target="blank">
            <img height={30} src={`/${link.name}.svg`} alt={link.name} />
          </a>
        ) : (
          <ClipboardButton
            style={{ cursor: "pointer" }}
            data-clipboard-text={link.clipboard}
            component="a"
            onSuccess={onClipboardSuccess}
          >
            <img height={30} src={`/${link.name}.svg`} alt={link.name} />
          </ClipboardButton>
        )}
      </ListItem>
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  flex-grow: 1;
`;

const ListItem = styled.li`
  margin: 0 1.2em;
`;

export default SocialLinks;
