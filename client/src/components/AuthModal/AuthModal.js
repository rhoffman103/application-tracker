import React from "react";
import Modal from "react-materialize/lib/Modal";
import Button from "react-materialize/lib/Button";
import { Login } from "../Login/Login";

export const AuthModal = props => (
    <Modal
        header='Log In'
        trigger={
            <Button className="deep-purple">Log In</Button>
        }>
        <Login
            email={props.email}
            password={props.password}
            handleInputChange={props.handleInputChange}
        />
    </Modal>
);