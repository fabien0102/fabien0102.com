import React from "react";
import { graphql } from "gatsby";

import Avatar from "../components/Avatar";
import Skill from "../components/Skill";
import Curriculum from "../components/Curriculum";
import Layout from "../components/Layout";
import Bio from "../components/Bio";

import skillsData from "../../data/skills.json";
import styled from "@emotion/styled";

const IndexPage = ({ lang, data }) => {
  lang = lang || "en";

  return (
    <Layout lang={lang}>
      <Container>
        <StartItem>
          <Skill data={skillsData} lang={lang} />
        </StartItem>
        <CenterItem>
          <Avatar />
        </CenterItem>
        <EndItem>
          <Bio data={data.bio} />
        </EndItem>
      </Container>

      <Curriculum lang={lang} data={data.curriculum.edges} />
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
  text-align: center;
  transition: all 1s;

  @media (max-width: 1365px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 450px;
`;

const StartItem = styled(Item)`
  @media (max-width: 1365px) {
    order: 2;
    max-width: 80vw;
  }
`;

const CenterItem = styled(Item)`
  justify-content: center;
  display: flex;
  @media (max-width: 1365px) {
    order: 1;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 100%;
  }
`;

const EndItem = styled(Item)`
  @media (max-width: 1365px) {
    order: 3;
    max-width: 80vw;
  }
`;

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    curriculum: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/curriculum/en/" } }
      sort: { order: DESC, fields: [fileAbsolutePath] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            keywords
          }
        }
      }
    }
    bio: markdownRemark(fileAbsolutePath: { regex: "/bio/en/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
