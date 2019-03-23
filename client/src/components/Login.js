import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormField from "./FormField";

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
                <Button
                    variant="purple"
                    onClick={(e) => {
                        e.preventDefault()
                        this.collectForm();
                    }}
                >
                    Sign In
                </Button>
            </Form>
        );
    }
};

export default Login;