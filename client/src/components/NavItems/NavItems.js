import React from "react";
import { AuthModal } from "../AuthModal/AuthModal";

export const NavItems = props => (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li key="loginModal">
            <AuthModal
                email={props.email}
                password={props.password}
                handleInputChange={props.handleInputChange}
            />
        </li>
        <li key="signup">
            <span>
                <a href='/signup' className="deep-purple-text">Sign Up</a>
            </span>
        </li>
    </ul>
);