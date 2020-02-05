export const FETCH_TODOS_BEGIN   = 'FETCH_TODOS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

//probably need to return something here 
export const fetchTodosBegin = () => {
  console.log('begin')
  return {type: FETCH_TODOS_BEGIN }
};

export const fetchTodosSuccess = todos => {
  return { type: FETCH_TODOS_SUCCESS,
  payload: { todos }
  }
};

export const fetchTodosFailure = error => {
  return {type: FETCH_TODOS_FAILURE,
  payload: { error }
  }
};

// export const fetchTodos = () =>  {
//   console.log('todo action')
//   return dispatch =>{
//     dispatch(fetchTodosAsync())
//   }
// }

export function fetchTodos() {
  console.log("TODO FETCHED!")
  return dispatch => {
    dispatch(fetchTodosBegin());
    return fetch("https://localhost:5001/v1/Todo")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTodosSuccess(json));
        return json.listItems;
      })
      .catch(error => dispatch(fetchTodosFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}