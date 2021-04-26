import styled from "@emotion/styled";
import React from "react";

const Curriculum = ({ data }) => (
  <Container>
    <List>
      {data.map(({ node }, i) => {
        const ListItem = i % 2 ? RegularItem : ReversedItem;
        return (
          <ListItem key={i}>
            <h3>{node.frontmatter.date}</h3>
            <h2>{node.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <Tags>
              {node.frontmatter.keywords.map((a) => (
                <i key={a}>#{a}</i>
              ))}
            </Tags>
          </ListItem>
        );
      })}
    </List>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  border-left: 6px solid #3ea191;
  padding: 1rem 2rem;
  margin-left: 2rem;
  max-width: 600px;
  transform: translate(48%, 0);
  transition: all 1s;
  border-left: 6px solid #3ea191;
  padding: 1rem 2rem;
  margin-left: 2rem;
  max-width: 600px;
  transform: translate(48%, 0);
  transition: all 1s;

  @media (max-width: 1365px) {
    border-left: 6px solid #3ea191;
    padding: 1rem 2rem;
    margin-left: 2rem;
    max-width: 600px;
    transform: none;
  }
`;

const RegularItem = styled.li`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 3rem;
  list-style: none;

  ::before {
    position: absolute;
    left: -2.2rem;
    top: 1.2rem;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 30px;
    background-color: #43bda6;
    border: 4px #3ea191 solid;
    transform: translate(-50%, 0);
  }

  h3 {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    color: #3ea191;
    font-style: italic;
    font-weight: 200;
  }

  h2 {
    padding: 0;
    margin: 0.2rem 0;
  }

  ul {
    list-style-type: disc;
  }

  div {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    word-break: break-word;
    line-height: 1.3rem;
  }

  img {
    height: 40px;
  }
`;

const ReversedItem = styled(RegularItem)`
  transform: scale(-1, 1) translate(670px, 0);

  > div,
  > h2,
  > h3 {
    transform: scale(-1, 1);
  }

  h2,
  h3 {
    text-align: right;
  }

  @media (max-width: 1365px) {
    transform: none;

    > div,
    > h2,
    > h3 {
      transform: none;
    }

    h2,
    h3 {
      text-align: left;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #3ea191;

  i:not(:last-of-type) {
    margin-right: 4px;
  }
`;

export default Curriculum;
