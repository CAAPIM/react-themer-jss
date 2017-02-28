/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow
/* eslint-disable import/prefer-default-export */

import injectSheet from 'react-jss';
import compose from 'recompose/compose';

import { mapperDecorator } from '../utils';

/**
 * Creates a new JSS middleware for themer.
 *
 * @param  {Function} customInjectSheet ReactJSS decorator
 * @return {Function}                   Middleware for themer
 * @public
 */
export function createMiddleware(customInjectSheet: ?Function) {
  const injectSheetInstance = customInjectSheet || injectSheet;
  return (component: any, resolvedTheme: any = {}) =>
    compose(
      injectSheetInstance(resolvedTheme.styles),
      mapperDecorator
    )(component);
}
