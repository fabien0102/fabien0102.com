import React from "react";

import Avatar from "../components/Avatar";
import Skill from "../components/Skill";
import Curriculum from "../components/Curriculum";

import skillsData from "../../data/skills.json";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 30,
    textAlign: "center",
    transition: "all 1s"
  },
  item: {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: 450,
    minWidth: 450
  },
  item1: {
    "@media (max-width: 1365px)": {
      order: 2
    }
  },
  item2: {
    justifyContent: "center",
    display: "flex",
    "@media (max-width: 1365px)": {
      order: 1,
      minWidth: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: "0 0 100%"
    }
  },
  item3: {
    "@media (max-width: 1365px)": {
      order: 3
    }
  }
};

export default ({ lang, data }) => {
  lang = lang || "fr";

  return (
    <div>
      <div css={style.container}>
        <div css={{ ...style.item, ...style.item1 }}>
          <Skill data={skillsData[0]} lang={lang} />
        </div>
        <div css={{ ...style.item, ...style.item2 }}>
          <Avatar />
        </div>
        <div css={{ ...style.item, ...style.item3 }}>
          <Skill data={skillsData[1]} lang={lang} />
          <Skill data={skillsData[2]} lang={lang} />
        </div>
      </div>

      <Curriculum lang={lang} data={data.curriculum.edges} />
    </div>
  );
};

export const pageQuery = graphql`
query IndexQuery {
  curriculum: allMarkdownRemark(
    filter: {
      fileAbsolutePath: {regex: "//fr//"}
    }
    sort: {
      order: DESC, fields:[fileAbsolutePath]
    }
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
}
`;
