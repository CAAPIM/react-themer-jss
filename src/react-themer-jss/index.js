/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow
/* eslint-disable import/prefer-default-export */

import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { create as createInjectSheet } from 'react-jss';
import { create as createThemer } from 'themer';
import { create as createReactThemer } from 'react-themer';

import { createMiddleware } from '../middleware';

/**
 * Creates a new instance of react-themer with react-themer-jss middleware
 * applied to it and with default JSS settings.
 *
 * @return Instance of react-themer
 * @private
 */
function createInstance() {
  const jss = createJss(preset());
  const injectSheet = createInjectSheet(jss);
  const themer = createThemer();
  themer.setMiddleware(createMiddleware(injectSheet));

  return createReactThemer(themer);
}

/**
 * Creates a convinience decorator that lazyly instantiate and runs an
 * instance of react-themer with react-themer-jss middleware.
 *
 * @param  {Function} customCreateInstance react-themer generator function
 * @return {Function}                      Lazy react-themer decorator
 * @public
 */
export function createDecorator(create: Function = createInstance) {
  let instanceCache: ?Function;
  return (...rest: any) => {
    if (!instanceCache) {
      instanceCache = create();
    }
    return instanceCache(...rest);
  };
}
