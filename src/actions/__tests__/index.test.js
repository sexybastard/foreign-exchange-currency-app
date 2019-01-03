import { setAmount, setRates, setRatesNameMap, addCurrency, deleteCurrency } from '../index';
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

describe("actions: ", () => {
  it('test action setAmount', () => {
    expect(setAmount(100)).toMatchObject({ type: 'SET_AMOUNT', payload: 100 });
  })
  it('test action setRates', () => {
    expect(setRates('IDR')).toMatchObject({ type: 'SET_RATES', payload: 'IDR' });
  })
  it('test action setRatesNameMap', () => {
    expect(setRatesNameMap(ratesNameMap)).toMatchObject({ type: 'SET_RATES_NAME_MAP', payload: ratesNameMap });
  })
  it('test action addCurrency', () => {
    expect(addCurrency('IDR')).toMatchObject({ type: 'ADD_CURRENCY', payload: 'IDR' });
  })
  it('test action deleteCurrency', () => {
    expect(deleteCurrency('IDR')).toMatchObject({ type: 'DELETE_CURRENCY', payload: 'IDR' });
  })
});