/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow
/* eslint-disable import/prefer-default-export */

import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { create as createInjectSheet } from 'react-jss';
import { create as createThemer } from 'ca-ui-themer';
import { create as createReactThemer } from 'ca-ui-react-themer';

import { createMiddleware } from '../middleware';

const jss = createJss(preset());
const injectSheet = createInjectSheet(jss);
const themer = createThemer();
themer.setMiddleware(createMiddleware(injectSheet));
const reactThemerJss = createReactThemer(themer);

export default reactThemerJss;
