import React from "react";
import styled from "@emotion/styled";

const Notification = ({ lang, isShow }) => (
  <Container isShow={isShow}>
    {lang === "en"
      ? "Well done! My email adress is in your clipboard ;)"
      : "L’email a bien été copié dans le presse papier !"}
  </Container>
);

const Container = styled.div`
  position: absolute;
  background-color: #43bda6;
  top: -0.2em;
  left: 50%;
  padding: 0.7em 5em;
  border-radius: 0.2em;
  transition: all 1s ease-in-out;
  transform: ${({ isShow }) =>
    isShow ? "translate(-50%, 0)" : `translate(-50%, -100%)`};
`;

export default Notification;
