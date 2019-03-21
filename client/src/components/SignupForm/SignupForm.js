import React from "react";
import Input from "react-materialize/lib/Input";
import Card from "react-materialize/lib/Card";
import Row from "react-materialize/lib/Row";
import Button from "react-materialize/lib/Button";
import Alert from "../Alert/Alert";

export const SignupForm = props => (
    <Row>
        <div className="col m1 l2"></div>
        <Card 
            className="c-align large col s12 m10 l8"
            title='Sign Up!'
        >
            <p>Make an account and organize your job hunt.</p>
                {!props.comparePasswords &&
                    <Alert
                        status="red"
                        className="b-radius-1"
                    >
                        <p>Passwords did not match!</p>
                    </Alert>
                }
            <form>
                <Input
                    s={12}
                    label="Username"
                    name="userName"
                    autoComplete="current-username"
                    value={props.userName}
                    onChange={props.handleInputChange}
                />
                <Input
                    s={12}
                    type="email"
                    label={props.emailInputLabel}
                    name="email"
                    autoComplete="current-username"
                    value={props.email}
                    onChange={props.checkForEmailAvailability}
                />
            </form>
            <form>
                <Input
                    s={12}
                    type="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"
                    value={props.password}
                    onChange={props.handleInputChange}
                />
                <Input
                    s={12}
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    autoComplete="current-confirm-password"
                    value={props.confirmPassword}
                    onChange={props.handleInputChange}
                />
            </form>
            <Button
                className="deep-purple"
                onClick={props.createNewUser}
            >
                Join Now
            </Button>
        </Card>
    </Row>  
);