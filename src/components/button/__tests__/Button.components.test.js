import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../Button.components';

test('Button: snapshot test', () => {
    const snapshot = renderer.create(<Button fn={ () => {} } fnName={'ADD'}/>);
    expect(snapshot).toMatchSnapshot();
});