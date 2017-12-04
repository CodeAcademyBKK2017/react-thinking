import React from 'react';
import CounterStatus from '../CounterStatus.component';
import renderer from 'react-test-renderer';
test('CounterStatus: snapshot test',() => {
  const value = 9;
  const  snapshot = renderer.create(<CounterStatus  value={value}/>).toJSON();
  expect(snapshot).toMatchSnapshot();
});
  