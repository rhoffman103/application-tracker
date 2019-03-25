import React from "react";
import FormField from "./FormField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import zxcvbn from "zxcvbn";
import "./css/Alert.css";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUsername: "",
            usernameError: false,
            usernameErrorMsg: "Empty username field!",
            newEmail: "",
            availableEmail: false,
            validEmail: false,
            emailError: false,
            emailErrorMsg: "Empty email field!",
            newPassword: "",
            isPassword: false,
            passwordError: false,
            passwordErrorMsg: "Empty password field!",
            confirmPassword: "",
            cPasswordError: false,
            cPasswordErrorMsg: "",
            passwordsMatch: true,
            errors: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    checkUsernameInput = e => {
        this.handleInputChange(e);
        const usernameInput = e.target.value;
        
        if (/\s/g.test(usernameInput)) {
            this.setState({
                usernameError: true,
                usernameErrorMsg: "Whitespace not allowed!"
            })
        }
        else if (usernameInput.length >= 8) {
            API.checkRegisteredUsernames({
                username: usernameInput
            }).then(res => {
                if(res.data) {
                    this.setState({
                        usernameError: true,
                        usernameErrorMsg: "Username not available!"
                    })
                } else {
                    this.setState({
                        usernameError: false,
                        usernameErrorMsg: ""
                    })
                }
            })
        } else {
            this.setState({
                usernameError: true,
                usernameErrorMsg: "Username too short!"
            })
        }
    }

    checkEmailInput = e => {
        this.handleInputChange(e);
        const emailInput = e.target.value;
        const emailRegex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
        if (e.target.value.length > 0) {
            if (emailRegex.test(emailInput.trim())) {
                API.checkRegisteredEmails({
                    email: emailInput
                })
                .then( res => {
                    // console.log(res);
                    if (res.data) {
                        console.log("email already registered");
                        this.setState({
                            emailError: true,
                            emailErrorMsg: "This email address is already registered!"
                        });
                    } else {
                        this.setState({
                            emailError: false,
                            validEmail: true,
                            emailErrorMsg: ""
                        });
                    }
                });
            } else {
                this.setState({
                    emailError: true,
                    validEmail: false,
                    emailErrorMsg: 'Invalid Email!'
                });
            }
        } else {
            console.log("empty email field");
            this.setState({
                emailError: false,
                validEmail: false,
                emailErrorMsg: ""
            });
        }
    };

    checkPasswordStrength = e => {
        this.handleInputChange(e);
        const minStrength = 3;
        const passwordStrength = zxcvbn(e.target.value).score;
        if (e.target.value.length > 0 ) {
            if ((passwordStrength >= minStrength) && (e.target.value.length >= 8)) {
                this.setState({
                    isPassword: true,
                    passwordError: false,
                    passwordErrorMsg: ""
                })
            } else {
                this.setState({
                    isPassword: false,
                    passwordError: true,
                    passwordErrorMsg: "Password not strong enough!"
                })
            }
        } else {
            this.setState({
                isPassword: false,
                passwordError: true,
                passwordErrorMsg: "Empty password field!"
            })
        }
    };

    checkConfirmPassword = e => {
        this.handleInputChange(e);
        const confirmPassword = e.target.value;
        if (this.state.newPassword.trim() === confirmPassword.trim()) {
            this.setState({
                passwordsMatch: true,
                cPasswordError: false,
                cPasswordErrorMsg: ""
            });
        } else {
            this.setState({
                passwordsMatch: false,
                cPasswordError: true,
                cPasswordErrorMsg: "Passwords do not match!"
            })
        }
    }

    createNewUser = e => {
        e.preventDefault();
        
        if (!this.state.usernameError && this.state.validEmail && !this.state.emailError && this.state.isPassword) {
            this.collectForm();
            this.setState({
                errors: []
            })
        }
        else if (!this.state.passwordsMatch) {
            this.setState({
                newPassword: "",
                confirmPassword: ""
            })
            this.collectErrors();
        }
        else this.collectErrors();

    };

    collectForm = () => {
        const newUser = {
            user: this.state.newUsername.trim(),
            email: this.state.newEmail.trim(),
            password: this.state.newPassword.trim()
        }
        console.log(newUser);
    };

    collectErrors = () => {
        const { newUsername, usernameError, usernameErrorMsg, emailErrorMsg, passwordErrorMsg, emailError, isPassword, passwordsMatch, newEmail } = this.state;
        let errors= [];


        if (newUsername.length < 1) errors.push("Empty username field!")
        if (usernameError)          errors.push(usernameErrorMsg);
        if (emailError)             errors.push(emailErrorMsg);
        if (newEmail.length < 1)    errors.push("Empty email field!");
        if (!isPassword)            errors.push(passwordErrorMsg);
        if (!passwordsMatch)        errors.push("Passwords did not match!");

        this.setState({
            errors: errors
        });
    };

    render() {
        return (
            <Card>
                <Card.Body>
                <Card.Title>Sign Up!</Card.Title>
                    <Card.Text>Make an account and organize your job hunt.</Card.Text>
                    {this.state.errors &&
                        this.state.errors.map((error, idx) => (
                            <Alert key={idx} variant="" className="red-alert text-white">
                                {error}
                            </Alert>
                        ))
                    }
                    <form>
                        <FormField
                            label="Username"
                            name="newUsername"
                            type="username"
                            autoComplete="current-username"
                            controlId="newUsername"
                            value={this.state.userName}
                            error={this.state.usernameError}
                            errorMsg={this.state.usernameErrorMsg}
                            onChange={this.checkUsernameInput}
                        />
                        <FormField
                            label="Email"
                            name="newEmail"
                            type="email"
                            controlId="email"
                            autoComplete="current-email"
                            value={this.state.email}
                            error={this.state.emailError}
                            errorMsg={this.state.emailErrorMsg}
                            onChange={this.checkEmailInput}
                        />
                        <FormField
                            label="Password"
                            name="newPassword"
                            type="password"
                            controlId="newPassword"
                            autoComplete="current-password"
                            value={this.state.newPassword}
                            error={this.state.passwordError}
                            errorMsg={this.state.passwordErrorMsg}
                            onChange={this.checkPasswordStrength}
                        />
                        <FormField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            controlId="confirmPassword"
                            autoComplete="current-confirm-password"
                            value={this.state.confirmPassword}
                            error={!this.state.passwordsMatch}
                            errorMsg={this.state.cPasswordErrorMsg}
                            onChange={this.checkConfirmPassword}
                        />
                        <Row>
                            <Col sm={12} md={6}>
                                <p className="d-inline">Already a member?</p>
                                <span className="ml-2 purple-text purple-trigger" onClick={this.props.switchLogin}>Sign In</span>
                            </Col>
                            <Col sm={12} md={6}>
                                <Button
                                    variant="purple"
                                    className="float-right"
                                    onClick={this.createNewUser}
                                >
                                    Join Now
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Card.Body>
            </Card>
        );
        }
    }

export default SignupForm;