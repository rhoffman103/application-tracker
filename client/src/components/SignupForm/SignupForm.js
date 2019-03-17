import React from "react";
import { Input, Card, Row, Button } from "react-materialize";

export const SignupForm = props => (
    <Row>
    <Card 
        className="large col s12 m10 l8"
        title='Sign Up!'
    >
        <p>Make an account and organize your job hunt.</p>
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
                label="Email"
                name="email"
                autoComplete="current-username"
                value={props.email}
                onChange={props.handleInputChange}
            />
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
            waves='light'
            onClick={props.collectForm}
        >
            Join Now
        </Button>
    </Card>
    </Row>  
);