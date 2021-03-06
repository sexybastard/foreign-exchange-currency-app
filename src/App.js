import React, { Component } from 'react';
import HomeContainer from './screens/HomeContainer'
import './App.css';

const ratesNameMap = {
  PHP: 'Philippine Piso',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  TRY: 'Turkish Lira',
  RON: 'Romanian Leu',
  ISK: 'Icelanding Krona',
  ILS: 'Israeli Shekel',
  CNY: 'Chinese Yuan',
  USD: 'United States Dollar',
  EUR: 'Euro',
  PLN: 'Polish Zloty',
  GBP: 'Pound Sterling',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  MYR: 'Malaysian Ringgit',
  NZD: 'New Zealand Dollar',
  CHF: 'Swiss Franc',
  HRK: 'Croatian Kuna',
  SGD: 'Singapore Dollar',
  DKK: 'Danish Krone',
  BGN: 'Bulgarian Lev',
  CZK: 'Czech Koruna',
  BRL: 'Brazilian Rel',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  INR: 'Indian Rupee',
  SEK: 'Swedish Krona',
  MXN: 'Mexican Peso',
  RUB: 'Russian Ruble',
  HKD: 'Hong Kong Dollar',
  ZAR: 'South African Rand',
  THB: 'Thai Baht',
  NOK: 'Norwegian Krone'
};

class App extends Component {
  constructor(props) {
    super(props);
  
    this.props.setRatesNameMap(ratesNameMap)
  }

  render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
