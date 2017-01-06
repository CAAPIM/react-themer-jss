/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import { createMiddleware } from './middleware';
import { create } from './react-themer-jss';

// export react-themer-jss singleton as default
export default create();

export {
  createMiddleware,
};
