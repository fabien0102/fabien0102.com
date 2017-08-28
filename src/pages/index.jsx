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
    flexGrow: 1
  }
};

export default () => (
  <div>
    <div style={style.container}>
      <Skill data={skillsData[0]} containerStyle={style.item} />
      <Avatar />
      <div style={style.item}>
        <Skill data={skillsData[1]} />
        <Skill data={skillsData[2]} />
      </div>
    </div>

    <Curriculum />
  </div>
);
