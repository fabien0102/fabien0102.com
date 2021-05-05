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
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: .5rem;
  list-style: none;
  background: #000b;
  margin: 0;
  padding: .5rem 0;
  width: 100%;
  backdrop-filter: blur(4px);
  z-index: 30000;

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    flex-grow: 1;
    background: transparent;
    margin-left: auto;
  }
`;

const ListItem = styled.li`
@media (min-width: 768px) {
  margin: 0 1.2em;
}
`;

export default SocialLinks;
