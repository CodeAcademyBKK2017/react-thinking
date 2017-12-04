import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import CountStatus from '../CountStatus.component';

describe('CountStatus', () => {
  it('Overlay: renders correctly', () => {
    const tree = renderer.create(<CountStatus />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});