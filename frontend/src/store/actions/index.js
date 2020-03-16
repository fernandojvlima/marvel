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

//Action para alterar o personagem, apenas localmente.
export const editCharacter = () => {
  return {
    type: 'EDIT_CHARACTER',
  }
}

//Action para filtrar personagens
export const filterCharacter = (data, name) => {
  return {
    type: 'FILTER_CHARACTER',
    payload: {
      data: name === '' ? data : data.filter(c => data.name.indexOf(name) >= 0)
    }
  }
}