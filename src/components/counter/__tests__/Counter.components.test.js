import renderer from 'react-test-renderer';
import React from 'react';
import Counter from '../Counter.components';

test('Counter: snapshot test', () => {
    const snapshot = renderer.create(<Counter add={ () => {} } subtract = { () => {} } value={'0'}/>);
    expect(snapshot).toMatchSnapshot();
});