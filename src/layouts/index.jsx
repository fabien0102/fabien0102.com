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
    flexWrap: "wrap",
    padding: "0 1.5rem"
  },
  footer: {
    backgroundColor: "#01223e",
    padding: "0.5rem 2rem",
    fontSize: "0.8rem",
    boxShadow: "0 0 20px rgba(62, 161, 145,0.2)",
    textAlign: "center"
  },
  langs: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "0.6rem"
  }
};

// TODO:
// - Add some metadata
export default ({ children }) => (
  <div>
    <header css={style.header}>
      <h1>@fabien0102</h1>
      <SocialLinks data={socialLinksData} />
      <div css={style.langs}>
        <Link to="/"><img src="flag-fr.svg" height={25} alt="fr" /></Link>
        <Link to="/en"><img src="flag-en.svg" height={25} alt="en" /></Link>
      </div>
    </header>
    <main>
      {children()}
    </main>
    <footer css={style.footer}>
      <p>
        © {new Date().getFullYear() + " "}
        - <span css={{ color: "#43bda6" }}>Fabien BERNARD (fabien0102) </span>
        - Made with <span css={{ color: "#43bda6" }}>❤</span> with Gatsby
      </p>
    </footer>
  </div>
);
