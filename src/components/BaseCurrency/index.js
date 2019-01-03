import { connect } from 'react-redux'
import BaseCurrency from './BaseCurrency'
import { setAmount, setRates } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  amount: state.amount
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAmount: (payload) => dispatch(setAmount(payload)),
  setRates: (payload) => dispatch(setRates(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseCurrency)