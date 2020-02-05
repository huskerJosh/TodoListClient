import React, { Component } from 'react';
import TodoItem from './/TodoItem';
import { connect} from 'react-redux';
import { fetchTodos } from "../actions/todoActions";


class TodoList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTodos());
      }
    //  componentDidMount(){
        
    //         event.preventDefault();
        
    //         var result = await fetch("https://localhost:5001/v1/AddItem", {
    //         method: 'get',
    //         headers: {'Content-Type':'application/json'}
    //         }).then(response => response.json())
    //           .then(json => {return json});
            
    //         //this.props.addItem(result);       
            
    //         console.log(result)
        

    //     this.props.getAll();
    //  }

    // async componentDidMount() {
    //     try {
          
    //         var result = await fetch("https://localhost:5001/v1/Todo", {
    //             method: 'get',
    //             headers: {'Content-Type':'application/json'}
    //             }).then(response => response.json())
    //                 .then(json => {return json});

    //         this.props.getAll(result);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

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


// const mapDispatchToProps = (dispatch) => {
//     return {
//         getAll: () => {dispatch(fetchTodos())}
//     }
// }

export default connect(mapStateToProps)(TodoList);