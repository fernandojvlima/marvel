
//Iniciando o estado do reducer.
const INITIAL_STATE = {
  data: [],
  filteredItems: [],
  name: ''

}

//Montando o reducer, que sempre recebe um estado e uma action.
//Baseado no estado e na action, ele vai retornar um novo state.
const filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FILTER_CHARACTER': {
      return {
        ...state,
        data: action.data,
        filteredItems: action.filteredItems,
        name: action.name
      }
    }
    default: {
      return state;
    }
  }
}

export default filter;