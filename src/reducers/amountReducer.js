const amount = (state = [], action) => {
  switch (action.type) {
    case 'SET_AMOUNT':
      return action.payload
    default:
      return state
  }
}

export default amount