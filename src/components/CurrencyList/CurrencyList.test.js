import React from 'react';
import { shallow } from 'enzyme';
import CurrencyList from './CurrencyList';

describe("Component: CurrencyList", () => {
  it('CurrencyList renders correctly without data', () => {
    shallow(<CurrencyList />);
  });
  it("CurrencyList should match snapshoot", () => {
    const wrapper = shallow(<CurrencyList />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});