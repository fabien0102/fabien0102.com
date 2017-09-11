import React from "react";

export const style = {
  position: "absolute",
  backgroundColor: "#43bda6",
  top: "-0.2em",
  left: "50%",
  transform: "translate(-50%, 0)",
  padding: "0.7em 5em",
  borderRadius: "0.2em",
  transition: "all 1s ease-in-out"
};

export default ({ message, isShow }) => (
  <div css={isShow ? style : { ...style, transform: "translate(-50%, -100%)" }}>
    {message}
  </div>
);
