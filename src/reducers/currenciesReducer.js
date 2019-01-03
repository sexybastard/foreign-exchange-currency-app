const currencies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENCY':
      return [...state, action.payload]
    case 'DELETE_CURRENCY':
      return [...state.slice(0, state.indexOf(action.payload)), ...state.slice(state.indexOf(action.payload) + 1)]
    default:
      return state
  }
}

export default currencies