import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TemplateComp from './TemplateComp.comp';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Loading General Component Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const compProps = {
        title: 'Component',
      };
      const wrapper = shallow(<TemplateComp {...compProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
