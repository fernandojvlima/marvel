//Action da Home para Carregar Personagens
export const loadDataCharacterRequest = () => {
  return {
    type: 'LOAD_DATA_CHARACTER_REQUEST',
  }
}

//Se o retorno for 200
export const loadDataCharacterSuccess = (data) => {
  return {
    type: 'LOAD_DATA_CHARACTER_SUCCESS',
    data
  }
}

//Se deu algo errado na requisição
export const loadDataCharacterFailure = () => {
  return {
    type: 'LOAD_DATA_CHARACTER_FAILURE',

  }
}

//Action da Home para Carregar Personagens
export const loadDetailsRequest = () => {
  return {
    type: 'LOAD_DETAILS_REQUEST',
  }
}

//Se o retorno for 200
export const loadDetailsSuccess = (data) => {
  return {
    type: 'LOAD_DETAILS_SUCCESS',
    data
  }
}

//Se deu algo errado na requisição
export const loadDetailsFailure = () => {
  return {
    type: 'LOAD_DETAILS_FAILURE',
  }
}

//Action para filtrar personagens
export const filterCharacter = (data, name) => {
  return {
    type: 'FILTER_CHARACTER',
    data: data,
    name: name,
    filteredItems: name === '' ? data : data.filter(item => item.name === name)

  }
}

//Action para alterar o personagem, apenas localmente.
export const editCharacter = (data, id, description, name) => {
  return {
    type: 'EDIT_CHARACTER',
    name: data.filter(item => item.id === id) ? name : data.name,
    description: data.filter(item => item.id === id) ? description : data.description
  }
}