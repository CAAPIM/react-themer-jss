/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React from 'react';
import { render } from 'react-dom';
import Counter from './Components/Counter';

document.body.innerHTML += '<div id="app"></div>';

render(<Counter />, document.getElementById('app'));
