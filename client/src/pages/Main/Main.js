import React, { Component } from "react";
import Nav from "../../components/Navbar/Nav";
import "./Main.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      user: null,
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
        />
        <Container>
        <div className="d-flex justify-content-center">
          <p>stuffs</p>
        </div>
        </Container>
      </div>
    );
  }
}

export default Main;