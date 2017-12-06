import React from 'react';
import Button from '../Button.component';
import renderer from 'react-test-renderer';
test('Button: snapshot test', () => {

  const type = 'X';
  const onclick = () => {};
  const snapshot = renderer.create(<Button type={type} onclick={onclick}/>).toJSON();
  expect(snapshot).toMatchSnapshot();

});

