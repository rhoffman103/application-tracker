import React from 'react';
import './Nav.css';
import { NavItems } from "../NavItems/NavItems";
import { Usernav } from "../Usernav/Usernav";

export const Nav = props => ( 
    <nav className="grey lighten-5">
        <div className="nav-wrapper container">
            <a href="/" className="brand-logo  deep-purple-text">App Tracker</a>
            {props.signupPage 
            ? null
            : ( props.user
                ?   <Usernav
                        user={props.user}
                    />
                :   <NavItems
                        email={props.email}
                        password={props.password}
                        handleInputChange={props.handleInputChange}
                    />
                )
            }
        </div>
    </nav>
);