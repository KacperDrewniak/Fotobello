import React, { Component } from "react";

import "../styles/form.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        <label>
          Imię
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        </label>
        <label>
          Temat
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        </label>
        <label>
          Treść
          <textarea type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
