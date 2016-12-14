/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint-disable import/prefer-default-export */
// @flow

import mapProps from 'recompose/mapProps';
import compose from 'recompose/compose';
import objectAssign from 'object-assign';

/**
 * Property mapper to trasform ReactJSS output props into themer props.
 *
 * @param  {Object} props Input props from ReactJSS
 * @return {Function}     Output props to be passed to themed component
 */
const mapper = (props: Object) => {
  const styles = props.sheet ? props.sheet.classes : {};
  const theme = objectAssign({}, props.theme, { styles });
  const newProps = objectAssign({}, props, { theme });
  delete newProps.sheet;
  return newProps;
};

// react decorator based on prop-mapper function
const mapperDecorator = mapProps(mapper);

/**
 * Creates a new JSS middleware for themer.
 *
 * @param  {Function} injectSheet ReactJSS decorator
 * @return {Function}             Middleware for themer
 * @public
 */
const create =
  (injectSheet: Function) => (component: any, computedTheme: Object = {}) =>
    compose(
      injectSheet(computedTheme.styles),
      mapperDecorator
    )(component);

export {
  create,
};
