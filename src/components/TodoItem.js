import React, { Component } from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';

class TodoItem extends Component {
    removeItem(id){
        console.log(id);
        fetch("https://localhost:5001/v1/Todo/" + id, {
            method: 'delete',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "id": id
               })
        })
    }

    render() {
        return (
            <div className="App">
            <Form>
                <Row>
                    <Col className="d-none"></Col>
                    <Col>{this.props.itemName}</Col>
                    <Col>{this.props.description}</Col>
                    <Col><Button variant="info" onClick={() => this.removeItem(this.props.id)}>Done</Button></Col>
                </Row>
            </Form>
            </div>
        );
    }
}

export default TodoItem;