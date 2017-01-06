/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React, { PropTypes } from 'react';

type Props = {
  theme: Object,
  title: string,
};

// test component
const TestComponent = ({ theme, title }: Props) => {
  const styles = theme && theme.styles ? theme.styles : {};
  return <div className={styles.root}>{title}</div>;
};

TestComponent.propTypes = {
  theme: PropTypes.object,
  title: PropTypes.string,
};

export default TestComponent;
