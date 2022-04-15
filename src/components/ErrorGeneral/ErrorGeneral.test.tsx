import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorGeneral from './ErrorGeneral.comp';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Error General Component Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const compProps = {
        title: 'Hello World',
        message: 'Sample Word',
        isError: false,
      };
      const wrapper = shallow(<ErrorGeneral {...compProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
