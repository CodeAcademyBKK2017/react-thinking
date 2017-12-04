import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button.component';

describe('Button component', () => {
  it('Button: Snapshot test', () => {
    const add = () => {};
    const snapshot = renderer.create(<Button type="ADD" onClick={add} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
