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
            emailInputLabel: "Email"
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

        if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email.trim())) {
            API.checkRegisteredEmails({
                email: emailInput
            })
            .then( res => {
                console.log(res);
                // if (res.data[0]) {
                //     this.setState({
                //         availableEmail: false,
                //         emailInputLabel: "This email address is already registered!"
                //     });
                // }
                // else {
                //     this.setState({
                //         availableEmail: true,
                //         emailInputLabel: "Email input change"
                //     });
                // }
            });
        }
    };

    // createNewUser = e => {
    //     e.preventDefault();
    //     const that = this;
    //     if (that.state.username )
    // };

    collectForm = () => {
        if (this.state.password.trim() === this.state.confirmPassword.trim()) {
            const newUser = {
                user: this.state.userName.trim(),
                email: this.state.email.trim(),
                password: this.state.password.trim()
            }
            console.log(newUser);
        } else {
            console.log("passwords do not match")
        }
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
                        handleInputChange={this.handleInputChange}
                        collectForm={this.collectForm}
                        checkForEmailAvailability={this.checkForEmailAvailability}
                    />
                </Container>
            </div>
        );
    }
}

export default SignUp;