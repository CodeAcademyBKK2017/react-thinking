import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Status from '../Status.component';

describe('Status component', () => {
  it('Status: renders correctly', () => {
    const tree = renderer.create(<Status />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
