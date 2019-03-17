import React, { Component } from "react";
import { Container } from "react-materialize";
import { Nav } from "../../components/Nav/Nav";
import { SignupForm } from "../../components/SignupForm/SignupForm";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

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
                <Nav />
                <Container>
                    <SignupForm
                        userName={this.state.userName}
                        email={this.state.email}
                        password={this.state.password}
                        confirmPassword={this.state.confirmPassword}
                        handleInputChange={this.handleInputChange}
                        collectForm={this.collectForm}
                    />
                </Container>
            </div>
        );
    }
}

export default SignUp;