import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter.component';

describe('Counter component', () => {
	it('Counter: renders correctly', () => {
		const tree = renderer.create(<Counter />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('add: should increment state', () => {
		const wrapper = shallow(<Counter />);
		const instance = wrapper.instance();
		expect(instance.state.count).toBe(0);
		instance.add();
		expect(instance.state.count).toBe(1);
	});

	it('subtract: should decrease state', () => {
		const wrapper = shallow(<Counter />);
		const instance = wrapper.instance();
		expect(instance.state.count).toBe(0);
		instance.subtract();
		expect(instance.state.count).toBe(-1);
	});
});
