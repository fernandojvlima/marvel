const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
}

const characters = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOAD_DATA_REQUEST') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  }

  if (action.type === 'LOAD_DATA_SUCCESS') {
    console.log(action)
    return {
      isFetching: false,
      data: action.data,
      error: false
    }
  }

  if (action.type === 'LOAD_DATA_FAILURE') {
    return {
      isFetching: true,
      data: [],
      error: false
    }
  }
  return state;
}

export default characters;