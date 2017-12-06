import React from 'react';
import Button from '../Button.component';
import renderer from 'react-test-renderer';

test('Button Snapshot Test',() => {
  let text = 'Add';
  const tree = renderer.create(<button onClick={jest.fn()}>{text}</button>);
  expect(tree).toMatchSnapshot();
});
