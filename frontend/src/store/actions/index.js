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

export const loadDataCharacterFailure = () => {
  return {
    type: 'LOAD_DATA_CHARACTER_FAILURE',

  }
}


export const loadDetailsRequest = () => {
  return {
    type: 'LOAD_DETAILS_REQUEST',
  }
}

export const loadDetailsSuccess = (data) => {
  return {
    type: 'LOAD_DETAILS_SUCCESS',
    data
  }
}

export const loadDetailsFailure = () => {
  return {
    type: 'LOAD_DETAILS_FAILURE',

  }
}