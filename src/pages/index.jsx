import React from "react";

import Avatar from "../components/Avatar";
import Skill from "../components/Skill";
import Curriculum from "../components/Curriculum";
import skillsData from "../../data/skills.json";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    textAlign: "center"
  },
  item: {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: 500
  }
};

export default ({ lang }) => {
  lang = lang || "fr";

  return (
    <div>
      <div style={style.container}>
        <Skill data={skillsData[0]} containerStyle={style.item} lang={lang} />
        <Avatar />
        <div style={style.item}>
          <Skill data={skillsData[1]} lang={lang} />
          <Skill data={skillsData[2]} lang={lang} />
        </div>
      </div>

      <Curriculum lang={lang} />
    </div>
  );
};
