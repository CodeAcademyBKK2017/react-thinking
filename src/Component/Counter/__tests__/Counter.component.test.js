import React from 'react';
import Counter from '../Counter.component';
import renderer from 'react-test-renderer';

test('Counter Snapshot Test',() => {
  let valueData = 0;
  const tree = renderer.create(<Counter value={valueData} add={jest.fn()} subtract={jest.fn()}/>);
  expect(tree).toMatchSnapshot();
});
