import { FETCH_TODOS_BEGIN, 
  FETCH_TODOS_SUCCESS, 
  FETCH_TODOS_FAILURE
} 
  from '../actions/todoActions';

const initState = {
  listItems: [], 
  error: null
}

const rootReducer = (state = initState, action) => {
  if(action.type === "ADD_ITEM") {
    return { 
        ...state,
        listItems: [...state.listItems, action.item]
    }
  } else if(action.type === "DELETE_ITEM") {
    var index;

    state.listItems.find(function(item, i){
      if(item.id === action.id){
        index = i;
        return i;
      }
    });

    const newState = [...state.listItems.slice(0,index), ...state.listItems.slice(index+1)];

    return {
      ...state, listItems: newState
    }
     
  } else if(action.type === "GET_ALL") {
    console.log(action.listItems);
    var list = action.listItems;
    return {
      ...state,
        listItems: [...state.listItems, list]
    }
  } else if(action.type === FETCH_TODOS_BEGIN) {
    console.log('action beginning')
    return {
      ...state,
      //loading: true,
      error: null
    };

  } else if(action.type === FETCH_TODOS_SUCCESS) {
    console.log('action succeeded')
    return {
      ...state,
      //loading: false,
      listItems: action.payload.todos
    };
    
  } else if(action.type === FETCH_TODOS_FAILURE) {
    console.log('action failed')
    return {
      ...state,
      //loading: false,
      error: action.payload.error,
      listItems: []
    };
  }

  return state;
}

export default rootReducer;