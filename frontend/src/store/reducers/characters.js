
//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const characters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_DATA_CHARACTER_REQUEST': {
      return {
        isFetching: true,
        data: [],
        error: false
      }
    }

    case 'LOAD_DATA_CHARACTER_SUCCESS': {
      return {
        isFetching: false,
        data: action.data,
        error: false
      }
    }

    case 'LOAD_DATA_CHARACTER_FAILURE': {
      return {
        isFetching: false,
        data: [],
        error: true
      }
    }

    default:
      return state;
  }
}

export default characters;