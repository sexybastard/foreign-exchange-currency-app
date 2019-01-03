import React from 'react';
import { shallow } from 'enzyme';
import AddCurrency from './AddCurrency';

describe("Component: AddCurrency", () => {
  it('AddCurrency renders correctly without data', () => {
    shallow(<AddCurrency />)
  });
  it("AddCurrency should match snapshoot", () => {
    const wrapper = shallow(<AddCurrency />)
    expect(wrapper.getElements()).toMatchSnapshot()
  });
  it('Simulates on click add more currency', () => {
    const wrapper = shallow(<AddCurrency />)
    expect(wrapper.state('toggleInput')).toBe(false)
    wrapper.find('div').first().simulate('click')
    expect(wrapper.state('toggleInput')).toBe(true)
  });
  it('Simulates on change currency click', () => {
    const wrapper = shallow(<AddCurrency />)
    expect(wrapper.state('currency')).toBe('USD')
    wrapper.find('div').first().simulate('click')
    wrapper.find('select').first().simulate('change', { target: { value: 'IDR' } })
    expect(wrapper.state('currency')).toBe('IDR')
  });
});