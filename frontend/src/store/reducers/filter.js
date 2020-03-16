
//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  name: '',
  filteredCharacters: []
}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const filter = (state = INITIAL_STATE, action) => {

  if (action.type === 'FILTER_CHARACTER') {
    return {
      ...state,
      filteredCharacters: action.payload.data
    }
  }

  return state;
}

export default filter;