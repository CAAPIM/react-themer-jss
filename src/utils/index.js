/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import mapProps from 'recompose/mapProps';
import objectAssign from 'object-assign';
import objectOmit from 'object.omit';
import { mapThemeProps } from 'ca-ui-themer';

/**
 * Property mapper to trasform ReactJSS output props into themer props.
 *
 * @param  {Object} props Input props from ReactJSS
 * @return {Object}       Output props to be passed to themed component
 */
export const mapper = (props: Object) => {
  let styles;
  if (props.sheet && props.sheet.classes) {
    styles = props.sheet.classes;
  } else if (props.classes) {
    styles = props.classes;
  } else {
    return props;
  }
  const resolvedTheme = objectAssign({}, props.theme, { styles });
  return mapThemeProps(objectOmit(props, ['sheet', 'classes']), resolvedTheme);
};

// react decorator based on prop-mapper function
export const mapPropsDecorator = mapProps(mapper);
