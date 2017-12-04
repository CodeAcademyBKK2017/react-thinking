import React from 'react';
import renderer from 'react-test-renderer';
import CounterStatus from '../CounterStatus.component';

describe('CounterStatus component', () => {
  it('CounterStatus: Snapshot test', () => {
    const snapshot = renderer.create(<CounterStatus value={5} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});