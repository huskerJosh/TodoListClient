import React, { Component } from 'react';

import TodoItem from './/TodoItem';


class TodoList extends Component {

    state = {
        listItems:[]
    }

    componentDidMount() {
        fetch('https://localhost:5001/v1/Todo')
        .then(res => res.json())
        .then((data) => {
            this.setState({listItems:data})
        })
        .catch(console.log)
    }

    render() {
        
        // var listItems = [{'itemName':'wash car', 'description':' wash the jeep'},
        // {'itemName':'feed dog', 'description':' feed Piper'},
        // {'itemName':'do laundry', 'description':' do Mila\'s laundry'}];

        return (
            <div>
                {this.state.listItems.map((item, index) =>
                <div key={item.itemName + index}>
                    <TodoItem itemName={item.itemName} description={item.description}></TodoItem>
                    {/* <h1>{item.itemName}</h1>
                    <p>{item.description}</p>
                    <FontAwesomeIcon icon={faWindowClose} size="2x" color="red"></FontAwesomeIcon> */}
                    <hr/>
                </div>
                )}
            </div>
        );
    }
}

export default TodoList;