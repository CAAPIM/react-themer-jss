/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import isEqual from 'lodash/isEqual';
import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { create as createReactThemerJssMiddleware } from '../src';

// regular theme
const testResolvedTheme1 = {
  styles: {
    root: {
      color: 'blue',
    },
  },
};

const testJssOutputProps1 = {
  sheet: {
    classes: {
      root: 'root-1234',
    },
  },
};

// empty theme
const testResolvedTheme2 = {
  styles: {},
};

const testJssOutputProps2 = {};


// React JSS decorator stub
const injectSheetStub = jest.fn((jssStyles) => {
  let jssOutputProps = {};
  if (testResolvedTheme1.styles && isEqual(jssStyles, testResolvedTheme1.styles)) {
    jssOutputProps = testJssOutputProps1;
  }
  if (testResolvedTheme2.styles && isEqual(jssStyles, testResolvedTheme2.styles)) {
    jssOutputProps = testJssOutputProps2;
  }
  return (InputComponent) => (props) =>
    <InputComponent {...props} {...jssOutputProps} />;
});

// test component
const TestComponent = ({ theme, title }) => {
  const styles = theme && theme.styles ? theme.styles : {};
  return <div className={styles.root}>{title}</div>;
};

TestComponent.propTypes = {
  theme: PropTypes.object,
  title: PropTypes.string,
};

describe('React Themer JSS', () => {
  test('JSS classes are mapped to the `theme.styles` prop', () => {
    const reactThemerJssMiddleware = createReactThemerJssMiddleware(injectSheetStub);
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent, testResolvedTheme1.styles);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    expect(wrapper.html()).toBe('<div class="root-1234">test component</div>');
  });

  test('If JSS returns no styles, then `theme.styles` should be an empty object', () => {
    const reactThemerJssMiddleware = createReactThemerJssMiddleware(injectSheetStub);
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent, testResolvedTheme2.styles);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    expect(wrapper.html()).toBe('<div>test component</div>');
  });

  test('No error thrown if resolved theme is not defined', () => {
    const reactThemerJssMiddleware = createReactThemerJssMiddleware(injectSheetStub);
    const DecoratedComponent = reactThemerJssMiddleware(TestComponent);
    const wrapper = shallow(<DecoratedComponent title="test component" />);
    expect(wrapper.html()).toBe('<div>test component</div>');
  });
});
