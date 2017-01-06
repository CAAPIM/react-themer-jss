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

export function create() {
  const jss = createJss(preset());
  const injectSheet = createInjectSheet(jss);
  const reactThemerJSSMiddleware = createMiddleware(injectSheet);

  const themer = createThemer();
  themer.setMiddleware(reactThemerJSSMiddleware);

  return createReactThemer(themer);
}
