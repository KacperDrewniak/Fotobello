import React, { Component } from "react";
import { Link } from "gatsby";

import "../styles/menuIcon.css";

const exit = () => {
  document.querySelector("div.darker").style.animationName = "upToDown";
  document.querySelector("div.darker").style.animationDelay = "0s";
};

class Icon extends Component {
  state = {
    linkIsClick: true
  };

  handleLink = () => {
    this.setState({
      linkIsClick: !this.state.linkIsClick
    });
  };
  render() {
    console.log(this.props.forward);

    return (
      <a
        onClick={() => {
          exit();
          setTimeout(() => {
            window.location = `${this.props.forward}`;
          }, 2400);
        }}
      >
        <div className={this.state.linkIsClick ? "menuIcon" : "menuIcon click"} onClick={this.handleLink}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </a>
    );
  }
}

export default Icon;
