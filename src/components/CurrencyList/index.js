import { connect } from 'react-redux'
import CurrencyList from './CurrencyList'
import { deleteCurrency } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  currencies: state.currencies,
  amount: state.amount,
  rates: state.rates.rates,
  ratesNameMap: state.ratesNameMap
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteCurrency: (payload) => dispatch(deleteCurrency(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyList)