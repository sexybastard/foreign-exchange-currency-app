import React, { Component } from 'react'

const containerStyle = {
  display: 'flex',
  flex: 1,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'black',
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 12,
  paddingRight: 12
}

const dropdownStyle = {
  display: 'flex',
  flex: 1
}

class AddCurrency extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      toggleInput: false,
      currency: 'USD'
    };
  }

  handleOnClick = () => {
    this.setState({toggleInput: !this.state.toggleInput})
  };

  handleOnChange = (event) => {
    this.setState({currency: event.target.value})
  };

  handleSubmit = () => {
    this.props.addCurrency(this.state.currency)
    this.handleOnClick();
  };

  render() {

    return (
      <React.Fragment>
      {
        this.state.toggleInput ?
        <div style={containerStyle}>
          <select style={dropdownStyle} onChange={this.handleOnChange} value={this.state.currency}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="IDR">IDR</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
            <option value="SGD">SGD</option>
            <option value="INR">INR</option>
            <option value="MYR">MYR</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
          </select>
          <button onClick={this.handleSubmit}>Submit</button>
        </div> :
        <div style={containerStyle} onClick={this.handleOnClick}>
          <label style={{fontWeight: 'bold'}}>(+) Add More Currency</label>
        </div>
      }
      </React.Fragment>
    );
  }
}

export default AddCurrency;