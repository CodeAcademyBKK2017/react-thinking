import React from 'react';
import renderer from 'react-test-renderer';
import CountStatus from '../CountStatus.component';

describe('CountStatus component', () => {
	it('CountStatus: renders correctly', () => {
		const tree = renderer.create(<CountStatus />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
