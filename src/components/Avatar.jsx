import React from "react";
import Bodymovin from "@fabien0102/react-bodymovin";
import * as animationData from "../../data/avatar-animation.json";

export default class Avatar extends React.Component {
  componentDidMount() {
    // Start animation
    this.avatar.animation.playSegments([0, 57], true);
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
      <div onClick={this.onClick.bind(this)}>
        <Bodymovin
          options={animationOptions}
          height={350}
          width={350}
          ref={a => this.avatar = a}
        />
      </div>
    );
  }
}
