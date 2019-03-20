import React from "react";
import Input from "react-materialize/lib/Input";
import Button from "react-materialize/lib/Button";

export const Login = props => (
    <React.Fragment>
        <Input
            className="deep-purple-text"
            m={12} l={3}
            type="email"
            label="Email"
            name="email"
            value={props.email}
            autoComplete="current-username"
            onChange={props.handleInputChange}
        />  
        <Input
            className="deep-purple-text"
            m={12} l={3}
            type="password"
            label="password"
            name="password"
            value={props.password}
            autoComplete="current-password"
            onChange={props.handleInputChange}
        />
        <Button
            className="deep-purple"
            waves='light'
            onClick={(e) => {
                e.preventDefault()
                console.log("sign in")
            }}
        >
            Sign In
        </Button>
        <p>Not a member?
            <span>
                <a href='/signup' className="deep-purple-text ml-1">Sign Up</a>
            </span>
        </p>
    </React.Fragment>
);