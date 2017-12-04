import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Counter from '../Counter';

describe('Counter component', () => {
  it('Counter: renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('add: should increment state',() => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.Btn_Add();
    expect(instance.state.count).toBe(1);
  });

  it('subtract: should decrement state',() => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.Btn_Sub();
    expect(instance.state.count).toBe(-1);
  });
});
