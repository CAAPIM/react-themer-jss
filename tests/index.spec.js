/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { shallow } from 'enzyme';

import reactThemerJSS from '../src';
import TestComponent from './fixtures/TestComponent';

const testTheme = {
  styles: {
    root: {
      color: 'blue',
    },
  },
};

describe('index.js', () => {
  test('module exports an instance of reactThemerJSS as the default export', () => {
    const ThemedTestComponent = reactThemerJSS(testTheme)(TestComponent);
    const wrapper = shallow(<ThemedTestComponent title="test component" />);
    const html = wrapper.html();
    const regex = /<div class="root-[0-9]+">test component<\/div>/;
    expect(!!html.match(regex)).toBe(true);
  });
});
