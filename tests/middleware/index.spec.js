/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { shallow } from 'enzyme';
import injectSheet from 'react-jss';

import { createMiddleware } from '../../src';
import TestComponent from '../fixtures/TestComponent';

// regular theme
const testResolvedTheme1 = {
  styles: {
    root: {
      color: 'blue',
    },
  },
};

// empty theme
const testResolvedTheme2 = {
  styles: {},
};

describe('middleware', () => {
  test('JSS classes are mapped to the `theme.styles` prop', () => {
    const reactThemerJssMiddleware = createMiddleware(injectSheet);
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent, testResolvedTheme1.styles);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    const html = wrapper.html();
    const regex = /<div class="root-[0-9]+">test component<\/div>/;
    expect(!!html.match(regex)).toBe(true);
  });

  test('If JSS returns no styles, then `theme.styles` should be an empty object', () => {
    const reactThemerJssMiddleware = createMiddleware(injectSheet);
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent, testResolvedTheme2.styles);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    expect(wrapper.html()).toBe('<div>test component</div>');
  });

  test('No error thrown if resolved theme is not defined', () => {
    const reactThemerJssMiddleware = createMiddleware(injectSheet);
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    expect(wrapper.html()).toBe('<div>test component</div>');
  });

  test('global injectSheet from react-jss is used if no injectSheet instance is specified', () => {
    const reactThemerJssMiddleware = createMiddleware();
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent, testResolvedTheme1.styles);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    const html = wrapper.html();
    const regex = /<div class="root-[0-9]+">test component<\/div>/;
    expect(!!html.match(regex)).toBe(true);
  });
});
