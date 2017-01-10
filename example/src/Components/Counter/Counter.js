/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React, { Component } from 'react';
import theme from './Counter.theme.js';
import themer from '../../themer';

type Props = {
  increase: number,
  theme?: Object,
};

export class Counter extends Component {
  static defaultProps = {
    increase: 1,
  }

  constructor(props: Props) {
    super(props);
    this.boundHandleClick = this.handleClick.bind(this);
  }

  state = {
    count: 0,
  }

  props: Props;
  boundHandleClick: Function;

  handleClick() {
    this.setState({
      count: this.state.count + this.props.increase,
    });
  }

  render() {
    const { theme } = this.props;
    const styles = theme && theme.styles ? theme.styles : {};
    return (
      <div className={styles.root}>
        <p>The button has been clicked {this.state.count} times.</p>
        <button onClick={this.boundHandleClick}>+{this.props.increase}</button>
      </div>
    );
  }
}

export default themer(theme)(Counter);
