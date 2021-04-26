import styled from "@emotion/styled";
import React from "react";

const Skill = ({ data: { title, logos }, lang }) => (
  <div>
    <h1>{title[lang]}</h1>
    <List>
      {logos.map((logo) => (
        <ListItem key={logo.name}>
          <a href={logo.url} target="blank">
            {logo.src ? (
              <img src={logo.src} alt={logo.name} height={40} />
            ) : (
              logo.name
            )}
          </a>
        </ListItem>
      ))}
    </List>
  </div>
);

const ListItem = styled.li`
  margin: 0.5em 1em;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Skill;
