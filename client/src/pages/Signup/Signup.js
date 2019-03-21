import React, { Component } from "react";
import { Container } from "react-materialize";
import { Nav } from "../../components/Nav/Nav";
import { SignupForm } from "../../components/SignupForm/SignupForm";
import API from "../../utils/API";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            signupPage: true,
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            availableEmail: false,
            validEmail: false,
            emailInputLabel: "Email",
            passwordsMatch: true
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    checkForEmailAvailability = e => {
        this.handleInputChange(e);
        let emailInput = e.target.value;
        let emailRegex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        
        if (emailRegex.test(emailInput.trim())) {
            API.checkRegisteredEmails({
                email: emailInput
            })
            .then( res => {
                console.log(res);
                if (res.data) {
                    this.setState({
                        availableEmail: false,
                        emailInputLabel: "This email address is already registered!"
                    });
                }
                else {
                    this.setState({
                        availableEmail: true,
                        emailInputLabel: "Email",
                        validEmail: true
                    });
                }
            });
        } else {
            this.setState({
                validEmail: false,
                emailInputLabel: "Email not valid!"
            });
        }
    };

    createNewUser = e => {
        e.preventDefault();
        const that = this;
        
        if (this.state.password === this.state.confirmPassword) {
            this.setState({
                passwordsMatch: true
            });

            if (that.state.availableEmail && that.state.validEmail) {
                console.log("all match")
                that.collectForm();
            }
        } 
        else {
            console.log("passwords do not match")
            this.setState({
                passwordsMatch: false,
                password: "",
                confirmPassword: ""
            });
        }
    };

    collectForm = () => {
        const newUser = {
            user: this.state.userName.trim(),
            email: this.state.email.trim(),
            password: this.state.password.trim()
        }
        console.log(newUser);
    }

    render() {
        return (
            <div className="wrapper">
                <Nav 
                    signupPage={this.state.signupPage}
                />
                <Container>
                    <SignupForm
                        userName={this.state.userName}
                        email={this.state.email}
                        password={this.state.password}
                        confirmPassword={this.state.confirmPassword}
                        emailInputLabel={this.state.emailInputLabel}
                        comparePasswords={this.state.passwordsMatch}
                        handleInputChange={this.handleInputChange}
                        createNewUser={this.createNewUser}
                        checkForEmailAvailability={this.checkForEmailAvailability}
                    />
                </Container>
            </div>
        );
    }
}

export default SignUp;