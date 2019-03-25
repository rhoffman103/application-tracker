import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "../../components/Navbar/Nav";
import SignupForm from "../../components/SignupForm";
import Login from "../../components/Login";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupPage: true,
            memberSignIn: false,
        };
    };

    switchLogin = () => {
        const memberSignIn = this.state.memberSignIn;

        this.setState({
            memberSignIn: !memberSignIn
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Nav 
                    signupPage={this.state.signupPage}
                />
                <Container>
                    <Row>
                        <Col sm={12} m={1} lg={2} xl={3}></Col>
                        <Col sm={12} m={10} lg={8} xl={6}>
                            {!this.state.memberSignIn
                                ?   <SignupForm
                                        switchLogin={this.switchLogin}
                                    />
                                :   <Card>
                                        <Card.Body>
                                            <Card.Title>Sign In!</Card.Title>
                                            <Login
                                                signupPage={this.state.signupPage}
                                                switchLogin={this.switchLogin}
                                            />
                                        </Card.Body>
                                    </Card>

                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SignUp;