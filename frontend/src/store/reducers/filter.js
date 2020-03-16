
//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  filteredItems: [],
  name: ''

}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const filter = (state = INITIAL_STATE, action) => {

  if (action.type.length > 0 && action.type === 'FILTER_CHARACTER') {
    return {
      ...state,
      filteredItems: action.data.character, name: action.data.name
    }
  }

  return state;
}

export default filter;