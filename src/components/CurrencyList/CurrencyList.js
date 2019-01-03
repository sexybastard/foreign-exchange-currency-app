import React, { Component } from 'react'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 10,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'black'
}

const leftBlock = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  paddingLeft: 6,
  paddingRight: 6,
  paddingTop: 6,
  paddingBottom: 6,
  alignItems: 'flex-start'
}

const rightBlock = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 6,
  paddingRight: 6,
  borderLeftWidth: 2,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderStyle: 'solid',
  borderColor: 'black'
}

const line1Style = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}

const fontLine1 = {
  fontSize: 18
}

const fontLine2 = {
  fontStyle: 'italic',
  fontWeight: 'bold'
}

const fontLine3 = {
  fontStyle: 'italic'
}

const fontRemoveIcon = {
  fontSize: 18,
  fontWeight: 'bold'
}

class CurrencyList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      toggleInput: false
    };
  }

  handleDelete = (curr) => {
    this.props.deleteCurrency(curr)
  };

  moneyFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const {currencies, amount, rates, ratesNameMap} = this.props

    const renderCurrency = (curr, index) => {
      return (
        <div style={containerStyle} key={index}>
          <div style={leftBlock}>
            <div style={line1Style}>
              <label style={fontLine1}>{curr}</label>
              <label style={fontLine1}>{this.moneyFormat((amount * rates[curr]).toFixed(2))}</label>
            </div>
            <label style={fontLine2}>{curr} - {ratesNameMap[curr]}</label>
            <label style={fontLine3}>1 USD = {curr} {rates[curr].toFixed(2)}</label>
          </div>
          <div style={rightBlock} onClick={() => this.handleDelete(curr)}>
            <label style={fontRemoveIcon}>(-)</label>
          </div>
        </div>
      )
    };

    return (
      currencies.length > 0 ?
      currencies.map((curr, index) => renderCurrency(curr, index))
      : null
    );
  }
}

CurrencyList.defaultProps = {
  currencies: []
}

export default CurrencyList;