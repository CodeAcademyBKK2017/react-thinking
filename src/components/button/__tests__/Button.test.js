import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Button from '../Button.component';

describe('Button component', () => {
  it('Button: renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});