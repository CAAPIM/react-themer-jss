/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow
/* eslint-disable import/prefer-default-export */

import mapProps from 'recompose/mapProps';
import objectAssign from 'object-assign';

/**
 * Property mapper to trasform ReactJSS output props into themer props.
 *
 * @param  {Object} props Input props from ReactJSS
 * @return {Object}       Output props to be passed to themed component
 */
export const mapper = (props: Object) => {
  const styles = props.sheet && props.sheet.classes ? props.sheet.classes : {};
  const theme = objectAssign({}, props.theme, { styles });
  const newProps = objectAssign({}, props, { theme });
  delete newProps.sheet;
  return newProps;
};

// react decorator based on prop-mapper function
export const mapperDecorator = mapProps(mapper);
