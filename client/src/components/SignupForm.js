import React from "react";
import FormField from "./FormField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "./Alert";

const SignupForm = props => (
    <Card>
        <Card.Body>
        <Card.Title>Sign Up!</Card.Title>
            <Card.Text>Make an account and organize your job hunt.</Card.Text>
            {!props.comparePasswords &&
                <Alert
                    status="red"
                    className="b-radius-1"
                >
                    <p>Passwords did not match!</p>
                </Alert>
            }
            <form>
                <FormField
                    label="Username"
                    name="userName"
                    type="username"
                    autoComplete="current-username"
                    controlId="username"
                    value={props.userName}
                    error={props.usernameError}
                    errorMsg={props.usernameErrorMsg}
                    onChange={props.handleInputChange}
                />
                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    controlId="email"
                    autoComplete="current-email"
                    value={props.email}
                    error={props.emailError}
                    errorMsg={props.emailErrorMsg}
                    onChange={props.checkEmailInput}
                />
                <FormField
                    label="Password"
                    name="password"
                    type="password"
                    controlId="password"
                    autoComplete="current-password"
                    value={props.password}
                    error={props.isPassword}
                    errorMsg={props.passwordErrorMsg}
                    onChange={props.handleInputChange}
                />
                <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    controlId="confirmPassword"
                    autoComplete="current-confirm-password"
                    value={props.confirmPassword}
                    error={props.matchesPassword}
                    errorMsg={props.cPasswordErrorMsg}
                    onChange={props.handleInputChange}
                />
                <Button
                    variant="purple"
                    className="float-right"
                    onClick={props.createNewUser}
                >
                    Join Now
                </Button>
            </form>
        </Card.Body>
    </Card>
);

export default SignupForm;