/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import { createMiddleware } from './middleware';
import reactThemerJss from './react-themer-jss';
import withIsolatedTheme from './react-themer-jss/with-isolated-theme';

// export react-themer-jss singleton as default
export default reactThemerJss;

export {
  createMiddleware,
  withIsolatedTheme,
};
