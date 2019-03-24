import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "../../components/Navbar/Nav";
import SignupForm from "../../components/SignupForm";
import Login from "../../components/Login";
import API from "../../utils/API";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            signupPage: false,
            memberSignIn: false,
            newUsername: "",
            usernameErrorMsg: "",
            newEmail: "",
            availableEmail: false,
            validEmail: false,
            emailError: false,
            emailErrorMsg: "",
            newPassword: "",
            isPassword: true,
            passwordErrorMsg: "",
            confirmPassword: "",
            cPasswordErrorMsg: "",
            passwordsMatch: true,
            errors: []
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    checkEmailInput = e => {
        this.handleInputChange(e);
        let emailInput = e.target.value;
        let emailRegex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
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
                        console.log("valid email");
                        this.setState({
                            emailError: false,
                            validEmail: true
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
                validEmail: false
            });
        }
    };

    checkPasswordStrength = e => {
        this.handleInputChange(e);
        const minLength = 8;

        if (e.target.value.length >= minLength) {
            this.setState({
                isPassword: true,
                passwordErrorMsg: ""
            })
        } else {
            this.setState({
                isPassword: false,
                passwordErrorMsg: "Password not strong enough!"
            })
        }
    }

    createNewUser = e => {
        e.preventDefault();
        const that = this;
        let passwordsMatch = true;
        let cPasswordErrorMsg = "";

        if (this.state.newPassword.trim() === this.state.confirmPassword.trim()) {
            this.setState({
                passwordsMatch: true
            });
            
            if (that.state.validEmail) {
                console.log("all match");
                that.collectForm();
            }
        } 
        else {
            passwordsMatch = false;
            cPasswordErrorMsg = "Passwords did not match!";

            this.setState({
                passwordsMatch: false,
                cPasswordErrorMsg: "Passwords did not match!",
                newPassword: "",
                confirmPassword: ""
            });
        }

        this.collectErrors(passwordsMatch, cPasswordErrorMsg);
    };

    collectForm = () => {
        const newUser = {
            user: this.state.newUsername.trim(),
            email: this.state.newEmail.trim(),
            password: this.state.password.trim()
        }
        console.log(newUser);
    };

    collectErrors = (passwordsMatch, cPasswordErrorMsg) => {
        const { usernameErrorMsg, emailErrorMsg, passwordErrorMsg, emailError, isPassword } = this.state;
        let errors= [];

        if (emailError) {
            errors.push(emailErrorMsg);
        }
        if (!isPassword) {
            errors.push(passwordErrorMsg);
        }
        if (!passwordsMatch) {
            errors.push(cPasswordErrorMsg);
        }

        this.setState({
            errors: errors
        });
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
                                        // Username props
                                        userName={this.state.newUsername}
                                        // Email props
                                        email={this.state.newEmail}
                                        emailError={this.state.emailError}
                                        emailErrorMsg={this.state.emailErrorMsg}
                                        checkEmailInput={this.checkEmailInput}
                                        // Password props
                                        password={this.state.newPassword}
                                        isPassword={this.state.isPassword}
                                        checkPasswordStrength={this.checkPasswordStrength}
                                        passwordErrorMsg={this.state.passwordErrorMsg}
                                        // Confirm password Props
                                        confirmPassword={this.state.confirmPassword}
                                        cPasswordErrorMsg={this.state.cPasswordErrorMsg}
                                        comparePasswords={this.state.passwordsMatch}
                                        // Event handlers
                                        handleInputChange={this.handleInputChange}
                                        createNewUser={this.createNewUser}
                                        switchLogin={this.switchLogin}
                                        // General errors
                                        errors={this.state.errors}
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