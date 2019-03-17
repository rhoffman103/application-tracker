import React from 'react';
import './Nav.css';
import { Button, Input } from "react-materialize";

export const Nav = props => ( 
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">App Tracker</a>
            <form>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li key="email">
                    <Input
                        m={12} l={3}
                        type="email"
                        label="Email"
                        name="email"
                        value={props.email}
                        autoComplete="current-username"
                        onChange={props.handleInputChange}
                    />
                </li>
                <li key="password">
                    <Input
                        m={12} l={3}
                        type="password"
                        label="password"
                        name="password"
                        value={props.password}
                        autoComplete="current-password"
                        onChange={props.handleInputChange}
                    />
                </li>
                <li key="signin">
                    <Button
                        waves='light'
                        onClick={(e) => {
                            e.preventDefault()
                            console.log("sign in")
                        }}
                    >
                        Sign In
                    </Button>
                </li>
                <li key="signup">
                    <span>
                        <a href='/signup'>Sign Up</a>
                    </span>
                </li>
            </ul>
            </form>
        </div>
    </nav>
);