import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col"

const FormField = props => (
    <Form.Group controlId={props.controlId}>
        <Form.Row>
            <Col>
                <Form.Label>{props.label}</Form.Label>
            </Col>
            <Col>
                {props.error &&
                    <div className="text-right">{props.errorMsg}</div>
                }
            </Col>
        </Form.Row>
        <Form.Control 
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            autoComplete={props.autoComplete}
            onChange={props.onChange}
        />
        {props.children &&
            <Form.Text className="text-muted">
                {props.children}
            </Form.Text>
        }
    </Form.Group>
);

export default FormField;