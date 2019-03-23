import React from "react";

const Usernav = props => (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li key={props.user}>
            {props.user}
        </li>
        <li key="logout">Log out</li>
    </ul>
);

export default Usernav;