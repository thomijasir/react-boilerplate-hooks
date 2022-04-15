import React from 'react';
import render from 'react-test-renderer';
import Home from './Home.page';

afterEach(() => {
  jest.clearAllMocks();
});

describe('HomePage Container Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = render.create(<Home />);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
