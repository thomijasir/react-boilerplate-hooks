import React from 'react';
import render from 'react-test-renderer';
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
      const wrapper = render.create(<ErrorGeneral {...compProps} />);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
