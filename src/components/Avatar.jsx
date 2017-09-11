import React from "react";
import Bodymovin from "@fabien0102/react-bodymovin";
import * as animationData from "../../data/avatar-animation.json";

const style = {
  height: 350,
  width: 350
};

export default class Avatar extends React.Component {
  componentDidMount() {
    // Start animation
    this.avatar.animation.play();
  }

  onClick() {
    // Wink ation
    this.avatar.animation.playSegments([60, 80], true);
  }

  render() {
    const animationOptions = {
      loop: false,
      autoplay: false,
      animationData
    };
    return (
      <div onClick={this.onClick.bind(this)} css={style}>
        <Bodymovin options={animationOptions} ref={a => this.avatar = a} />
      </div>
    );
  }
}
