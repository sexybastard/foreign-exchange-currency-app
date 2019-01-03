import React, { Component } from 'react'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 10,
  paddingBottom: 10
}

const currencyText = {
  fontStyle: 'italic',
  fontSize: 12
}

const currencyAmount = {
  fontWeight: 'bold',
  fontSize: 16
}

const amountContainer = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}

const initialAmount = 1;

class BaseCurrency extends Component {
  constructor(props) {
    super(props);

    this.getRates().then(response => {
      this.props.setRates(response)
      this.props.setAmount(initialAmount)
    });
  }

  getRates = () => {
    return fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleOnChange = (event) => {
    this.props.setAmount(event.target.value)
    this.getRates().then(response => console.log(response))
  };

  render() {
    const { amount } = this.props

    return (
      <div style={containerStyle}>
        <label style={currencyText}>USD - United States Dollars</label>
        <div style={amountContainer}>
          <label style={currencyAmount}>USD</label>
          <input type="number" onChange={this.handleOnChange} value={amount} />
        </div>
      </div>
    );
  }
}

export default BaseCurrency;