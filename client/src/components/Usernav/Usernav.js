import React from "react";

export const Usernav = props => (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li key={props.user}>
            {props.user}
        </li>
        <li key="logout">Log out</li>
    </ul>
);