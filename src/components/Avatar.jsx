import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../data/avatar-animation.json";

export default class Avatar extends React.Component {
  componentDidMount() {
    // Start animation
    this.avatar.anim.playSegments([0, 57], true);
  }

  onClick() {
    // Wink animation
    this.avatar.anim.playSegments([60, 80], true);
  }

  render() {
    const animationOptions = {
      loop: false,
      autoplay: false,
      animationData
    };
    return (
      <div onClick={this.onClick.bind(this)}>
        <Lottie
          options={animationOptions}
          height={350}
          width={350}
          ref={a => this.avatar = a}
        />
      </div>
    );
  }
}
