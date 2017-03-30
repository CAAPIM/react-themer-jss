/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { shallow } from 'enzyme';

import reactThemerJss from '../../src/react-themer-jss';
import TestComponent from '../fixtures/TestComponent';

const testTheme = {
  styles: {
    root: {
      color: 'blue',
    },
  },
};

describe('React Themer JSS', () => {
  test('JSS theme is applied to wrapped component when using the convenience decorator', () => {
    const ThemedTestComponent = reactThemerJss(testTheme)(TestComponent);
    const wrapper = shallow(<ThemedTestComponent title="test component" />);
    const html = wrapper.html();
    const regex = /<div class="root-[0-9|-]+">test component<\/div>/;
    expect(!!html.match(regex)).toBe(true);
  });
});
