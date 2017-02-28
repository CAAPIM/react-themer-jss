/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import isEqual from 'lodash/isEqual';

import { mapper } from '../../src/utils';

const testPropsInput = {
  test: 'testProp',
  theme: {
    themeProp: 'testThemeProp',
  },
  sheet: {
    classes: {
      root: 'root-class-1234',
    },
  },
  classes: {
    root: 'root-class-1234',
  },
};

describe('mapper', () => {
  test('maps props.sheet.classes property to props.theme.styles', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.theme.styles.root).toBe('root-class-1234');
  });

  test('returns empty object in props.theme.styles if no sheet prop is found in input props', () => {
    const testPropsOutput = mapper({});
    expect(isEqual(testPropsOutput, { theme: { styles: {} } })).toBe(true);
  });

  test('returns empty object in props.theme.styles if sheet.classes is undefined in input props', () => {
    const testPropsOutput = mapper({ sheet: { test: 'test' } });
    expect(isEqual(testPropsOutput, { theme: { styles: {} } })).toBe(true);
  });

  test('keeps existing props', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.test).toBe('testProp');
  });

  test('merges existing props.theme object if defined', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.theme.themeProp).toBe('testThemeProp');
  });

  test('removes props.sheet', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.sheet).toBe(undefined);
  });

  test('removes props.classes', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.classes).toBe(undefined);
  });
});
