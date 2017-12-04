import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Counter from '../Counter.component';

describe('Counter', () => {
  it('Overlay: renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add: should increment state', () => {
    const comp = shallow(<Counter />);
    const instance = comp.instance();

    instance.add();
    expect(instance.state.count).toBe(1);
  });

  it('subtract: should decrement state', () => {
    const comp = shallow(<Counter />);
    const instance = comp.instance();
    console.log('instance.state.count',instance.state.count);
    instance.subtract();
    expect(instance.state.count).toBe(-1);
  });
});