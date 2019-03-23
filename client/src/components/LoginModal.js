import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Login from "./Login";

class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <Button variant="purple" onClick={this.handleShow}>
                    Log In
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Login />
                    </Modal.Body>
                    <Modal.Footer>
                        <p>Not a member?
                           <span>
                               <a href='/signup' className="deep-purple-text ml-1">Sign Up</a>
                           </span>
                       </p>
                    </Modal.Footer>
                </Modal>
            </div>
        );
  }
}

export default LoginModal;
