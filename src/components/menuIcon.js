import React, { Component } from "react";
import { Link } from "gatsby";

import "../styles/menuIcon.css";
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
    return (
      <Link to={this.props.forward}>
        <div className={this.state.linkIsClick ? "menuIcon" : "menuIcon click"} onClick={this.handleLink}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Link>
    );
  }
}

export default Icon;
