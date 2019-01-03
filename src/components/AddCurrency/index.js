import { connect } from 'react-redux'
import AddCurrency from './AddCurrency'
import { addCurrency } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  ratesNameMap: state.ratesNameMap
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCurrency: (payload) => dispatch(addCurrency(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCurrency)