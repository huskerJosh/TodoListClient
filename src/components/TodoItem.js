import React, { Component } from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import { connect} from 'react-redux';

class TodoItem extends Component {
    removeItem(){
        fetch("https://localhost:5001/v1/Todo/" + this.props.id, {
            method: 'delete',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "id": this.props.id
               })
        });

        this.props.deleteItem(this.props.id);
    }

    // handleClick = () => {
    //     this.props.deleteItem(this.props.id);
    // }

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

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {dispatch({type: 'DELETE_ITEM', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);