import { connect } from 'react-redux'
import App from './App'
import { setRatesNameMap } from './actions'

const mapStateToProps = (state, ownProps) => ({
  initial: state.initial
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setRatesNameMap: (payload) => dispatch(setRatesNameMap(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)