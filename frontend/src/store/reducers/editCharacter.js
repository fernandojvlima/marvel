
//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  id: '',
  isFetching: false,
  error: false
}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const editCharacter = (state = INITIAL_STATE, action) => {
  if (action.type === 'EDIT_CHARACTER_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  }

  if (action.type === 'EDIT_CHARACTER_SUCCESS') {
    return {
      isFetching: false,
      data: action.data,
      error: false
    }
  }

  if (action.type === 'EDIT_CHARACTER_FAILURE') {
    return {
      isFetching: false,
      data: [],
      error: true
    }
  }
  return state;
}

export default editCharacter;