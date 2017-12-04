import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import CountStatus from '../CountStatus';

describe('CountStatus component', () => {
  it('CountStatus: renders correctly', () => {
    const tree = renderer.create(<CountStatus />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
