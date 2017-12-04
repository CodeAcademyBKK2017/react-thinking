import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import App from '../App';

describe('App component', () => {
  it('App: renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('add: should increment state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.add();
    expect(instance.state.count).toBe(1);
  });
});
