import React, { useCallback, useEffect, useRef } from "react";
import Bodymovin from "@fabien0102/react-bodymovin";
import * as animationData from "../../data/avatar-animation.json";
import styled from "@emotion/styled";

const Avatar = () => {
  const avatarRef = useRef();

  // Start animation on load
  useEffect(() => {
    if (avatarRef.current) {
      avatarRef.current.animation.play();
    }
  }, [avatarRef]);

  // Play the "wink" animation
  const wink = useCallback(() => {
    if (avatarRef.current) {
      avatarRef.current.animation.playSegments([60, 80], true);
    }
  }, [avatarRef]);

  const animationOptions = {
    loop: false,
    autoplay: false,
    animationData,
  };

  return (
    <Container onClick={wink}>
      <Bodymovin options={animationOptions} ref={avatarRef} />
    </Container>
  );
};

const Container = styled.div`
  height: 350px;
  width: 350px;
`;

export default Avatar;
