import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Counter from '../Counter.component';

describe('Counter component', () => {
  it('Counter: renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Counter: should increment state', () => {
    const wrapper = shallow(<Counter/>);
    const instance = wrapper.instance();
    expect(instance.state.count).toEqual(0);
    // console.log( instance.changeCount)
    instance.changeCount(true)();
    expect(instance.state.count).toEqual(1);
  });
  it('Counter: shouldchangeCount Decrement state', () => {
    const wrapper = shallow(<Counter/>);
    const instance = wrapper.instance();
    expect(instance.state.count).toEqual(0);
    instance.changeCount(false)();
    expect(instance.state.count).toEqual(-1);
  });
});
