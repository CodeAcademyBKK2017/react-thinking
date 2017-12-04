import renderer from 'react-test-renderer';
import React from 'react';
import State from '../State.components';

test('State: snapshot test', () => {
    const snapshot = renderer.create(<State value='1' />);
    expect(snapshot).toMatchSnapshot();
});