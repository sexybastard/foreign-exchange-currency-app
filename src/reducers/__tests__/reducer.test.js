import amountReducer from '../amountReducer'
import currenciesReducer from '../currenciesReducer'
import ratesNameMapReducer from '../ratesNameMapReducer'
import ratesReducer from '../ratesReducer'
import { setAmount, setRates, setRatesNameMap, addCurrency, deleteCurrency } from '../../actions';

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

describe("reducers: ", () => {
  it('test amountReducer', () => {
    expect(amountReducer(undefined, setAmount(100))).toMatchSnapshot();
  })
  it('test currenciesReducer', () => {
    expect(currenciesReducer(undefined, addCurrency('IDR'))).toMatchSnapshot();
    expect(currenciesReducer(undefined, deleteCurrency('IDR'))).toMatchSnapshot();
  })
  it('test ratesNameMapReducer', () => {
    expect(ratesNameMapReducer(undefined, setRatesNameMap(ratesNameMap))).toMatchSnapshot();
  })
  it('test ratesReducer', () => {
    expect(ratesReducer(undefined, setRates('IDR'))).toMatchSnapshot();
  })
});