/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { shallow } from 'enzyme';
import reactThemer from 'react-themer';

import { createDecorator } from '../../src/react-themer-jss';
import TestComponent from '../fixtures/TestComponent';

const decorator = createDecorator();

const testTheme = {
  styles: {
    root: {
      color: 'blue',
    },
  },
};

let createInstanceStubCallCount = 0;
function createInstanceStub() {
  createInstanceStubCallCount++;
  return reactThemer;
}

const decoratorStub = createDecorator(createInstanceStub);

describe('React Themer JSS', () => {
  test('JSS theme is applied to wrapped component when using the convenience decorator', () => {
    const ThemedTestComponent = decorator(testTheme)(TestComponent);
    const wrapper = shallow(<ThemedTestComponent title="test component" />);
    const html = wrapper.html();
    const regex = /<div class="root-[0-9]+">test component<\/div>/;
    expect(!!html.match(regex)).toBe(true);
  });

  test('custom createInstance method is called when passed to createDecorator', () => {
    decoratorStub(testTheme)(TestComponent);
    expect(createInstanceStubCallCount > 0).toBe(true);
  });

  test('createInstance is called only once if decorator is called multiple times', () => {
    decoratorStub(testTheme)(TestComponent);
    decoratorStub(testTheme)(TestComponent);
    decoratorStub(testTheme)(TestComponent);
    expect(createInstanceStubCallCount).toBe(1);
  });
});
