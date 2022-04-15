import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
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
      const wrapper = shallow(<LoadingGeneral {...compProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
