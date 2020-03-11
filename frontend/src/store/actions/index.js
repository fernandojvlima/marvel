export const loadDataRequest = () => {
  return {
    type: 'LOAD_DATA_REQUEST'
  }
}

export const loadDataSuccess = (data) => {
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  }
}

export const loadDataUARequest = () => {
  return {
    type: 'LOAD_DATA_UA_REQUEST'
  }
}

export const loadDataUASuccess = (data) => {
  return {
    type: 'LOAD_DATA_UA_SUCCESS',
    data
  }
}

export const loadDataCharacterRequest = () => {
  return {
    type: 'LOAD_DATA_CHARACTER_REQUEST',
  }
}

export const loadDataCharacterSuccess = (data) => {
  return {
    type: 'LOAD_DATA_CHARACTER_SUCCESS',
    data
  }
}