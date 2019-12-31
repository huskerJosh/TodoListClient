import React, { Component } from 'react';

import TodoItem from './/TodoItem';


class TodoList extends Component {

    state = {
        listItems:[]
    }

    componentDidMount() {
        fetch('')
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
                {listItems.map((item, index) =>
                <div key={item.itemName + index}>
                    <h1>{item.itemName}</h1>
                    <p>{item.description}</p>
                    <hr/>
                </div>
                )}
            </div>
        );
    }
}

export default TodoList;