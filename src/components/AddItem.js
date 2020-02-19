import React, { Component } from 'react';
import {Button, Form, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        
        this.state = {
            formControls: {
                itemName: {
                  value: ''
                },
                description: {
                  value: ''
                },
                id: {
                    value: ''
                }
            }
        }
    }

    changeHandler = event => {
      
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
          formControls: {
              ...this.state.formControls,
              [name]: {
              ...this.state.formControls[name],
              value
            }
          }
        });
    }

   async addItem(event){
        event.preventDefault();
    
        var result = await fetch("https://localhost:5001/v1/AddItem", {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            "itemName": this.state.formControls.itemName.value,
            "description":this.state.formControls.description.value,
            "isActive": true
           })
        }).then(response => response.json())
          .then(json => {return json});
        
        this.props.addItem(result);

        this.setState([this.state.formControls.description.value='']);
        this.setState([this.state.formControls.itemName.value='']);

        
    }

    render(){
        return(
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Todo Item" 
                        name="itemName" 
                        type="text"
                        value={this.state.formControls.itemName.value} 
                        onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Enter Description"
                         name="description" 
                         type="text"
                         value={this.state.formControls.description.value} 
                         onChange={this.changeHandler}></Form.Control>     
                    </Form.Group>
                
                    <Form.Group>
                        <Button variant="success" onClick={this.addItem}>Add</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (todoItem) => { dispatch({type: 'ADD_ITEM', item: todoItem})}
    }
 }

 const mapStateToProps = (state) => {
    return {
        listItems: state.listItems
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);