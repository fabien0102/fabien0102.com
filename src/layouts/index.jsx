import React from "react";
import Link from "gatsby-link";

import "../assets/index.css";
import SocialLinks from "../components/SocialLinks";
import socialLinksData from "../../data/social-links.json";

export const style = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  }
};

// TODO:
// - Add some metadata
export default ({ children }) => (
  <div>
    <header style={style.header}>
      <h1>@fabien0102</h1>
      <SocialLinks data={socialLinksData} />
      <div>
        <Link to="/"><img src="flag-fr.svg" height={25} alt="fr"/></Link> 
        <Link to="/en"><img src="flag-en.svg" height={25} alt="en"/></Link>
      </div>
    </header>
    <main>
      {children()}
    </main>
  </div>
);
