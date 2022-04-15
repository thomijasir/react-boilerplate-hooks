import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home.page';

afterEach(() => {
  jest.clearAllMocks();
});

describe('HomePage Container Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Home />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
