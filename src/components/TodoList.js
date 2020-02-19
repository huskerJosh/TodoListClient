import React, { Component } from 'react';
import TodoItem from './/TodoItem';
import { connect} from 'react-redux';
import { fetchTodos } from "../actions/todoActions";


class TodoList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTodos());
      }

    render() {
        const { listItems } = this.props;
        return (
            <div>
                {listItems.map((item, index) =>
                <div key={item.itemName + index}>
                    <TodoItem itemName={item.itemName} description={item.description} id={item.id}></TodoItem>
                    <hr/>
                </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listItems: state.listItems
    }
}

export default connect(mapStateToProps)(TodoList);