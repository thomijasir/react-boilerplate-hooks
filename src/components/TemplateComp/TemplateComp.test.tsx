import React from 'react';
import render from 'react-test-renderer';
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
      const wrapper = render.create(<TemplateComp {...compProps} />);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
