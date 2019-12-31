import React, { Component } from 'react';
import {Form, Row, Col, FormControl, InputGroup} from 'react-bootstrap';

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TodoItem extends Component {
    render() {
        return (
            <div className="App">
            <Form>
                <Row>
                    <Col>Test</Col>
                    <Col><FontAwesomeIcon icon={faWindowClose} size="2x" color="red"></FontAwesomeIcon></Col>
                </Row>
            </Form>
            </div>
            

        );
    }
}

export default TodoItem;