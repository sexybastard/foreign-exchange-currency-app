import { combineReducers } from 'redux'

import amount from './amountReducer'
import currencies from './currenciesReducer'
import rates from './ratesReducer'
import ratesNameMap from './ratesNameMapReducer'

export default combineReducers({
  amount,
  currencies,
  rates,
  ratesNameMap
})