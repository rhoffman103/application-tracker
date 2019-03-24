import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormField from "./FormField";
import Col from "react-bootstrap/Col";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: false,
            emailErrorMsg: "",
            passwordError: false,
            passwordErrorMsg: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    collectForm = () => {
        const loginObj = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(loginObj);
    };

    render() {
        return (
            <Form>
                <FormField
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    controlId="emailInput"
                    autoComplete="current-username"
                    error={this.state.emailError}
                    errorMsg={this.state.emailErrorMsg}
                    onChange={this.handleInputChange}
                />
                <FormField
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    controlId="passwordInput"
                    autoComplete="current-password"
                    error={this.state.passwordError}
                    errorMsg={this.state.passwordErrorMsg}
                    onChange={this.handleInputChange}
                />
                <Form.Row>
                    <Col sm={12} md={6}>
                            <span>
                                {this.props.signupPage
                                    ?   <React.Fragment>
                                            <p>Not a member?</p>
                                            <a href='/signup' className="purple-text ml-1">Sign Up!</a>
                                        </React.Fragment>
                                    :   <React.Fragment>
                                            <p className="d-inline">Not a member?</p>
                                            <span className="ml-2 purple-text purple-trigger" onClick={this.props.switchLogin}>Sign Up!</span>
                                        </React.Fragment>
                                }
                            </span>
                    </Col>
                    <Col sm={12} md={6}>
                        <Button
                            className="float-right"
                            variant="purple"
                            onClick={(e) => {
                                e.preventDefault()
                                this.collectForm();
                            }}
                        >
                            Sign In
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    }
};

export default Login;