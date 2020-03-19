//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  id: '',
  isFetching: false,
  error: false
}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const details = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_DETAILS_REQUEST': {
      return {
        isFetching: true,
        data: [],
        id: '',
        error: false
      }
    }
    case 'LOAD_DETAILS_SUCCESS': {
      return {
        isFetching: false,
        data: action.data,
        id: action.data.id,
        error: false
      }
    }
    case 'LOAD_DETAILS_FAILURE': {
      return {
        isFetching: false,
        data: [],
        id: '',
        error: true
      }
    }
    default: {
      return state;
    }
  }
}

export default details;