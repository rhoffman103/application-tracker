import React from "react";
import Nav from "react-bootstrap/Nav";
import LoginModal from "../LoginModal";

const NavItems = props => (
    <Nav className="ml-auto">
        <LoginModal />
        <Nav.Link className="purple-text" href="/signup">Sign Up</Nav.Link>
    </Nav>
);

export default NavItems;