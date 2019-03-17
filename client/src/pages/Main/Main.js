import React, { Component } from "react";
import { Nav } from "../../components/Nav/Nav";
import logo from "../../logo.svg";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      user: null,
      email: "",
      password: "",
    };
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <Nav 
          user={this.state.user}
          email={this.state.email}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
        />
        <div className="App-header center-align">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MERN Application Tracker</h2>
        </div>
        <p className="App-intro center-align">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;