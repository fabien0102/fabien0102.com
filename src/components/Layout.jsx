import React, { useEffect, useState } from "react";
import Link from "gatsby-link";
import "@fontsource/raleway";

import SocialLinks from "./SocialLinks";
import socialLinksData from "../../data/social-links.json";

import Notification from "./Notification";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    background-color: #012f56;
    font-family: "Raleway", sans-serif;
    color: white;
  }

  a,
  a:visited,
  a:hover {
    color: #3ea191;
  }
`;

const Layout = ({ lang, children }) => {
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    if (showNotif) {
      const id = setTimeout(() => setShowNotif(false), 4000);
      return () => clearTimeout(id);
    }
  }, [showNotif]);

  return (
    <>
      <Global styles={globalStyle} />
      <Notification lang={lang} isShow={showNotif} />
      <Header>
        <h1>@fabien0102</h1>
        
        <Langs>
          <Link to="/fr">
            <img src="/flag-fr.svg" height={25} alt="fr" />
          </Link>
          <Link to="/">
            <img src="/flag-en.svg" height={25} alt="en" />
          </Link>
        </Langs>
      </Header>
      <main>{children}</main>
      <Footer>
        <p>
          © {new Date().getFullYear() + " "}-{" "}
          <Colored>Fabien BERNARD (fabien0102) </Colored>- Made with{" "}
          <Colored>❤</Colored> with Gatsby - Translation by{" "}
          <Colored>Lucrèce ROLLAND</Colored>
        </p>
      </Footer>
    </>
  );
};

export default Layout;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1.5rem;
`;

const Footer = styled.footer`
  background-color: #01223e;
  padding: 0.5rem 2rem;
  font-size: 0.8rem;
  box-shadow: 0 0 20px rgba(62, 161, 145, 0.2);
  text-align: center;
`;

const Langs = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0.6rem;
`;

const Colored = styled.span`
  color: #43bda6;
`;
