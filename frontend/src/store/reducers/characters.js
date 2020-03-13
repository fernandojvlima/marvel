
//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const characters = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOAD_DATA_CHARACTER_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  }

  if (action.type === 'LOAD_DATA_CHARACTER_SUCCESS') {
    return {
      isFetching: false,
      data: action.data,
      error: false
    }
  }

  if (action.type === 'LOAD_DATA_CHARACTER_FAILURE') {
    return {
      isFetching: false,
      data: [],
      error: true
    }
  }
  return state;
}

export default characters;