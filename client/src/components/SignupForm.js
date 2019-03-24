import React from "react";
import FormField from "./FormField";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Alert.css";

const SignupForm = props => (
    <Card>
        <Card.Body>
        <Card.Title>Sign Up!</Card.Title>
            <Card.Text>Make an account and organize your job hunt.</Card.Text>
            {props.errors &&
                props.errors.map((error, idx) => (
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
                    value={props.userName}
                    error={props.usernameError}
                    errorMsg={props.usernameErrorMsg}
                    onChange={props.handleInputChange}
                />
                <FormField
                    label="Email"
                    name="newEmail"
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
                    name="newPassword"
                    type="password"
                    controlId="newPassword"
                    autoComplete="current-password"
                    value={props.password}
                    error={!props.isPassword}
                    errorMsg={props.passwordErrorMsg}
                    onChange={props.checkPasswordStrength}
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
                <Row>
                    <Col sm={12} md={6}>
                        <p className="d-inline">Already a member?</p>
                        <span className="ml-2 purple-text purple-trigger" onClick={props.switchLogin}>Sign In</span>
                    </Col>
                    <Col sm={12} md={6}>
                        <Button
                            variant="purple"
                            className="float-right"
                            onClick={props.createNewUser}
                        >
                            Join Now
                        </Button>
                    </Col>
                </Row>
            </form>
        </Card.Body>
    </Card>
);

export default SignupForm;