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

        return (
            <div>
                {this.state.listItems.map((item, index) =>
                <div key={item.itemName + index}>
                    <TodoItem itemName={item.itemName} description={item.description} id={item.id}></TodoItem>
                    <hr/>
                </div>
                )}
            </div>
        );
    }
}

export default TodoList;