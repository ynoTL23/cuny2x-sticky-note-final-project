import React, { Component } from "react";
// import ReactDOM from "react-dom";

import "./css/Register.css";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      accessibleBy: "",
      chosenColor: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const inputName = target.name;

    // console.log(e);
    this.setState({
      [inputName]: value
    });
  }

  submitHandler() {
    fetch("https://fast-stream-52898.herokuapp.com/user/register", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    window.location.push("http://localhost:3000/");
    window.location.reload();
  }

  render() {
    return (
      <div className="form">
        <h2>Sign Up</h2>
        <label id="username-label">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={this.handleInputChange}
          value={this.state.username}
          required
        />
        <br />

        <label id="password-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={this.handleInputChange}
          value={this.state.password}
          required
        />
        <br />

        <label id="email-label">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
          required
        />
        <br />

        <label id="accessible-label">Accessible By:</label>
        <input
          type="text"
          id="accessible"
          name="accessibleBy"
          onChange={this.handleInputChange}
          value={this.state.accessibleBy}
        />
        <br />

        <label id="color-label">Chosen Color</label>
        <input
          type="text"
          id="color"
          name="chosenColor"
          onChange={this.handleInputChange}
          value={this.state.chosenColor}
        />
        <br />

        <button id="submit-btn" onClick={this.submitHandler}>
          Submit
        </button>
      </div>
    );
  }
}
