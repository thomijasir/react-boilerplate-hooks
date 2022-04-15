import React from 'react';
import render from 'react-test-renderer';
import LoadingGeneral from './LoadingGeneral.comp';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Loading General Component Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const compProps = {
        isLoading: false,
      };
      const wrapper = render.create(<LoadingGeneral {...compProps} />);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
