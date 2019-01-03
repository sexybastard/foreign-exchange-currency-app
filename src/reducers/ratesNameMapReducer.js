const ratesNameMap = (state = [], action) => {
  switch (action.type) {
    case 'SET_RATES_NAME_MAP':
      return action.payload
    default:
      return state
  }
}

export default ratesNameMap