import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Counter from '../Counter.components';

describe('Counter component', () => {
  it('Counter: renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('add: should increment state', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toEqual(0);
    instance.add();
    expect(instance.state.count).toEqual(1);
  });
});
