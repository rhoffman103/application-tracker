import React from 'react';
import '../css/Nav.css';
import Navbar from "react-bootstrap/Navbar";
import NavItems from "./NavItems";
import Usernav from "./Usernav";

const Nav = props => ( 
    <Navbar bg="light">
        <Navbar.Brand className="font-weight-bold" href="/">App Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
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
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

export default Nav;