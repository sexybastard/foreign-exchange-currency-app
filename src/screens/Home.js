import React, { Component } from 'react'
import './common.css'
import BaseCurrency from '../components/BaseCurrency'
import CurrencyList from '../components/CurrencyList'
import AddCurrency from '../components/AddCurrency'

const contentContainer = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10
}

class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    };
  }

  render() {

    return (
      <div className="home-container">
        <BaseCurrency />
        <div style={contentContainer}>
          <CurrencyList />
          <AddCurrency />
        </div>
      </div>
    );
  }
}

export default Home;