import React from 'react';
import CountStatus from '../CountStatus.conmponent';
import renderer from 'react-test-renderer';

test('CountStatus Snapshot Test',() => {
  let valueData = 0;
  const tree = renderer.create(<CountStatus value = {valueData}/>);
  expect(tree).toMatchSnapshot();
});
